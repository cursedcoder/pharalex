import type { Glyph, DictionaryWord, Pharaoh, EgyptianText, Category, PeriodId, Dynasty } from "./types";

export interface DistributionEntry {
  label: string;
  value: number;
}

export interface CorpusStats {
  totalGlyphs: number;
  totalWords: number;
  totalPharaohs: number;
  totalTexts: number;
  totalCategories: number;
  glyphsByCategory: DistributionEntry[];
  wordsByGrammar: DistributionEntry[];
  meaningsByType: DistributionEntry[];
  textsByPeriod: DistributionEntry[];
  pharaohsByPeriod: DistributionEntry[];
}

const PERIOD_ORDER: PeriodId[] = [
  "predynastic",
  "early-dynastic",
  "old-kingdom",
  "first-intermediate",
  "middle-kingdom",
  "second-intermediate",
  "new-kingdom",
  "third-intermediate",
  "late-period",
  "ptolemaic",
  "roman",
];

const PERIOD_LABELS: Record<PeriodId, string> = {
  predynastic: "Predynastic",
  "early-dynastic": "Early Dynastic",
  "old-kingdom": "Old Kingdom",
  "first-intermediate": "1st Intermediate",
  "middle-kingdom": "Middle Kingdom",
  "second-intermediate": "2nd Intermediate",
  "new-kingdom": "New Kingdom",
  "third-intermediate": "3rd Intermediate",
  "late-period": "Late Period",
  ptolemaic: "Ptolemaic",
  roman: "Roman",
};

const GRAMMAR_LABELS: Record<string, string> = {
  NOUN: "Noun",
  VERB: "Verb",
  ADJ: "Adjective",
  ADV: "Adverb",
  PREP: "Preposition",
  PRON: "Pronoun",
  PART: "Particle",
  CONJ: "Conjunction",
  INTJ: "Interjection",
  INTG: "Interrogative",
  IMPR: "Imperative",
  NUM: "Numeral",
  OTHER: "Other",
};

export function computeCorpusStats(
  glyphs: Glyph[],
  categories: Category[],
  words: DictionaryWord[],
  pharaohs: Pharaoh[],
  texts: EgyptianText[],
  dynasties: Dynasty[],
): CorpusStats {
  return {
    totalGlyphs: glyphs.length,
    totalWords: words.length,
    totalPharaohs: pharaohs.length,
    totalTexts: texts.length,
    totalCategories: categories.length,
    glyphsByCategory: computeGlyphsByCategory(categories),
    wordsByGrammar: computeWordsByGrammar(words),
    meaningsByType: computeMeaningsByType(glyphs),
    textsByPeriod: computeTextsByPeriod(texts),
    pharaohsByPeriod: computePharaohsByPeriod(pharaohs, dynasties),
  };
}

function computeGlyphsByCategory(categories: Category[]): DistributionEntry[] {
  return categories
    .map((c) => ({ label: `${c.id} – ${c.name}`, value: c.glyphCount }))
    .sort((a, b) => b.value - a.value);
}

function computeWordsByGrammar(words: DictionaryWord[]): DistributionEntry[] {
  const counts: Record<string, number> = {};
  for (const w of words) {
    const key = w.grammar ?? "Unknown";
    counts[key] = (counts[key] || 0) + 1;
  }
  return Object.entries(counts)
    .map(([key, value]) => ({
      label: GRAMMAR_LABELS[key] ?? key,
      value,
    }))
    .sort((a, b) => b.value - a.value);
}

function computeMeaningsByType(glyphs: Glyph[]): DistributionEntry[] {
  const counts: Record<string, number> = { logogram: 0, phonogram: 0, determinative: 0, other: 0 };
  for (const g of glyphs) {
    for (const m of g.meanings) {
      counts[m.type]++;
    }
  }
  return [
    { label: "Logogram", value: counts.logogram },
    { label: "Phonogram", value: counts.phonogram },
    { label: "Determinative", value: counts.determinative },
    { label: "Other", value: counts.other },
  ].filter((e) => e.value > 0);
}

function computeTextsByPeriod(texts: EgyptianText[]): DistributionEntry[] {
  const counts: Record<string, number> = {};
  for (const t of texts) {
    counts[t.period] = (counts[t.period] || 0) + 1;
  }
  return PERIOD_ORDER
    .filter((p) => counts[p])
    .map((p) => ({ label: PERIOD_LABELS[p], value: counts[p] }));
}

function computePharaohsByPeriod(pharaohs: Pharaoh[], dynasties: Dynasty[]): DistributionEntry[] {
  const dynastyToPeriod: Record<string, PeriodId> = {};
  for (const d of dynasties) {
    dynastyToPeriod[d.id] = d.period;
  }

  const counts: Record<string, number> = {};
  for (const p of pharaohs) {
    const period = dynastyToPeriod[p.dynastyId] ?? "predynastic";
    counts[period] = (counts[period] || 0) + 1;
  }

  return PERIOD_ORDER
    .filter((p) => counts[p])
    .map((p) => ({ label: PERIOD_LABELS[p], value: counts[p] }));
}
