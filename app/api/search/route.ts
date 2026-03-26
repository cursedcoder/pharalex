import { NextRequest, NextResponse } from "next/server";
import { fuzzySearch } from "@/lib/search";
import { loadSearchWords, loadSearchGlyphs, loadGlyphs } from "@/lib/data-loader";
import { spellingHref, translitToUnicode, unicodeToTranslit } from "@/lib/word-utils";
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
  // If no match in search index, check full glyphs data (includes variants like F37A)
  if (results.length === 0 && /^[A-Z][a-z]?\d+[A-Za-z]?$/.test(q)) {
    const allGlyphs = await loadGlyphs();
    for (const g of allGlyphs) {
      if (g.code.toUpperCase() === q) {
        results.push({
          glyph: {
            code: g.code,
            unicode: g.unicode,
            transliteration: g.transliteration,
            searchTransliteration: [],
            meanings: g.meanings.map((m) => ({ text: m.text, type: m.type })),
            description: g.description,
            category: g.category,
            categoryName: g.categoryName,
            related: g.related,
            source: g.source,
          },
          score: 0,
          matches: [],
        });
        break;
      }
    }
  }
  return results;
}

async function searchWords(query: string, limit = 40, opts: WordSearchOptions = {}): Promise<SearchWord[]> {
  const q = query.trim();
  if (!q) return [];

  const ql = q.toLowerCase();
  const words = await loadSearchWords();

  // For short queries, use word-boundary matching in translations
  // to avoid "nfr" matching "infront" or "unfriendly"
  const translationRe = ql.length < 4
    ? new RegExp(`\\b${ql.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i")
    : null;

  const escaped = ql.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const normQ = ql.replace(/y/g, "i").replace(/j/g, "i");
  // Matches translation that IS the query (standalone or comma-separated item)
  const exactTrRe = new RegExp(`^${escaped}$|(?:^|, )${escaped}(?:,|$)`, "i");

  // Two-pass: first collect priority matches (exact translit / exact translation)
  // across the full word list, then fill remaining slots with partial matches.
  const priority: SearchWord[] = [];
  const rest: SearchWord[] = [];

  for (const w of words) {
    if (opts.gardiner) {
      const codes = w.mdc.split("-");
      if (codes.includes(q)) rest.push(w);
    } else if (opts.exact) {
      const normT = w.transliteration.toLowerCase().replace(/y/g, "i").replace(/j/g, "i");
      const tlExact = normT === normQ;
      // Compound: query appears as a whole word within a multi-word transliteration
      const tlCompound = !tlExact && normT.includes(" ") && normT.split(" ").some((p) => p === normQ);
      const trRe = new RegExp(`\\b${escaped}\\b`, "i");
      const trMatch = trRe.test(w.translation);
      if (tlExact || tlCompound || trMatch) {
        if (tlExact || exactTrRe.test(w.translation)) priority.push(w);
        else if (rest.length < limit) rest.push(w);
      }
    } else {
      const normT = w.transliteration.toLowerCase().replace(/y/g, "i").replace(/j/g, "i");
      const tlMatch = normT.includes(normQ) || w.transliteration.toLowerCase().includes(ql);
      const trMatch = translationRe
        ? translationRe.test(w.translation)
        : w.translation.toLowerCase().includes(ql);
      if (tlMatch || trMatch) {
        if (normT === normQ || normT.startsWith(normQ) || exactTrRe.test(w.translation)) priority.push(w);
        else if (rest.length < limit) rest.push(w);
      }
    }
  }
  return [...priority, ...rest].slice(0, limit);
}

const MAX_QUERY_LENGTH = 100;

export async function GET(req: NextRequest) {
  const qRaw = (req.nextUrl.searchParams.get("q")?.trim() ?? "").slice(0, MAX_QUERY_LENGTH);
  const exact = req.nextUrl.searchParams.get("exact") !== "false";
  const gardiner = req.nextUrl.searchParams.get("gardiner") === "true";
  // Allow single-char searches in exact/gardiner mode (Egyptian uniliterals like m, n, r)
  const minLength = (exact || gardiner) ? 1 : 2;
  if (!qRaw || qRaw.length < minLength) {
    return NextResponse.json({ results: [] });
  }

  // Convert Unicode transliteration to ASCII MdC (e.g. ḥ→H, š→S) and
  // normalize dots to spaces: display uses dots (aHa.n) but data stores spaces (aHa n)
  const q = gardiner ? qRaw : unicodeToTranslit(qRaw).replace(/\./g, " ");
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
    href: spellingHref(w.gardinerCodes),
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
