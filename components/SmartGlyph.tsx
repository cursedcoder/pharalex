"use client";

import { useState } from "react";
import type { Glyph } from "@/lib/types";

interface SmartGlyphProps {
  glyph: Glyph;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showCode?: boolean;
  className?: string;
}

const sizeConfig = {
  xs: { container: "w-8 h-8", font: "text-xl", code: "text-[8px]" },
  sm: { container: "w-12 h-12", font: "text-3xl", code: "text-[10px]" },
  md: { container: "w-16 h-16", font: "text-5xl", code: "text-xs" },
  lg: { container: "w-24 h-24", font: "text-7xl", code: "text-sm" },
  xl: { container: "w-36 h-36", font: "text-9xl", code: "text-base" },
};

function hasSvg(code: string): boolean {
  return !code.startsWith("U+");
}

export function SmartGlyph({
  glyph,
  size = "md",
  showCode = false,
  className = "",
}: SmartGlyphProps) {
  const [svgError, setSvgError] = useState(false);
  const config = sizeConfig[size];
  const canUseSvg = hasSvg(glyph.code) && !svgError;
  const isRenderable = glyph.renderable !== false;

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div
        className={`
          flex items-center justify-center
          rounded-lg border
          ${config.container}
          ${canUseSvg || isRenderable
            ? "bg-papyrus/50 border-sandstone/20"
            : "bg-gradient-to-br from-sandstone/10 to-sandstone/20 border-sandstone/30 border-dashed"
          }
        `}
        title={`${glyph.code}: ${glyph.unicode}`}
      >
        {canUseSvg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/glyphs/${glyph.code}.svg`}
            alt={glyph.code}
            className="w-full h-full object-contain p-1"
            onError={() => setSvgError(true)}
          />
        ) : isRenderable ? (
          <span className={`font-hieroglyph ${config.font}`}>{glyph.unicode}</span>
        ) : (
          <div className="flex flex-col items-center justify-center text-sandstone">
            <span className={`font-display font-bold ${config.code}`}>
              {glyph.code.replace("U+", "")}
            </span>
            {size !== "xs" && (
              <span className={`opacity-50 ${config.code}`}>✦</span>
            )}
          </div>
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
  const canUseSvg = hasSvg(glyph.code) && !error;

  if (canUseSvg) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/glyphs/${glyph.code}.svg`}
        alt={glyph.code}
        style={{ height: size, width: "auto", maxWidth: size * 2 }}
        className={`object-contain ${className}`}
        onError={() => setError(true)}
      />
    );
  }

  if (glyph.renderable !== false) {
    return (
      <span className={`font-hieroglyph ${className}`}>{glyph.unicode}</span>
    );
  }

  return (
    <span
      className={`
        inline-flex items-center justify-center
        px-1 py-0.5 rounded
        bg-sandstone/10 border border-dashed border-sandstone/30
        font-display font-semibold text-sandstone
        ${className}
      `}
      style={{ fontSize: size * 0.4 }}
    >
      {glyph.code.replace("U+", "").slice(0, 5)}
    </span>
  );
}

export function GlyphChar({
  glyph,
  className = "",
}: {
  glyph: Glyph;
  className?: string;
}) {
  if (glyph.renderable !== false) {
    return <span className={`font-hieroglyph ${className}`}>{glyph.unicode}</span>;
  }

  return (
    <span
      className={`
        inline-flex items-center justify-center
        px-1.5 py-0.5 rounded
        bg-sandstone/10 border border-dashed border-sandstone/30
        font-display font-semibold text-sandstone
        ${className}
      `}
      style={{ fontSize: "0.7em" }}
    >
      {glyph.code}
    </span>
  );
}
