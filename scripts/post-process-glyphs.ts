/**
 * Post-processing pass on glyphs.json after all source scripts have run.
 * Applies fixes that span multiple sources or require the full dataset.
 *
 * Run after: process-data → process-unikemet → process-jsesh → process-standrews
 * Run before: build-search-index
 *
 * Usage: npx tsx scripts/post-process-glyphs.ts
 */

import * as fs from "fs";
import * as path from "path";
import { XMLParser } from "fast-xml-parser";
import { fixTypos } from "./typo-fixes";
import { deduplicateTransliterations } from "./translit-utils";

interface Glyph {
  code: string;
  unicode: string;
  category: string;
  categoryName: string;
  description: string;
  signName?: string;
  transliterationCounts?: Record<string, number>;
  meanings: Array<{ text: string; type: string; period?: string }>;
  transliteration: string[];
  tags?: string[];
  related: string[];
  source?: string;
}

const GLYPHS_PATH = path.join(process.cwd(), "public/data/glyphs.json");
const WORDS_PATH = path.join(process.cwd(), "public/data/words.json");
const ST_ANDREWS_DESCR = path.join(process.cwd(), "lib/data/standrews-descriptions.xml");
const JSESH_XML = path.join(process.cwd(), "lib/data/signs_description.xml");
const TLA_FILES = [
  path.join(process.cwd(), "lib/data/tla-earlier-egyptian.jsonl"),
  path.join(process.cwd(), "lib/data/tla-late-egyptian.jsonl"),
];

const TYPE_ORDER: Record<string, number> = {
  phonogram: 0, logogram: 1, determinative: 2, other: 3,
};

const MDC: Record<string, string> = {
  A: "ꜣ", a: "ꜥ", H: "ḥ", x: "ḫ", X: "ẖ", S: "š", T: "ṯ", D: "ḏ",
};

function mdcToUnicode(s: string): string {
  return [...s].map((c) => MDC[c] ?? c).join("");
}

function normalizeForDedup(s: string): string {
  return mdcToUnicode(s).replace(/\./g, "").toLowerCase();
}

console.log("Post-processing glyphs.json...");
const glyphs: Glyph[] = JSON.parse(fs.readFileSync(GLYPHS_PATH, "utf-8"));
console.log(`  Loaded ${glyphs.length} glyphs`);

// ── 0. Normalize Ff/J code prefixes ─────────────────────────────────────────
// Ff codes (JSesh font-specific) are variants of F codes: Ff4 → F4A (if F4A free)
// J codes are JSesh alternatives for Aa: J1 → Aa1A (if Aa1A free)
// We just add a variantOf-style description so they group properly
const existingCodes = new Set(glyphs.map((g) => g.code));
let codeNormalized = 0;
for (const g of glyphs) {
  if (g.code.startsWith("Ff") && !g.description) {
    // Ff4 is a variant of F4 (same sign, different font rendering)
    const base = g.code.replace(/^Ff/, "F");
    if (existingCodes.has(base)) {
      g.description = `Variant of ${base}`;
      codeNormalized++;
    }
  }
  if (/^J\d/.test(g.code) && !g.description) {
    // J1 is a variant of Aa1
    const base = g.code.replace(/^J/, "Aa");
    if (existingCodes.has(base)) {
      g.description = `Variant of ${base}`;
      codeNormalized++;
    }
  }
}
console.log(`  Normalized Ff/J codes: ${codeNormalized}`);

// ── 1. Sort meanings by type ────────────────────────────────────────────────
let meaningsSorted = 0;
for (const g of glyphs) {
  const sorted = [...g.meanings].sort(
    (a, b) => (TYPE_ORDER[a.type] ?? 3) - (TYPE_ORDER[b.type] ?? 3)
  );
  if (JSON.stringify(sorted) !== JSON.stringify(g.meanings)) {
    g.meanings = sorted;
    meaningsSorted++;
  }
}
console.log(`  Sorted meanings: ${meaningsSorted}`);

// ── 2. Remove description-duplicate meanings ────────────────────────────────
let descDeduped = 0;
for (const g of glyphs) {
  const desc = (g.description || "").trim().toLowerCase().replace(/\.$/, "");
  if (!desc) continue;
  const before = g.meanings.length;
  g.meanings = g.meanings.filter(
    (m) => m.text.trim().toLowerCase().replace(/\.$/, "") !== desc
  );
  if (g.meanings.length < before) descDeduped++;
}
console.log(`  Removed description-duplicate meanings: ${descDeduped}`);

// ── 3. Remove noise and backslash meanings ──────────────────────────────────
const NOISE_MEANINGS = new Set(["Phonemogram", "Phono-repeater", "Phonorepeater"]);
let noiseRemoved = 0;
for (const g of glyphs) {
  const before = g.meanings.length;
  g.meanings = g.meanings.filter(
    (m) => !m.text.startsWith("\\") && !NOISE_MEANINGS.has(m.text.trim())
  );
  if (g.meanings.length < before) noiseRemoved++;
}
console.log(`  Removed noise/backslash meanings: ${noiseRemoved}`);

// ── 3b. Remove duplicate meanings ───────────────────────────────────────────
let dupeMeanings = 0;
for (const g of glyphs) {
  const seen = new Set<string>();
  const before = g.meanings.length;
  g.meanings = g.meanings.filter((m) => {
    const key = m.text.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  if (g.meanings.length < before) dupeMeanings++;
}
console.log(`  Removed duplicate meanings: ${dupeMeanings}`);

// ── 3c. Truncate long signNames ─────────────────────────────────────────────
let signNamesTruncLong = 0;
for (const g of glyphs) {
  const sn = g.signName ?? "";
  if (sn.length <= 55) continue;
  let cut = sn.slice(0, 55);
  for (const sep of [", ", " — ", "; "]) {
    const idx = cut.lastIndexOf(sep);
    if (idx > 15) { cut = cut.slice(0, idx); break; }
  }
  g.signName = cut.trim();
  signNamesTruncLong++;
}
console.log(`  Truncated long signNames: ${signNamesTruncLong}`);

// ── 3d. Clean broken var references in descriptions ─────────────────────────
// Patterns like "(S53vara?)" from Unikemet source
let varRefsCleaned = 0;
for (const g of glyphs) {
  if (!g.description) continue;
  const cleaned = g.description.replace(/\([A-Z][a-z]?\d+var[a-z]\?\)/g, "").replace(/\s{2,}/g, " ").trim();
  if (cleaned !== g.description) {
    g.description = cleaned;
    varRefsCleaned++;
  }
}
console.log(`  Cleaned broken var references: ${varRefsCleaned}`);

// ── 4. Convert MdC in meaning label transliterations ────────────────────────
// Only convert the short token right after labels like "Logogram: KA"
let mdcInMeanings = 0;
const LABEL_RE = /^((?:Logogram|Phonogram|Phonetic|Determinative)[:\s]+)([A-Za-z.\-=]{1,12})\b/;
for (const g of glyphs) {
  for (const m of g.meanings) {
    const match = m.text.match(LABEL_RE);
    if (match) {
      const [, label, token] = match;
      // Skip if token looks like an English word (all lowercase, common words)
      const ENGLISH_WORDS = new Set([
        "male", "female", "penis", "man", "woman", "sun", "moon", "time",
        "day", "boat", "house", "field", "water", "fire", "meat", "bread",
        "foreign", "peoples", "countries", "in", "council",
      ]);
      if (ENGLISH_WORDS.has(token.toLowerCase())) continue;
      // Only convert if token contains MdC uppercase (A,H,S,T,D,X) or is short
      if (!/[AHSTDX]/.test(token) && token === token.toLowerCase()) continue;
      const converted = mdcToUnicode(token).toLowerCase();
      const newText = m.text.replace(LABEL_RE, label + converted);
      if (newText !== m.text) {
        m.text = newText;
        mdcInMeanings++;
      }
    }
  }
}
console.log(`  Converted MdC in meanings: ${mdcInMeanings}`);

// ── 4b. Fix ẖ/ḫ mismatch in Phonogram labels ──────────────────────────────
// St Andrews cap() turned x→X, then MdC converted X→ẖ, but the sign's
// actual value is ḫ (from x). Fix by checking against transliteration.
let voicedFixed = 0;
for (const g of glyphs) {
  const hasKh = g.transliteration.some((t: string) => t.includes("ḫ"));
  if (!hasKh) continue;
  for (const m of g.meanings) {
    if (m.text.includes("ẖ")) {
      const fixed = m.text.replace(/ẖ/g, "ḫ");
      if (fixed !== m.text) {
        m.text = fixed;
        voicedFixed++;
      }
    }
  }
}
console.log(`  Fixed ẖ→ḫ mismatch: ${voicedFixed}`);

// ── 5. Fix MdC corruption in English words within meanings ──────────────────
// MdC conversion can corrupt English: "determinative" → "determinꜥtive",
// "stairway" → "stꜥirwꜥy". Fix known corrupted English words.
const ENGLISH_FIXES: [string, string][] = [
  ["determinꜥtive", "determinative"],
  ["purificꜥtion", "purification"],
  ["stꜥirwꜥy", "stairway"],
  ["weꜥver", "weaver"],
  ["collꜥr", "collar"],
  ["humꜥn", "human"],
  ["dꜥncing", "dancing"],
  ["dꜥnce", "dance"],
  ["sꜥiling", "sailing"],
  ["supplicꜥtion", "supplication"],
  ["ꜥrmy", "army"],
  ["deꜥth", "death"],
  ["stꜥtue", "statue"],
  ["ꜥdorꜥtion", "adoration"],
  ["eꜥting", "eating"],
];
let englishFixed = 0;
for (const g of glyphs) {
  for (const m of g.meanings) {
    let text = m.text;
    for (const [bad, good] of ENGLISH_FIXES) {
      if (text.includes(bad)) {
        text = text.split(bad).join(good);
      }
    }
    // Also fix Classifier prefix meanings generically
    if (m.text.startsWith("Classifier")) {
      const REVERSE_MDC: Record<string, string> = { "ꜥ": "a", "ḥ": "h", "ḫ": "kh", "š": "sh", "ṯ": "tj", "ḏ": "dj" };
      for (const [uni, ascii] of Object.entries(REVERSE_MDC)) {
        text = text.split(uni).join(ascii);
      }
    }
    if (text !== m.text) {
      m.text = text;
      englishFixed++;
    }
  }
}
console.log(`  Fixed English corruption: ${englishFixed}`);

// ── 6. Convert ^ name markers ───────────────────────────────────────────────
let caretFixed = 0;
for (const g of glyphs) {
  g.transliteration = g.transliteration.map((t) => {
    if (!t.includes("^")) return t;
    caretFixed++;
    return t.replace(/\^([a-zꜣꜥḥḫẖšṯḏ])/g, (_, c: string) => c.toUpperCase()).replace(/\^/g, "");
  });
  for (const m of g.meanings) {
    if (m.text.includes("^")) {
      m.text = m.text
        .replace(/\^([a-zꜣꜥḥḫẖšṯḏ])/g, (_, c: string) => c.toUpperCase())
        .replace(/\^/g, "");
    }
  }
}
console.log(`  Converted ^ name markers: ${caretFixed}`);

// ── 7. Typo fixes in meanings and descriptions ──────────────────────────────
let typosFixed = 0;
for (const g of glyphs) {
  const newDesc = fixTypos(g.description);
  if (newDesc !== g.description) { g.description = newDesc; typosFixed++; }
  for (const m of g.meanings) {
    const newText = fixTypos(m.text);
    if (newText !== m.text) { m.text = newText; typosFixed++; }
  }
}
console.log(`  Fixed typos: ${typosFixed}`);

// ── 8. Final transliteration dedup ──────────────────────────────────────────
let translitDeduped = 0;
for (const g of glyphs) {
  const deduped = deduplicateTransliterations(g.transliteration);
  // Also strip exact dupes post-dedup
  const seen = new Set<string>();
  const unique = deduped.filter((t) => {
    if (seen.has(t)) return false;
    seen.add(t);
    return true;
  });
  if (unique.length < g.transliteration.length) {
    g.transliteration = unique;
    translitDeduped++;
  }
}
console.log(`  Deduped transliterations: ${translitDeduped}`);

// ── 9. Add signName from St Andrews ─────────────────────────────────────────
let signNamesAdded = 0;
if (fs.existsSync(ST_ANDREWS_DESCR)) {
  const { ElementTree } = (() => {
    const xml = fs.readFileSync(ST_ANDREWS_DESCR, "utf-8");
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });
    return { ElementTree: parser.parse(xml) };
  })();

  const names = new Map<string, string>();
  for (const sign of ElementTree?.signlist?.sign ?? []) {
    const id = sign["@_id"];
    const descr = sign?.descr;
    if (id && descr && typeof descr === "string") {
      names.set(id.toLowerCase(), descr.trim());
    }
  }

  for (const g of glyphs) {
    if (g.signName) continue;
    const name = names.get(g.code.toLowerCase());
    if (name) {
      g.signName = name;
      signNamesAdded++;
    }
  }
}
console.log(`  Added signNames from St Andrews: ${signNamesAdded}`);

// ── 10. Inherit signName from parent ────────────────────────────────────────
let signNamesInherited = 0;
const codeMap = new Map(glyphs.map((g) => [g.code, g]));
for (const g of glyphs) {
  if (g.signName) continue;
  const m = g.code.match(/^([A-Z][a-z]?\d+)[A-Z]/);
  if (!m) continue;
  const parent = codeMap.get(m[1]);
  if (parent?.signName) {
    g.signName = parent.signName;
    signNamesInherited++;
  }
}
console.log(`  Inherited signNames: ${signNamesInherited}`);

// ── 11. Fix truncated signNames ─────────────────────────────────────────────
let signNamesTruncated = 0;
for (const g of glyphs) {
  if (!g.signName) continue;
  if (/\b(with|on|of|and|from|in)\s*$/.test(g.signName)) {
    if (g.description && g.description.length > g.signName.length) {
      let name = g.description.slice(0, 60);
      for (const cut of [",", ";", ".", " —"]) {
        const idx = name.lastIndexOf(cut);
        if (idx > 15) { name = name.slice(0, idx); break; }
      }
      g.signName = name.trim();
    } else {
      g.signName = "";
    }
    signNamesTruncated++;
  }
}
console.log(`  Fixed truncated signNames: ${signNamesTruncated}`);

// ── 12. Variant descriptions from JSesh ─────────────────────────────────────
let variantDescs = 0;
if (fs.existsSync(JSESH_XML)) {
  const jseshXml = fs.readFileSync(JSESH_XML, "utf-8");
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });
  const jseshDoc = parser.parse(jseshXml);

  const variants = new Map<string, string>();
  for (const sign of jseshDoc?.jseshsigns?.sign ?? []) {
    const code = sign["@_sign"];
    const vo = Array.isArray(sign.variantOf) ? sign.variantOf : sign.variantOf ? [sign.variantOf] : [];
    for (const v of vo) {
      if (v["@_baseSign"]) variants.set(code, v["@_baseSign"]);
    }
  }

  for (const g of glyphs) {
    if (g.description) continue;
    const base = variants.get(g.code);
    if (!base) continue;
    const baseGlyph = codeMap.get(base);
    if (baseGlyph?.signName) {
      g.description = `Variant of ${base} (${baseGlyph.signName})`;
    } else {
      g.description = `Variant of ${base}`;
    }
    variantDescs++;
  }
}
console.log(`  Added variant descriptions: ${variantDescs}`);

// ── 13. Transliteration frequency ranking (TLA corpus) ──────────────────────
let ranked = 0;
const translitFreq = new Map<string, number>();
for (const tlaFile of TLA_FILES) {
  if (!fs.existsSync(tlaFile)) continue;
  for (const line of fs.readFileSync(tlaFile, "utf-8").split("\n")) {
    if (!line.trim()) continue;
    try {
      const entry = JSON.parse(line);
      for (const token of (entry.transliteration || "").split(/\s+/)) {
        const t = token.replace(/^[(\[]|[)\]]$/g, "");
        if (t && t.length < 20) {
          translitFreq.set(t, (translitFreq.get(t) || 0) + 1);
        }
      }
    } catch { /* skip malformed */ }
  }
}

if (translitFreq.size > 0) {
  const MEANING_TRANSLIT_RE = /(?:phonogram|logogram|phonetic)\s*(?:phonogram\s+(?:for\s+)?)?[:\s]+(\S+)/i;

  for (const g of glyphs) {
    if (g.transliteration.length <= 1) continue;

    const scores = g.transliteration.map((t) => {
      const tl = t.toLowerCase();
      let freq = (translitFreq.get(t) || 0) + (translitFreq.get(tl) || 0);

      // Meaning-type boost
      for (const m of g.meanings) {
        const mt = MEANING_TRANSLIT_RE.exec(m.text)?.[1]?.replace(/[""(),]/g, "").toLowerCase();
        if (mt && (mt === tl || mt.replace(/\./g, "") === tl)) {
          const boost = m.type === "phonogram" ? 50 : m.type === "logogram" ? 25 : 5;
          freq += boost;
        }
      }
      return { t, freq };
    });

    if (scores.every((s) => s.freq === 0)) continue;

    const sorted = [...scores].sort((a, b) => b.freq - a.freq);
    const newOrder = sorted.map((s) => s.t);
    if (JSON.stringify(newOrder) !== JSON.stringify(g.transliteration)) {
      g.transliteration = newOrder;
      ranked++;
    }
  }
}
console.log(`  Ranked by TLA frequency: ${ranked}`);

// ── 14. Compute transliterationCounts from words.json ───────────────────────
let countsAdded = 0;
if (fs.existsSync(WORDS_PATH)) {
  const words = JSON.parse(fs.readFileSync(WORDS_PATH, "utf-8"));
  const codeWordCounts = new Map<string, Map<string, number>>();

  for (const w of words) {
    const tl = (w.transliteration || "").toLowerCase();
    for (const code of w.gardinerCodes || []) {
      if (!codeWordCounts.has(code)) codeWordCounts.set(code, new Map());
      const m = codeWordCounts.get(code)!;
      m.set(tl, (m.get(tl) || 0) + 1);
    }
  }

  for (const g of glyphs) {
    const counter = codeWordCounts.get(g.code);
    if (!counter) continue;
    const counts: Record<string, number> = {};
    for (const t of g.transliteration) {
      const exact = counter.get(t.toLowerCase()) || 0;
      let prefix = 0;
      if (t.length >= 3) {
        for (const [w, c] of counter) {
          if (w.startsWith(t.toLowerCase()) && w !== t.toLowerCase()) prefix += c;
        }
      }
      const total = exact + prefix;
      if (total > 0) counts[t] = total;
    }
    if (Object.keys(counts).length > 0) {
      g.transliterationCounts = counts;
      countsAdded++;
    }
  }
}
console.log(`  Added transliterationCounts: ${countsAdded}`);

// ── Write output ────────────────────────────────────────────────────────────
fs.writeFileSync(GLYPHS_PATH, JSON.stringify(glyphs, null, 2));
console.log(`\nWrote ${glyphs.length} glyphs to ${GLYPHS_PATH}`);
