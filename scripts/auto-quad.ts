/**
 * Auto-quadding: enriches flat MdC strings (A-B-C-D) with vertical stacking
 * (:) and horizontal juxtaposition (*) operators based on a learned index
 * of quad patterns extracted from real JSesh .gly texts.
 *
 * The index (public/data/quad-index.json) maps Gardiner code pairs to their
 * observed frequency in authored texts. A pair is grouped only if it appears
 * in the index — no guessing from geometry.
 *
 * Usage: import { autoQuad } from "./auto-quad";
 *        autoQuad("M17-Q3-X1-Z5-W24") => "M17-Q3:X1-Z5:W24"
 */

import * as fs from "fs";
import * as path from "path";

interface QuadIndex {
  vert: Record<string, number>;  // "A,B" → count for A:B
  horiz: Record<string, number>; // "A,B" → count for A*B
}

let _index: QuadIndex | null = null;

function loadIndex(): QuadIndex {
  if (_index) return _index;
  const indexPath = path.join(process.cwd(), "public/data/quad-index.json");
  if (!fs.existsSync(indexPath)) {
    console.warn("quad-index.json not found — auto-quad disabled");
    _index = { vert: {}, horiz: {} };
    return _index;
  }
  _index = JSON.parse(fs.readFileSync(indexPath, "utf-8")) as QuadIndex;
  return _index;
}

function vertScore(a: string, b: string): number {
  const idx = loadIndex();
  return idx.vert[`${a},${b}`] ?? 0;
}

function horizScore(a: string, b: string): number {
  const idx = loadIndex();
  return idx.horiz[`${a},${b}`] ?? 0;
}

export function autoQuad(mdc: string): string {
  // Only process flat sequences (all dashes, no existing grouping)
  if (mdc.includes(":") || mdc.includes("*") || mdc.includes("&") ||
      mdc.includes("<") || mdc.includes("[") || mdc.includes("(")) {
    return mdc;
  }

  const codes = mdc.split("-");
  if (codes.length <= 1) return mdc;

  // Build output: greedily form quadrats using the learned index
  const quadrats: string[] = [];
  let i = 0;

  while (i < codes.length) {
    const a = codes[i];

    if (i + 1 >= codes.length) {
      quadrats.push(a);
      i++;
      continue;
    }

    const b = codes[i + 1];
    const c = i + 2 < codes.length ? codes[i + 2] : null;

    const vAB = vertScore(a, b);
    const hAB = horizScore(a, b);

    // Lookahead: would B pair better with C?
    const vBC = c ? vertScore(b, c) : 0;
    const hBC = c ? horizScore(b, c) : 0;
    const bcBest = Math.max(vBC, hBC);
    const abBest = Math.max(vAB, hAB);
    const bPairsBetterWithC = bcBest > abBest;

    // Also check: if we take A:B, does C end up orphaned (no pair with D)?
    // If so, and B:C is attested, prefer A alone + B:C.
    const d = i + 3 < codes.length ? codes[i + 3] : null;
    const cOrphaned = c && !d ? true
      : c && d ? (vertScore(c, d) === 0 && horizScore(c, d) === 0) : false;
    const preferBCOverAB = bcBest > 0 && cOrphaned && abBest > 0;

    // If B pairs better forward, or B:C saves C from being orphaned
    if (bPairsBetterWithC || preferBCOverAB) {
      quadrats.push(a);
      i++;
      continue;
    }

    // Try vertical stacking A:B
    if (vAB > 0 && vAB >= hAB) {
      // Check for triple stack: A:B:C — only if B:C is comparably frequent
      // to A:B (at least half). Otherwise the triple is likely two separate
      // quadrats that share a common sign (e.g. G17:D36 is common in mꜥ words
      // but G17:D36:V31 doesn't exist — it should be G17:D36-V31).
      if (c) {
        const vBC_triple = vertScore(b, c);
        if (vBC_triple > 0 && vBC_triple * 2 >= vAB) {
          quadrats.push(`${a}:${b}:${c}`);
          i += 3;
          continue;
        }
      }
      quadrats.push(`${a}:${b}`);
      i += 2;
      continue;
    }

    // Try horizontal juxtaposition A*B
    if (hAB > 0) {
      // Check if we can stack something under the pair: (A*B):C
      // Require a strong signal (>= 5 occurrences) to avoid noise
      const STACK_UNDER_MIN = 5;
      if (c) {
        const vAC = vertScore(a, c);
        const vBC_under = vertScore(b, c);
        if (vAC >= STACK_UNDER_MIN || vBC_under >= STACK_UNDER_MIN) {
          quadrats.push(`(${a}*${b}):${c}`);
          i += 3;
          continue;
        }
      }
      quadrats.push(`${a}*${b}`);
      i += 2;
      continue;
    }

    // No pattern found — emit sign alone
    quadrats.push(a);
    i++;
  }

  return quadrats.join("-");
}

// CLI: test with examples
if (require.main === module) {
  const examples = [
    "M17-Q3-X1-Z5-W24",   // ipt
    "G1-Q3-X1-Z5-W24",    // ipt
    "G43-S29-D21",         // wsr
    "M17-M17-D54",         // ii — should NOT quad (no pattern in index)
    "M18-G1-M17-M17-Z4-D54", // ii to pass
    "D21-X1-Z1",           // rt
    "N35-N35-N35",         // nnn
    "G1-D21-Q3-X1",        // arpt
    "A1-B1-Z2",            // people
    "F35-D21-X1",          // nfr-r-t
    "N5-Z1",               // ra
    "R8-X1-Z1",            // nTrt
    "S29-N29-D21-X1",      // snrt
    "G17-D21-Y1-A1",       // mry
    "M17-Y1-Z2",           // plurals
  ];

  for (const ex of examples) {
    const result = autoQuad(ex);
    const changed = result !== ex ? " ✓" : "";
    console.log(`${ex.padEnd(40)} → ${result}${changed}`);
  }
}
