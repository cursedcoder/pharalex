import type { Glyph } from "@/lib/types";

interface GlyphDisplayProps {
  glyph: Glyph;
  size?: "sm" | "md" | "lg" | "xl";
  showCode?: boolean;
  className?: string;
}

const sizes = {
  sm: "text-3xl w-12 h-12",
  md: "text-5xl w-16 h-16",
  lg: "text-7xl w-24 h-24",
  xl: "text-9xl w-36 h-36",
};

export function GlyphDisplay({
  glyph,
  size = "md",
  showCode = false,
  className = "",
}: GlyphDisplayProps) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div
        className={`
          font-hieroglyph flex items-center justify-center
          bg-papyrus/50 rounded-lg border border-sandstone/20
          ${sizes[size]}
        `}
        title={`${glyph.code}: ${glyph.unicode}`}
      >
        {glyph.unicode}
      </div>
      {showCode && (
        <span className="text-sm font-medium text-sandstone">{glyph.code}</span>
      )}
    </div>
  );
}
