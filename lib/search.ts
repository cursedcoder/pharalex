import Fuse from "fuse.js";
import type { Glyph } from "./types";
import { getAllGlyphs, getBaseCode } from "./glyphs";

let _fuseP: Promise<Fuse<Glyph>> | null = null;

function isVariant(code: string): boolean {
  return getBaseCode(code) !== null;
}

function getFuseInstance(): Promise<Fuse<Glyph>> {
  if (_fuseP) return _fuseP;
  const p = getAllGlyphs().then((glyphs) => {
    const filtered = glyphs.filter((g) => !isVariant(g.code));
    return new Fuse(filtered, {
      keys: [
        { name: "code", weight: 3 },
        { name: "unicode", weight: 2 },
        { name: "transliteration", weight: 2 },
        { name: "meanings.text", weight: 1.5 },
        { name: "description", weight: 0.8 },
      ],
      threshold: 0.25,
      includeScore: true,
      ignoreLocation: true,
      minMatchCharLength: 3,
    });
  }).catch((err) => { _fuseP = null; throw err; });
  _fuseP = p;
  return p;
}

export interface SearchResult {
  glyph: Glyph;
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

export async function instantSearch(query: string): Promise<Glyph[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const glyphs = (await getAllGlyphs()).filter((g) => !isVariant(g.code));
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
