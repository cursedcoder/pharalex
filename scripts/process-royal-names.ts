/**
 * Process raw royal name data from pharaoh.se into royal-names.ts
 *
 * Pipeline:
 *   1. Load raw scraped data (royal-names-raw.json)
 *   2. For each pharaoh, pick the primary (non-variant) name for each type
 *   3. Validate Gardiner codes against our glyph database
 *   4. Normalise transliterations to Unicode
 *   5. Extract source citations
 *   6. Generate royal-names.ts
 *
 * Data source: pharaoh.se (CC BY 4.0)
 * Attribution: Lundström, Peter. (2024). Available at: https://pharaoh.se
 */

import * as fs from "fs";
import * as path from "path";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ScrapedName {
  label: string;
  displayName: string;
  transliteration: string;
  translation: string;
  mdc: string;
  codes: string[];
  sources: string;
}

type NameType = "horus" | "nebty" | "golden" | "prenomen" | "nomen";

interface FetchReport {
  slug: string;
  name: string;
  url: string;
  status: "found" | "not_found" | "error";
  error?: string;
  names: Record<NameType, ScrapedName[]>;
}

interface RoyalNameOutput {
  codes: string[];
  mdc?: string;
  transliteration: string;
  translation?: string;
  sources?: { text: string }[];
  variants?: RoyalNameOutput[];
}

type RoyalNamesOutput = Partial<Record<NameType, RoyalNameOutput>>;

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Load the set of known Gardiner codes from glyphs.json. */
function loadKnownCodes(): Set<string> {
  const glyphsPath = path.join(__dirname, "../public/data/glyphs.json");
  if (!fs.existsSync(glyphsPath)) {
    console.warn("⚠ glyphs.json not found — skipping code validation");
    return new Set();
  }
  const glyphs = JSON.parse(fs.readFileSync(glyphsPath, "utf-8")) as { code: string }[];
  return new Set(glyphs.map(g => g.code));
}

/**
 * Pick the best (primary) name from a list of scraped names.
 * Prefers the first non-variant entry; falls back to the first entry.
 */
function pickPrimary(names: ScrapedName[]): ScrapedName | null {
  if (names.length === 0) return null;
  // Prefer entries whose label does NOT contain "variant"
  const primary = names.find(n => !n.label.toLowerCase().includes("variant"));
  return primary ?? names[0];
}

/** Parse source text (newline-separated) into source objects. */
function parseSources(raw: string): { text: string }[] {
  if (!raw) return [];
  return raw
    .split("\n")
    .map(s => s.trim())
    .filter(s => s.length > 0)
    .map(text => ({ text }));
}

/**
 * Validate codes against known glyph database.
 * Returns { valid, unknown } arrays.
 */
function validateCodes(codes: string[], knownCodes: Set<string>): { valid: string[]; unknown: string[] } {
  if (knownCodes.size === 0) return { valid: codes, unknown: [] };
  const valid: string[] = [];
  const unknown: string[] = [];
  for (let code of codes) {
    // Strip trailing backslashes (pharaoh.se rotation artifact)
    code = code.replace(/\\.*$/, "");
    // Skip empty/garbage codes
    if (!code || /^[0-9.?–]+$/.test(code) || code.includes(" ")) continue;
    if (knownCodes.has(code)) {
      valid.push(code);
    } else {
      unknown.push(code);
    }
  }
  return { valid, unknown };
}

/** Escape a string for use in a TypeScript double-quoted string literal. */
function escapeTs(s: string): string {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/`/g, "\\`")
    .replace(/\n/g, " ")      // collapse newlines
    .replace(/\r/g, "")
    .replace(/\s{2,}/g, " ")  // collapse multiple spaces
    .trim();
}

// ─── Main ────────────────────────────────────────────────────────────────────

function main() {
  const rawPath = path.join(__dirname, "../lib/data/royal-names-raw.json");
  if (!fs.existsSync(rawPath)) {
    console.error("royal-names-raw.json not found. Run fetch-royal-names.ts first.");
    process.exit(1);
  }

  const reports: FetchReport[] = JSON.parse(fs.readFileSync(rawPath, "utf-8"));
  const knownCodes = loadKnownCodes();

  const nameTypes: NameType[] = ["horus", "nebty", "golden", "prenomen", "nomen"];

  let totalPharaohs = 0;
  let totalNames = 0;
  let totalUnknownCodes = 0;
  const allUnknown = new Map<string, number>(); // code → count

  const entries: { slug: string; names: RoyalNamesOutput }[] = [];

  for (const report of reports) {
    if (report.status !== "found") continue;

    const royalNames: RoyalNamesOutput = {};
    let hasAny = false;

    for (const type of nameTypes) {
      const allNames = report.names[type];
      if (!allNames || allNames.length === 0) continue;

      const primary = pickPrimary(allNames);
      if (!primary) continue;
      if (primary.codes.length === 0 && !primary.transliteration) continue;

      function processName(scraped: ScrapedName): RoyalNameOutput | null {
        const { valid, unknown } = validateCodes(scraped.codes, knownCodes);
        for (const u of unknown) {
          allUnknown.set(u, (allUnknown.get(u) ?? 0) + 1);
        }
        totalUnknownCodes += unknown.length;

        const transliteration = scraped.transliteration.replace(/\n/g, " ").replace(/ꞽ/g, "i͗").trim();
        if (valid.length === 0 && !transliteration) return null;

        const entry: RoyalNameOutput = { codes: valid, transliteration };
        if (scraped.mdc) entry.mdc = scraped.mdc;
        const translation = scraped.translation.replace(/\n/g, " ").trim();
        if (translation) entry.translation = translation;
        const sources = parseSources(scraped.sources);
        if (sources.length > 0) entry.sources = sources;
        return entry;
      }

      const primaryEntry = processName(primary);
      if (!primaryEntry) continue;

      // Process variants (all non-primary names that differ in transliteration)
      const primaryTranslit = primaryEntry.transliteration;
      const variants: RoyalNameOutput[] = [];
      for (const scraped of allNames) {
        if (scraped === primary) continue;
        const v = processName(scraped);
        if (!v) continue;
        // Skip variants that are just spelling differences of the primary
        if (v.transliteration === primaryTranslit && v.translation === primaryEntry.translation) continue;
        variants.push(v);
      }

      if (variants.length > 0) {
        primaryEntry.variants = variants;
      }

      royalNames[type] = primaryEntry;
      hasAny = true;
      totalNames++;
    }

    if (hasAny) {
      entries.push({ slug: report.slug, names: royalNames });
      totalPharaohs++;
    }
  }

  function emitNameFields(lines: string[], name: RoyalNameOutput, indent: number) {
    const pad = " ".repeat(indent);
    lines.push(`${pad}codes: [${name.codes.map(c => `"${c}"`).join(", ")}],`);
    if (name.mdc) {
      lines.push(`${pad}mdc: "${escapeTs(name.mdc)}",`);
    }
    lines.push(`${pad}transliteration: "${escapeTs(name.transliteration)}",`);
    if (name.translation) {
      lines.push(`${pad}translation: "${escapeTs(name.translation)}",`);
    }
    if (name.sources && name.sources.length > 0) {
      lines.push(`${pad}sources: [`);
      for (const s of name.sources) {
        lines.push(`${pad}  { text: "${escapeTs(s.text)}" },`);
      }
      lines.push(`${pad}],`);
    }
  }

  // Generate TypeScript
  const lines: string[] = [];
  lines.push('/**');
  lines.push(' * Royal names (titulary) for Egyptian pharaohs.');
  lines.push(' *');
  lines.push(' * Auto-generated from pharaoh.se data (CC BY 4.0).');
  lines.push(' * Attribution: Lundström, Peter. (2024). Available at: https://pharaoh.se');
  lines.push(' *');
  lines.push(` * Generated: ${new Date().toISOString().split("T")[0]}`);
  lines.push(` * Pharaohs: ${totalPharaohs}, Name entries: ${totalNames}`);
  lines.push(' */');
  lines.push('');
  lines.push('import type { RoyalNames } from "@/lib/types";');
  lines.push('');
  lines.push('export const ROYAL_NAMES: Record<string, RoyalNames> = {');

  for (const { slug, names } of entries) {
    // Use quoted key if slug contains hyphens
    const key = slug.includes("-") ? `"${slug}"` : slug;
    lines.push(`  ${key}: {`);

    for (const type of nameTypes) {
      const name = names[type];
      if (!name) continue;

      lines.push(`    ${type}: {`);
      emitNameFields(lines, name, 6);
      if (name.variants && name.variants.length > 0) {
        lines.push(`      variants: [`);
        for (const v of name.variants) {
          lines.push(`        {`);
          emitNameFields(lines, v, 10);
          lines.push(`        },`);
        }
        lines.push(`      ],`);
      }
      lines.push(`    },`);
    }

    lines.push(`  },`);
    lines.push('');
  }

  lines.push('};');
  lines.push('');

  const outputPath = path.join(__dirname, "../lib/data/royal-names.ts");
  fs.writeFileSync(outputPath, lines.join("\n"));

  // Summary
  console.log("=".repeat(60));
  console.log("ROYAL NAMES PROCESSING COMPLETE");
  console.log("=".repeat(60));
  console.log(`Pharaohs with names: ${totalPharaohs}`);
  console.log(`Total name entries: ${totalNames}`);
  console.log(`Output: ${outputPath}`);

  if (allUnknown.size > 0) {
    console.log(`\n⚠ ${totalUnknownCodes} code references to ${allUnknown.size} unknown Gardiner codes (stripped from output):`);
    const sorted = [...allUnknown.entries()].sort((a, b) => b[1] - a[1]);
    for (const [code, count] of sorted.slice(0, 20)) {
      console.log(`  ${code}: ${count} occurrences`);
    }
    if (sorted.length > 20) {
      console.log(`  ... and ${sorted.length - 20} more`);
    }
  }
}

main();
