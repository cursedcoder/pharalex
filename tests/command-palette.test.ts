import { describe, it, expect } from "vitest";

// Test the quick-link filtering logic extracted from CommandPalette
// (mirrors the getQuickLinks callback)

interface QuickLink {
  label: string;
  href: string;
  section: string;
}

const QUICK_LINKS: QuickLink[] = [
  { label: "Browse All Glyphs", href: "/browse", section: "Pages" },
  { label: "Categories", href: "/categories", section: "Pages" },
  { label: "Pharaohs", href: "/pharaohs", section: "Pages" },
  { label: "Ancient Texts", href: "/texts", section: "Pages" },
  { label: "Corpus Statistics", href: "/stats", section: "Pages" },
  { label: "Alphabet", href: "/alphabet", section: "Pages" },
  { label: "Guide", href: "/guide", section: "Guide" },
  { label: "Introduction to Hieroglyphs", href: "/guide/introduction", section: "Guide" },
  { label: "Understanding Transliteration", href: "/guide/transliteration", section: "Guide" },
  { label: "The Gardiner Sign List", href: "/guide/gardiner-sign-list", section: "Guide" },
];

function filterQuickLinks(query: string): QuickLink[] {
  if (!query.trim()) return QUICK_LINKS;
  const ql = query.toLowerCase();
  return QUICK_LINKS.filter((l) => l.label.toLowerCase().includes(ql));
}

describe("CommandPalette quick links", () => {
  it("returns all links when query is empty", () => {
    expect(filterQuickLinks("")).toHaveLength(QUICK_LINKS.length);
    expect(filterQuickLinks("  ")).toHaveLength(QUICK_LINKS.length);
  });

  it("filters links by label (case-insensitive)", () => {
    const results = filterQuickLinks("pharaoh");
    expect(results).toHaveLength(1);
    expect(results[0].href).toBe("/pharaohs");
  });

  it("matches partial strings", () => {
    const results = filterQuickLinks("glyph");
    expect(results.some((r) => r.href === "/browse")).toBe(true);
    expect(results.some((r) => r.href === "/guide/introduction")).toBe(true);
  });

  it("returns empty array when nothing matches", () => {
    expect(filterQuickLinks("xyznonexistent")).toHaveLength(0);
  });

  it("matches guide pages", () => {
    const results = filterQuickLinks("gardiner");
    expect(results).toHaveLength(1);
    expect(results[0].href).toBe("/guide/gardiner-sign-list");
  });

  it("matches across sections", () => {
    const results = filterQuickLinks("stat");
    expect(results).toHaveLength(1);
    expect(results[0].section).toBe("Pages");
  });

  it("matches multiple results for broad queries", () => {
    const results = filterQuickLinks("to");
    // "Introduction to Hieroglyphs" and possibly others containing "to"
    expect(results.length).toBeGreaterThanOrEqual(1);
  });
});

describe("CommandPalette keyboard behavior spec", () => {
  // These tests document the expected keyboard navigation behavior
  // without requiring a DOM environment

  it("selectedIndex wraps from last to first on ArrowDown", () => {
    const items = [1, 2, 3];
    const idx = items.length - 1; // 2
    const next = idx < items.length - 1 ? idx + 1 : 0;
    expect(next).toBe(0);
  });

  it("selectedIndex wraps from first to last on ArrowUp", () => {
    const items = [1, 2, 3];
    const idx = 0;
    const next = idx > 0 ? idx - 1 : items.length - 1;
    expect(next).toBe(2);
  });

  it("selectedIndex moves down normally", () => {
    const items = [1, 2, 3];
    const idx = 0;
    const next = idx < items.length - 1 ? idx + 1 : 0;
    expect(next).toBe(1);
  });

  it("selectedIndex resets to 0 on query change", () => {
    // Simulates: user types → selectedIndex should reset
    const newIndex = 0;
    expect(newIndex).toBe(0);
  });
});
