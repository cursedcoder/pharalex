"use client";

import Link from "next/link";
import { createContext, useContext } from "react";
import { parseMdc, extractCodes } from "@/lib/mdc";
import type { MdcNode } from "@/lib/mdc";
import { getGlyphByCode, glyphHref } from "@/lib/glyphs";
import { Tooltip, GlyphTooltipContent } from "./Tooltip";
import {
  glyphSize,
  CADRAT_WIDTH,
  CADRAT_HEIGHT,
  SMALL_SKIP,
} from "@/lib/glyph-metrics";
import { getLigatureZones, type LigZone } from "@/lib/ligature-zones";

const DisableLinksContext = createContext(false);

interface QuadratProps {
  mdc: string;
  baseSize?: number;
  disableLinks?: boolean;
}

type Dims = { w: number; h: number };

/** Compute the natural dimensions of an MdcNode in normalized font units. */
export function naturalSize(node: MdcNode): Dims {
  if (node.type === "sign") {
    const [w, h] = glyphSize(node.code);
    return { w, h };
  }

  if (node.type === "ligature") {
    return ligatureNaturalSize(node);
  }

  if (node.type === "simpleLig") {
    return simpleLigNaturalSize(node);
  }

  if (node.type === "horiz") {
    const sizes = node.children.map(naturalSize);
    return {
      w: sizes.reduce((s, d) => s + d.w, 0),
      h: Math.max(...sizes.map((d) => d.h)),
    };
  }

  if (node.type === "vert") {
    const sizes = node.children.map(naturalSize);
    const rowScales = sizes.map((d) =>
      d.w > CADRAT_WIDTH ? CADRAT_WIDTH / d.w : 1,
    );
    const scaledH = sizes.map((d, i) => d.h * rowScales[i]);
    const totalH =
      scaledH.reduce((s, h) => s + h, 0) +
      (sizes.length - 1) * SMALL_SKIP;
    const overScale = totalH > CADRAT_HEIGHT ? CADRAT_HEIGHT / totalH : 1;
    return {
      w:
        Math.max(...sizes.map((d, i) => d.w * rowScales[i])) * overScale,
      h: totalH * overScale,
    };
  }

  if (node.type === "enclosure") {
    const sizes = node.children.map(naturalSize);
    const totalW = sizes.reduce((s, d) => s + d.w + 10, 0) - 10;
    const maxH = Math.max(...sizes.map((d) => d.h));
    return {
      w: totalW + 40, // Add space for cartouche ends
      h: maxH + 10,
    };
  }

  return { w: 0, h: 0 };
}

export function getWordWidth(mdc: string, baseSize: number): number {
  try {
    const node = parseMdc(mdc);
    const nat = naturalSize(node);
    return (nat.w / CADRAT_WIDTH) * baseSize;
  } catch (e) {
    return baseSize; // Fallback
  }
}

/** Compute the bounding box of a complex ligature after zone placement. */
function ligatureNaturalSize(node: Extract<MdcNode, { type: "ligature" }>): Dims {
  const anchorSize = naturalSize(node.anchor);
  const anchorCode = node.anchor.type === "sign" ? node.anchor.code : "";
  const zones = anchorCode ? getLigatureZones(anchorCode) : null;

  let minX = 0, minY = 0;
  let maxX = anchorSize.w, maxY = anchorSize.h;

  if (node.after) {
    const zone = zones?.[2] ?? zones?.[1];
    if (zone) {
      const afterSize = naturalSize(node.after);
      const placed = placeInZone(afterSize, zone);
      minX = Math.min(minX, placed.x);
      minY = Math.min(minY, placed.y);
      maxX = Math.max(maxX, placed.x + placed.w);
      maxY = Math.max(maxY, placed.y + placed.h);
    } else {
      const afterSize = naturalSize(node.after);
      maxX = anchorSize.w + afterSize.w;
      maxY = Math.max(maxY, afterSize.h);
    }
  }

  if (node.before) {
    const zone = zones?.[0];
    if (zone) {
      const beforeSize = naturalSize(node.before);
      const placed = placeInZone(beforeSize, zone);
      minX = Math.min(minX, placed.x);
      minY = Math.min(minY, placed.y);
      maxX = Math.max(maxX, placed.x + placed.w);
      maxY = Math.max(maxY, placed.y + placed.h);
    }
  }

  return { w: maxX - minX, h: maxY - minY };
}

/**
 * Scale a view to fit within a zone's dimensions, preserving aspect ratio.
 */
function placeInZone(
  viewSize: Dims,
  zone: NonNullable<LigZone>,
): { x: number; y: number; w: number; h: number } {
  const scaleW = zone.w / viewSize.w;
  const scaleH = zone.h / viewSize.h;
  const scale = Math.min(scaleW, scaleH);
  const w = viewSize.w * scale;
  const h = viewSize.h * scale;

  let x: number;
  if (zone.hg === "S") x = zone.x;
  else if (zone.hg === "E") x = zone.x + zone.w - w;
  else x = zone.x + (zone.w - w) / 2;

  let y: number;
  if (zone.vg === "T") y = zone.y;
  else if (zone.vg === "B") y = zone.y + zone.h - h;
  else y = zone.y + (zone.h - h) / 2;

  return { x, y, w, h };
}


/**
 * Simple ligature (&): the taller sign is the anchor, the shorter sign
 * is placed in the anchor's "after" or "before" zone depending on order.
 */
function resolveSimpleLig(children: MdcNode[]): {
  anchorIdx: number;
  placements: { idx: number; zone: NonNullable<LigZone> | null }[];
} {
  if (children.length < 2) return { anchorIdx: 0, placements: [] };

  const sizes = children.map(naturalSize);
  let anchorIdx = 0;
  for (let i = 1; i < sizes.length; i++) {
    if (sizes[i].h > sizes[anchorIdx].h) anchorIdx = i;
  }

  const anchorNode = children[anchorIdx];
  const anchorCode = anchorNode.type === "sign" ? anchorNode.code : "";
  const zones = anchorCode ? getLigatureZones(anchorCode) : null;

  const placements: { idx: number; zone: NonNullable<LigZone> | null }[] = [];
  for (let i = 0; i < children.length; i++) {
    if (i === anchorIdx) continue;
    const zone = i < anchorIdx ? zones?.[0] ?? null : zones?.[1] ?? null;
    placements.push({ idx: i, zone });
  }

  return { anchorIdx, placements };
}

function simpleLigNaturalSize(
  node: Extract<MdcNode, { type: "simpleLig" }>,
): Dims {
  const sizes = node.children.map(naturalSize);
  const { anchorIdx, placements } = resolveSimpleLig(node.children);
  const anchorSize = sizes[anchorIdx];

  let minX = 0,
    minY = 0;
  let maxX = anchorSize.w,
    maxY = anchorSize.h;

  for (const p of placements) {
    const childSize = sizes[p.idx];
    if (p.zone) {
      const placed = placeInZone(childSize, p.zone);
      minX = Math.min(minX, placed.x);
      minY = Math.min(minY, placed.y);
      maxX = Math.max(maxX, placed.x + placed.w);
      maxY = Math.max(maxY, placed.y + placed.h);
    } else {
      maxX += childSize.w;
      maxY = Math.max(maxY, childSize.h);
    }
  }

  return { w: maxX - minX, h: maxY - minY };
}

export function Quadrat({ mdc, baseSize = 40, disableLinks = false }: QuadratProps) {
  const node = parseMdc(mdc);
  return (
    <DisableLinksContext.Provider value={disableLinks}>
      <div className="inline-flex items-end gap-1">
        {node.type === "seq" ? (
          node.children.map((child, i) => (
            <QuadratNode
              key={i}
              node={child}
              width={baseSize}
              height={baseSize}
              disableLinks={disableLinks}
            />
          ))
        ) : (
          <QuadratNode node={node} width={baseSize} height={baseSize} disableLinks={disableLinks} />
        )}
      </div>
    </DisableLinksContext.Provider>
  );
}

function QuadratNode({
  node,
  width,
  height,
}: {
  node: MdcNode;
  width: number;
  height: number;
}) {
  if (node.type === "sign") {
    return <SignCell code={node.code} width={width} height={height} />;
  }

  if (node.type === "ligature") {
    return (
      <LigatureNode node={node} width={width} height={height} />
    );
  }

  if (node.type === "simpleLig") {
    return (
      <SimpleLigNode node={node} width={width} height={height} />
    );
  }

  if (node.type === "enclosure") {
    return (
      <div className="relative inline-flex items-center">
        <div
          className="inline-flex items-center px-4 py-3 border-2 border-brown-dark/40 rounded-full bg-papyrus/30 mdc-enclosure"
          style={{ height, overflow: "visible" }}
        >
          <div className="flex items-end gap-1">
            {node.children.map((child, i) => (
              <QuadratNode
                key={i}
                node={child}
                width={Math.round(width * 0.8)} // Simple scaling for enclosure content
                height={Math.round(height * 0.8)}
              />
            ))}
          </div>
        </div>
        {/* Cartouche knot/line at the end */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1 border-r-2 border-brown-dark/40 mdc-enclosure z-20" 
          style={{ height: '100%', display: 'block', minHeight: '10px', visibility: 'visible' }}
        />
      </div>
    );
  }

  if (node.type === "horiz") {
    const sizes = node.children.map(naturalSize);
    const totalW = sizes.reduce((s, d) => s + d.w, 0);
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "flex-end",
          width,
          height,
        }}
      >
        {node.children.map((child, i) => {
          const cw = Math.max(1, Math.round(width * (sizes[i].w / totalW)));
          return (
            <QuadratNode key={i} node={child} width={cw} height={height} />
          );
        })}
      </div>
    );
  }

  if (node.type === "vert") {
    const n = node.children.length;
    const sizes = node.children.map(naturalSize);
    const rowScales = sizes.map((d) =>
      d.w > CADRAT_WIDTH ? CADRAT_WIDTH / d.w : 1,
    );
    const scaledH = sizes.map((d, i) => d.h * rowScales[i]);
    const sumScaledH = scaledH.reduce((s, h) => s + h, 0);
    const totalH = sumScaledH + (n - 1) * SMALL_SKIP;

    const gapPx =
      n > 1 ? Math.max(1, Math.round((height * SMALL_SKIP) / totalH)) : 0;
    const availableH = height - (n - 1) * gapPx;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width,
          height,
          gap: gapPx,
        }}
      >
        {node.children.map((child, i) => {
          const rh = Math.max(
            1,
            Math.round(availableH * (scaledH[i] / sumScaledH)),
          );
          return (
            <QuadratNode key={i} node={child} width={width} height={rh} />
          );
        })}
      </div>
    );
  }

  const sizes = node.children.map(naturalSize);
  const totalW = sizes.reduce((s, d) => s + d.w, 0);
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        width,
        height,
      }}
    >
      {node.children.map((child, i) => {
        const cw = Math.max(1, Math.round(width * (sizes[i].w / totalW)));
        return (
          <QuadratNode key={i} node={child} width={cw} height={height} />
        );
      })}
    </div>
  );
}

/** Render a simple ligature (&) via SVG compositing + DOM hit overlays. */
/** Render a simple ligature (&) via SVG compositing + DOM hit overlays. */
function SimpleLigNode({
  node,
  width,
  height,
}: {
  node: Extract<MdcNode, { type: "simpleLig" }>;
  width: number;
  height: number;
}) {
  const sizes = node.children.map(naturalSize);
  const { anchorIdx, placements } = resolveSimpleLig(node.children);
  const anchorSize = sizes[anchorIdx];
  const anchorCode =
    node.children[anchorIdx].type === "sign"
      ? node.children[anchorIdx].code
      : "";

  const natSize = simpleLigNaturalSize(node);
  const pxPerUnit = Math.min(width / natSize.w, height / natSize.h);

  type Placement = {
    code: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };

  const behind: Placement[] = [];
  let minX = 0,
    minY = 0;
  let sideOffset = anchorSize.w;

  for (const p of placements) {
    const child = node.children[p.idx];
    const code = child.type === "sign" ? child.code : "";
    const childSize = sizes[p.idx];
    if (p.zone && code) {
      const placed = placeInZone(childSize, p.zone);
      behind.push({ code, ...placed });
      minX = Math.min(minX, placed.x);
      minY = Math.min(minY, placed.y);
    } else if (code) {
      behind.push({
        code,
        x: sideOffset,
        y: anchorSize.h - childSize.h,
        w: childSize.w,
        h: childSize.h,
      });
      sideOffset += childSize.w;
    }
  }

  const allPlacements: Placement[] = [
    { code: anchorCode, x: 0, y: 0, w: anchorSize.w, h: anchorSize.h },
    ...behind,
  ];

  return (
    <div style={{ position: "relative", width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`${minX} ${minY} ${natSize.w} ${natSize.h}`}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        className="ligature-svg"
      >
        {behind.map((p) => (
          <image
            key={`bg-${p.code}`}
            href={`/glyphs/${p.code}.svg`}
            x={p.x}
            y={p.y}
            width={p.w}
            height={p.h}
            preserveAspectRatio="xMidYMid meet"
          />
        ))}
        {anchorCode && (
          <image
            href={`/glyphs/${anchorCode}.svg`}
            x={0}
            y={0}
            width={anchorSize.w}
            height={anchorSize.h}
            preserveAspectRatio="xMidYMid meet"
          />
        )}
      </svg>

      {allPlacements.map((p) => (
        <LigatureHitArea
          key={`hit-${p.code}`}
          code={p.code}
          left={Math.round((p.x - minX) * pxPerUnit)}
          top={Math.round((p.y - minY) * pxPerUnit)}
          w={Math.round(p.w * pxPerUnit)}
          h={Math.round(p.h * pxPerUnit)}
        />
      ))}
    </div>
  );
}

/** Render a complex ligature (&&&/^^^) via SVG compositing + DOM hit overlays. */
function LigatureNode({
  node,
  width,
  height,
}: {
  node: Extract<MdcNode, { type: "ligature" }>;
  width: number;
  height: number;
}) {
  const anchorCode = node.anchor.type === "sign" ? node.anchor.code : "";
  const zones = anchorCode ? getLigatureZones(anchorCode) : null;
  const natSize = ligatureNaturalSize(node);

  const anchorNat = naturalSize(node.anchor);
  const pxPerUnit = Math.min(width / natSize.w, height / natSize.h);

  type Placement = { code: string; x: number; y: number; w: number; h: number };
  const behind: Placement[] = [];
  let minX = 0, minY = 0;

  if (node.after) {
    const afterCode = node.after.type === "sign" ? node.after.code : "";
    const zone = zones?.[2] ?? zones?.[1];
    if (zone && afterCode) {
      const afterNat = naturalSize(node.after);
      const placed = placeInZone(afterNat, zone);
      behind.push({ code: afterCode, ...placed });
      minX = Math.min(minX, placed.x);
      minY = Math.min(minY, placed.y);
    } else if (afterCode) {
      const afterNat = naturalSize(node.after);
      behind.push({
        code: afterCode,
        x: anchorNat.w,
        y: anchorNat.h - afterNat.h,
        w: afterNat.w,
        h: afterNat.h,
      });
    }
  }

  if (node.before) {
    const beforeCode = node.before.type === "sign" ? node.before.code : "";
    const zone = zones?.[0];
    if (zone && beforeCode) {
      const beforeNat = naturalSize(node.before);
      const placed = placeInZone(beforeNat, zone);
      behind.push({ code: beforeCode, ...placed });
      minX = Math.min(minX, placed.x);
      minY = Math.min(minY, placed.y);
    }
  }

  const allPlacements: Placement[] = [
    { code: anchorCode, x: 0, y: 0, w: anchorNat.w, h: anchorNat.h },
    ...behind,
  ];

  return (
    <div style={{ position: "relative", width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`${minX} ${minY} ${natSize.w} ${natSize.h}`}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        className="ligature-svg"
      >
        {behind.map((p) => (
          <image
            key={`bg-${p.code}`}
            href={`/glyphs/${p.code}.svg`}
            x={p.x}
            y={p.y}
            width={p.w}
            height={p.h}
            preserveAspectRatio="xMidYMid meet"
          />
        ))}
        {anchorCode && (
          <image
            href={`/glyphs/${anchorCode}.svg`}
            x={0}
            y={0}
            width={anchorNat.w}
            height={anchorNat.h}
            preserveAspectRatio="xMidYMid meet"
          />
        )}
      </svg>

      {allPlacements.map((p) => (
        <LigatureHitArea
          key={`hit-${p.code}`}
          code={p.code}
          left={Math.round((p.x - minX) * pxPerUnit)}
          top={Math.round((p.y - minY) * pxPerUnit)}
          w={Math.round(p.w * pxPerUnit)}
          h={Math.round(p.h * pxPerUnit)}
        />
      ))}
    </div>
  );
}

/** Invisible hit area overlay for a ligature glyph — provides tooltip + link. */
function LigatureHitArea({
  code,
  left,
  top,
  w,
  h,
}: {
  code: string;
  left: number;
  top: number;
  w: number;
  h: number;
}) {
  const glyph = getGlyphByCode(code);
  const phonetic = glyph?.transliteration[0];
  const meaning = glyph?.meanings[0]?.text ?? glyph?.description;

  if (!code) return null;

  return (
    <div
      style={{ position: "absolute", left, top, width: w, height: h }}
      className="[&>span]:flex [&>span]:w-full [&>span]:h-full"
    >
      <Tooltip
        content={
          <GlyphTooltipContent
            code={code}
            transliteration={phonetic}
            meaning={meaning}
          />
        }
      >
        <Link
          href={glyphHref(code)}
          onClick={(e) => e.stopPropagation()}
          className="flex w-full h-full items-center justify-center"
        />
      </Tooltip>
    </div>
  );
}

function SignCell({
  code,
  width,
  height,
}: {
  code: string;
  width: number;
  height: number;
}) {
  const disableLinks = useContext(DisableLinksContext);
  const glyph = getGlyphByCode(code);
  const phonetic = glyph?.transliteration[0];
  const meaning = glyph?.meanings[0]?.text ?? glyph?.description;

  if (!code || code === "?" || code === "") return null;

  const img = (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={`/glyphs/${code}.svg`}
      alt={code}
      style={{ width, height }}
      className="object-contain"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );

  const inner = disableLinks ? (
    <span
      className="inline-flex items-center justify-center"
      style={{ width, height }}
    >
      {img}
    </span>
  ) : (
    <Link
      href={glyphHref(code)}
      onClick={(e) => e.stopPropagation()}
      className="hover:scale-110 hover:drop-shadow-md transition-transform duration-150 inline-flex items-center justify-center"
      style={{ width, height }}
    >
      {img}
    </Link>
  );

  return (
    <Tooltip
      content={
        <GlyphTooltipContent
          code={code}
          transliteration={phonetic}
          meaning={meaning}
        />
      }
    >
      {inner}
    </Tooltip>
  );
}

export { extractCodes };
