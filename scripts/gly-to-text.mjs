/**
 * .gly to pharalex text format converter
 *
 * Usage:
 *   node scripts/gly-to-text.mjs scripts/source/mask-tutankhamun.gly
 *
 * Outputs TypeScript `TextLine[]` with MdC tokens extracted from the .gly.
 * Transliteration, translation, and grammar are left as empty strings —
 * fill them in manually.
 */

import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(process.argv[2]);
const raw = readFileSync(filePath, "utf-8");
const srcLines = raw.split("\n");

const textLines = [];

for (let line of srcLines) {
  line = line.trim();

  if (!line || line.startsWith("++") || line.startsWith("+") || line === "!") continue;

  // Strip page formatting codes (PF5- etc)
  line = line.replace(/^PF\d+-/, "");

  // Extract line number |N-
  const numMatch = line.match(/^\|(\d+)-/);
  if (!numMatch) continue;
  const lineNum = parseInt(numMatch[1], 10);
  line = line.slice(numMatch[0].length);

  // Strip trailing line break markers
  line = line.replace(/-?!+$/, "");

  // Strip isolated null signs (. between operators or at boundaries)
  line = line.replace(/(^|[-:*_])\.([-:*_]|$)/g, "$1$2");

  // Strip size modifiers \nn
  line = line.replace(/\\[0-9]+/g, "");

  // Strip $r/$b ink markers
  line = line.replace(/\$[rb]/g, "");

  // Split on _ (one or more) to get word tokens
  const rawTokens = line.split(/_+/);
  const tokens = rawTokens
    .map((t) => t.replace(/^-+|-+$/g, "").trim())
    .filter(Boolean);

  if (tokens.length === 0) continue;

  textLines.push({ number: lineNum, tokens });
}

// Output TypeScript
console.log("lines: [");
for (const tl of textLines) {
  console.log("  {");
  console.log(`    number: ${tl.number},`);
  console.log("    tokens: [");
  for (const mdc of tl.tokens) {
    console.log(`      { mdc: "${mdc}", transliteration: "", translation: "", grammar: "" },`);
  }
  console.log("    ],");
  console.log(`    lineTranslation: "",`);
  console.log("  },");
}
console.log("],");
