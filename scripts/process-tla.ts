/**
 * Extracts per-glyph attested text examples from the TLA corpus and writes
 * them into glyphs.json.
 *
 * Sources (CC BY-SA 4.0):
 *   - TLA Late Egyptian sentences, corpus v19 (3,606 sentences)
 *     https://huggingface.co/datasets/thesaurus-linguae-aegyptiae/tla-late_egyptian-v19-premium
 *   - TLA Earlier Egyptian sentences, corpus v18 (12,773 sentences)
 *     https://huggingface.co/datasets/thesaurus-linguae-aegyptiae/tla-Earlier_Egyptian_original-v18-premium
 *
 * For each sentence we:
 *   1. Map every Unicode hieroglyph character → Gardiner code (using glyphs.json)
 *   2. For each unique glyph that appears, attach the sentence as an example
 *   3. Cap examples at MAX_EXAMPLES per glyph, preferring shorter sentences
 *   4. Skip sentences that are just proper names (single-lemma PROPN-only)
 *   5. Store examples as { hieroglyphs, transliteration, translation, period }
 *
 * The script is safe to re-run — it replaces any existing examples array.
 */

import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

const MAX_EXAMPLES = 3;   // max examples stored per glyph
const MAX_GLYPHS = 30;    // skip sentences with more than this many glyph chars (too long)
const MIN_GLYPHS = 3;     // skip very short ones (single-glyph proper names etc.)

interface TLASentence {
  hieroglyphs: string;
  transliteration: string;
  translation: string;
  UPOS?: string;
  dateNotBefore?: string;
  dateNotAfter?: string;
}

interface GlyphExample {
  hieroglyphs: string;
  transliteration: string;
  translation: string;
  period?: string;          // e.g. "−1290 – −1213"
  corpus: "earlier" | "late";
}

interface GlyphEntry {
  code: string;
  unicode: string;
  [key: string]: unknown;
  examples?: GlyphExample[];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatPeriod(
  notBefore: string | undefined,
  notAfter: string | undefined
): string | undefined {
  if (!notBefore && !notAfter) return undefined;
  const fmt = (s: string) => {
    const n = parseInt(s);
    if (isNaN(n)) return s;
    return n < 0 ? `${Math.abs(n)} BCE` : `${n} CE`;
  };
  if (notBefore && notAfter && notBefore !== notAfter) {
    return `${fmt(notBefore)} – ${fmt(notAfter)}`;
  }
  return fmt((notBefore || notAfter)!);
}

function stripNonUnicode(s: string): string {
  // Remove <g>JSeshCode</g> references (non-Unicode signs used by TLA)
  return s.replace(/<g>[^<]*<\/g>/g, "");
}

function glyphCount(hieroglyphs: string): number {
  const stripped = stripNonUnicode(hieroglyphs).replace(/\s/g, "");
  return [...stripped].length;
}

// Returns true if we should skip this sentence
function shouldSkip(row: TLASentence): boolean {
  const count = glyphCount(row.hieroglyphs);
  if (count < MIN_GLYPHS || count > MAX_GLYPHS) return true;

  // Skip sentences that are purely proper names (no meaningful reading)
  if (row.UPOS) {
    const tags = row.UPOS.trim().split(/\s+/);
    if (tags.every((t) => t === "PROPN" || t === "PUNCT")) return true;
  }

  // Skip if translation is just a name in $…$ (TLA proper-name marker)
  if (/^\$[^$]+\$$/.test(row.translation.trim())) return true;

  return false;
}

async function readJSONL(filePath: string): Promise<TLASentence[]> {
  const results: TLASentence[] = [];
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    if (line.trim()) {
      try {
        results.push(JSON.parse(line) as TLASentence);
      } catch {
        // skip malformed lines
      }
    }
  }
  return results;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const glyphsPath = path.join(__dirname, "../lib/data/glyphs.json");
  const lateEgyptianPath = path.join(__dirname, "../lib/data/tla-late-egyptian.jsonl");
  const earlierEgyptianPath = path.join(__dirname, "../lib/data/tla-earlier-egyptian.jsonl");

  for (const p of [lateEgyptianPath, earlierEgyptianPath]) {
    if (!fs.existsSync(p)) {
      console.error(`Missing corpus file: ${p}`);
      console.error(`Download from HuggingFace and place in lib/data/ — see SOURCES.md`);
      process.exit(1);
    }
  }

  console.log("Loading glyphs.json…");
  const glyphs: GlyphEntry[] = JSON.parse(fs.readFileSync(glyphsPath, "utf-8"));

  // Build unicode char → Gardiner code map
  const uniToCode = new Map<string, string>();
  for (const g of glyphs) {
    if (g.unicode) uniToCode.set(g.unicode as string, g.code);
  }
  console.log(`  Unicode→code map: ${uniToCode.size} entries`);

  // Build code → glyph index for fast lookup
  const codeToGlyph = new Map<string, GlyphEntry>();
  for (const g of glyphs) {
    codeToGlyph.set(g.code, g);
    g.examples = []; // reset each run
  }

  // Per-glyph candidate sentences: { sentence, priority }
  // priority = glyph count (lower = shorter = better)
  const candidates = new Map<string, Array<{ ex: GlyphExample; priority: number }>>();

  async function processSentences(
    filePath: string,
    corpus: "earlier" | "late"
  ) {
    console.log(`\nProcessing ${corpus} Egyptian corpus…`);
    const sentences = await readJSONL(filePath);
    console.log(`  ${sentences.length} sentences`);

    let skipped = 0;
    let processed = 0;

    for (const row of sentences) {
      if (shouldSkip(row)) { skipped++; continue; }

      const stripped = stripNonUnicode(row.hieroglyphs);
      const chars = [...stripped.replace(/\s/g, "")];
      const count = chars.length;

      // Find unique Gardiner codes in this sentence
      const codesInSentence = new Set<string>();
      for (const char of chars) {
        const code = uniToCode.get(char);
        if (code) codesInSentence.add(code);
      }

      const ex: GlyphExample = {
        hieroglyphs: row.hieroglyphs,
        transliteration: row.transliteration,
        translation: row.translation,
        corpus,
        ...(formatPeriod(row.dateNotBefore, row.dateNotAfter)
          ? { period: formatPeriod(row.dateNotBefore, row.dateNotAfter) }
          : {}),
      };

      for (const code of codesInSentence) {
        if (!candidates.has(code)) candidates.set(code, []);
        const list = candidates.get(code)!;
        // Only add if below cap (we'll sort and slice later)
        list.push({ ex, priority: count });
      }

      processed++;
    }

    console.log(`  Processed: ${processed}, Skipped: ${skipped}`);
  }

  await processSentences(earlierEgyptianPath, "earlier");
  await processSentences(lateEgyptianPath, "late");

  console.log("\nAssigning best examples to glyphs…");
  let glyphsWithExamples = 0;

  for (const [code, list] of candidates) {
    const glyph = codeToGlyph.get(code);
    if (!glyph) continue;

    // Sort by sentence length (shorter = more readable), dedupe by transliteration
    list.sort((a, b) => a.priority - b.priority);
    const seen = new Set<string>();
    const best: GlyphExample[] = [];
    for (const { ex } of list) {
      if (seen.has(ex.transliteration)) continue;
      seen.add(ex.transliteration);
      best.push(ex);
      if (best.length >= MAX_EXAMPLES) break;
    }
    glyph.examples = best;
    if (best.length > 0) glyphsWithExamples++;
  }

  console.log(`  Glyphs with examples: ${glyphsWithExamples} / ${glyphs.length}`);

  fs.writeFileSync(glyphsPath, JSON.stringify(glyphs, null, 2));
  console.log("\nWrote updated glyphs.json");
}

main().catch(console.error);
