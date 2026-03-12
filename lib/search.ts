import Fuse from "fuse.js";
import type { Glyph } from "./types";
import { getAllGlyphs } from "./glyphs";

let fuseInstance: Fuse<Glyph> | null = null;

function getFuseInstance(): Fuse<Glyph> {
  if (!fuseInstance) {
    const glyphs = getAllGlyphs();
    fuseInstance = new Fuse(glyphs, {
      keys: [
        { name: "code", weight: 3 },
        { name: "unicode", weight: 2 },
        { name: "transliteration", weight: 2 },
        { name: "meanings.text", weight: 1.5 },
        { name: "categoryName", weight: 1 },
        { name: "description", weight: 0.5 },
      ],
      threshold: 0.4,
      includeScore: true,
      ignoreLocation: true,
      minMatchCharLength: 1,
    });
  }
  return fuseInstance;
}

export interface SearchResult {
  glyph: Glyph;
  score: number;
  matches?: {
    key: string;
    value: string;
  }[];
}

export function fuzzySearch(query: string, limit = 50): SearchResult[] {
  if (!query.trim()) return [];

  const fuse = getFuseInstance();
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

export function instantSearch(query: string): Glyph[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const glyphs = getAllGlyphs();
  const lowerQuery = trimmed.toLowerCase();

  const exactCodeMatch = glyphs.filter(
    (g) => g.code.toLowerCase() === lowerQuery
  );
  if (exactCodeMatch.length > 0) return exactCodeMatch;

  const codeStartsWith = glyphs.filter((g) =>
    g.code.toLowerCase().startsWith(lowerQuery)
  );
  if (codeStartsWith.length > 0) return codeStartsWith.slice(0, 20);

  return fuzzySearch(trimmed, 20).map((r) => r.glyph);
}
