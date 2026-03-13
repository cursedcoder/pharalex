"use client";

import Link from "next/link";
import type { RoyalName } from "@/lib/types";
import { glyphHref, glyphSvgSrc } from "@/lib/glyph-utils";
import { useGlyphDetail } from "./GlyphDetailsContext";
import { Tooltip, GlyphTooltipContent } from "./Tooltip";

interface CartoucheProps {
  royalName: RoyalName;
  label?: string;
  size?: "sm" | "md" | "lg";
  showLinks?: boolean;
}

const sizeConfig = {
  sm: { glyph: "w-6 h-6", gap: "gap-0.5", padding: "px-3 py-1.5", text: "text-xs" },
  md: { glyph: "w-8 h-8", gap: "gap-1", padding: "px-4 py-2", text: "text-sm" },
  lg: { glyph: "w-10 h-10", gap: "gap-1.5", padding: "px-5 py-3", text: "text-base" },
};

export function Cartouche({
  royalName,
  label,
  size = "md",
  showLinks = true,
}: CartoucheProps) {
  const config = sizeConfig[size];

  return (
    <div className="inline-flex flex-col items-center">
      {label && (
        <span className={`${config.text} text-sandstone font-medium mb-1.5`}>
          {label}
        </span>
      )}
      
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
          {royalName.codes.map((code, i) => (
            <CartoucheGlyph
              key={`${code}-${i}`}
              code={code}
              showLinks={showLinks}
              glyphClassName={config.glyph}
            />
          ))}
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
          {royalName.codes.map((code, i) => (
            <CartoucheGlyph
              key={`${code}-${i}`}
              code={code}
              showLinks={showLinks}
              glyphClassName={config.glyph}
            />
          ))}
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

interface RoyalNamesDisplayProps {
  prenomen?: RoyalName;
  nomen?: RoyalName;
  horus?: RoyalName;
  nebty?: RoyalName;
  golden?: RoyalName;
  size?: "sm" | "md" | "lg";
}

export function RoyalNamesDisplay({
  prenomen,
  nomen,
  horus,
  nebty,
  golden,
  size = "md",
}: RoyalNamesDisplayProps) {
  const hasCartouches = prenomen || nomen;
  const hasSerekh = horus;
  const hasOther = nebty || golden;

  if (!hasCartouches && !hasSerekh && !hasOther) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Cartouche names (prenomen & nomen) */}
      {hasCartouches && (
        <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
          {prenomen && (
            <Cartouche royalName={prenomen} label="Prenomen (Throne Name)" size={size} />
          )}
          {nomen && (
            <Cartouche royalName={nomen} label="Nomen (Birth Name)" size={size} />
          )}
        </div>
      )}

      {/* Horus name in serekh */}
      {hasSerekh && (
        <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
          <Serekh royalName={horus!} label="Horus Name" size={size} />
        </div>
      )}

      {/* Other names */}
      {hasOther && (
        <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
          {nebty && (
            <Cartouche royalName={nebty} label="Nebty (Two Ladies) Name" size={size} />
          )}
          {golden && (
            <Cartouche royalName={golden} label="Golden Horus Name" size={size} />
          )}
        </div>
      )}
    </div>
  );
}
