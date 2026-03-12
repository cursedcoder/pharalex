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
  related: string[];
}

export interface Category {
  id: string;
  name: string;
  glyphCount: number;
}

export type MeaningType = GlyphMeaning["type"];
