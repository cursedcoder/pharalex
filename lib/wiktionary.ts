import { getCloudflareContext } from "@opennextjs/cloudflare";

export interface WiktionaryEntry {
  word: string;
  pos: string;
  glosses: string[];
}

let _cacheP: Promise<Map<string, WiktionaryEntry[]>> | null = null;

async function loadJsonl(): Promise<string> {
  let cfContext: Awaited<ReturnType<typeof getCloudflareContext>> | null = null;
  try {
    cfContext = await getCloudflareContext({ async: true });
  } catch {
    // Not in CF Workers context
  }

  if (cfContext?.env?.ASSETS) {
    try {
      const res = await cfContext.env.ASSETS.fetch(
        new Request("http://assets.local/data/wiktionary-egyptian.jsonl")
      );
      if (!res.ok) throw new Error(`CF Assets fetch failed: ${res.status}`);
      return res.text();
    } catch (e) {
      if (process.env.NODE_ENV === "production") throw e;
    }
  }

  // Filesystem fallback — only runs during `next build` SSG and `next dev`
  const nodePrefix = "node" + ":";
  const fs: typeof import("fs") = await import(/* webpackIgnore: true */ `${nodePrefix}fs`);
  const path: typeof import("path") = await import(/* webpackIgnore: true */ `${nodePrefix}path`);
  const cwd: () => string = (process as NodeJS.Process).cwd.bind(process);
  const filePath = path.join(cwd(), "public", "data", "wiktionary-egyptian.jsonl");
  if (!fs.existsSync(filePath)) return "";
  return fs.readFileSync(filePath, "utf-8");
}

async function loadWiktionary(): Promise<Map<string, WiktionaryEntry[]>> {
  if (_cacheP && process.env.NODE_ENV === "production") return _cacheP;

  const p = (async () => {
    const raw = await loadJsonl();
    const trimmed = raw.trim();
    if (!trimmed) return new Map<string, WiktionaryEntry[]>();
    const lines = trimmed.split("\n");

  const byWord = new Map<string, WiktionaryEntry[]>();
  for (const line of lines) {
    const raw = JSON.parse(line);
    const word: string = raw.word;
    const pos: string = raw.pos;
    const glosses: string[] = (raw.senses ?? [])
      .flatMap((s: { glosses?: string[] }) => s.glosses ?? [])
      .filter((g: string) => !g.startsWith("Manuel de Codage"))
      .map((g: string) =>
        g
          // Strip parenthetical grammar notes: (+ m or m-dj: with...), (+ n: for...)
          .replace(/\s*\(\+[^)]*\)/g, "")
          // Simplify "to be(come)" → "to become"
          .replace(/to be\(come\)/g, "to become")
          // Clean up trailing/leading whitespace and double spaces
          .replace(/\s{2,}/g, " ")
          .trim()
      );

    if (glosses.length === 0) continue;
    if (pos === "romanization") continue; // skip romanization entries

    // Deduplicate glosses:
    // 1. Remove exact duplicates
    // 2. Remove parent glosses that are a prefix of an adjacent child
    //    (Wiktionary repeats "to make" before "to make, to craft..." etc.)
    // 3. Strip redundant parent prefix from child glosses
    //    ("to make, to craft..." → "to craft...")
    const unique = [...new Set(glosses)];

    // Pass 1: remove standalone parent glosses that precede a more specific child
    const filtered: string[] = [];
    for (let i = 0; i < unique.length; i++) {
      const g = unique[i];
      const next = unique[i + 1];
      if (next && next.startsWith(g + ",")) continue;
      if (next && next.startsWith(g + " ")) continue;
      filtered.push(g);
    }

    // Pass 2: find the most common short prefix and strip it from children
    // e.g., "to make, to craft..." → "to craft..."
    // Count how many glosses start with the same prefix before the first comma
    const prefixCounts = new Map<string, number>();
    for (const g of filtered) {
      const commaIdx = g.indexOf(", ");
      if (commaIdx > 0 && commaIdx < 20) {
        const prefix = g.slice(0, commaIdx);
        prefixCounts.set(prefix, (prefixCounts.get(prefix) ?? 0) + 1);
      }
    }
    // Collect all prefixes that appear 3+ times
    const stripPrefixes: string[] = [];
    for (const [prefix, count] of prefixCounts) {
      if (count >= 3) stripPrefixes.push(prefix);
    }
    // Sort longest first so we strip the most specific match
    stripPrefixes.sort((a, b) => b.length - a.length);

    const deduped: string[] = [];
    for (const g of filtered) {
      let cleaned = g;
      for (const prefix of stripPrefixes) {
        if (cleaned.startsWith(prefix + ", ")) {
          cleaned = cleaned.slice(prefix.length + 2);
          break;
        }
      }
      deduped.push(cleaned);
    }

    if (deduped.length === 0) continue;

    if (!byWord.has(word)) byWord.set(word, []);
    byWord.get(word)!.push({ word, pos, glosses: deduped });
  }

    return byWord;
  })();

  _cacheP = p.catch((err) => { _cacheP = null; throw err; });
  return _cacheP;
}

/** Look up Wiktionary entries for a Unicode transliteration. */
export async function getWiktionaryEntries(translit: string): Promise<WiktionaryEntry[]> {
  return (await loadWiktionary()).get(translit) ?? [];
}
