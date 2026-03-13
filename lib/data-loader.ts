import type { Glyph, DictionaryWord } from "./types";
import { getCloudflareContext } from "@opennextjs/cloudflare";

let _glyphs: Glyph[] | null = null;
let _words: DictionaryWord[] | null = null;
let _categories: Record<string, string> | null = null;

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

export async function loadGlyphs(): Promise<Glyph[]> {
  if (!_glyphs) _glyphs = await loadJson<Glyph[]>("glyphs.json");
  return _glyphs;
}

export async function loadWords(): Promise<DictionaryWord[]> {
  if (!_words) _words = await loadJson<DictionaryWord[]>("words.json");
  return _words;
}

export async function loadCategories(): Promise<Record<string, string>> {
  if (!_categories)
    _categories = await loadJson<Record<string, string>>("categories.json");
  return _categories;
}
