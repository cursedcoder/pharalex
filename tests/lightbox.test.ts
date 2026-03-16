import { describe, it, expect } from "vitest";

// Test the navigation logic extracted from Lightbox and GlyphLightbox components
// (mirrors the index management callbacks)

describe("Lightbox navigation logic", () => {
  function wrapIndex(current: number, delta: number, length: number): number {
    if (delta === -1) return current > 0 ? current - 1 : length - 1;
    if (delta === 1) return current < length - 1 ? current + 1 : 0;
    return current;
  }

  it("wraps forward from last to first", () => {
    expect(wrapIndex(4, 1, 5)).toBe(0);
  });

  it("wraps backward from first to last", () => {
    expect(wrapIndex(0, -1, 5)).toBe(4);
  });

  it("moves forward normally", () => {
    expect(wrapIndex(1, 1, 5)).toBe(2);
  });

  it("moves backward normally", () => {
    expect(wrapIndex(3, -1, 5)).toBe(2);
  });

  it("stays at current for zero delta", () => {
    expect(wrapIndex(2, 0, 5)).toBe(2);
  });

  it("handles single-item list", () => {
    expect(wrapIndex(0, 1, 1)).toBe(0);
    expect(wrapIndex(0, -1, 1)).toBe(0);
  });

  it("handles two-item list", () => {
    expect(wrapIndex(0, 1, 2)).toBe(1);
    expect(wrapIndex(1, 1, 2)).toBe(0);
    expect(wrapIndex(0, -1, 2)).toBe(1);
    expect(wrapIndex(1, -1, 2)).toBe(0);
  });
});

describe("GlyphLightbox item building", () => {
  interface GlyphLightboxItem {
    code: string;
    label?: string;
  }

  function buildLightboxItems(
    mainCode: string,
    mainLabel: string,
    variants: { code: string; label: string }[],
  ): GlyphLightboxItem[] {
    return [
      { code: mainCode, label: mainLabel },
      ...variants.map((v) => ({ code: v.code, label: v.label })),
    ];
  }

  it("includes main glyph as first item", () => {
    const items = buildLightboxItems("A1", "seated man", []);
    expect(items).toHaveLength(1);
    expect(items[0]).toEqual({ code: "A1", label: "seated man" });
  });

  it("includes variants after main glyph", () => {
    const items = buildLightboxItems("A1", "seated man", [
      { code: "A1a", label: "variant a" },
      { code: "A1b", label: "variant b" },
    ]);
    expect(items).toHaveLength(3);
    expect(items[1].code).toBe("A1a");
    expect(items[2].code).toBe("A1b");
  });

  it("preserves order", () => {
    const items = buildLightboxItems("G17", "owl", [
      { code: "G17a", label: "owl variant" },
    ]);
    expect(items.map((i) => i.code)).toEqual(["G17", "G17a"]);
  });
});
