import Fuse from "fuse.js";
import type { SearchGlyph } from "./search-types";
import { loadSearchGlyphs, loadSearchFuseIndex } from "./data-loader";

let _fuseP: Promise<Fuse<SearchGlyph>> | null = null;

const FUSE_KEYS = [
  { name: "code", weight: 3 },
  { name: "unicode", weight: 2 },
  { name: "searchTransliteration", weight: 2 },
  { name: "meanings.text", weight: 1.5 },
  { name: "description", weight: 0.8 },
];

const FUSE_OPTIONS = {
  keys: FUSE_KEYS,
  threshold: 0.2,
  includeScore: true,
  ignoreLocation: true,
  minMatchCharLength: 3,
};

function getFuseInstance(): Promise<Fuse<SearchGlyph>> {
  if (_fuseP && process.env.NODE_ENV === "production") return _fuseP;
  const p = Promise.all([loadSearchGlyphs(), loadSearchFuseIndex()]).then(
    ([glyphs, rawIndex]) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const index = Fuse.parseIndex<SearchGlyph>(rawIndex as any);
      return new Fuse(glyphs, FUSE_OPTIONS, index);
    }
  ).catch((err) => { _fuseP = null; throw err; });
  _fuseP = p;
  return p;
}

export interface SearchResult {
  glyph: SearchGlyph;
  score: number;
  matches?: {
    key: string;
    value: string;
  }[];
}

export async function fuzzySearch(
  query: string,
  limit = 50
): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const fuse = await getFuseInstance();
  const results = fuse.search(query, { limit });

  return results.map((result) => ({
    glyph: result.item,
    score: result.score ?? 1,
    matches: result.matches?.map((m) => ({
      key: m.key ?? "",
      value: m.value ?? "",
    })),
  }));
}

export async function instantSearch(query: string): Promise<SearchGlyph[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const glyphs = await loadSearchGlyphs();
  const lowerQuery = trimmed.toLowerCase();

  const exactCodeMatch = glyphs.filter(
    (g) => g.code.toLowerCase() === lowerQuery
  );
  if (exactCodeMatch.length > 0) return exactCodeMatch;

  const codeStartsWith = glyphs.filter((g) =>
    g.code.toLowerCase().startsWith(lowerQuery)
  );
  if (codeStartsWith.length > 0) return codeStartsWith.slice(0, 20);

  return (await fuzzySearch(trimmed, 20)).map((r) => r.glyph);
}
