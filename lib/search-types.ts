/** Compact glyph record for search (no etymology, tags, or period on meanings). */
export interface SearchGlyph {
  code: string;
  unicode: string;
  transliteration: string[];
  meanings: { text: string; type: string }[];
  description: string;
  category: string;
  categoryName: string;
  related: string[];
  source?: string;
}

/** Compact word record for search (no gardinerCodes, grammarRaw, notes). */
export interface SearchWord {
  transliteration: string;
  translation: string;
  grammar: string | null;
  mdc: string;
}
