import { describe, it, expect } from "vitest";
import { parseMdc, extractCodes, mdcToCodes } from "@/lib/mdc";

describe("parseMdc", () => {
  it("parses a single sign", () => {
    const node = parseMdc("A1");
    expect(node).toEqual({ type: "sign", code: "A1" });
  });

  it("resolves MdC aliases to Gardiner codes", () => {
    const node = parseMdc("nfr");
    expect(node).toEqual({ type: "sign", code: "F35" });
  });

  it("parses sequential quadrats (dash)", () => {
    const node = parseMdc("A1-B2-C3");
    expect(node.type).toBe("seq");
    if (node.type === "seq") {
      expect(node.children).toHaveLength(3);
      expect(node.children[0]).toEqual({ type: "sign", code: "A1" });
      expect(node.children[1]).toEqual({ type: "sign", code: "B2" });
      expect(node.children[2]).toEqual({ type: "sign", code: "C3" });
    }
  });

  it("parses horizontal juxtaposition (star)", () => {
    const node = parseMdc("A1*B2");
    expect(node.type).toBe("horiz");
    if (node.type === "horiz") {
      expect(node.children).toHaveLength(2);
    }
  });

  it("parses vertical stacking (colon)", () => {
    const node = parseMdc("A1:B2");
    expect(node.type).toBe("vert");
    if (node.type === "vert") {
      expect(node.children).toHaveLength(2);
    }
  });

  it("respects operator precedence: - < : < *", () => {
    // A1*B2:C3-D4 should parse as ((A1*B2):C3) - D4
    const node = parseMdc("A1*B2:C3-D4");
    expect(node.type).toBe("seq");
    if (node.type === "seq") {
      expect(node.children).toHaveLength(2);
      expect(node.children[0].type).toBe("vert");
      expect(node.children[1]).toEqual({ type: "sign", code: "D4" });
    }
  });

  it("parses cartouche enclosure with <- ->", () => {
    const node = parseMdc("<-A1-B2->");
    expect(node.type).toBe("enclosure");
    if (node.type === "enclosure") {
      expect(node.enclosure).toBe("cartouche");
      expect(node.children).toHaveLength(2);
    }
  });

  it("parses cartouche enclosure with < >", () => {
    const node = parseMdc("<A1-B2>");
    expect(node.type).toBe("enclosure");
    if (node.type === "enclosure") {
      expect(node.enclosure).toBe("cartouche");
    }
  });

  it("parses scholarly restoration brackets", () => {
    const node = parseMdc("[A1-B2]");
    expect(node.type).toBe("restored");
    if (node.type === "restored") {
      expect(node.children).toHaveLength(2);
    }
  });

  it("parses full lacuna (//)", () => {
    const node = parseMdc("A1-//-B2");
    expect(node.type).toBe("seq");
    if (node.type === "seq") {
      expect(node.children).toHaveLength(3);
      expect(node.children[1]).toEqual({ type: "lacuna", size: "full" });
    }
  });

  it("parses half lacuna (..)", () => {
    const node = parseMdc("A1-..-B2");
    expect(node.type).toBe("seq");
    if (node.type === "seq") {
      expect(node.children[1]).toEqual({ type: "lacuna", size: "half" });
    }
  });

  it("parses simple ligature (&)", () => {
    const node = parseMdc("G43&X1");
    expect(node.type).toBe("simpleLig");
    if (node.type === "simpleLig") {
      expect(node.children).toHaveLength(2);
    }
  });

  it("parses complex ligature after (&&&)", () => {
    const node = parseMdc("D21&&&Y1");
    expect(node.type).toBe("ligature");
    if (node.type === "ligature") {
      expect(node.anchor).toEqual({ type: "sign", code: "D21" });
      expect(node.after).toEqual({ type: "sign", code: "Y1" });
      expect(node.before).toBeUndefined();
    }
  });

  it("parses complex ligature before (^^)", () => {
    const node = parseMdc("X1^^D21");
    expect(node.type).toBe("ligature");
    if (node.type === "ligature") {
      expect(node.anchor).toEqual({ type: "sign", code: "D21" });
      expect(node.before).toEqual({ type: "sign", code: "X1" });
    }
  });

  it("parses rotation suffix", () => {
    const node = parseMdc("A1\\R90");
    expect(node).toEqual({ type: "sign", code: "A1", rotation: 90 });
  });

  it("parses parenthesized groups", () => {
    const node = parseMdc("(A1*B2):C3");
    expect(node.type).toBe("vert");
    if (node.type === "vert") {
      expect(node.children[0].type).toBe("horiz");
      expect(node.children[1]).toEqual({ type: "sign", code: "C3" });
    }
  });

  it("returns placeholder for empty input", () => {
    expect(parseMdc("")).toEqual({ type: "sign", code: "?" });
    expect(parseMdc("  ")).toEqual({ type: "sign", code: "?" });
  });

  it("maps bare digits to Z1", () => {
    const node = parseMdc("A1-3");
    expect(node.type).toBe("seq");
    if (node.type === "seq") {
      expect(node.children[1]).toEqual({ type: "sign", code: "Z1" });
    }
  });

  it("treats && as horizontal juxtaposition", () => {
    const node = parseMdc("A1&&B2");
    expect(node.type).toBe("horiz");
  });
});

describe("extractCodes", () => {
  it("extracts codes from a single sign", () => {
    expect(extractCodes({ type: "sign", code: "A1" })).toEqual(["A1"]);
  });

  it("skips placeholder codes", () => {
    expect(extractCodes({ type: "sign", code: "?" })).toEqual([]);
    expect(extractCodes({ type: "sign", code: "" })).toEqual([]);
  });

  it("extracts from nested structures", () => {
    const node = parseMdc("A1*B2:C3");
    expect(extractCodes(node).sort()).toEqual(["A1", "B2", "C3"]);
  });

  it("extracts from ligatures", () => {
    const node = parseMdc("X1^^D21&&&Y1");
    const codes = extractCodes(node);
    expect(codes).toContain("X1");
    expect(codes).toContain("D21");
    expect(codes).toContain("Y1");
  });

  it("extracts from enclosures", () => {
    const node = parseMdc("<-A1-B2->");
    expect(extractCodes(node).sort()).toEqual(["A1", "B2"]);
  });

  it("returns empty for lacuna", () => {
    expect(extractCodes({ type: "lacuna", size: "full" })).toEqual([]);
  });
});

describe("mdcToCodes", () => {
  it("resolves aliases and extracts codes", () => {
    expect(mdcToCodes("nfr-r")).toEqual(["F35", "D21"]);
  });
});
