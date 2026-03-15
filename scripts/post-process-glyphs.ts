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
  // Try to cut at a natural separator first
  let found = false;
  for (const sep of [", ", " — ", "; "]) {
    const idx = cut.lastIndexOf(sep);
    if (idx > 15) { cut = cut.slice(0, idx); found = true; break; }
  }
  // If no separator, cut at last space to avoid mid-word truncation
  if (!found) {
    const spaceIdx = cut.lastIndexOf(" ");
    if (spaceIdx > 15) cut = cut.slice(0, spaceIdx);
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
// Patterns: "Phonogram: Hr, Hrj" or "Logogram: KA — bull"
// Only convert the transliteration tokens (before " — "), not the English description.
let mdcInMeanings = 0;
const LABEL_RE = /^((?:Logogram|Phonogram|Phonetic|Determinative)[:\s]+)(.+?)(\s*—\s*.*)?$/;
const ENGLISH_MEANING_WORDS = new Set([
  "male", "female", "penis", "man", "woman", "sun", "moon", "time",
  "day", "boat", "house", "field", "water", "fire", "meat", "bread",
  "foreign", "peoples", "countries", "in", "council", "sky", "high",
  "gate", "strike", "force", "effort", "hide", "call", "dance",
  "turn", "praise", "death", "statue", "eat", "drink", "speech",
  "food", "pure", "clean", "strong", "sit", "lie", "guard", "protect",
]);
for (const g of glyphs) {
  for (const m of g.meanings) {
    const match = m.text.match(LABEL_RE);
    if (!match) continue;
    const [, label, translitPart, descPart] = match;
    // Convert each comma/space-separated token in the translit part
    const converted = translitPart.replace(/\b([A-Za-z.\-=]{1,12})\b/g, (token) => {
      if (ENGLISH_MEANING_WORDS.has(token.toLowerCase())) return token;
      if (!/[AHSTDX]/.test(token) && token === token.toLowerCase()) return token;
      if (/[ꜣꜥḥḫẖšṯḏ]/.test(token)) return token;
      const conv = mdcToUnicode(token).toLowerCase();
      return conv !== token.toLowerCase() ? conv : token;
    });
    const newText = label + converted + (descPart ?? "");
    if (newText !== m.text) {
      m.text = newText;
      mdcInMeanings++;
    }
  }
}
console.log(`  Converted MdC in meanings: ${mdcInMeanings}`);

// ── 4b. Fix MdC case mismatches in meaning labels ──────────────────────────
// St Andrews cap() turns lowercase MdC chars to uppercase, changing meaning:
//   x (ḫ) → X (ẖ), s (s) → S (š), t (t) → T (ṯ), d (d) → D (ḏ), a (ꜥ) → A (ꜣ)
// Fix by checking the glyph's actual transliteration and replacing the
// wrong uppercase Unicode form with the correct lowercase one.
const CASE_PAIRS: [string, string][] = [
  // [uppercase MdC unicode, lowercase MdC unicode]
  ["ẖ", "ḫ"],  // X vs x
  ["š", "s"],   // S vs s (only fix if translit has plain s, not š)
  ["ṯ", "t"],   // T vs t
  ["ḏ", "d"],   // D vs d
];
let caseMismatchFixed = 0;
for (const g of glyphs) {
  const allTranslit = g.transliteration.join(" ");
  for (const m of g.meanings) {
    // Only fix in Phonogram/Logogram label context
    if (!m.text.startsWith("Phonogram:") && !m.text.startsWith("Logogram:")) continue;
    let text = m.text;
    for (const [upper, lower] of CASE_PAIRS) {
      if (!text.includes(upper)) continue;
      // Extract the transliteration token from the label
      const labelMatch = text.match(/(?:Phonogram|Logogram):\s+(\S+)/);
      if (!labelMatch) continue;
      const token = labelMatch[1];
      if (!token.includes(upper)) continue;
      // Check if the glyph's transliteration uses the lowercase form
      const corrected = token.replace(new RegExp(upper, "g"), lower);
      if (allTranslit.includes(corrected) || allTranslit.includes(lower)) {
        text = text.replace(token, corrected);
      }
    }
    if (text !== m.text) {
      m.text = text;
      caseMismatchFixed++;
    }
  }
}
console.log(`  Fixed MdC case mismatches: ${caseMismatchFixed}`);

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
// Reverse MdC map for fixing corrupted English
const REVERSE_MDC: Record<string, string> = {
  "ꜥ": "a", "ḥ": "h", "ḫ": "x", "š": "s", "ṯ": "t", "ḏ": "d",
};
const MDC_CHAR_RE = /[ꜥḥḫšṯḏ]/;
// Fix corrupted English in meaning descriptions.
// Strategy: after the label prefix (Determinative/Logogram/etc.),
// reverse MdC chars that appear inside English words.
// English words contain regular vowels (e,i,o,u) mixed with MdC chars.
function fixCorruptedEnglish(text: string): string {
  let result = text;
  // First apply known explicit fixes
  for (const [bad, good] of ENGLISH_FIXES) {
    if (result.includes(bad)) {
      result = result.split(bad).join(good);
    }
  }
  // Then fix any remaining MdC chars in English-looking words.
  // An "English word" is a sequence of letters that contains both
  // regular Latin vowels AND MdC Unicode chars — pure MdC transliterations
  // don't mix with English vowels like 'e','o','u'.
  // Split on spaces/punctuation, fix each token that looks like corrupted English
  result = result.split(/(\s+|[,;:()""''".\-—/])/).map((token) => {
    if (!MDC_CHAR_RE.test(token)) return token; // no MdC chars, skip
    if (token.length < 2) return token;
    // If token contains English vowels (e,o,u,y), it's a corrupted English word
    if (/[eouy]/i.test(token)) {
      let fixed = token;
      for (const [uni, ascii] of Object.entries(REVERSE_MDC)) {
        fixed = fixed.split(uni).join(ascii);
      }
      return fixed;
    }
    return token;
  }).join("");
  return result;
}
for (const g of glyphs) {
  for (const m of g.meanings) {
    let text = fixCorruptedEnglish(m.text);
    // Fix missing space after commas
    text = text.replace(/,([a-zA-Z])/g, ", $1");
    // Re-capitalize meaning labels that got lowercased
    text = text.replace(/^(phonogram|logogram|determinative|phonetic)(\b)/i, (_, w, rest) =>
      w.charAt(0).toUpperCase() + w.slice(1) + rest
    );
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

// ── 7b. Split comma-separated transliterations ──────────────────────────────
let translitSplit = 0;
for (const g of glyphs) {
  const expanded: string[] = [];
  for (const t of g.transliteration) {
    if (t.includes(",")) {
      expanded.push(...t.split(",").map((s: string) => s.trim()).filter(Boolean));
      translitSplit++;
    } else {
      expanded.push(t);
    }
  }
  g.transliteration = expanded;
}
if (translitSplit > 0) console.log(`  Split comma-separated transliterations: ${translitSplit}`);

// ── 7c. Replace unsupported ꞽ (U+A7BD) with i͗ (i + combining stroke) ────────
let yodFixed = 0;
for (const g of glyphs) {
  g.transliteration = g.transliteration.map((t: string) => {
    if (t.includes("ꞽ")) {
      yodFixed++;
      return t.replace(/ꞽ/g, "i͗");
    }
    return t;
  });
}
if (yodFixed > 0) console.log(`  Replaced ꞽ→i͗ in transliterations: ${yodFixed}`);

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

// ── 12b. Fix truncated variant descriptions ──────────────────────────────────
// Descriptions like "Variant of A23 (king with staff and)" have a dangling preposition
// because the parent signName was truncated. Drop the truncated parenthetical.
let varDescFixed = 0;
for (const g of glyphs) {
  if (!g.description) continue;
  const m = g.description.match(/^(Variant of [A-Za-z0-9]+) \(.*\b(with|on|of|and|from|in)\)$/);
  if (m) {
    g.description = m[1];
    varDescFixed++;
  }
}
if (varDescFixed > 0) console.log(`  Fixed truncated variant descriptions: ${varDescFixed}`);

// ── 12c. Normalize transliteration hyphens to dots ──────────────────────────
// Egyptological convention uses dots to separate morphemes, not hyphens.
let translitFixed = 0;
for (const g of glyphs) {
  for (let i = 0; i < g.transliteration.length; i++) {
    const t = g.transliteration[i];
    if (t.includes("-")) {
      g.transliteration[i] = t.replace(/-/g, ".").replace(/\.{2,}/g, ".").replace(/^\.|\.$/g, "");
      translitFixed++;
    }
  }
}
console.log(`  Normalized transliteration hyphens: ${translitFixed}`);

// ── 12d. Link independent-number variants into parent's related array ────────
// Extended Gardiner signs like B10 ("Variant of B1") have independent numbers
// instead of letter suffixes (B1A). Add them to the parent's `related` array
// so they show as variants on the parent's glyph page.
let variantLinks = 0;
for (const g of glyphs) {
  if (!g.description) continue;
  const m = g.description.match(/^Variant of ([A-Za-z]+\d+[A-Za-z]*)/);
  if (!m) continue;
  const parentCode = m[1];
  // Skip if this glyph IS a letter-suffix variant (already linked by convention)
  const codeParts = g.code.match(/^([A-Za-z]+)(\d+)([A-Za-z]*)$/);
  if (codeParts && codeParts[3]) continue; // has letter suffix, already handled
  const parent = codeMap.get(parentCode);
  if (!parent) continue;
  if (!parent.related.includes(g.code)) {
    parent.related.push(g.code);
    variantLinks++;
  }
}
console.log(`  Linked independent-number variants to parents: ${variantLinks}`);

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
