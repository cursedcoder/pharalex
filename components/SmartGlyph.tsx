"use client";

import { useState } from "react";
import type { Glyph } from "@/lib/types";
import { glyphSvgSrc } from "@/lib/glyph-utils";

interface SmartGlyphProps {
  glyph: Glyph;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showCode?: boolean;
  className?: string;
}

const sizeConfig = {
  xs: { container: "w-8 h-8", font: "text-xl", code: "text-[8px]" },
  sm: { container: "w-12 h-12", font: "text-3xl", code: "text-[10px]" },
  md: { container: "w-[76px] h-[76px]", font: "text-5xl", code: "text-xs" },
  lg: { container: "w-[108px] h-[108px]", font: "text-7xl", code: "text-sm" },
  xl: { container: "w-36 h-36", font: "text-9xl", code: "text-base" },
};


export function SmartGlyph({
  glyph,
  size = "md",
  showCode = false,
  className = "",
}: SmartGlyphProps) {
  const [svgError, setSvgError] = useState(false);
  const config = sizeConfig[size];

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div
        className={`
          flex items-center justify-center
          rounded-lg border overflow-hidden
          ${config.container}
          bg-papyrus/50 border-sandstone/20
        `}
        title={`${glyph.code}: ${glyph.unicode}`}
      >
        {!svgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={glyphSvgSrc(glyph.code)}
            alt={glyph.code}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain p-2"
            onError={() => setSvgError(true)}
          />
        ) : (
          <span className={`font-hieroglyph ${config.font}`}>{glyph.unicode}</span>
        )}
      </div>
      {showCode && (
        <span className="text-xs font-medium text-sandstone">{glyph.code}</span>
      )}
    </div>
  );
}

export function GlyphImage({
  glyph,
  size = 32,
  className = "",
}: {
  glyph: Glyph;
  size?: number;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (!error) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={glyphSvgSrc(glyph.code)}
        alt={glyph.code}
        loading="lazy"
        decoding="async"
        style={{ height: size, width: "auto", maxWidth: size * 2 }}
        className={`object-contain ${className}`}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <span className={`font-hieroglyph ${className}`}>{glyph.unicode}</span>
  );
}

export function GlyphChar({
  glyph,
  className = "",
}: {
  glyph: Glyph;
  className?: string;
}) {
  return <span className={`font-hieroglyph ${className}`}>{glyph.unicode}</span>;
}
