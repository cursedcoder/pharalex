import { describe, it, expect } from "vitest";
import { glyphHref, getBaseCode, glyphSvgSrc } from "@/lib/glyph-utils";

describe("glyphHref", () => {
  it("returns glyph path", () => {
    expect(glyphHref("A1")).toBe("/glyph/A1");
  });

  it("encodes + in codes", () => {
    expect(glyphHref("U+13000")).toBe("/glyph/U%2B13000");
  });
});

describe("getBaseCode", () => {
  it("returns base for variant codes", () => {
    expect(getBaseCode("G127A")).toBe("G127");
    expect(getBaseCode("A1B")).toBe("A1");
    expect(getBaseCode("Aa11A")).toBe("Aa11");
  });

  it("returns null for base codes", () => {
    expect(getBaseCode("A1")).toBeNull();
    expect(getBaseCode("G127")).toBeNull();
  });

  it("returns null for U+ codepoints", () => {
    expect(getBaseCode("U+13000")).toBeNull();
  });

  it("handles multi-digit base codes", () => {
    expect(getBaseCode("A109H")).toBe("A109");
  });
});

describe("glyphSvgSrc", () => {
  it("returns SVG path for normal codes", () => {
    expect(glyphSvgSrc("A1")).toBe("/glyphs/A1.svg");
  });

  it("applies filename overrides", () => {
    expect(glyphSvgSrc("P2H")).toBe("/glyphs/P2h.svg");
    expect(glyphSvgSrc("A32H")).toBe("/glyphs/A32h.svg");
  });

  it("encodes special characters", () => {
    expect(glyphSvgSrc("U+13000")).toBe("/glyphs/U%2B13000.svg");
  });
});
