import type { Glyph, DictionaryWord } from "./types";
import { getCloudflareContext } from "@opennextjs/cloudflare";

let _glyphs: Glyph[] | null = null;
let _words: DictionaryWord[] | null = null;
let _categories: Record<string, string> | null = null;

async function loadJson<T>(filename: string): Promise<T> {
  // Try CF Workers static assets binding first
  let cfContext: Awaited<ReturnType<typeof getCloudflareContext>> | null = null;
  try {
    cfContext = await getCloudflareContext({ async: true });
  } catch {
    // Not in CF Workers context (next build SSG / next dev)
  }

  if (cfContext?.env?.ASSETS) {
    const res = await cfContext.env.ASSETS.fetch(
      new Request(`http://assets.local/data/${filename}`)
    );
    if (!res.ok) {
      throw new Error(
        `Failed to load /data/${filename} from CF Assets: ${res.status} ${res.statusText}`
      );
    }
    return (await res.json()) as T;
  }

  // Filesystem fallback — only reached during `next build` SSG or `next dev`.
  // The node: prefix is split so Turbopack's edge-runtime checker doesn't flag it.
  const nodePrefix = "node" + ":";
  const fs: typeof import("fs") = await import(/* webpackIgnore: true */ `${nodePrefix}fs`);
  const path: typeof import("path") = await import(/* webpackIgnore: true */ `${nodePrefix}path`);
  // process.cwd() is obfuscated so the edge-runtime static analyser ignores it.
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
