import * as fs from "fs";
import * as path from "path";

export interface WiktionaryEntry {
  word: string;
  pos: string;
  glosses: string[];
}

let _cache: Map<string, WiktionaryEntry[]> | null = null;

function loadWiktionary(): Map<string, WiktionaryEntry[]> {
  if (_cache && process.env.NODE_ENV === "production") return _cache;

  const filePath = path.join(process.cwd(), "lib/data/wiktionary-egyptian.jsonl");
  const lines = fs.readFileSync(filePath, "utf-8").trim().split("\n");

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

  _cache = byWord;
  return byWord;
}

/** Look up Wiktionary entries for a Unicode transliteration. */
export function getWiktionaryEntries(translit: string): WiktionaryEntry[] {
  return loadWiktionary().get(translit) ?? [];
}
