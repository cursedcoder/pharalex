import type { Glyph, DictionaryWord } from "./types";
import type { SearchGlyph, SearchWord } from "./search-types";
import { getCloudflareContext } from "@opennextjs/cloudflare";

let _glyphsP: Promise<Glyph[]> | null = null;
let _wordsP: Promise<DictionaryWord[]> | null = null;
let _categoriesP: Promise<Record<string, string>> | null = null;
let _searchGlyphsP: Promise<SearchGlyph[]> | null = null;
let _searchWordsP: Promise<SearchWord[]> | null = null;
let _searchFuseIndexP: Promise<unknown> | null = null;

async function loadJson<T>(filename: string): Promise<T> {
  let cfContext: Awaited<ReturnType<typeof getCloudflareContext>> | null = null;
  try {
    cfContext = await getCloudflareContext({ async: true });
  } catch {
    // Not in CF Workers context — next build SSG or next dev, use filesystem
  }

  if (cfContext?.env?.ASSETS) {
    try {
      const res = await cfContext.env.ASSETS.fetch(
        new Request(`http://assets.local/data/${filename}`)
      );
      if (!res.ok) {
        throw new Error(`CF Assets fetch failed for /data/${filename}: ${res.status}`);
      }
      return res.json() as Promise<T>;
    } catch (e) {
      // env.ASSETS exists but doesn't work (e.g. wrangler dev without real assets)
      // fall through to filesystem fallback
      if (process.env.NODE_ENV === "production") throw e;
    }
  }

  // Filesystem fallback — only runs during `next build` SSG and `next dev` (Node.js, not CF Worker)
  const nodePrefix = "node" + ":";
  const fs: typeof import("fs") = await import(/* webpackIgnore: true */ `${nodePrefix}fs`);
  const path: typeof import("path") = await import(/* webpackIgnore: true */ `${nodePrefix}path`);
  const cwd: () => string = (process as NodeJS.Process).cwd.bind(process);
  const raw = (fs as typeof import("fs")).readFileSync(
    (path as typeof import("path")).join(cwd(), "public", "data", filename),
    "utf-8"
  );
  return JSON.parse(raw) as T;
}

function cachedLoad<T>(
  get: () => Promise<T> | null,
  set: (p: Promise<T> | null) => void,
  loader: () => Promise<T>,
): Promise<T> {
  // In dev, always reload from disk so JSON changes are picked up without restart
  if (process.env.NODE_ENV !== "production") return loader();
  const existing = get();
  if (existing) return existing;
  const p = loader().catch((err) => {
    set(null); // clear so next call retries instead of caching a rejected promise
    throw err;
  });
  set(p);
  return p;
}

export function loadGlyphs(): Promise<Glyph[]> {
  return cachedLoad(() => _glyphsP, (p) => { _glyphsP = p; }, () => loadJson<Glyph[]>("glyphs.json"));
}

export function loadWords(): Promise<DictionaryWord[]> {
  return cachedLoad(() => _wordsP, (p) => { _wordsP = p; }, () => loadJson<DictionaryWord[]>("words.json"));
}

export function loadCategories(): Promise<Record<string, string>> {
  return cachedLoad(() => _categoriesP, (p) => { _categoriesP = p; }, () => loadJson<Record<string, string>>("categories.json"));
}

export function loadSearchGlyphs(): Promise<SearchGlyph[]> {
  return cachedLoad(() => _searchGlyphsP, (p) => { _searchGlyphsP = p; }, () => loadJson<SearchGlyph[]>("search-glyphs.json"));
}

export function loadSearchWords(): Promise<SearchWord[]> {
  return cachedLoad(() => _searchWordsP, (p) => { _searchWordsP = p; }, () => loadJson<SearchWord[]>("search-words.json"));
}

export function loadSearchFuseIndex(): Promise<unknown> {
  return cachedLoad(() => _searchFuseIndexP, (p) => { _searchFuseIndexP = p; }, () => loadJson<unknown>("search-fuse-index.json"));
}
