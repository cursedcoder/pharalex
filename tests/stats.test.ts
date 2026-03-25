import { describe, it, expect } from "vitest";
import { computeCorpusStats } from "@/lib/stats";
import type { Glyph, DictionaryWord, Pharaoh, EgyptianText, Category, Dynasty } from "@/lib/types";

function makeGlyph(overrides: Partial<Glyph> = {}): Glyph {
  return {
    code: "A1",
    unicode: "\u{13000}",
    category: "A",
    categoryName: "Man and his Activities",
    description: "seated man",
    meanings: [{ text: "man", type: "logogram" }],
    transliteration: ["s"],
    related: [],
    ...overrides,
  };
}

function makeWord(overrides: Partial<DictionaryWord> = {}): DictionaryWord {
  return {
    transliteration: "nfr",
    translation: "good",
    mdc: "F35",
    gardinerCodes: ["F35"],
    grammar: "NOUN",
    grammarRaw: "noun",
    notes: [],
    ...overrides,
  };
}

function makePharaoh(overrides: Partial<Pharaoh> = {}): Pharaoh {
  return {
    slug: "khufu",
    name: "Khufu",
    alternateNames: [],
    dynastyId: "dynasty-4",
    reignStart: -2589,
    reignEnd: -2566,
    ...overrides,
  };
}

function makeText(overrides: Partial<EgyptianText> = {}): EgyptianText {
  return {
    slug: "test-text",
    title: "Test Text",
    period: "new-kingdom",
    date: "c. 1300 BCE",
    description: "A test text.",
    lines: [],
    bibliography: [],
    ...overrides,
  };
}

const DYNASTIES: Dynasty[] = [
  { id: "dynasty-4", number: 4, name: "Fourth Dynasty", period: "old-kingdom" },
  { id: "dynasty-18", number: 18, name: "Eighteenth Dynasty", period: "new-kingdom" },
  { id: "dynasty-19", number: 19, name: "Nineteenth Dynasty", period: "new-kingdom" },
];

const CATEGORIES: Category[] = [
  { id: "A", name: "Man and his Activities", glyphCount: 55 },
  { id: "D", name: "Parts of the Human Body", glyphCount: 67 },
  { id: "G", name: "Birds", glyphCount: 54 },
];

describe("computeCorpusStats", () => {
  it("returns correct totals", () => {
    const glyphs = [makeGlyph(), makeGlyph({ code: "A2" })];
    const words = [makeWord(), makeWord({ transliteration: "wsr" })];
    const pharaohs = [makePharaoh()];
    const texts = [makeText()];

    const stats = computeCorpusStats(glyphs, CATEGORIES, words, pharaohs, texts, DYNASTIES);

    expect(stats.totalGlyphs).toBe(2);
    expect(stats.totalWords).toBe(2);
    expect(stats.totalPharaohs).toBe(1);
    expect(stats.totalTexts).toBe(1);
    expect(stats.totalCategories).toBe(3);
  });

  it("computes glyphs by category sorted by count descending", () => {
    const stats = computeCorpusStats([], CATEGORIES, [], [], [], DYNASTIES);

    expect(stats.glyphsByCategory[0].label).toBe("D \u2013 Parts of the Human Body");
    expect(stats.glyphsByCategory[0].value).toBe(67);
    expect(stats.glyphsByCategory[1].value).toBe(55);
    expect(stats.glyphsByCategory[2].value).toBe(54);
  });

  it("computes words by grammar", () => {
    const words = [
      makeWord({ grammar: "NOUN" }),
      makeWord({ grammar: "NOUN" }),
      makeWord({ grammar: "VERB" }),
      makeWord({ grammar: null }),
    ];

    const stats = computeCorpusStats([], [], words, [], [], DYNASTIES);

    expect(stats.wordsByGrammar[0]).toEqual({ label: "Noun", value: 2 });
    expect(stats.wordsByGrammar.find((e) => e.label === "Verb")?.value).toBe(1);
    expect(stats.wordsByGrammar.find((e) => e.label === "Unknown")?.value).toBe(1);
  });

  it("computes meaning types from glyphs", () => {
    const glyphs = [
      makeGlyph({ meanings: [{ text: "man", type: "logogram" }, { text: "I", type: "phonogram" }] }),
      makeGlyph({ code: "Z1", meanings: [{ text: "stroke", type: "determinative" }] }),
    ];

    const stats = computeCorpusStats(glyphs, [], [], [], [], DYNASTIES);

    expect(stats.meaningsByType).toEqual([
      { label: "Logogram", value: 1 },
      { label: "Phonogram", value: 1 },
      { label: "Determinative", value: 1 },
    ]);
  });

  it("computes texts by period in chronological order", () => {
    const texts = [
      makeText({ period: "new-kingdom" }),
      makeText({ period: "new-kingdom" }),
      makeText({ period: "old-kingdom" }),
    ];

    const stats = computeCorpusStats([], [], [], [], texts, DYNASTIES);

    expect(stats.textsByPeriod).toEqual([
      { label: "Old Kingdom", value: 1 },
      { label: "New Kingdom", value: 2 },
    ]);
  });

  it("computes pharaohs by period using dynasty mapping", () => {
    const pharaohs = [
      makePharaoh({ dynastyId: "dynasty-4" }),
      makePharaoh({ slug: "tut", dynastyId: "dynasty-18" }),
      makePharaoh({ slug: "ramesses", dynastyId: "dynasty-19" }),
    ];

    const stats = computeCorpusStats([], [], [], pharaohs, [], DYNASTIES);

    expect(stats.pharaohsByPeriod).toEqual([
      { label: "Old Kingdom", value: 1 },
      { label: "New Kingdom", value: 2 },
    ]);
  });

  it("handles empty data gracefully", () => {
    const stats = computeCorpusStats([], [], [], [], [], []);

    expect(stats.totalGlyphs).toBe(0);
    expect(stats.totalWords).toBe(0);
    expect(stats.totalPharaohs).toBe(0);
    expect(stats.totalTexts).toBe(0);
    expect(stats.glyphsByCategory).toEqual([]);
    expect(stats.wordsByGrammar).toEqual([]);
    expect(stats.meaningsByType).toEqual([]);
    expect(stats.textsByPeriod).toEqual([]);
    expect(stats.pharaohsByPeriod).toEqual([]);
  });

  it("filters out zero-count meaning types", () => {
    const glyphs = [makeGlyph({ meanings: [{ text: "m", type: "phonogram" }] })];
    const stats = computeCorpusStats(glyphs, [], [], [], [], DYNASTIES);

    const labels = stats.meaningsByType.map((e) => e.label);
    expect(labels).toContain("Phonogram");
    expect(labels).not.toContain("Logogram");
    expect(labels).not.toContain("Determinative");
    expect(labels).not.toContain("Other");
  });
});
