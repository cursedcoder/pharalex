import { NextRequest, NextResponse } from "next/server";
import { fuzzySearch } from "@/lib/search";
import { loadSearchWords, loadSearchGlyphs } from "@/lib/data-loader";
import { wordHref, translitToUnicode } from "@/lib/word-utils";
import { wordScore } from "@/lib/word-score";
import { mdcToCodes } from "@/lib/mdc";
import { buildGlyphDetailsMap } from "@/lib/glyphs";
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

interface WordSearchOptions {
  exact?: boolean;
  gardiner?: boolean;
}

async function exactGlyphSearch(query: string) {
  const glyphs = await loadSearchGlyphs();
  const q = query.trim().toUpperCase();
  const results = [];
  for (const g of glyphs) {
    if (g.code.toUpperCase() === q) {
      results.push({ glyph: g, score: 0, matches: [] });
    }
  }
  return results;
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
      // Exact = exact transliteration match (with y↔i normalization) OR translation word-boundary match
      const normQ = ql.replace(/y/g, "i").replace(/j/g, "i");
      const normT = w.transliteration.toLowerCase().replace(/y/g, "i").replace(/j/g, "i");
      const tlExact = normT === normQ;
      const trRe = new RegExp(`\\b${ql.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
      const trMatch = trRe.test(w.translation);
      if (tlExact || trMatch) results.push(w);
    } else {
      // Normalize y↔i for transliteration matching (mry = mri in Vygus)
      const normQ = ql.replace(/y/g, "i").replace(/j/g, "i");
      const normT = w.transliteration.toLowerCase().replace(/y/g, "i").replace(/j/g, "i");
      const tlMatch = normT.includes(normQ) || w.transliteration.toLowerCase().includes(ql);
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
  const exact = req.nextUrl.searchParams.get("exact") !== "false";
  const gardiner = req.nextUrl.searchParams.get("gardiner") === "true";
  // Allow single-char searches in exact/gardiner mode (Egyptian uniliterals like m, n, r)
  const minLength = (exact || gardiner) ? 1 : 2;
  if (!q || q.length < minLength) {
    return NextResponse.json({ results: [] });
  }

  const ql = q.toLowerCase();

  // Glyphs: exact code match + fuzzy description match
  const exactGlyphs = gardiner ? [] : await exactGlyphSearch(q);
  const fuzzyGlyphs = (gardiner || exactGlyphs.length > 0) ? [] : await fuzzySearch(q, 20);
  const allGlyphResults = [...exactGlyphs, ...fuzzyGlyphs];
  const glyphResults: GlyphResult[] = allGlyphResults.map((r) => ({
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
    score: wordScore(w, q, ql),
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

  // Build glyph details map for word-card tooltips
  const allCodes = new Set<string>();
  for (const w of wordResults) {
    for (const code of mdcToCodes(w.mdc)) allCodes.add(code);
  }
  const glyphDetails = await buildGlyphDetailsMap([...allCodes]);

  return NextResponse.json({ results, glyphDetails });
}
