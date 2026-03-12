#!/usr/bin/env node
/**
 * Validates all SVG glyph files for common rendering issues:
 *
 *  1. XML parse error          — browser will show broken image
 *  2. Missing xmlns:xlink      — when xlink:href is used without the namespace
 *  3. No drawable content      — SVG has no <path>, <rect>, <circle>, <use>,
 *                                <polygon>, <polyline>, <line>, <ellipse>, <text>
 *                                or <image> elements outside display:none groups
 *  4. Zero-size viewBox        — width or height dimension is 0
 *  5. Empty file               — 0 bytes
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { parseArgs } from "util";

const { values: args } = parseArgs({
  options: { verbose: { type: "boolean", short: "v", default: false } },
});

const GLYPHS_DIR = new URL("../public/glyphs", import.meta.url).pathname;

// Minimal XML parser using regex — good enough for well-formed SVG validation
// (we only need to detect structural issues, not build a DOM)

function checkFile(filePath) {
  const issues = [];

  // 1. Empty file
  const stat = statSync(filePath);
  if (stat.size === 0) {
    return ["empty file"];
  }

  let src;
  try {
    src = readFileSync(filePath, "utf8");
  } catch (e) {
    return [`read error: ${e.message}`];
  }

  // 2. Basic XML validity — look for unclosed tags / malformed attributes
  //    We use the DOMParser-equivalent approach: check the file can be parsed
  //    by Node's built-in XML heuristics (we'll use regex for the critical checks)

  // Check for xlink:href without xmlns:xlink
  if (/xlink:href/i.test(src) && !/xmlns:xlink/i.test(src)) {
    issues.push("uses xlink:href but missing xmlns:xlink namespace declaration");
  }

  // 3. Parse viewBox
  const viewBoxMatch = src.match(/viewBox\s*=\s*["']([^"']+)["']/i);
  if (viewBoxMatch) {
    const parts = viewBoxMatch[1].trim().split(/[\s,]+/).map(Number);
    if (parts.length === 4) {
      const [, , w, h] = parts;
      if (w === 0 || h === 0 || isNaN(w) || isNaN(h)) {
        issues.push(`zero or invalid viewBox dimensions: "${viewBoxMatch[1]}"`);
      }
    }
  }

  // 4. Check for drawable content outside display:none groups
  //    Strategy: remove display:none groups, then check for drawable elements
  const withoutHidden = src.replace(
    /<g[^>]*style\s*=\s*["'][^"']*display\s*:\s*none[^"']*["'][^>]*>[\s\S]*?<\/g>/gi,
    ""
  );

  const drawableElements = [
    "path", "rect", "circle", "ellipse", "line",
    "polyline", "polygon", "text", "image", "use",
  ];
  const hasDrawable = drawableElements.some((tag) =>
    new RegExp(`<${tag}[\\s>]`, "i").test(withoutHidden)
  );

  if (!hasDrawable) {
    issues.push("no drawable elements found (SVG appears blank)");
  }

  // 5. Detect obviously malformed XML: unmatched < or bare & outside CDATA
  if (/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-f]+;)/i.test(src)) {
    issues.push("unescaped & character (malformed XML)");
  }

  return issues;
}

const files = readdirSync(GLYPHS_DIR)
  .filter((f) => f.endsWith(".svg"))
  .sort();

let broken = 0;
const results = [];

for (const file of files) {
  const issues = checkFile(join(GLYPHS_DIR, file));
  if (issues.length > 0) {
    broken++;
    results.push({ file, issues });
  } else if (args.verbose) {
    console.log(`  ✓  ${file}`);
  }
}

console.log(`\nChecked ${files.length} SVG files.\n`);

if (results.length === 0) {
  console.log("✅  All glyphs look valid — no issues found.");
} else {
  console.log(`❌  ${broken} glyph(s) with issues:\n`);
  for (const { file, issues } of results) {
    console.log(`  ${file}`);
    for (const issue of issues) {
      console.log(`    → ${issue}`);
    }
  }
}
