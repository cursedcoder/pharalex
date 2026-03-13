import { NextRequest, NextResponse } from "next/server";
import { fuzzySearch } from "@/lib/search";
import { searchWords, wordHref, translitToUnicode } from "@/lib/words";
import type { DictionaryWord } from "@/lib/types";

export const runtime = "edge";

export type GlyphResult = {
  kind: "glyph";
  score: number;
  code: string;
  unicode: string;
  category: string;
  categoryName: string;
  description: string;
  transliteration: string[];
  meanings: { text: string; type: string }[];
  related: string[];
  source?: string;
  href: string;
};

export type WordResult = {
  kind: "word";
  score: number;
  transliteration: string;
  transliterationUnicode: string;
  translation: string;
  grammar: string | null;
  mdc: string;
  href: string;
};

export type SearchApiResult = GlyphResult | WordResult;

function wordScore(word: DictionaryWord, q: string): number {
  const tl = word.transliteration.toLowerCase();
  const tr = word.translation.toLowerCase();
  if (tl === q) return 0;
  if (tl.startsWith(q)) return 0.05;
  if (tr === q) return 0.08;
  if (tr.startsWith(q)) return 0.12;
  if (tl.includes(q)) return 0.2;
  if (tr.includes(q)) return 0.25;
  return 0.35;
}

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.trim() ?? "";
  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const ql = q.toLowerCase();

  const glyphResults: GlyphResult[] = (await fuzzySearch(q, 60)).map((r) => ({
    kind: "glyph",
    score: r.score ?? 1,
    code: r.glyph.code,
    unicode: r.glyph.unicode,
    category: r.glyph.category,
    categoryName: r.glyph.categoryName,
    description: r.glyph.description,
    transliteration: r.glyph.transliteration,
    meanings: r.glyph.meanings.map((m) => ({ text: m.text, type: m.type })),
    related: r.glyph.related,
    source: r.glyph.source,
    href: `/glyph/${encodeURIComponent(r.glyph.code)}`,
  }));

  const wordResults: WordResult[] = (await searchWords(q, 40)).map((w) => ({
    kind: "word",
    score: wordScore(w, ql),
    transliteration: w.transliteration,
    transliterationUnicode: translitToUnicode(w.transliteration),
    translation: w.translation,
    grammar: w.grammar ?? null,
    mdc: w.mdc,
    href: wordHref(w.transliteration),
  }));

  const results: SearchApiResult[] = [...glyphResults, ...wordResults].sort(
    (a, b) => a.score - b.score
  );

  return NextResponse.json({ results });
}
