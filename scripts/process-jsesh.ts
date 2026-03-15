/**
 * Merges JSesh signs_description.xml data into glyphs.json.
 *
 * Extracts per-glyph from JSesh (LGPL-3.0):
 *   - tags:            visual/shape descriptors (e.g. "seated", "holding something")
 *   - transliterations: phonetic values with use (keyboard/palette/informative)
 *                       and type (phonogram/ideogram/abbreviation/typical)
 *   - variantOf:       variant relationships with linguistic precision
 *   - contains:        composite sign part relationships
 */

import * as fs from "fs";
import * as path from "path";
import { XMLParser } from "fast-xml-parser";
import { mdcToUnicode, hasTransliteration } from "./translit-utils";

interface JseshSign {
  code: string;
  tags: string[];
  transliterations: Array<{
    value: string;
    use: "keyboard" | "palette" | "informative";
    type: "phonogram" | "ideogram" | "abbreviation" | "typical";
  }>;
  variantOf?: { baseSign: string; linguistic: string };
  contains: string[];
}

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

function stripMdcMarkup(text: string): string {
  // JSesh uses a simple markup inside signDescription text:
  //   +l  = start large text
  //   +s  = start small text
  //   +b  = bold
  //   +i  = italic
  //   +t  = transliteration font
  //   -!  = newline
  //   =   = sign reference (e.g. =A1)
  //   ?NNN = bibliographic reference number
  return text
    .replace(/\+[lsbitukr]/g, "")   // font/style tags
    .replace(/-!/g, "\n")            // line breaks
    .replace(/\?[0-9]+/g, "")       // bib refs
    .replace(/=[A-Za-z0-9]+/g, (m) => m.slice(1)) // sign refs → just the code
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function parseSignsXml(filePath: string): Map<string, JseshSign> {
  const xml = fs.readFileSync(filePath, "utf-8");

  // fast-xml-parser config: keep attributes, force arrays for repeating elements
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    isArray: (name) =>
      ["sign", "hasTag", "hasTransliteration", "variantOf", "contains", "partOf"].includes(name),
    allowBooleanAttributes: true,
  });

  const doc = parser.parse(xml);
  const signs: Map<string, JseshSign> = new Map();

  const root = doc.signs;
  if (!root) return signs;

  // Top-level loose elements (not inside a <sign> wrapper)
  function processSignInfo(
    entry: Record<string, unknown>,
    targetCode: string
  ) {
    const rec = ensureSign(targetCode);

    // Tags
    if (Array.isArray(entry.hasTag)) {
      for (const t of entry.hasTag as Array<Record<string, string>>) {
        const tag = t["@_tag"] || t["@_sign"] && signs.get(t["@_sign"] as string) && t["@_tag"];
        const tagVal = t["@_tag"];
        if (tagVal && !rec.tags.includes(tagVal)) rec.tags.push(tagVal);
      }
    }

    // Transliterations
    if (Array.isArray(entry.hasTransliteration)) {
      for (const tr of entry.hasTransliteration as Array<Record<string, string>>) {
        const value = tr["@_transliteration"];
        if (!value) continue;
        rec.transliterations.push({
          value,
          use: (tr["@_use"] as JseshSign["transliterations"][number]["use"]) || "keyboard",
          type: (tr["@_type"] as JseshSign["transliterations"][number]["type"]) || "phonogram",
        });
      }
    }

    // variantOf
    if (Array.isArray(entry.variantOf) && entry.variantOf.length > 0) {
      const v = (entry.variantOf as Array<Record<string, string>>)[0];
      const baseSign = v["@_baseSign"];
      if (baseSign) {
        rec.variantOf = {
          baseSign,
          linguistic: v["@_linguistic"] || "unspecified",
        };
      }
    }

    // contains (composite parts)
    if (Array.isArray(entry.contains)) {
      for (const c of entry.contains as Array<Record<string, string>>) {
        const partCode = c["@_partCode"];
        if (partCode && !rec.contains.includes(partCode)) {
          rec.contains.push(partCode);
        }
      }
    }
  }

  function ensureSign(code: string): JseshSign {
    if (!signs.has(code)) {
      signs.set(code, { code, tags: [], transliterations: [], contains: [] });
    }
    return signs.get(code)!;
  }

  // Process <sign sign="X"> elements
  if (Array.isArray(root.sign)) {
    for (const signEl of root.sign as Array<Record<string, unknown>>) {
      const code = signEl["@_sign"] as string;
      if (!code) continue;
      processSignInfo(signEl, code);
    }
  }

  // Process top-level loose hasTag/hasTransliteration/variantOf/contains
  // (JSesh sometimes places them outside <sign> wrappers, keyed by sign= attr)
  for (const elName of ["hasTag", "hasTransliteration", "variantOf", "contains", "partOf"]) {
    if (Array.isArray(root[elName])) {
      for (const el of root[elName] as Array<Record<string, string>>) {
        const code = el["@_sign"];
        if (code) {
          const rec = ensureSign(code);
          if (elName === "hasTag") {
            const tag = el["@_tag"];
            if (tag && !rec.tags.includes(tag)) rec.tags.push(tag);
          } else if (elName === "hasTransliteration") {
            const value = el["@_transliteration"];
            if (value) {
              rec.transliterations.push({
                value,
                use: (el["@_use"] as JseshSign["transliterations"][number]["use"]) || "keyboard",
                type: (el["@_type"] as JseshSign["transliterations"][number]["type"]) || "phonogram",
              });
            }
          } else if (elName === "variantOf") {
            const baseSign = el["@_baseSign"];
            if (baseSign && !rec.variantOf) {
              rec.variantOf = { baseSign, linguistic: el["@_linguistic"] || "unspecified" };
            }
          } else if (elName === "contains") {
            const partCode = el["@_partCode"];
            if (partCode && !rec.contains.includes(partCode)) rec.contains.push(partCode);
          }
        }
      }
    }
  }

  return signs;
}

async function main() {
  const xmlPath = path.join(__dirname, "../lib/data/signs_description.xml");
  const glyphsPath = path.join(__dirname, "../public/data/glyphs.json");

  if (!fs.existsSync(xmlPath)) {
    console.error(`signs_description.xml not found at ${xmlPath}`);
    process.exit(1);
  }

  console.log("Parsing JSesh signs_description.xml...");
  const jseshSigns = parseSignsXml(xmlPath);
  console.log(`Parsed ${jseshSigns.size} signs from JSesh`);

  console.log("Loading glyphs.json...");
  const glyphs: GlyphEntry[] = JSON.parse(fs.readFileSync(glyphsPath, "utf-8"));
  console.log(`Loaded ${glyphs.length} glyphs`);

  let tagsAdded = 0;
  let translitsAdded = 0;
  let typesAdded = 0;
  let matchedGlyphs = 0;

  for (const glyph of glyphs) {
    const jsesh = jseshSigns.get(glyph.code);
    if (!jsesh) continue;

    matchedGlyphs++;

    // Merge tags
    if (jsesh.tags.length > 0) {
      const existing = new Set<string>(glyph.tags || []);
      const before = existing.size;
      const TAG_TYPOS: Record<string, string> = { "olw": "owl" };
      for (const tag of jsesh.tags) existing.add(TAG_TYPOS[tag] ?? tag);
      glyph.tags = Array.from(existing);
      tagsAdded += existing.size - before;
    }

    // Merge contains (composite sign parts)
    if (jsesh.contains.length > 0) {
      (glyph as Record<string, unknown>).contains = jsesh.contains;
    }

    // Merge transliterations — only keyboard/palette ones, to avoid noise.
    // "informative" ones are scholar-only hints not suitable for display.
    const newTranslits = jsesh.transliterations
      .filter((t) => t.use !== "informative")
      .map((t) => t.value);

    for (const t of newTranslits) {
      const unicode = mdcToUnicode(t);
      if (!hasTransliteration(glyph.transliteration, unicode)) {
        glyph.transliteration.push(unicode);
        translitsAdded++;
      }
    }

    // Ensure type badges match JSesh type data.
    // If JSesh says a sign is a phonogram/ideogram but we have no
    // meaning of that type, add a minimal one.
    const TYPE_MAP: Record<string, string> = {
      phonogram: "phonogram",
      ideogram: "logogram",
      abbreviation: "logogram",
      typical: "other",
    };
    const existingTypes = new Set(glyph.meanings.map((m: { type: string }) => m.type));
    for (const t of jsesh.transliterations.filter((t) => t.use !== "informative")) {
      const mappedType = TYPE_MAP[t.type] ?? t.type;
      if (!existingTypes.has(mappedType)) {
        const unicode = mdcToUnicode(t.value).toLowerCase();
        const label = mappedType === "phonogram" ? "Phonogram" : "Logogram";
        glyph.meanings.push({
          text: `${label}: ${unicode}`,
          type: mappedType,
        });
        existingTypes.add(mappedType);
        typesAdded++;
      }
    }
  }

  console.log(`Matched ${matchedGlyphs} glyphs`);
  console.log(`Added tags to glyphs: ${tagsAdded} total new tags`);
  console.log(`Added ${translitsAdded} new transliterations`);
  console.log(`Added ${typesAdded} type badges from JSesh`);

  const withTags = glyphs.filter((g) => g.tags && (g.tags as string[]).length > 0).length;
  console.log(`Glyphs with tags: ${withTags} / ${glyphs.length}`);

  fs.writeFileSync(glyphsPath, JSON.stringify(glyphs, null, 2));
  console.log(`\nWrote updated glyphs.json`);
}

main().catch(console.error);
