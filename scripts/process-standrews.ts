/**
 * Merges St Andrews sign list data into glyphs.json.
 * Source: https://mjn.host.cs.st-andrews.ac.uk/egyptian/unicode/
 * License: Academic open (no explicit license stated; non-commercial research use)
 *
 * Two files are processed:
 *
 * standrews-descriptions.xml — English physical descriptions of each sign
 *   e.g. A1 → "seated man", G17 → "owl"
 *   Fills `description` for glyphs that currently have none.
 *   For glyphs that already have a (longer) description, we only replace if
 *   the existing one is shorter than the St Andrews one.
 *
 * standrews-signuse.xml — Semantic uses: logograms, phonograms, determinatives
 *   Contributes:
 *     - new `meanings` entries (with English translations where available)
 *     - new `transliteration` values
 */

import * as fs from "fs";
import * as path from "path";
import { mdcToUnicode, hasTransliteration } from "./translit-utils";
import { XMLParser } from "fast-xml-parser";

interface GlyphEntry {
  code: string;
  unicode: string;
  category: string;
  categoryName: string;
  description: string;
  meanings: Array<{ text: string; type: string; period?: string }>;
  transliteration: string[];
  tags?: string[];
  related: string[];
  renderable?: boolean;
  source?: string;
  [key: string]: unknown;
}

// Strip inline XML markup from text content: <al>, <signref>, etc.
function stripMarkup(text: unknown): string {
  if (typeof text !== "string") {
    if (text === null || text === undefined) return "";
    // fast-xml-parser may return an object for mixed content
    return String(text);
  }
  return text
    .replace(/<signref[^>]*\/>/g, "…")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Capitalise first letter
function cap(s: string): string {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

// ─── Parse signdescriptioneng.xml ───────────────────────────────────────────

function parseDescriptions(filePath: string): Map<string, string> {
  const xml = fs.readFileSync(filePath, "utf-8");
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    isArray: (name) => name === "sign",
    // Preserve mixed content so we can strip markup from <descr>
    parseTagValue: false,
    stopNodes: ["*.descr"],
  });
  const doc = parser.parse(xml);
  const result = new Map<string, string>();

  for (const sign of doc?.signlist?.sign ?? []) {
    const id: string = sign["@_id"];
    if (!id) continue;
    let descr = sign.descr;
    if (!descr) continue;
    if (typeof descr !== "string") descr = String(descr);
    // Strip any inline XML tags (<al>, <signref …/>)
    const clean = descr
      .replace(/<signref[^/]*/g, "")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (clean) result.set(id.toLowerCase(), cap(clean));
  }

  return result;
}

// ─── Parse standrews-signuse.xml ────────────────────────────────────────────

const USE_TYPE_MAP: Record<string, "logogram" | "phonogram" | "determinative" | "other"> = {
  log: "logogram",
  logdet: "logogram",      // logogram-or-determinative → treat as logogram
  det: "determinative",
  phon: "phonogram",
  phondet: "phonogram",    // phonetic-determinative → phonogram family
  typ: "other",
};

interface SignUse {
  meanings: Array<{ text: string; type: "logogram" | "phonogram" | "determinative" | "other"; period?: string }>;
  transliterations: string[];
}

function parseSignUse(filePath: string): Map<string, SignUse> {
  const xml = fs.readFileSync(filePath, "utf-8");
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    isArray: (name) =>
      ["sign", "log", "logdet", "det", "phon", "phondet", "typ", "useas"].includes(name),
  });
  const doc = parser.parse(xml);
  const result = new Map<string, SignUse>();

  for (const sign of doc?.signlist?.sign ?? []) {
    const id: string = sign["@_id"];
    if (!id) continue;

    const entry: SignUse = { meanings: [], transliterations: [] };

    for (const [xmlTag, meaningType] of Object.entries(USE_TYPE_MAP)) {
      const items = sign[xmlTag];
      if (!Array.isArray(items)) continue;

      for (const item of items) {
        // Skip entries that belong to sign combinations (e.g. O50:Z4),
        // not to the standalone sign. The <group> element specifies
        // a composite sign context like "O50:.*Z1*Z1*.".
        if (item.group) continue;

        const period: string | undefined = item["@_period"]
          ? String(item["@_period"])
          : undefined;

        // Transliteration value — prefer @root (the sign's own phonetic value)
        // over the inflected word form (e.g. root="sp" over "spt")
        const alObj = item.al;
        const alRoot = typeof alObj === "object" && alObj !== null && "@_root" in alObj
          ? String((alObj as Record<string, unknown>)["@_root"])
          : null;
        const alText = alObj
          ? typeof alObj === "string"
            ? alObj
            : typeof alObj === "object" && "#text" in (alObj as object)
              ? String((alObj as Record<string, unknown>)["#text"])
              : String(alObj)
          : null;
        const al = alRoot ?? alText;

        // English translation
        const tr = item.tr
          ? typeof item.tr === "string"
            ? item.tr
            : typeof item.tr === "object" && "#text" in (item.tr as object)
              ? String((item.tr as Record<string, unknown>)["#text"])
              : String(item.tr)
          : null;

        // `describe` field (used in <det> when no specific word, just a range)
        const describe = item.describe
          ? typeof item.describe === "string"
            ? item.describe
            : typeof item.describe === "object" && "#text" in (item.describe as object)
              ? String((item.describe as Record<string, unknown>)["#text"])
              : String(item.describe)
          : null;

        // Build a human-readable meaning text
        let meaningText = "";
        if (al && tr) {
          meaningText = `${al} — ${tr}`;
        } else if (tr) {
          meaningText = tr;
        } else if (describe) {
          meaningText = describe;
        } else if (al) {
          meaningText = al;
        }

        if (meaningText) {
          const mtype = USE_TYPE_MAP[xmlTag];
          const label =
            mtype === "logogram" ? "Logogram" :
            mtype === "phonogram" ? "Phonogram" :
            mtype === "determinative" ? "Determinative" : "Sign";

          entry.meanings.push({
            text: `${label}: ${cap(meaningText)}`,
            type: mtype,
            ...(period ? { period } : {}),
          });
        }

        // Collect transliteration (trim whitespace from source)
        if (al && al.trim().length > 0 && al.trim().length <= 12) {
          entry.transliterations.push(al.trim());
        }
      }
    }

    if (entry.meanings.length > 0 || entry.transliterations.length > 0) {
      result.set(id.toLowerCase(), entry);
    }
  }

  return result;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const descrPath = path.join(__dirname, "../lib/data/standrews-descriptions.xml");
  const usePath = path.join(__dirname, "../lib/data/standrews-signuse.xml");
  const glyphsPath = path.join(__dirname, "../public/data/glyphs.json");

  console.log("Parsing St Andrews descriptions…");
  const descriptions = parseDescriptions(descrPath);
  console.log(`  ${descriptions.size} sign descriptions`);

  console.log("Parsing St Andrews sign use…");
  const signUses = parseSignUse(usePath);
  console.log(`  ${signUses.size} signs with use data`);

  console.log("Loading glyphs.json…");
  const glyphs: GlyphEntry[] = JSON.parse(fs.readFileSync(glyphsPath, "utf-8"));
  console.log(`  ${glyphs.length} glyphs`);

  let descrFilled = 0;
  let descrReplaced = 0;
  let meaningsAdded = 0;
  let translitsAdded = 0;
  let glyphsEnriched = 0;

  for (const glyph of glyphs) {
    const key = glyph.code.toLowerCase();
    let enriched = false;

    // ── Descriptions ──
    const saDescr = descriptions.get(key);
    if (saDescr) {
      if (!glyph.description) {
        glyph.description = saDescr;
        descrFilled++;
        enriched = true;
      } else if (saDescr.length > glyph.description.length) {
        // St Andrews has a longer/more precise description
        glyph.description = saDescr;
        descrReplaced++;
        enriched = true;
      }
    }

    // ── Meanings + transliterations ──
    const saUse = signUses.get(key);
    if (saUse) {
      for (const m of saUse.meanings) {
        const isDupe = glyph.meanings.some(
          (existing) => existing.text.toLowerCase() === m.text.toLowerCase()
        );
        if (!isDupe) {
          glyph.meanings.push(m);
          meaningsAdded++;
          enriched = true;
        }
      }

      for (const t of saUse.transliterations) {
        const unicode = mdcToUnicode(t);
        if (!hasTransliteration(glyph.transliteration, unicode)) {
          glyph.transliteration.push(unicode);
          translitsAdded++;
          enriched = true;
        }
      }
    }

    if (enriched) glyphsEnriched++;
  }

  console.log("\nResults:");
  console.log(`  Glyphs enriched:          ${glyphsEnriched}`);
  console.log(`  Descriptions filled:      ${descrFilled}`);
  console.log(`  Descriptions replaced:    ${descrReplaced}`);
  console.log(`  Meanings added:           ${meaningsAdded}`);
  console.log(`  Transliterations added:   ${translitsAdded}`);

  const withDesc = glyphs.filter((g) => g.description).length;
  const withMeanings = glyphs.filter((g) => g.meanings.length > 0).length;
  console.log(`\nCoverage after merge:`);
  console.log(`  Glyphs with description:  ${withDesc} / ${glyphs.length} (${Math.round(withDesc / glyphs.length * 100)}%)`);
  console.log(`  Glyphs with meanings:     ${withMeanings} / ${glyphs.length} (${Math.round(withMeanings / glyphs.length * 100)}%)`);

  fs.writeFileSync(glyphsPath, JSON.stringify(glyphs, null, 2));
  console.log("\nWrote updated glyphs.json");
}

main().catch(console.error);
