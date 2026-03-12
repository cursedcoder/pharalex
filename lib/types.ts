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
  renderable?: boolean;
  source?: "wiktionary" | "unicode" | "both";
}

export interface Category {
  id: string;
  name: string;
  glyphCount: number;
}

export type MeaningType = GlyphMeaning["type"];
