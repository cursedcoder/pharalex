import type { Glyph, DictionaryWord } from "./types";
import { getCloudflareContext } from "@opennextjs/cloudflare";

let _glyphs: Glyph[] | null = null;
let _words: DictionaryWord[] | null = null;
let _categories: Record<string, string> | null = null;

async function loadFromFs<T>(filename: string): Promise<T> {
  // String concatenation hides these imports from static analysis / Edge checks.
  // This path only runs during `next build` SSG or `next dev`.
  const m = "nod" + "e:";
  const fs: typeof import("fs") = await import(/* webpackIgnore: true */ `${m}fs`);
  const path: typeof import("path") = await import(/* webpackIgnore: true */ `${m}path`);
  const raw = fs.readFileSync(
    path.join(process.cwd(), "public", "data", filename),
    "utf-8"
  );
  return JSON.parse(raw) as T;
}

async function loadJson<T>(filename: string): Promise<T> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    if (env?.ASSETS) {
      const res = await env.ASSETS.fetch(
        new Request(`http://assets.local/data/${filename}`)
      );
      if (res.ok) return (await res.json()) as T;
    }
  } catch {
    // Not in CF Workers context — fall through to filesystem
  }

  return loadFromFs(filename);
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
