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
  meanings: GlyphMeaning[];
  transliteration: string[];
  etymology?: string;
  tags?: string[];
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
