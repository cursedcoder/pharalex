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

function removeAttr(svg: string, attr: string): string {
  return svg.replace(new RegExp(`\\s*\\b${attr}\\s*=\\s*['"][^'"]*['"]`, "gi"), "");
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

  // 6. Strip bloat
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

for (const file of files) {
  const filePath = path.join(GLYPHS_DIR, file);
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const normalized = normalize(raw);
    if (normalized !== raw) {
      fs.writeFileSync(filePath, normalized, "utf-8");
      fixed++;
    } else {
      alreadyOk++;
    }
  } catch (e) {
    console.error(`Error processing ${file}:`, e);
    errors++;
  }
}

console.log(`Done. Fixed: ${fixed} | Already OK: ${alreadyOk} | Errors: ${errors}`);
