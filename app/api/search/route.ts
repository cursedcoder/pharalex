import { NextRequest, NextResponse } from "next/server";
import { fuzzySearch } from "@/lib/search";
import { loadSearchWords } from "@/lib/data-loader";
import { wordHref, translitToUnicode } from "@/lib/word-utils";
import type { SearchWord } from "@/lib/search-types";

export const runtime = "nodejs";

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

function wordScore(word: SearchWord, q: string): number {
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

interface WordSearchOptions {
  exact?: boolean;
  gardiner?: boolean;
}

async function searchWords(query: string, limit = 40, opts: WordSearchOptions = {}): Promise<SearchWord[]> {
  const q = query.trim();
  if (!q) return [];

  const ql = q.toLowerCase();
  const words = await loadSearchWords();
  const results: SearchWord[] = [];

  // For short queries, use word-boundary matching in translations
  // to avoid "nfr" matching "infront" or "unfriendly"
  const translationRe = ql.length < 4
    ? new RegExp(`\\b${ql.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i")
    : null;

  for (const w of words) {
    if (results.length >= limit) break;

    if (opts.gardiner) {
      const codes = w.mdc.split("-");
      if (codes.includes(q)) results.push(w);
    } else if (opts.exact) {
      if (translitToUnicode(w.transliteration) === translitToUnicode(q)) results.push(w);
    } else {
      const tlMatch = w.transliteration.toLowerCase().includes(ql);
      const trMatch = translationRe
        ? translationRe.test(w.translation)
        : w.translation.toLowerCase().includes(ql);
      if (tlMatch || trMatch) results.push(w);
    }
  }
  return results;
}

const MAX_QUERY_LENGTH = 100;

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get("q")?.trim() ?? "").slice(0, MAX_QUERY_LENGTH);
  const exact = req.nextUrl.searchParams.get("exact") === "true";
  const gardiner = req.nextUrl.searchParams.get("gardiner") === "true";
  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const ql = q.toLowerCase();

  const glyphResults: GlyphResult[] = (exact || gardiner) ? [] : (await fuzzySearch(q, 60)).map((r) => ({
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

  const wordResults: WordResult[] = (await searchWords(q, 40, { exact, gardiner })).map((w) => ({
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
