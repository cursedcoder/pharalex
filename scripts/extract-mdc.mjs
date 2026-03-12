/**
 * .gly to plain MdC extractor
 *
 * Usage:
 *   node scripts/extract-mdc.mjs path/to/file.gly
 *
 * Outputs a flat list of quadrats (one per line) that you can then manually
 * group into word tokens and paste into lib/data/texts.ts.
 */

import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(process.argv[2]);
const raw = readFileSync(filePath, "utf-8");

const lines = raw.split("\n");

const quadrats = [];

for (let line of lines) {
  line = line.trim();

  // Skip metadata, rich-text, empty
  if (!line) continue;
  if (line.startsWith("++")) continue;
  if (line.startsWith("+b") || line.startsWith("+l") || line.startsWith("+i")) continue;
  if (line === "!") continue;

  // Strip line labels: |1- or |§ 1- or |3,1-
  line = line.replace(/^\|[^-]*-/, "");

  // Strip section labels inside lines: +b(...) +s-
  line = line.replace(/\+b[^+]*\+s-/g, "");
  line = line.replace(/\+s-/g, "");
  line = line.replace(/\+s/g, "");

  // Strip $r/$b ink markers
  line = line.replace(/\$[rb]/g, "");

  // Strip position overrides {{x,y,z}} and manual positioning **token
  line = line.replace(/\{\{[^}]*\}\}/g, "");
  line = line.replace(/\*\*[A-Za-z0-9_]+/g, "");

  // Strip size modifiers \nn
  line = line.replace(/\\[0-9]+/g, "");

  // Strip superscript insertions ^ (keep what follows as a sign)
  line = line.replace(/\^/g, "");

  line = line.replace(/&&&/g, "*");
  line = line.replace(/&/g, "*");

  // Replace lost sign // with ?
  line = line.replace(/\/\//g, "?");

  // Strip null signs . when isolated (not part of a code like A.)
  // A period between operators or at start/end is a null spacer
  line = line.replace(/(^|[-:*_])\.([-:*_!]|$)/g, "$1$2");

  // Strip ! end markers
  line = line.replace(/!+$/g, "");

  // Strip page formatting codes at start (PF5 etc)
  line = line.replace(/^PF[0-9]+-/, "");

  // Split on _ (word/phrase boundaries) to get tokens
  const tokens = line.split("_").map((t) => t.trim()).filter(Boolean);

  for (const token of tokens) {
    // Skip pure punctuation/annotation tokens
    if (!token || token === "-" || token === "!" || /^[+|]/.test(token)) continue;
    // Strip leading/trailing -
    const clean = token.replace(/^-+|-+$/g, "").trim();
    if (clean) quadrats.push(clean);
  }
}

for (const q of quadrats) {
  console.log(q);
}
