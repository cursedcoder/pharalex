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

  return (
    <div className="inline-flex flex-col items-center">
      {label && (
        <span className={`${config.text} text-sandstone font-medium mb-1.5`}>
          {label}
        </span>
      )}
      
      {/* Serekh - palace facade frame for Horus name */}
      <div className="relative">
        {/* Horus falcon on top */}
        <div className="flex justify-center mb-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/glyphs/G5.svg"
            alt="Horus"
            className={`${config.glyph} object-contain opacity-70`}
          />
        </div>
        
        {/* Palace facade box */}
        <div
          className={`
            inline-flex items-center justify-center ${config.gap} ${config.padding}
            bg-papyrus/60
            border-2 border-gold/40
            border-b-4
          `}
          style={{
            borderBottomStyle: "double",
          }}
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

        {/* Palace recessed panels (niched facade) */}
        <div className="flex justify-center gap-1 mt-0.5">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-2 bg-gold/20 border border-gold/30"
            />
          ))}
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
          "{royalName.translation}"
        </span>
      )}
    </div>
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

/** Shows all name variants inline. Capped at 8; links to pharaoh.se for overflow. */
function NameVariants({ variants, size }: { variants: RoyalName[]; size: "sm" | "md" | "lg" }) {
  if (variants.length === 0) return null;

  const config = sizeConfig[size];
  const variantBaseSize = Math.round(config.quadrat * 0.65);
  const maxShown = 8;
  const shown = variants.slice(0, maxShown);
  const hasMore = variants.length > maxShown;

  return (
    <div className="space-y-4">
      {shown.map((v, i) => (
        <div key={i} className="space-y-1">
          {v.mdc && (
            <div className="overflow-x-auto overflow-y-hidden max-w-full">
              <Quadrat mdc={v.mdc} baseSize={variantBaseSize} />
            </div>
          )}
          <p className="text-sm italic text-brown-light">{v.transliteration}</p>
          {v.translation && (
            <p className="text-xs text-sandstone leading-snug">
              {v.translation}
            </p>
          )}
        </div>
      ))}
      {hasMore && (
        <p className="text-xs text-sandstone">
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

  const names: { type: string; nameType: string; label: string; royalName: RoyalName; renderer: "cartouche" | "serekh" }[] = [];
  if (horus) names.push({ type: "horus", nameType: "horus", label: "Horus Name", royalName: horus, renderer: "serekh" });
  if (prenomen) names.push({ type: "prenomen", nameType: "prenomen", label: "Prenomen (Throne Name)", royalName: prenomen, renderer: "cartouche" });
  if (nomen) names.push({ type: "nomen", nameType: "nomen", label: "Nomen (Birth Name)", royalName: nomen, renderer: "cartouche" });
  if (nebty) names.push({ type: "nebty", nameType: "nebty", label: "Nebty (Two Ladies) Name", royalName: nebty, renderer: "cartouche" });
  if (golden) names.push({ type: "golden", nameType: "golden", label: "Golden Horus Name", royalName: golden, renderer: "cartouche" });

  return (
    <div className="space-y-8">
      {names.map(({ type, nameType, label, royalName, renderer }) => (
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
            <div className="mt-6">
              <p className="text-xs text-sandstone uppercase tracking-wide mb-3">
                {royalName.variants.length} variant{royalName.variants.length > 1 ? "s" : ""}
              </p>
              <NameVariants variants={royalName.variants} size={size} />
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
