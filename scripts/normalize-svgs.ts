/**
 * Normalizes all SVGs in public/glyphs/ so they render correctly at any size:
 *
 *  1. Ensure a viewBox is present. If missing, derive it from width/height attributes.
 *  2. Remove explicit width/height attributes from the <svg> root so the browser
 *     scales the image freely (respecting aspect ratio via object-contain).
 *  3. Replace inline fill:#000000 / fill:black / fill:#000 with fill:currentColor
 *     so glyphs respect the site's light/dark theme.
 *  4. Strip Inkscape/Sodipodi bloat (metadata, namedview, defs-only nodes, XML
 *     processing instructions) to reduce file size.
 */

import fs from "fs";
import path from "path";

const GLYPHS_DIR = path.join(process.cwd(), "public/glyphs");

// ── helpers ──────────────────────────────────────────────────────────────────

function extractAttr(svg: string, attr: string): string | null {
  const re = new RegExp(`\\b${attr}\\s*=\\s*['"]([^'"]+)['"]`, "i");
  const m = svg.match(re);
  return m ? m[1] : null;
}


function setAttr(svg: string, attr: string, value: string): string {
  // Insert after the opening <svg tag if not present, or replace if present
  if (new RegExp(`\\b${attr}\\s*=`, "i").test(svg)) {
    return svg.replace(new RegExp(`\\b${attr}\\s*=\\s*['"][^'"]*['"]`, "i"), `${attr}="${value}"`);
  }
  return svg.replace(/(<svg\b)/i, `$1 ${attr}="${value}"`);
}

function normalizeFill(svg: string): string {
  // style="fill:#000000; stroke:none" or style="fill:#000;..." or style="fill:black;..."
  svg = svg.replace(/fill\s*:\s*#(?:000000|000|000000ff)\b/gi, "fill:currentColor");
  svg = svg.replace(/fill\s*:\s*black\b/gi, "fill:currentColor");
  // fill="#000000" or fill="#000" or fill="black" attributes
  svg = svg.replace(/\bfill\s*=\s*["'](?:#000000|#000|black)["']/gi, 'fill="currentColor"');
  return svg;
}

function stripRedArtifacts(svg: string): string {
  // Remove any element (rect, path, line, polyline, polygon, circle, ellipse)
  // whose style contains a red stroke — these are Inkscape construction guides
  // that were accidentally left in the exported SVG.
  const redStrokeRe = /stroke\s*:\s*(?:#[Ff][Ff]0{4}|#[Ff]{2}0{4}|red\b)/;

  // Self-closing tags: <tagName ... />
  svg = svg.replace(
    /<(rect|path|line|polyline|polygon|circle|ellipse|g)\b([^>]*?)\/>/gis,
    (match, _tag, attrs) => (redStrokeRe.test(attrs) ? "" : match)
  );

  // Open+close pairs: <tagName ...>...</tagName>
  svg = svg.replace(
    /<(rect|path|line|polyline|polygon|circle|ellipse|g)\b([^>]*?)>([\s\S]*?)<\/\1>/gis,
    (match, _tag, attrs) => (redStrokeRe.test(attrs) ? "" : match)
  );

  return svg;
}

function stripBloat(svg: string): string {
  // Remove XML processing instruction
  svg = svg.replace(/<\?xml[^?]*\?>\s*/gi, "");
  // Remove metadata block
  svg = svg.replace(/<metadata[\s\S]*?<\/metadata>\s*/gi, "");
  // Remove sodipodi:namedview block
  svg = svg.replace(/<sodipodi:namedview[\s\S]*?\/>\s*/gi, "");
  svg = svg.replace(/<sodipodi:namedview[\s\S]*?<\/sodipodi:namedview>\s*/gi, "");
  // Remove sodipodi/inkscape elements
  svg = svg.replace(/<inkscape:[^/]*\/>/gi, "");
  svg = svg.replace(/<inkscape:[\s\S]*?<\/inkscape:[^>]+>/gi, "");
  svg = svg.replace(/<sodipodi:[^/]*\/>/gi, "");
  svg = svg.replace(/<sodipodi:[\s\S]*?<\/sodipodi:[^>]+>/gi, "");
  // Remove empty <defs/> or <defs></defs> (again after element removal)
  svg = svg.replace(/<defs\s*\/>\s*/gi, "");
  svg = svg.replace(/<defs[^>]*>\s*<\/defs>\s*/gi, "");
  // Remove xmlns bloat (keep only the core SVG namespace)
  svg = svg.replace(/\s+xmlns:dc="[^"]*"/gi, "");
  svg = svg.replace(/\s+xmlns:cc="[^"]*"/gi, "");
  svg = svg.replace(/\s+xmlns:rdf="[^"]*"/gi, "");
  svg = svg.replace(/\s+xmlns:svg="[^"]*"/gi, "");
  svg = svg.replace(/\s+xmlns:sodipodi="[^"]*"/gi, "");
  svg = svg.replace(/\s+xmlns:inkscape="[^"]*"/gi, "");
  svg = svg.replace(/\s+xmlns:xlink="[^"]*"/gi, "");
  // Remove sodipodi/inkscape attributes on any element
  svg = svg.replace(/\s+sodipodi:[\w:-]+=["'][^'"]*["']/gi, "");
  svg = svg.replace(/\s+inkscape:[\w:-]+=["'][^'"]*["']/gi, "");
  // Remove id attributes (not needed for static display)
  svg = svg.replace(/\s+id="[^"]*"/g, "");
  return svg;
}

function stripHiddenGroups(svg: string): string {
  // Remove <g style="display:none">...</g> blocks (Inkscape reference-image leftovers)
  return svg.replace(/<g[^>]*?style="[^"]*display\s*:\s*none[^"]*"[\s\S]*?<\/g>\s*/gi, "");
}

// ── path bounds ──────────────────────────────────────────────────────────────

function getPathBounds(d: string): { minX: number; minY: number; maxX: number; maxY: number } {
  const re = /([MmCcSsLlHhVvQqTtZzAa])|(-?(?:[0-9]+\.?[0-9]*|\.?[0-9]+)(?:[eE][+-]?[0-9]+)?)/g;
  const tokens: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(d)) !== null) tokens.push(m[0]);

  let x = 0, y = 0, sx = 0, sy = 0;
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  let i = 0, cmd = "";

  const num = () => parseFloat(tokens[i++]);
  const update = (px: number, py: number) => {
    if (px < minX) minX = px; if (px > maxX) maxX = px;
    if (py < minY) minY = py; if (py > maxY) maxY = py;
  };

  while (i < tokens.length) {
    if (/^[A-Za-z]$/.test(tokens[i])) { cmd = tokens[i++]; continue; }
    switch (cmd) {
      case "M": x=num(); y=num(); sx=x; sy=y; update(x,y); cmd="L"; break;
      case "m": x+=num(); y+=num(); sx=x; sy=y; update(x,y); cmd="l"; break;
      case "L": x=num(); y=num(); update(x,y); break;
      case "l": x+=num(); y+=num(); update(x,y); break;
      case "H": x=num(); update(x,y); break;
      case "h": x+=num(); update(x,y); break;
      case "V": y=num(); update(x,y); break;
      case "v": y+=num(); update(x,y); break;
      case "C": { const x1=num(),y1=num(),x2=num(),y2=num(),ex=num(),ey=num(); update(x1,y1); update(x2,y2); update(ex,ey); x=ex; y=ey; break; }
      case "c": { const dx1=num(),dy1=num(),dx2=num(),dy2=num(),dex=num(),dey=num(); update(x+dx1,y+dy1); update(x+dx2,y+dy2); x+=dex; y+=dey; update(x,y); break; }
      case "S": { const x2=num(),y2=num(),ex=num(),ey=num(); update(x2,y2); update(ex,ey); x=ex; y=ey; break; }
      case "s": { const dx2=num(),dy2=num(),dex=num(),dey=num(); update(x+dx2,y+dy2); x+=dex; y+=dey; update(x,y); break; }
      case "Q": { const x1=num(),y1=num(),ex=num(),ey=num(); update(x1,y1); update(ex,ey); x=ex; y=ey; break; }
      case "q": { const dx1=num(),dy1=num(),dex=num(),dey=num(); update(x+dx1,y+dy1); x+=dex; y+=dey; update(x,y); break; }
      case "T": x=num(); y=num(); update(x,y); break;
      case "t": x+=num(); y+=num(); update(x,y); break;
      case "A": { num();num();num();num();num(); x=num(); y=num(); update(x,y); break; }
      case "a": { num();num();num();num();num(); x+=num(); y+=num(); update(x,y); break; }
      case "Z": case "z": x=sx; y=sy; break;
      default: if (!/^[A-Za-z]$/.test(tokens[i])) i++; break;
    }
  }
  return { minX, minY, maxX, maxY };
}

function fixViewBox(svg: string): string {
  // Recompute the viewBox from actual path geometry to fix:
  //  1. Clipping: content extends outside the declared viewBox
  //  2. Oversized canvas: viewBox is much larger than the path content (glyph appears tiny)
  const vb = extractAttr(svg, "viewBox");
  if (!vb) return svg;
  const [vbX, vbY, vbW, vbH] = vb.split(/\s+/).map(Number);

  // Ignore display:none sections (Inkscape reference images etc.)
  const working = svg.replace(/<g[^>]*?style="[^"]*display\s*:\s*none[^"]*"[\s\S]*?<\/g>/gi, "");

  // Accumulate translate() transform if present on a wrapper group
  const tMatch = working.match(/transform="translate\(([^,)]+)(?:,([^)]+))?\)"/);
  const tx = tMatch ? (parseFloat(tMatch[1]) || 0) : 0;
  const ty = tMatch ? (parseFloat(tMatch[2] ?? "0") || 0) : 0;

  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const m of working.matchAll(/\bd="([^"]+)"/gs)) {
    const b = getPathBounds(m[1]);
    const bx1=b.minX+tx, bx2=b.maxX+tx, by1=b.minY+ty, by2=b.maxY+ty;
    if (bx1<minX) minX=bx1; if (bx2>maxX) maxX=bx2;
    if (by1<minY) minY=by1; if (by2>maxY) maxY=by2;
  }

  if (!isFinite(minX)) return svg;

  const contentW = maxX - minX;
  const contentH = maxY - minY;
  const vbRight = vbX + vbW;
  const vbBottom = vbY + vbH;

  const clipped =
    minX < vbX - 0.5 || minY < vbY - 0.5 ||
    maxX > vbRight + 0.5 || maxY > vbBottom + 0.5;
  const oversized =
    contentW < vbW * 0.6 || contentH < vbH * 0.6;

  if (!clipped && !oversized) return svg;

  const pad = Math.max(contentW, contentH) * 0.04;
  const precision = Math.max(contentW, contentH) > 10 ? 1 : 4;
  const fmt = (n: number) => Number(n.toFixed(precision));
  const newViewBox = `${fmt(minX-pad)} ${fmt(minY-pad)} ${fmt(contentW+pad*2)} ${fmt(contentH+pad*2)}`;
  return setAttr(svg, "viewBox", newViewBox);
}


function normalize(raw: string): string {
  let svg = raw;

  // 1. Get existing viewBox
  let viewBox = extractAttr(svg, "viewBox");

  // 2. If no viewBox, derive from width/height
  if (!viewBox) {
    const w = extractAttr(svg, "width");
    const h = extractAttr(svg, "height");
    if (w && h) {
      const wn = parseFloat(w);
      const hn = parseFloat(h);
      if (!isNaN(wn) && !isNaN(hn) && wn > 0 && hn > 0) {
        viewBox = `0 0 ${wn} ${hn}`;
        svg = setAttr(svg, "viewBox", viewBox);
      }
    }
  }

  // 3. Remove width/height from the <svg> root element only
  //    (replace them in the opening tag up to the first >)
  svg = svg.replace(/(<svg\b[^>]*)>/is, (match, opening) => {
    let tag = opening;
    tag = tag.replace(/\s+width\s*=\s*['"][^'"]*['"]/gi, "");
    tag = tag.replace(/\s+height\s*=\s*['"][^'"]*['"]/gi, "");
    return tag + ">";
  });

  // 4. Ensure xmlns is present
  if (!/xmlns\s*=/.test(svg)) {
    svg = svg.replace(/(<svg\b)/i, '$1 xmlns="http://www.w3.org/2000/svg"');
  }

  // 5. Normalize fill colour
  svg = normalizeFill(svg);

  // 6. Strip red construction-guide artifacts (Inkscape leftovers)
  svg = stripRedArtifacts(svg);

  // 7. Strip hidden groups (display:none, e.g. Inkscape reference images)
  svg = stripHiddenGroups(svg);

  // 8. Fix viewBox: expand if content is clipped, shrink if viewBox is oversized
  svg = fixViewBox(svg);

  // 9. Strip bloat
  svg = stripBloat(svg);

  // 7. Collapse excessive whitespace/newlines
  svg = svg.replace(/\n{3,}/g, "\n").trim();

  return svg;
}

// ── main ─────────────────────────────────────────────────────────────────────

const files = fs.readdirSync(GLYPHS_DIR).filter((f) => f.endsWith(".svg"));

let fixed = 0;
let alreadyOk = 0;
let errors = 0;

const updatedMetrics: Record<string, [number, number]> = {};

for (const file of files) {
  const filePath = path.join(GLYPHS_DIR, file);
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const normalized = normalize(raw);
    if (normalized !== raw) {
      fs.writeFileSync(filePath, normalized, "utf-8");
      fixed++;
      // Extract new viewBox dimensions for metrics update
      const vbAttr = extractAttr(normalized, "viewBox");
      if (vbAttr) {
        const parts = vbAttr.trim().split(/\s+/).map(Number);
        if (parts.length === 4) {
          const [,, w, h] = parts;
          const scale = h > 60 ? 0.01 : 1;
          const code = file.replace(/\.svg$/, "");
          updatedMetrics[code] = [
            Math.round(w * scale * 10) / 10,
            Math.round(h * scale * 10) / 10,
          ];
        }
      }
    } else {
      alreadyOk++;
    }
  } catch (e) {
    console.error(`Error processing ${file}:`, e);
    errors++;
  }
}

// Patch glyph-metrics.ts for updated glyphs
if (Object.keys(updatedMetrics).length > 0) {
  const METRICS_FILE = path.join(process.cwd(), "lib/glyph-metrics.ts");
  let metrics = fs.readFileSync(METRICS_FILE, "utf-8");
  let metricsChanged = 0;
  for (const [code, [w, h]] of Object.entries(updatedMetrics)) {
    const existing = new RegExp(`"${code}":\\[[^\\]]+\\]`);
    const replacement = `"${code}":[${w},${h}]`;
    if (existing.test(metrics)) {
      metrics = metrics.replace(existing, replacement);
      metricsChanged++;
    }
    // If not present, we don't add it here — it would need insertion in sorted order
  }
  if (metricsChanged > 0) {
    fs.writeFileSync(METRICS_FILE, metrics, "utf-8");
    console.log(`Updated ${metricsChanged} entries in glyph-metrics.ts`);
  }
}

console.log(`Done. Fixed: ${fixed} | Already OK: ${alreadyOk} | Errors: ${errors}`);
