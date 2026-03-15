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

    if (!byWord.has(word)) byWord.set(word, []);
    byWord.get(word)!.push({ word, pos, glosses });
  }

  _cache = byWord;
  return byWord;
}

/** Look up Wiktionary entries for a Unicode transliteration. */
export function getWiktionaryEntries(translit: string): WiktionaryEntry[] {
  return loadWiktionary().get(translit) ?? [];
}
