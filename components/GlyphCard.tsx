import Link from "next/link";
import type { Glyph } from "@/lib/types";
import { Badge } from "./ui/Badge";
import { SmartGlyph } from "./SmartGlyph";

interface GlyphCardProps {
  glyph: Glyph;
  showDescription?: boolean;
}

export function GlyphCard({ glyph, showDescription = true }: GlyphCardProps) {
  const primaryMeaning = glyph.meanings[0];
  const typeColors: Record<string, "gold" | "sandstone" | "outline"> = {
    logogram: "gold",
    phonogram: "sandstone",
    determinative: "outline",
    other: "outline",
  };

  return (
    <Link href={`/glyph/${glyph.code}`} className="block group">
      <div
        className="
          bg-ivory-dark/50 dark:bg-ivory-dark
          border border-sandstone/20 rounded-lg
          p-4 h-full
          hover:shadow-md hover:border-gold/40
          transition-all duration-200
        "
      >
        <div className="flex items-start gap-4">
          <div className="group-hover:scale-105 transition-transform">
            <SmartGlyph glyph={glyph} size="md" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-display text-lg font-semibold text-brown">
                {glyph.code}
              </h3>
              {primaryMeaning && (
                <Badge variant={typeColors[primaryMeaning.type] || "outline"}>
                  {primaryMeaning.type}
                </Badge>
              )}
            </div>

            <p className="text-sm text-sandstone mb-2">{glyph.categoryName}</p>

            {showDescription && primaryMeaning && (
              <p className="text-sm text-brown-light line-clamp-2">
                {primaryMeaning.text}
              </p>
            )}

            {glyph.transliteration.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {glyph.transliteration.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-1.5 py-0.5 bg-brown/5 rounded text-brown-light italic"
                  >
                    {t}
                  </span>
                ))}
                {glyph.transliteration.length > 3 && (
                  <span className="text-xs text-sandstone">
                    +{glyph.transliteration.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
