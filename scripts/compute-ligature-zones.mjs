/**
 * Compute ligature zones for all glyphs.
 *
 * Determines 3 zones per sign by rasterizing the SVG and performing
 * binary-search-based rectangle intersection tests against the silhouette:
 *   Zone 0 ("before") — left side
 *   Zone 1 ("after")  — right side, top-aligned
 *   Zone 2 ("bottom") — lower area, bottom-aligned
 *
 * For the &&& (LIGAFTER) operator, zone 2 is preferred, falling back to zone 1.
 *
 * Output: lib/ligature-zones.ts with zone data for every sign that has valid zones.
 */

import canvas from "canvas";
const { createCanvas, loadImage } = canvas;
import { readFileSync, readdirSync, writeFileSync } from "fs";
import { join, basename } from "path";

const GLYPH_DIR = join(import.meta.dirname, "..", "public", "glyphs");
const OUT_FILE = join(import.meta.dirname, "..", "lib", "ligature-zones.ts");

const MARGIN = 1;
const MAXHEIGHT = 18;
const CANVAS_RES = 180; // resolution for rasterization

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

/**
 * Rasterize an SVG into a boolean grid in normalized sign coordinates.
 */
async function rasterizeSvg(svgText, vb) {
  const { w: normW, h: normH } = normalizeSize(vb.w, vb.h);

  const cw = Math.ceil(CANVAS_RES * (normW / 18));
  const ch = Math.ceil(CANVAS_RES * (normH / 18));
  if (cw < 1 || ch < 1 || cw > 2000 || ch > 2000) return null;

  // Ensure SVG has explicit width/height for librsvg
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

function rectIntersectsSign({ grid, cw, ch, normW, normH }, rx, ry, rw, rh) {
  const toPixX = (x) => Math.round((x / normW) * (cw - 1));
  const toPixY = (y) => Math.round((y / normH) * (ch - 1));

  let px0 = toPixX(rx - MARGIN);
  let py0 = toPixY(ry - MARGIN);
  let px1 = toPixX(rx + rw + MARGIN);
  let py1 = toPixY(ry + rh + MARGIN);

  px0 = Math.max(0, px0);
  py0 = Math.max(0, py0);
  px1 = Math.min(cw - 1, px1);
  py1 = Math.min(ch - 1, py1);

  for (let py = py0; py <= py1; py++) {
    for (let px = px0; px <= px1; px++) {
      if (grid[py * cw + px]) return true;
    }
  }
  return false;
}

function computePosition(outer, inner, t) {
  return {
    x: outer.x + t * (inner.x - outer.x),
    y: outer.y + t * (inner.y - outer.y),
  };
}

function findBestZonePosition(raster, outer, inner, width, height) {
  let innerT = 1;
  let outerT = 0;
  while (Math.abs(innerT - outerT) > 0.01) {
    const middleT = (innerT + outerT) / 2;
    const p = computePosition(outer, inner, middleT);
    let minx = p.x - MARGIN;
    let miny = p.y - MARGIN;
    if (width < 0) minx += width;
    if (height < 0) miny += height;
    const rw = Math.abs(width) + 2 * MARGIN;
    const rh = Math.abs(height) + 2 * MARGIN;
    if (rectIntersectsSign(raster, minx, miny, rw, rh)) {
      innerT = middleT;
    } else {
      outerT = middleT;
    }
  }
  return outerT;
}

function computeZone2(raster, signW, signH) {
  let outer = { x: signW / 2, y: signH };
  const inner = { x: signW, y: 0 };

  let t = findBestZonePosition(raster, outer, inner, -signW, signH);
  if (t > 0.2) {
    const p = computePosition(outer, inner, t);
    return { x: 0, y: round(p.y), w: round(p.x), h: round(MAXHEIGHT - p.y + 1), vg: "B", hg: "C" };
  }

  outer = { x: 0, y: signH };
  t = findBestZonePosition(raster, outer, inner, -signW, signH);
  if (t > 0.2) {
    const p = computePosition(outer, inner, t);
    return { x: 0, y: round(p.y), w: round(p.x), h: round(MAXHEIGHT - p.y + 1), vg: "B", hg: "C" };
  }
  return null;
}

function computeZone1(raster, signW, signH) {
  const width = signW / 2;
  let height = signH / 2.5;
  const outer = { x: signW, y: 0 };
  const inner = { x: signW / 2, y: 0 };

  let t = findBestZonePosition(raster, outer, inner, width, height);
  if (t < 0.2) {
    height = signH / 3;
    t = findBestZonePosition(raster, outer, inner, width, height);
    if (t < 0.1) return null;
  }
  const p = computePosition(outer, inner, t);
  return { x: round(p.x), y: round(p.y), w: round(width), h: round(height), vg: "T", hg: "S" };
}

function computeZone0(raster, signW, signH) {
  const y = 0.5 * signH;
  let height = signH / 3;
  let width = signW / 2;
  const outer = { x: -width, y };
  const inner = { x: 0, y };

  let t = findBestZonePosition(raster, outer, inner, width, height);
  if (t < 0.2) {
    height = signH / 4;
    width = signW / 4;
    t = findBestZonePosition(raster, outer, inner, width, height);
    if (t < 0.1) return null;
  }
  const p = computePosition(outer, inner, t);
  return { x: round(p.x), y: round(p.y), w: round(width), h: round(height), vg: "C", hg: "E" };
}

function round(v) {
  return Math.round(v * 10) / 10;
}

// ─── Main ──────────────────────────────────────────────────────────────
const files = readdirSync(GLYPH_DIR).filter((f) => f.endsWith(".svg"));
console.log(`Processing ${files.length} glyphs...`);

const zones = {};
let processed = 0;
let withZones = 0;
let errors = 0;

for (const file of files) {
  const code = basename(file, ".svg");
  try {
    const svgText = readFileSync(join(GLYPH_DIR, file), "utf-8");
    const vb = extractViewBox(svgText);
    if (!vb) continue;

    const raster = await rasterizeSvg(svgText, vb);
    if (!raster) continue;

    const { normW, normH } = raster;

    const z0 = computeZone0(raster, normW, normH);
    const z1 = computeZone1(raster, normW, normH);
    const z2 = computeZone2(raster, normW, normH);

    if (z0 || z1 || z2) {
      zones[code] = [z0, z1, z2];
      withZones++;
    }
    processed++;
    if (processed % 500 === 0) console.log(`  ${processed}/${files.length}...`);
  } catch (e) {
    errors++;
    if (errors <= 5) console.error(`Error on ${code}:`, e.message);
  }
}

console.log(`Done: ${processed} processed, ${withZones} with zones, ${errors} errors.`);

// Generate TypeScript output
const zoneEntries = Object.entries(zones)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));

function zoneToStr(z) {
  if (!z) return "null";
  return `{x:${z.x},y:${z.y},w:${z.w},h:${z.h},vg:"${z.vg}",hg:"${z.hg}"}`;
}

let ts = `/**
 * Pre-computed ligature zones for hieroglyphic signs.
 * Generated by scripts/compute-ligature-zones.mjs — do not edit manually.
 *
 * Each sign has up to 3 zones:
 *   [0] "before" — left side (used by ^^^ operator)
 *   [1] "after"  — right side (fallback for &&& operator)
 *   [2] "bottom" — lower area (preferred for &&& operator)
 *
 * Zone fields: x, y, w, h (in normalized font units, ~18-unit system),
 *   vg = vertical gravity ("T"=top, "C"=center, "B"=bottom),
 *   hg = horizontal gravity ("S"=start, "C"=center, "E"=end)
 */

export type LigZone = { x: number; y: number; w: number; h: number; vg: "T" | "C" | "B"; hg: "S" | "C" | "E" } | null;

const Z: Record<string, [LigZone, LigZone, LigZone]> = {\n`;

for (const [code, [z0, z1, z2]] of zoneEntries) {
  ts += `  "${code}":[${zoneToStr(z0)},${zoneToStr(z1)},${zoneToStr(z2)}],\n`;
}

ts += `};

export function getLigatureZones(code: string): [LigZone, LigZone, LigZone] | null {
  return Z[code] ?? null;
}
`;

writeFileSync(OUT_FILE, ts, "utf-8");
console.log(`Written to ${OUT_FILE}`);
