export interface GlyphMeaning {
  text: string;
  type: "logogram" | "phonogram" | "determinative" | "other";
  period?: string;
}

export interface Glyph {
  code: string;
  unicode: string;
  category: string;
  categoryName: string;
  description: string;
  signName?: string;
  transliterationCounts?: Record<string, number>;
  meanings: GlyphMeaning[];
  transliteration: string[];
  etymology?: string;
  tags?: string[];
  related: string[];
  contains?: string[];
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

export interface RoyalNameSource {
  text: string;          // Short citation label, e.g. "British Museum EA753"
  url?: string;          // Optional link to an online record
}

export interface RoyalName {
  codes: string[];
  transliteration: string;
  translation?: string;
  sources?: RoyalNameSource[];
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

// ─── Texts ───────────────────────────────────────────────────────────────────

export interface TextToken {
  mdc: string;              // Manuel de Codage string, e.g. "N5:D21*Z1"
                            //   -  separates quadrats (sequential)
                            //   *  places signs side-by-side within a quadrat
                            //   :  stacks signs vertically within a quadrat
  transliteration: string;  // Egyptological transliteration, e.g. "rꜤ"
  translation: string;      // English gloss, e.g. "Ra / sun god"
  grammar?: string;         // optional POS tag: "NOUN", "VERB", "PREP", etc.
}

export interface TextLine {
  tokens: TextToken[];
  lineTranslation?: string; // whole-line translation for lines that can't be cleanly word-tokenized
}

export interface EgyptianText {
  slug: string;
  title: string;
  period: PeriodId;
  date: string;             // e.g. "c. 1336–1327 BCE"
  pharaohSlug?: string;     // links text to pharaoh detail page
  object?: string;          // e.g. "Golden Mask, Cairo Museum JE 60672"
  location?: string;        // e.g. "Cairo Museum"
  description: string;      // 1–3 sentence introduction
  lines: TextLine[];
  bibliography: string[];
}

// ─── Words ───────────────────────────────────────────────────────────────────

export interface DictionaryWord {
  /** Egyptological transliteration, e.g. "nfr" or "tp nfr" (compound phrase) */
  transliteration: string;
  /** Primary English gloss(es) */
  translation: string;
  /** MdC string encoding the canonical hieroglyphic spelling, e.g. "F35-Z1" */
  mdc: string;
  /** Gardiner codes of constituent signs in order */
  gardinerCodes: string[];
  /** Normalised POS tag: "NOUN" | "VERB" | "ADJ" | "ADV" | "PREP" | "PRON" | "PART" | "CONJ" | "INTJ" | "INTG" | "IMPR" | "NUM" | "OTHER" */
  grammar: string | null;
  /** Original grammar label from Vygus, e.g. "noun - title", "collective noun", "causative verb" */
  grammarRaw: string | null;
  /** Contextual/domain notes from the source, e.g. ["late egyptian"], ["cryptic"], ["mathematics"] */
  notes: string[];
}
