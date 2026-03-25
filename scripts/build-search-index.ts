/**
 * Build compact search-only datasets + pre-built Fuse.js index.
 * Run automatically before `next build` via the `prebuild` npm script.
 *
 * Reads:   public/data/glyphs.json, public/data/words.json
 * Writes:  public/data/search-glyphs.json   (glyphs sans variants, minimal fields)
 *          public/data/search-words.json     (deduplicated, search fields only)
 *          public/data/search-fuse-index.json (pre-built Fuse.js index)
 *
 * This cuts the cold-start data load on CF Workers from ~11MB to ~5MB
 * and eliminates Fuse index construction time at runtime.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import Fuse from "fuse.js";
import { expandForSearch } from "./translit-utils";

const DATA_DIR = join(process.cwd(), "public", "data");

interface RawGlyph {
  code: string;
  unicode: string;
  category: string;
  categoryName: string;
  description: string;
  meanings: { text: string; type: string; period?: string }[];
  transliteration: string[];
  etymology?: string;
  tags?: string[];
  related: string[];
  source?: string;
}

interface RawWord {
  transliteration: string;
  translation: string;
  mdc: string;
  gardinerCodes: string[];
  grammar: string | null;
  grammarRaw: string | null;
  notes: string[];
}

// Variant codes have a trailing letter (upper or lowercase) after the base number
const VARIANT_RE = /^[A-Z][a-z]?\d+[A-Za-z]/;

function main() {
  console.log("Building search indexes...");

  // ── Glyphs ──────────────────────────────────────────────────────────────────
  const glyphs: RawGlyph[] = JSON.parse(
    readFileSync(join(DATA_DIR, "glyphs.json"), "utf-8")
  );

  // Filter variants (they're excluded from search anyway) and strip unused fields
  const searchGlyphs = glyphs
    .filter((g) => !VARIANT_RE.test(g.code))
    .map(({ code, unicode, transliteration, meanings, description, category, categoryName, related, source }) => ({
      code,
      unicode,
      transliteration,
      // Include MdC ASCII aliases so users can search "bAH" and find "bꜣḥ"
      searchTransliteration: expandForSearch(transliteration),
      meanings: meanings.map((m) => ({ text: m.text, type: m.type })),
      description,
      category,
      categoryName,
      related,
      source,
    }));

  writeFileSync(
    join(DATA_DIR, "search-glyphs.json"),
    JSON.stringify(searchGlyphs)
  );
  console.log(`  search-glyphs.json: ${searchGlyphs.length} glyphs (${(JSON.stringify(searchGlyphs).length / 1024).toFixed(0)} KB)`);

  // ── Fuse.js index ───────────────────────────────────────────────────────────
  const fuseKeys = [
    { name: "code", weight: 3 },
    { name: "unicode", weight: 2 },
    { name: "searchTransliteration", weight: 2 },
    { name: "meanings.text", weight: 1.5 },
    { name: "description", weight: 0.8 },
  ];

  const fuseIndex = Fuse.createIndex(fuseKeys, searchGlyphs);
  const serializedIndex = JSON.stringify(fuseIndex.toJSON());

  writeFileSync(join(DATA_DIR, "search-fuse-index.json"), serializedIndex);
  console.log(`  search-fuse-index.json: ${(serializedIndex.length / 1024).toFixed(0)} KB`);

  // ── Words ───────────────────────────────────────────────────────────────────
  const words: RawWord[] = JSON.parse(
    readFileSync(join(DATA_DIR, "words.json"), "utf-8")
  );

  // Group by (transliteration, MdC spelling) — same hieroglyphic spelling
  // gets one card with all its meanings merged.
  const wordBySpelling = new Map<string, { translations: Set<string>; grammar: string | null; mdc: string; gardinerCodes: string[] }>();
  for (const w of words) {
    const key = `${w.transliteration}||${w.mdc}`;
    const existing = wordBySpelling.get(key);
    if (existing) {
      existing.translations.add(w.translation);
      if (!existing.grammar && w.grammar) existing.grammar = w.grammar;
    } else {
      wordBySpelling.set(key, {
        translations: new Set([w.translation]),
        grammar: w.grammar ?? null,
        mdc: w.mdc,
        gardinerCodes: w.gardinerCodes ?? [],
      });
    }
  }
  const searchWords: { transliteration: string; translation: string; grammar: string | null; mdc: string; gardinerCodes: string[] }[] = [];
  for (const [key, group] of wordBySpelling) {
    const translit = key.split("||")[0];
    searchWords.push({
      transliteration: translit,
      translation: [...group.translations].join(", "),
      grammar: group.grammar,
      mdc: group.mdc,
      gardinerCodes: group.gardinerCodes,
    });
  }

  writeFileSync(
    join(DATA_DIR, "search-words.json"),
    JSON.stringify(searchWords)
  );
  console.log(`  search-words.json: ${searchWords.length} words (${(JSON.stringify(searchWords).length / 1024).toFixed(0)} KB)`);

  const totalKB = (
    JSON.stringify(searchGlyphs).length +
    serializedIndex.length +
    JSON.stringify(searchWords).length
  ) / 1024;
  console.log(`  Total search data: ${(totalKB / 1024).toFixed(1)} MB`);
  console.log("Done.");
}

main();
