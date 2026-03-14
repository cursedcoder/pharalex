import * as fs from "fs";
import * as path from "path";
import { mdcToUnicode, hasTransliteration } from "./translit-utils";

interface UniKemetEntry {
  codepoint: string;
  unicode: string;
  catalog?: string;
  core?: string;
  description?: string;
  function?: string;
  phonetic?: string;
  jsesh?: string;
  hieroglyphica?: string;
  unikemet?: string;
  ifao?: string;
}

interface ProcessedGlyph {
  code: string;
  unicode: string;
  category: string;
  categoryName: string;
  description: string;
  meanings: Array<{
    text: string;
    type: "logogram" | "phonogram" | "determinative" | "other";
    period?: string;
  }>;
  transliteration: string[];
  etymology?: string;
  related: string[];
  source: "wiktionary" | "unicode" | "both";
}

const GARDINER_CATEGORIES: Record<string, string> = {
  A: "Man and his occupations",
  B: "Woman and her occupations",
  C: "Anthropomorphic deities",
  D: "Parts of the human body",
  E: "Mammals",
  F: "Parts of mammals",
  G: "Birds",
  H: "Parts of birds",
  I: "Amphibious animals, reptiles, etc.",
  K: "Fish and parts of fish",
  L: "Invertebrates and lesser animals",
  M: "Trees and plants",
  N: "Sky, earth, water",
  O: "Buildings, parts of buildings, etc.",
  P: "Ships and parts of ships",
  Q: "Domestic and funerary furniture",
  R: "Temple furniture and sacred emblems",
  S: "Crowns, dress, staves, etc.",
  T: "Warfare, hunting, butchery",
  U: "Agriculture, crafts, and professions",
  V: "Rope, fibre, baskets, bags, etc.",
  W: "Vessels of stone and earthenware",
  X: "Loaves and cakes",
  Y: "Writings, games, music",
  Z: "Strokes, geometrical figures, etc.",
  Aa: "Unclassified",
  NL: "Numbers and fractions",
  NU: "Supplementary signs",
};

function parseUnikemet(filePath: string): Map<string, UniKemetEntry> {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const entries = new Map<string, UniKemetEntry>();

  for (const line of lines) {
    if (line.startsWith("#") || !line.trim()) continue;

    const parts = line.split("\t");
    if (parts.length < 3) continue;

    const [codepoint, tag, value] = parts;

    if (!entries.has(codepoint)) {
      const cp = parseInt(codepoint.replace("U+", ""), 16);
      entries.set(codepoint, {
        codepoint,
        unicode: String.fromCodePoint(cp),
      });
    }

    const entry = entries.get(codepoint)!;

    switch (tag) {
      case "kEH_Cat":
        entry.catalog = value;
        break;
      case "kEH_Core":
        entry.core = value;
        break;
      case "kEH_Desc":
        entry.description = value;
        break;
      case "kEH_Func":
        entry.function = value;
        break;
      case "kEH_FVal":
        entry.phonetic = value;
        break;
      case "kEH_JSesh":
        entry.jsesh = value;
        break;
      case "kEH_HG":
        entry.hieroglyphica = value;
        break;
      case "kEH_UniK":
        entry.unikemet = value;
        break;
      case "kEH_IFAO":
        entry.ifao = value;
        break;
    }
  }

  return entries;
}

function extractCategory(
  jsesh: string | undefined,
  catalog: string | undefined
): { id: string; name: string } {
  if (jsesh) {
    const match = jsesh.match(/^([A-Z][a-z]?)/);
    if (match && GARDINER_CATEGORIES[match[1]]) {
      return { id: match[1], name: GARDINER_CATEGORIES[match[1]] };
    }
  }

  if (catalog) {
    const match = catalog.match(/^([A-Z][a-z]?)-/);
    if (match && GARDINER_CATEGORIES[match[1]]) {
      return { id: match[1], name: GARDINER_CATEGORIES[match[1]] };
    }
  }

  return { id: "Aa", name: "Unclassified" };
}

function extractMeaningType(
  func: string | undefined
): "logogram" | "phonogram" | "determinative" | "other" {
  if (!func) return "other";
  const lower = func.toLowerCase();
  if (lower.includes("logogram")) return "logogram";
  if (lower.includes("phonogram")) return "phonogram";
  if (lower.includes("classifier") || lower.includes("determinative"))
    return "determinative";
  return "other";
}

/**
 * Normalize a UniK code to standard Gardiner format:
 *   - Strip "HJ " prefix
 *   - Strip leading zeros: A001F → A1F, R003AJ → R3AJ
 */
function normalizeUniKCode(raw: string): string {
  let code = raw.replace(/^HJ\s+/, "");
  const m = code.match(/^([A-Z][a-z]?)0*(\d+)(.*)$/);
  return m ? `${m[1]}${m[2]}${m[3]}` : code;
}

function convertToGlyph(entry: UniKemetEntry): ProcessedGlyph {
  const category = extractCategory(entry.jsesh, entry.catalog);
  const code = entry.jsesh
    || entry.hieroglyphica
    || (entry.unikemet ? normalizeUniKCode(entry.unikemet) : null)
    || entry.codepoint;

  const meanings: ProcessedGlyph["meanings"] = [];

  // Filter noise meanings from Unikemet kEH_Func
  const NOISE_FUNCTIONS = new Set(["Phonemogram"]);

  if (entry.function && !NOISE_FUNCTIONS.has(entry.function)) {
    meanings.push({
      text: entry.function,
      type: extractMeaningType(entry.function),
    });
  }

  if (entry.description && entry.description !== entry.function) {
    meanings.push({
      text: entry.description,
      type: "other",
    });
  }

  const transliteration: string[] = [];
  if (entry.phonetic) {
    transliteration.push(entry.phonetic);
  }

  return {
    code,
    unicode: entry.unicode,
    category: category.id,
    categoryName: category.name,
    description: entry.description || "",
    meanings,
    transliteration,
    related: [],
    source: "unicode",
  };
}

async function main() {
  const unikemetPath = path.join(__dirname, "../lib/data/unikemet.txt");
  const existingGlyphsPath = path.join(__dirname, "../public/data/glyphs.json");
  const outputPath = path.join(__dirname, "../public/data/glyphs.json");

  console.log("Parsing Unikemet data...");
  const unikemetEntries = parseUnikemet(unikemetPath);
  console.log(`Found ${unikemetEntries.size} entries in Unikemet`);

  console.log("Loading existing Wiktionary glyphs...");
  const existingGlyphs: ProcessedGlyph[] = JSON.parse(
    fs.readFileSync(existingGlyphsPath, "utf-8")
  );
  console.log(`Found ${existingGlyphs.length} existing glyphs`);

  const existingByUnicode = new Map<string, ProcessedGlyph>();
  const existingByCode = new Map<string, ProcessedGlyph>();
  for (const glyph of existingGlyphs) {
    existingByUnicode.set(glyph.unicode, glyph);
    existingByCode.set(glyph.code.toLowerCase(), glyph);
    (glyph as ProcessedGlyph).source = "wiktionary";
  }

  console.log("Merging datasets...");
  let newCount = 0;
  let mergedCount = 0;

  for (const entry of unikemetEntries.values()) {
    if (entry.core !== "C") continue;

    const newGlyph = convertToGlyph(entry);

    const existingByU = existingByUnicode.get(newGlyph.unicode);
    const existingByC = existingByCode.get(newGlyph.code.toLowerCase());
    const existing = existingByU || existingByC;

    if (existing) {
      existing.source = "both";

      if (!existing.description && newGlyph.description) {
        existing.description = newGlyph.description;
      }

      for (const meaning of newGlyph.meanings) {
        const isDuplicate = existing.meanings.some(
          (m) => m.text.toLowerCase() === meaning.text.toLowerCase()
        );
        if (!isDuplicate) {
          existing.meanings.push(meaning);
        }
      }

      for (const trans of newGlyph.transliteration) {
        const unicode = mdcToUnicode(trans);
        if (!hasTransliteration(existing.transliteration, unicode)) {
          existing.transliteration.push(unicode);
        }
      }

      mergedCount++;
    } else {
      existingGlyphs.push(newGlyph);
      existingByUnicode.set(newGlyph.unicode, newGlyph);
      existingByCode.set(newGlyph.code.toLowerCase(), newGlyph);
      newCount++;
    }
  }

  console.log(`Merged ${mergedCount} entries, added ${newCount} new glyphs`);

  const sortedGlyphs = existingGlyphs.sort((a, b) => {
    const catOrder =
      Object.keys(GARDINER_CATEGORIES).indexOf(a.category) -
      Object.keys(GARDINER_CATEGORIES).indexOf(b.category);
    if (catOrder !== 0) return catOrder;

    const codeA = a.code.replace(/[A-Za-z]/g, "");
    const codeB = b.code.replace(/[A-Za-z]/g, "");
    const numA = parseInt(codeA) || 0;
    const numB = parseInt(codeB) || 0;
    return numA - numB;
  });

  console.log("Finding related glyphs...");
  for (const glyph of sortedGlyphs) {
    const related: string[] = [];
    for (const other of sortedGlyphs) {
      if (other.code === glyph.code) continue;
      if (other.category === glyph.category && related.length < 5) {
        related.push(other.code);
      }
    }
    glyph.related = related;
  }

  fs.writeFileSync(outputPath, JSON.stringify(sortedGlyphs, null, 2));
  console.log(`\nWrote ${sortedGlyphs.length} glyphs to ${outputPath}`);

  const stats = {
    totalGlyphs: sortedGlyphs.length,
    fromWiktionary: sortedGlyphs.filter((g) => g.source === "wiktionary").length,
    fromUnicode: sortedGlyphs.filter((g) => g.source === "unicode").length,
    merged: sortedGlyphs.filter((g) => g.source === "both").length,
    byCategory: {} as Record<string, number>,
  };

  for (const glyph of sortedGlyphs) {
    stats.byCategory[glyph.category] =
      (stats.byCategory[glyph.category] || 0) + 1;
  }

  console.log("\nStatistics:");
  console.log(JSON.stringify(stats, null, 2));
}

main().catch(console.error);
