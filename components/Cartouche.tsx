"use client";

import Link from "next/link";
import type { RoyalName } from "@/lib/types";
import { glyphHref, glyphSvgSrc } from "@/lib/glyph-utils";
import { useGlyphDetail } from "./GlyphDetailsContext";
import { Tooltip, GlyphTooltipContent } from "./Tooltip";
import { Quadrat } from "./Quadrat";

/**
 * Hieroglyphic title prefixes used in royal titulary.
 * These glyphs precede the cartouche and identify the name type.
 */
const TITLE_GLYPHS: Record<string, { codes: string[]; tooltip: string }> = {
  horus: {
    codes: ["G5"],             // Horus falcon
    tooltip: "ḥr — Horus",
  },
  prenomen: {
    codes: ["M23", "L2"],    // nsw-bity — "Dual King" (sedge + bee)
    tooltip: "nsw-bity — Dual King",
  },
  nomen: {
    codes: ["G39", "N5"],    // sꜣ-rꜥ — "Son of Ra" (duck + sun)
    tooltip: "sꜣ-rꜥ — Son of Ra",
  },
  nebty: {
    codes: ["G16"],          // nbty — "The Two Ladies" (vulture + cobra)
    tooltip: "nbty — The Two Ladies",
  },
  golden: {
    codes: ["G8"],           // Horus on gold — "Golden Horus"
    tooltip: "bik-nbw — Golden Horus",
  },
};

interface CartoucheProps {
  royalName: RoyalName;
  label?: string;
  nameType?: string;
  size?: "sm" | "md" | "lg";
  showLinks?: boolean;
}

const sizeConfig = {
  sm: { glyph: "w-6 h-6", gap: "gap-0.5", padding: "px-3 py-1.5", text: "text-xs", titleGlyph: 14, quadrat: 24 },
  md: { glyph: "w-8 h-8", gap: "gap-1", padding: "px-4 py-2", text: "text-sm", titleGlyph: 18, quadrat: 32 },
  lg: { glyph: "w-10 h-10", gap: "gap-1.5", padding: "px-5 py-3", text: "text-base", titleGlyph: 22, quadrat: 40 },
};

/** Renders hieroglyphic title glyphs above the frame, and text label below. */
function TitleGlyphs({
  nameType,
  size,
}: {
  nameType: string;
  size: "sm" | "md" | "lg";
}) {
  const config = sizeConfig[size];
  const titleInfo = TITLE_GLYPHS[nameType];
  if (!titleInfo) return null;

  return (
    <Tooltip content={<span className="text-xs">{titleInfo.tooltip}</span>}>
      <span className="inline-flex items-center gap-0.5 cursor-help mb-2">
        {titleInfo.codes.map((code) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={code}
            src={glyphSvgSrc(code)}
            alt={code}
            style={{ height: config.titleGlyph * 1.4, width: "auto" }}
            className="object-contain opacity-50"
          />
        ))}
      </span>
    </Tooltip>
  );
}

function NameLabel({
  label,
  size,
  extraTooltip,
}: {
  label: string;
  size: "sm" | "md" | "lg";
  extraTooltip?: string;
}) {
  const config = sizeConfig[size];
  return (
    <span className={`${config.text} text-sandstone font-medium mb-1.5 inline-flex items-center gap-1`}>
      {label}
      {extraTooltip && (
        <Tooltip content={<span className="text-xs leading-relaxed whitespace-normal max-w-[240px] block">{extraTooltip}</span>}>
          <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-sandstone/40 text-sandstone/60 text-[9px] font-bold cursor-help">
            ?
          </span>
        </Tooltip>
      )}
    </span>
  );
}

export function Cartouche({
  royalName,
  label,
  nameType,
  size = "md",
  showLinks = true,
}: CartoucheProps) {
  const config = sizeConfig[size];

  return (
    <div className="inline-flex flex-col items-center">
      {nameType && <TitleGlyphs nameType={nameType} size={size} />}
      {label && <NameLabel label={label} size={size} />}
      
      {/* Cartouche oval */}
      <div className="relative inline-flex items-center">
        <div
          className={`
            inline-flex items-center ${config.gap} ${config.padding}
            bg-papyrus/50
            border-2 border-gold/40
            rounded-full
          `}
        >
          {royalName.mdc ? (
            <Quadrat mdc={royalName.mdc} baseSize={config.quadrat} />
          ) : (
            royalName.codes.map((code, i) => (
              <CartoucheGlyph
                key={`${code}-${i}`}
                code={code}
                showLinks={showLinks}
                glyphClassName={config.glyph}
              />
            ))
          )}
        </div>
        {/* Cartouche knot/line at the end */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1 border-r-2 border-gold/40 z-20"
          style={{ height: '100%' }}
        />
      </div>
      
      {/* Transliteration */}
      <span
        className={`
          ${config.text} italic text-brown-light mt-2
          font-medium tracking-wide
        `}
      >
        {royalName.transliteration}
      </span>
      
      {/* Translation */}
      {royalName.translation && (
        <span className="text-xs text-sandstone mt-0.5">
          "{royalName.translation}"
        </span>
      )}
    </div>
  );
}

interface SerekhProps {
  royalName: RoyalName;
  label?: string;
  size?: "sm" | "md" | "lg";
  showLinks?: boolean;
}

export function Serekh({
  royalName,
  label,
  size = "md",
  showLinks = true,
}: SerekhProps) {
  const config = sizeConfig[size];
  const q = config.quadrat; // base unit

  return (
    <div className="inline-flex flex-col items-center">
      {label && (
        <span className={`${config.text} text-sandstone font-medium mb-1.5`}>
          {label}
        </span>
      )}

      {/* Serekh - palace facade frame for Horus name */}
      <div className="flex items-center gap-2">
        {/* Horus falcon with sun disk (G106&N6) */}
        <Quadrat mdc="G106&N6" baseSize={q} />

        {/* Frame: glyphs on the left, SVG niched facade on the right */}
        <div className="flex items-stretch">
          {/* Glyph area with 3-sided border (top, left, bottom) */}
          <div
            className="flex items-center justify-center border-t-2 border-l-2 border-b-2 border-gold-dark/40"
            style={{ paddingInline: q * 0.15, paddingBlock: 2 }}
          >
            {royalName.mdc ? (
              <Quadrat mdc={royalName.mdc} baseSize={q} />
            ) : (
              <div className={`flex items-center ${config.gap}`}>
                {royalName.codes.map((code, i) => (
                  <CartoucheGlyph
                    key={`${code}-${i}`}
                    code={code}
                    showLinks={showLinks}
                    glyphClassName={config.glyph}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Niched facade (right side) */}
          <SerekhFacade height="100%" baseUnit={q} />
        </div>
      </div>

      {/* Transliteration */}
      <span
        className={`
          ${config.text} italic text-brown-light mt-2
          font-medium tracking-wide
        `}
      >
        {royalName.transliteration}
      </span>

      {/* Translation */}
      {royalName.translation && (
        <span className="text-xs text-sandstone mt-0.5">
          &ldquo;{royalName.translation}&rdquo;
        </span>
      )}
    </div>
  );
}

/**
 * SVG niched palace facade for the right side of a serekh.
 * Draws alternating deep/shallow rectangular recesses.
 */
function SerekhFacade({ height, baseUnit }: { height: string; baseUnit: number }) {
  // All dimensions in a 0-100 viewBox height, width scales to match
  const nicheCount = 5;
  const nicheH = 10;
  const nicheGap = 3;
  const deepW = 20;
  const shallowW = 12;
  const totalNicheH = nicheCount * nicheH + (nicheCount - 1) * nicheGap;
  const startY = (100 - totalNicheH) / 2;
  const totalW = deepW + 4; // outer wall + deepest niche

  // Build path: top-right corner, down with niches, bottom-right, bottom-left
  let d = `M 0 0 L ${totalW} 0 L ${totalW} ${startY}`;
  for (let i = 0; i < nicheCount; i++) {
    const ny = startY + i * (nicheH + nicheGap);
    const depth = i % 2 === 0 ? deepW : shallowW;
    const nx = totalW - depth;
    d += ` L ${totalW} ${ny} L ${nx} ${ny} L ${nx} ${ny + nicheH} L ${totalW} ${ny + nicheH}`;
  }
  d += ` L ${totalW} 100 L 0 100`;

  const w = Math.round(baseUnit * 0.6);

  return (
    <svg
      width={w}
      height={height}
      viewBox={`0 0 ${totalW} 100`}
      preserveAspectRatio="none"
      style={{ display: "block" }}
    >
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        vectorEffect="non-scaling-stroke"
        className="text-gold-dark/40"
      />
    </svg>
  );
}

/**
 * Pre-cartouche frame for rulers before Dynasty 3-4 (~2600 BCE).
 * Cartouches (šnw) weren't used until the Old Kingdom. This shows the
 * name in a subtle rectangular frame with a dashed border to indicate
 * the name is attested but the cartouche frame is a modern convention.
 */
export function PreCartoucheName({
  royalName,
  label,
  nameType,
  size = "md",
  showLinks = true,
}: CartoucheProps) {
  const config = sizeConfig[size];

  return (
    <div className="inline-flex flex-col items-center">
      {nameType && <TitleGlyphs nameType={nameType} size={size} />}
      {label && (
        <NameLabel
          label={label}
          size={size}
          extraTooltip="Cartouches were not used until the Old Kingdom (c. 2600 BCE). This name is shown without the oval frame to reflect how it would have appeared in contemporary inscriptions."
        />
      )}

      {/* Simple rectangular frame with dashed border */}
      <div
        className={`
          inline-flex items-center ${config.gap} ${config.padding}
          bg-papyrus/30
          border border-dashed border-sandstone/30
          rounded-md
        `}
      >
        {royalName.mdc ? (
          <Quadrat mdc={royalName.mdc} baseSize={config.quadrat} />
        ) : (
          royalName.codes.map((code, i) => (
            <CartoucheGlyph
              key={`${code}-${i}`}
              code={code}
              showLinks={showLinks}
              glyphClassName={config.glyph}
            />
          ))
        )}
      </div>

      {/* Transliteration */}
      <span
        className={`
          ${config.text} italic text-brown-light mt-2
          font-medium tracking-wide
        `}
      >
        {royalName.transliteration}
      </span>

      {/* Translation */}
      {royalName.translation && (
        <span className="text-xs text-sandstone mt-0.5">
          &ldquo;{royalName.translation}&rdquo;
        </span>
      )}
    </div>
  );
}

function CartoucheGlyph({
  code,
  showLinks,
  glyphClassName,
}: {
  code: string;
  showLinks: boolean;
  glyphClassName: string;
}) {
  const detail = useGlyphDetail(code);
  const glyphElement = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={glyphSvgSrc(code)}
      alt={code}
      className={`${glyphClassName} object-contain`}
    />
  );

  const wrappedGlyph = showLinks ? (
    <Link
      href={glyphHref(code)}
      className="hover:scale-110 hover:drop-shadow-md transition-transform duration-150"
    >
      {glyphElement}
    </Link>
  ) : (
    glyphElement
  );

  return (
    <Tooltip
      content={
        <GlyphTooltipContent
          code={code}
          transliteration={detail?.transliteration}
          meaning={detail?.meaning}
        />
      }
    >
      {wrappedGlyph}
    </Tooltip>
  );
}

/**
 * Dynasties that predate the use of cartouches (~2600 BCE).
 * Predynastic through Dynasty 2 rulers did not use the oval šnw frame.
 */
const PRE_CARTOUCHE_DYNASTIES = new Set([
  "predynastic",
  "dynasty-1",
  "dynasty-2",
]);

/** Variant letter label: 0→A, 1→B, etc. */
const VARIANT_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/** Shows name variants as individual cards. Capped at 8; links to pharaoh.se for overflow. */
function NameVariants({ variants, nameLabel, size }: {
  variants: RoyalName[];
  nameLabel?: string;
  size: "sm" | "md" | "lg";
}) {
  if (variants.length === 0) return null;

  const config = sizeConfig[size];
  const variantBaseSize = config.quadrat;
  const maxShown = 8;
  const shown = variants.slice(0, maxShown);
  const hasMore = variants.length > maxShown;

  return (
    <div className="space-y-4">
      {shown.map((v, i) => (
        <article key={i} className="border border-sandstone/20 rounded-lg bg-papyrus/30 p-4 sm:p-5 space-y-3">
          <p className="text-xs text-sandstone uppercase tracking-wide font-medium">
            {nameLabel ? `${nameLabel} variant ${VARIANT_LETTERS[i]}` : `Variant ${VARIANT_LETTERS[i]}`}
          </p>
          {v.mdc && (
            <div className="overflow-x-auto overflow-y-hidden max-w-full py-1">
              <Quadrat mdc={v.mdc} baseSize={variantBaseSize} />
            </div>
          )}
          <div className="space-y-1">
            <p className={`${config.text} italic text-brown-light font-medium tracking-wide`}>
              {v.transliteration}
            </p>
            {v.translation && (
              <p className="text-sm text-sandstone leading-snug">
                {v.translation}
              </p>
            )}
          </div>
        </article>
      ))}
      {hasMore && (
        <p className="text-xs text-sandstone mt-2">
          +{variants.length - maxShown} more on{" "}
          <a href="https://pharaoh.se" target="_blank" rel="noopener noreferrer" className="text-gold-dark hover:text-gold">
            pharaoh.se
          </a>
        </p>
      )}
    </div>
  );
}

interface RoyalNamesDisplayProps {
  prenomen?: RoyalName;
  nomen?: RoyalName;
  horus?: RoyalName;
  nebty?: RoyalName;
  golden?: RoyalName;
  dynastyId?: string;
  size?: "sm" | "md" | "lg";
}

export function RoyalNamesDisplay({
  prenomen,
  nomen,
  horus,
  nebty,
  golden,
  dynastyId,
  size = "md",
}: RoyalNamesDisplayProps) {
  const hasCartouches = prenomen || nomen;
  const hasSerekh = horus;
  const hasOther = nebty || golden;
  const preCartouche = dynastyId ? PRE_CARTOUCHE_DYNASTIES.has(dynastyId) : false;

  if (!hasCartouches && !hasSerekh && !hasOther) {
    return null;
  }

  const NameFrame = preCartouche ? PreCartoucheName : Cartouche;

  const NameSection = ({ type, nameType, label, royalName, renderer }: {
    type: string; nameType: string; label: string; royalName: RoyalName; renderer: "cartouche" | "serekh";
  }) => (
    <section key={type}>
      {/* ---- Section Name ---- separator */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 border-t border-sandstone/30" />
        <span className="inline-flex items-center gap-2 shrink-0">
          {TITLE_GLYPHS[nameType] && (
            <Tooltip content={<span className="text-xs">{TITLE_GLYPHS[nameType].tooltip}</span>}>
              <span className="inline-flex items-center gap-0.5 cursor-help">
                {TITLE_GLYPHS[nameType].codes.map((code) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={code}
                    src={glyphSvgSrc(code)}
                    alt={code}
                    className="h-6 w-auto object-contain opacity-50"
                  />
                ))}
              </span>
            </Tooltip>
          )}
          <span className="text-base font-display font-medium text-sandstone uppercase tracking-wide">
            {label}
          </span>
        </span>
        <div className="flex-1 border-t border-sandstone/30" />
      </div>

      <div className="flex flex-col items-center">
        {renderer === "serekh" ? (
          <Serekh royalName={royalName} size={size} />
        ) : (
          <NameFrame royalName={royalName} size={size} />
        )}
      </div>

      {royalName.variants && royalName.variants.length > 0 && (
        <details className="mt-6 group">
          <summary className="text-xs text-sandstone uppercase tracking-wide cursor-pointer hover:text-gold-dark transition-colors list-none flex items-center gap-1.5">
            <span className="text-[10px] transition-transform group-open:rotate-90">▶</span>
            {royalName.variants.length} variant{royalName.variants.length > 1 ? "s" : ""}
          </summary>
          <div className="mt-3">
            <NameVariants variants={royalName.variants} nameLabel={label} size={size} />
          </div>
        </details>
      )}
    </section>
  );

  return (
    <div className="space-y-8">
      {/* Horus name — full width */}
      {horus && (
        <NameSection type="horus" nameType="horus" label="Horus Name" royalName={horus} renderer="serekh" />
      )}

      {/* Prenomen + Nomen paired side-by-side */}
      {prenomen && nomen ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <NameSection type="prenomen" nameType="prenomen" label="Prenomen (Throne Name)" royalName={prenomen} renderer="cartouche" />
          <NameSection type="nomen" nameType="nomen" label="Nomen (Birth Name)" royalName={nomen} renderer="cartouche" />
        </div>
      ) : (
        <>
          {prenomen && <NameSection type="prenomen" nameType="prenomen" label="Prenomen (Throne Name)" royalName={prenomen} renderer="cartouche" />}
          {nomen && <NameSection type="nomen" nameType="nomen" label="Nomen (Birth Name)" royalName={nomen} renderer="cartouche" />}
        </>
      )}

      {/* Nebty + Golden Horus paired side-by-side */}
      {nebty && golden ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <NameSection type="nebty" nameType="nebty" label="Nebty (Two Ladies) Name" royalName={nebty} renderer="cartouche" />
          <NameSection type="golden" nameType="golden" label="Golden Horus Name" royalName={golden} renderer="cartouche" />
        </div>
      ) : (
        <>
          {nebty && <NameSection type="nebty" nameType="nebty" label="Nebty (Two Ladies) Name" royalName={nebty} renderer="cartouche" />}
          {golden && <NameSection type="golden" nameType="golden" label="Golden Horus Name" royalName={golden} renderer="cartouche" />}
        </>
      )}
    </div>
  );
}
