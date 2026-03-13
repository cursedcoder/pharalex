/**
 * Compute insertion zones for hieroglyphic signs.
 *
 * An insertion zone describes a rectangular area INSIDE a sign's silhouette
 * where a smaller sign can be placed (e.g., a stroke under an owl).
 *
 * Two-phase approach:
 *   1. Seed from HieroJax's insertion data (converted from Unicode → Gardiner,
 *      from normalized 0–1 fractions → our ~18-unit coordinate system).
 *   2. For any Gardiner sign not covered by the seed data, run the silhouette
 *      binary-search probe adapted from compute-ligature-zones.mjs.
 *
 * Output: lib/insertion-zones.ts
 *
 * Each entry: { x, y, w, h } in the ~18-unit system (same as ligature-zones.ts).
 *   x, y = top-left corner of the insertion rectangle
 *   w, h = dimensions of the insertion rectangle
 *
 * Only one insertion zone per sign is emitted (the primary / most useful one).
 */

import canvas from "canvas";
const { createCanvas, loadImage } = canvas;
import { readFileSync, readdirSync, writeFileSync } from "fs";
import { join, basename } from "path";

const GLYPH_DIR = join(import.meta.dirname, "..", "public", "glyphs");
const OUT_FILE = join(import.meta.dirname, "..", "lib", "insertion-zones.ts");

// HieroJax insertion data path (seeding)
const HIEROJAX_INSERTIONS = "/tmp/hierojax/src/insertions.js";
const HIEROJAX_NAMES = "/tmp/hierojax/src/mdcnamesunikemet.js";

const CANVAS_RES = 180;
const MARGIN = 1;

// ─── Helpers shared with compute-ligature-zones.mjs ───────────────────────────

function extractViewBox(svgText) {
  const vbMatch = svgText.match(/viewBox=["']([^"']+)["']/);
  if (vbMatch) {
    const parts = vbMatch[1].trim().split(/\s+/).map(Number);
    return { x: parts[0], y: parts[1], w: parts[2], h: parts[3] };
  }
  const wMatch = svgText.match(/width=["']([\d.]+)/);
  const hMatch = svgText.match(/height=["']([\d.]+)/);
  if (!wMatch || !hMatch) return null;
  return { x: 0, y: 0, w: parseFloat(wMatch[1]), h: parseFloat(hMatch[1]) };
}

function normalizeSize(vbW, vbH) {
  const scale = vbH > 60 ? 0.01 : 1;
  return { w: vbW * scale, h: vbH * scale };
}

async function rasterizeSvg(svgText, vb) {
  const { w: normW, h: normH } = normalizeSize(vb.w, vb.h);
  const cw = Math.ceil(CANVAS_RES * (normW / 18));
  const ch = Math.ceil(CANVAS_RES * (normH / 18));
  if (cw < 1 || ch < 1 || cw > 2000 || ch > 2000) return null;

  let modSvg = svgText
    .replace(/fill:\s*currentColor/g, "fill:black")
    .replace(/<svg\b/, `<svg width="${cw}" height="${ch}"`);

  const buf = Buffer.from(modSvg, "utf-8");
  const img = await loadImage(buf);
  const c = createCanvas(cw, ch);
  const ctx = c.getContext("2d");
  ctx.drawImage(img, 0, 0, cw, ch);
  const imageData = ctx.getImageData(0, 0, cw, ch);
  const data = imageData.data;
  const grid = new Uint8Array(cw * ch);
  for (let i = 0; i < cw * ch; i++) {
    grid[i] = data[i * 4 + 3] > 30 ? 1 : 0;
  }
  return { grid, cw, ch, normW, normH };
}

function rectClearOfSign({ grid, cw, ch, normW, normH }, rx, ry, rw, rh) {
  const toPixX = (x) => Math.round((x / normW) * (cw - 1));
  const toPixY = (y) => Math.round((y / normH) * (ch - 1));
  let px0 = Math.max(0, toPixX(rx - MARGIN));
  let py0 = Math.max(0, toPixY(ry - MARGIN));
  let px1 = Math.min(cw - 1, toPixX(rx + rw + MARGIN));
  let py1 = Math.min(ch - 1, toPixY(ry + rh + MARGIN));
  for (let py = py0; py <= py1; py++) {
    for (let px = px0; px <= px1; px++) {
      if (grid[py * cw + px]) return false;
    }
  }
  return true;
}

function round(v) {
  return Math.round(v * 10) / 10;
}

// ─── Phase 1: Parse HieroJax seed data ────────────────────────────────────────

function buildReverseMap() {
  const namesContent = readFileSync(HIEROJAX_NAMES, "utf-8");
  const rev = new Map();
  // Match: 'A1': { str: '\u{13000}', kind: 'literal' }
  const re = /'([A-Z][0-9A-Za-z]+)':\s*\{\s*str:\s*'\\u\{([0-9A-Fa-f]+)\}'/g;
  let m;
  while ((m = re.exec(namesContent)) !== null) {
    rev.set(parseInt(m[2], 16), m[1]);
  }
  return rev;
}

/**
 * Convert HieroJax fractional anchor point (0–1) and position name to a
 * rectangle in our ~18-unit coordinate system.
 *
 * HieroJax stores an anchor POINT (x, y as fractions of the sign bounding box)
 * from which the inserted sign is placed. We derive a rectangle by:
 *   - For 'ts'/'te'/'bs'/'be': a corner-anchored rect of ~30% sign width/height
 *   - For 't'/'b': top/bottom-centred strip
 *   - For 'm': centred rect
 */
function toInsertionRect(pos, adj, signW, signH) {
  // Default anchor fractions
  let ax = pos === "te" || pos === "be" ? 1 : pos === "t" || pos === "b" || pos === "m" ? 0.5 : 0;
  let ay = pos === "bs" || pos === "be" || pos === "b" ? 1 : pos === "t" || pos === "ts" || pos === "te" ? 0 : 0.5;

  if (adj && "x" in adj) ax = adj.x;
  if (adj && "y" in adj) ay = adj.y;

  // Insertion zone is ~30% of sign dimensions, clamped to sign bounds
  const zw = round(Math.max(2, signW * 0.35));
  const zh = round(Math.max(2, signH * 0.35));

  let x = round(ax * signW - (ax >= 0.5 ? zw : 0));
  let y = round(ay * signH - (ay >= 0.5 ? zh : 0));

  // Clamp inside sign
  x = Math.max(0, Math.min(x, signW - zw));
  y = Math.max(0, Math.min(y, signH - zh));

  return { x: round(x), y: round(y), w: zw, h: zh };
}

function parseSeedData(reverseMap) {
  const insContent = readFileSync(HIEROJAX_INSERTIONS, "utf-8");

  // Pick the primary (first non-glyph-override) insertion from each sign entry
  // Format: \u{CODEPOINT}: [{ ts: {}, bs: { y: 0.6 }, ... }, ...]
  const zones = new Map(); // gardiner code → { x, y, w, h }

  const signRe = /\\u\{([0-9A-Fa-f]+)\}:\s*\[([^\]]+)\]/g;
  let m;
  while ((m = signRe.exec(insContent)) !== null) {
    const cp = parseInt(m[1], 16);
    const gardiner = reverseMap.get(cp);
    if (!gardiner) continue;

    const entryStr = m[2];
    // Find the first alt entry: { ... } — but nested braces means we can't use [^}]+
    // Instead extract the outer object up to the first }, balancing inner braces
    let depth = 0, start = -1, end = -1;
    for (let i = 0; i < entryStr.length; i++) {
      if (entryStr[i] === "{") {
        if (depth === 0) start = i;
        depth++;
      } else if (entryStr[i] === "}") {
        depth--;
        if (depth === 0) { end = i; break; }
      }
    }
    if (start < 0 || end < 0) continue;
    const objStr = entryStr.slice(start + 1, end); // inner content

    // Skip if this entry has a 'glyph:' override
    if (objStr.includes("glyph:")) continue;

    // Parse position keys in the outer object
    // Keys look like: ts: { }, bs: { y: 0.6 }, m: { x: 0.3 }
    const POSITIONS = ["ts", "te", "bs", "be", "t", "b", "m"];
    let pos = null;
    let adj = {};

    const posRe = /\b(ts|te|bs|be|t|b|m)\s*:\s*\{([^}]*)\}/g;
    let pk;
    while ((pk = posRe.exec(objStr)) !== null) {
      if (!POSITIONS.includes(pk[1])) continue;
      if (!pos) {
        pos = pk[1];
        // Parse adjustment values inside the inner { }
        const innerStr = pk[2];
        const kvRe = /\b([xy])\s*:\s*([\d.]+)/g;
        let kv;
        while ((kv = kvRe.exec(innerStr)) !== null) {
          adj[kv[1]] = parseFloat(kv[2]);
        }
      }
    }

    if (!pos) continue;
    zones.set(gardiner, { pos, adj });
  }

  return zones;
}

// ─── Phase 2: Silhouette probe for signs not in seed data ─────────────────────

/**
 * For a rasterized sign, find the largest clear rectangle at the given
 * corner/center position using binary search.
 *
 * Returns { x, y, w, h } in normalized sign units, or null if no clear area.
 */
function probeInsertionZone(raster, signW, signH, pos) {
  const { normW, normH } = raster;

  // Target anchor fraction
  let ax, ay;
  switch (pos) {
    case "ts": ax = 0;   ay = 0;   break;
    case "te": ax = 1;   ay = 0;   break;
    case "bs": ax = 0;   ay = 1;   break;
    case "be": ax = 1;   ay = 1;   break;
    case "t":  ax = 0.5; ay = 0;   break;
    case "b":  ax = 0.5; ay = 1;   break;
    case "m":  ax = 0.5; ay = 0.5; break;
    default: return null;
  }

  const maxW = signW * 0.45;
  const maxH = signH * 0.45;
  const minW = signW * 0.15;
  const minH = signH * 0.15;

  // Binary search: grow the zone from zero until it hits the sign silhouette
  let lo = 0, hi = 1;
  for (let iter = 0; iter < 20; iter++) {
    const t = (lo + hi) / 2;
    const zw = maxW * t;
    const zh = maxH * t;
    const zx = Math.max(0, Math.min(ax * signW - (ax >= 0.5 ? zw / 2 : ax === 1 ? zw : 0), signW - zw));
    const zy = Math.max(0, Math.min(ay * signH - (ay >= 0.5 ? zh / 2 : ay === 1 ? zh : 0), signH - zh));
    if (rectClearOfSign(raster, zx, zy, zw, zh)) {
      lo = t;
    } else {
      hi = t;
    }
  }

  const t = lo;
  const zw = maxW * t;
  const zh = maxH * t;
  if (zw < minW || zh < minH) return null;

  const zx = Math.max(0, Math.min(ax * signW - (ax >= 0.5 ? zw / 2 : ax === 1 ? zw : 0), signW - zw));
  const zy = Math.max(0, Math.min(ay * signH - (zh >= 0.5 ? zh / 2 : ay === 1 ? zh : 0), signH - zh));
  return { x: round(zx), y: round(zy), w: round(zw), h: round(zh) };
}

// ─── Main ──────────────────────────────────────────────────────────────────────

console.log("Building reverse map from HieroJax names...");
const reverseMap = buildReverseMap();
console.log(`  ${reverseMap.size} codepoint → Gardiner entries`);

console.log("Parsing HieroJax seed insertion data...");
const seedRaw = parseSeedData(reverseMap);
console.log(`  ${seedRaw.size} seeded signs`);

const files = readdirSync(GLYPH_DIR).filter((f) => f.endsWith(".svg"));
console.log(`Processing ${files.length} glyphs...`);

const zones = {};
let fromSeed = 0;
let fromProbe = 0;
let errors = 0;
let processed = 0;

for (const file of files) {
  const code = basename(file, ".svg");
  try {
    const svgText = readFileSync(join(GLYPH_DIR, file), "utf-8");
    const vb = extractViewBox(svgText);
    if (!vb) continue;

    const { w: signW, h: signH } = normalizeSize(vb.w, vb.h);

    if (seedRaw.has(code)) {
      // Use seed data — convert fraction anchor → rectangle using sign dimensions
      const { pos, adj } = seedRaw.get(code);
      const rect = toInsertionRect(pos, adj, signW, signH);
      zones[code] = rect;
      fromSeed++;
    } else {
      // Silhouette probe: try bs, ts, be positions (most common)
      const raster = await rasterizeSvg(svgText, vb);
      if (!raster) continue;

      for (const pos of ["bs", "ts", "be", "m"]) {
        const rect = probeInsertionZone(raster, signW, signH, pos);
        if (rect) {
          zones[code] = rect;
          fromProbe++;
          break;
        }
      }
    }

    processed++;
    if (processed % 1000 === 0) console.log(`  ${processed}/${files.length}...`);
  } catch (e) {
    errors++;
    if (errors <= 5) console.error(`Error on ${code}:`, e.message);
  }
}

console.log(`Done: ${processed} processed, ${fromSeed} from seed, ${fromProbe} from probe, ${errors} errors.`);
console.log(`Total zones: ${Object.keys(zones).length}`);

// ─── Output ────────────────────────────────────────────────────────────────────

const entries = Object.entries(zones).sort(([a], [b]) =>
  a.localeCompare(b, undefined, { numeric: true })
);

function zoneToStr(z) {
  return `{x:${z.x},y:${z.y},w:${z.w},h:${z.h}}`;
}

let ts = `/**
 * Pre-computed insertion zones for hieroglyphic signs.
 * Generated by scripts/compute-insertion-zones.mjs — do not edit manually.
 *
 * Each entry describes a rectangle inside the sign's silhouette where a
 * smaller inserted sign can be placed (e.g., a stroke under an owl).
 *
 * Fields: x, y, w, h in normalized font units (~18-unit system, same as
 * glyph-metrics.ts and ligature-zones.ts).
 *
 * Seeded from HieroJax insertion data (CC-BY, nederhof.github.io/hierojax)
 * then extended via SVG silhouette probing for the remaining PharaLex corpus.
 */

export type InsertionZone = { x: number; y: number; w: number; h: number };

const Z: Record<string, InsertionZone> = {\n`;

for (const [code, z] of entries) {
  ts += `  "${code}":${zoneToStr(z)},\n`;
}

ts += `};

export function getInsertionZone(code: string): InsertionZone | null {
  return Z[code] ?? null;
}
`;

writeFileSync(OUT_FILE, ts, "utf-8");
console.log(`Written to ${OUT_FILE}`);
