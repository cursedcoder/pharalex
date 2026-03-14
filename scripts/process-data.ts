import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import { deduplicateTransliterations } from "./translit-utils";

interface WiktionarySense {
  glosses?: string[];
  raw_glosses?: string[];
  tags?: string[];
  links?: [string, string][];
  attestations?: Array<{ date: string; references: unknown[] }>;
}

interface WiktionaryEntry {
  word: string;
  pos: string;
  lang: string;
  lang_code: string;
  senses: WiktionarySense[];
  etymology_text?: string;
  head_templates?: Array<{
    name: string;
    args: Record<string, string>;
    expansion: string;
  }>;
  forms?: Array<{ form: string; tags?: string[] }>;
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
};

function extractGardinerCode(entry: WiktionaryEntry): string | null {
  if (entry.head_templates) {
    for (const template of entry.head_templates) {
      if (template.args?.head) {
        const match = template.args.head.match(
          /<hiero>([A-Z][a-z]?\d+[a-z]?)<\/hiero>/
        );
        if (match) {
          return match[1];
        }
      }
    }
  }
  for (const form of entry.forms || []) {
    const match = form.form.match(/^([A-Z][a-z]?\d+[a-z]?)$/);
    if (match && form.tags?.includes("canonical")) {
      return match[1];
    }
  }
  return null;
}

function extractCategory(code: string): { id: string; name: string } {
  const match = code.match(/^([A-Z][a-z]?)/);
  if (match) {
    const categoryId = match[1];
    return {
      id: categoryId,
      name: GARDINER_CATEGORIES[categoryId] || "Unknown",
    };
  }
  return { id: "Aa", name: "Unclassified" };
}

function extractMeaningType(
  gloss: string
): "logogram" | "phonogram" | "determinative" | "other" {
  const lower = gloss.toLowerCase();
  if (lower.includes("logogram")) return "logogram";
  if (lower.includes("phonogram")) return "phonogram";
  if (lower.includes("determinative")) return "determinative";
  return "other";
}

function extractPeriod(tags?: string[]): string | undefined {
  if (!tags) return undefined;
  for (const tag of tags) {
    if (
      tag.includes("Egyptian") &&
      (tag.includes("Old") ||
        tag.includes("Middle") ||
        tag.includes("Late") ||
        tag.includes("New"))
    ) {
      return tag.replace(/-/g, " ");
    }
  }
  return undefined;
}

function extractTransliterations(entry: WiktionaryEntry): string[] {
  const translits = new Set<string>();
  if (entry.head_templates) {
    for (const template of entry.head_templates) {
      if (template.args?.tr && template.args.tr !== "-") {
        translits.add(template.args.tr);
      }
    }
  }
  for (const sense of entry.senses) {
    for (const link of sense.links || []) {
      if (link[0] && !link[0].includes(" ") && link[0].length < 10) {
        translits.add(link[0].replace(/[()]/g, ""));
      }
    }
  }
  return Array.from(translits);
}

async function processWiktionaryData(): Promise<Map<string, ProcessedGlyph>> {
  const glyphs = new Map<string, ProcessedGlyph>();
  const filePath = path.join(__dirname, "../lib/data/wiktionary-egyptian.jsonl");

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    try {
      const entry: WiktionaryEntry = JSON.parse(line);
      if (entry.pos !== "symbol") continue;

      const gardinerCode = extractGardinerCode(entry);
      if (!gardinerCode) continue;

      const category = extractCategory(gardinerCode);
      const meanings: ProcessedGlyph["meanings"] = [];

      for (const sense of entry.senses) {
        const glossText = sense.glosses?.[0] || sense.raw_glosses?.[0];
        if (!glossText) continue;

        meanings.push({
          text: glossText,
          type: extractMeaningType(glossText),
          period: extractPeriod(sense.tags),
        });
      }

      const glyph: ProcessedGlyph = {
        code: gardinerCode,
        unicode: entry.word,
        category: category.id,
        categoryName: category.name,
        description: entry.etymology_text || "",
        meanings,
        transliteration: deduplicateTransliterations(extractTransliterations(entry)),
        etymology: entry.etymology_text,
        related: [],
      };

      glyphs.set(gardinerCode, glyph);
    } catch {
      // Skip malformed lines
    }
  }

  return glyphs;
}

function findRelatedGlyphs(
  glyphs: Map<string, ProcessedGlyph>
): Map<string, ProcessedGlyph> {
  const glyphArray = Array.from(glyphs.values());

  for (const glyph of glyphArray) {
    const related: string[] = [];

    for (const other of glyphArray) {
      if (other.code === glyph.code) continue;
      if (other.category === glyph.category && related.length < 5) {
        related.push(other.code);
      }
    }
    glyph.related = related.slice(0, 5);
  }

  return glyphs;
}

async function main() {
  console.log("Processing Wiktionary data...");
  let glyphs = await processWiktionaryData();
  console.log(`Found ${glyphs.size} hieroglyph symbols`);

  console.log("Finding related glyphs...");
  glyphs = findRelatedGlyphs(glyphs);

  const glyphArray = Array.from(glyphs.values()).sort((a, b) => {
    const catOrder =
      Object.keys(GARDINER_CATEGORIES).indexOf(a.category) -
      Object.keys(GARDINER_CATEGORIES).indexOf(b.category);
    if (catOrder !== 0) return catOrder;
    const numA = parseInt(a.code.replace(/[A-Za-z]/g, "")) || 0;
    const numB = parseInt(b.code.replace(/[A-Za-z]/g, "")) || 0;
    return numA - numB;
  });

  const outputPath = path.join(__dirname, "../public/data/glyphs.json");
  fs.writeFileSync(outputPath, JSON.stringify(glyphArray, null, 2));
  console.log(`Wrote ${glyphArray.length} glyphs to ${outputPath}`);

  const categoriesPath = path.join(__dirname, "../public/data/categories.json");
  fs.writeFileSync(
    categoriesPath,
    JSON.stringify(GARDINER_CATEGORIES, null, 2)
  );
  console.log(`Wrote categories to ${categoriesPath}`);

  const stats = {
    totalGlyphs: glyphArray.length,
    byCategory: {} as Record<string, number>,
    byType: { logogram: 0, phonogram: 0, determinative: 0, other: 0 },
  };

  for (const glyph of glyphArray) {
    stats.byCategory[glyph.category] =
      (stats.byCategory[glyph.category] || 0) + 1;
    for (const meaning of glyph.meanings) {
      stats.byType[meaning.type]++;
    }
  }

  console.log("\nStatistics:");
  console.log(JSON.stringify(stats, null, 2));
}

main().catch(console.error);
