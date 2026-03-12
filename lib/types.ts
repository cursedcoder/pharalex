export interface GlyphMeaning {
  text: string;
  type: "logogram" | "phonogram" | "determinative" | "other";
  period?: string;
}

export interface GlyphExample {
  hieroglyphs: string;
  transliteration: string;
  translation: string;
  period?: string;
  corpus: "earlier" | "late";
}

export interface Glyph {
  code: string;
  unicode: string;
  category: string;
  categoryName: string;
  description: string;
  meanings: GlyphMeaning[];
  transliteration: string[];
  etymology?: string;
  tags?: string[];
  examples?: GlyphExample[];
  related: string[];
  source?: "wiktionary" | "unicode" | "both";
}

export interface Category {
  id: string;
  name: string;
  glyphCount: number;
}

export type MeaningType = GlyphMeaning["type"];

// ─── Pharaohs ───────────────────────────────────────────────────────────────

export type PeriodId =
  | "predynastic"
  | "early-dynastic"
  | "old-kingdom"
  | "first-intermediate"
  | "middle-kingdom"
  | "second-intermediate"
  | "new-kingdom"
  | "third-intermediate"
  | "late-period"
  | "ptolemaic"
  | "roman";

export interface Dynasty {
  id: string;
  number: number | null;
  name: string;
  period: PeriodId;
  note?: string;
}

export interface RoyalName {
  codes: string[];
  transliteration: string;
  translation?: string;
}

export interface RoyalNames {
  prenomen?: RoyalName;
  nomen?: RoyalName;
  horus?: RoyalName;
  nebty?: RoyalName;
  golden?: RoyalName;
}

export interface Pharaoh {
  slug: string;
  name: string;
  alternateNames: string[];
  dynastyId: string;
  reignStart: number | null;
  reignEnd: number | null;
  reignNote?: string;
  notable?: boolean;
  summary?: string;
  royalNames?: RoyalNames;
}

export interface PeriodInfo {
  id: PeriodId;
  name: string;
  approxStart: number;
  approxEnd: number;
}
