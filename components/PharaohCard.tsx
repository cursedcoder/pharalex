import Link from "next/link";
import type { Pharaoh } from "@/lib/types";
import { formatReign, getDynastyById } from "@/lib/pharaohs";
import { Cartouche } from "./Cartouche";

interface PharaohCardProps {
  pharaoh: Pharaoh;
}

export function PharaohCard({ pharaoh }: PharaohCardProps) {
  const dynasty = getDynastyById(pharaoh.dynastyId);
  const cartoucheName = pharaoh.royalNames?.prenomen ?? pharaoh.royalNames?.nomen;

  return (
    <Link href={`/pharaohs/${pharaoh.slug}`} className="block group">
      <div
        className="
          bg-ivory-dark/50 border border-sandstone/20 rounded-lg
          p-4 h-full
          hover:shadow-md hover:border-gold/40
          transition-all duration-200
        "
      >
        <div className="flex items-start gap-4">
          {cartoucheName ? (
            <div className="shrink-0 group-hover:scale-105 transition-transform">
              <Cartouche royalName={cartoucheName} size="sm" showLinks={false} />
            </div>
          ) : (
            <div
              className="
                shrink-0 w-14 h-14 rounded-full
                bg-gold/10 border border-gold/20
                flex items-center justify-center
                font-hieroglyph text-2xl text-gold-dark
                group-hover:scale-105 transition-transform
              "
            >
              𓀭
            </div>
          )}

          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg font-semibold text-brown leading-tight">
              {pharaoh.name}
            </h3>

            {pharaoh.alternateNames.length > 0 && (
              <p className="text-xs text-sandstone mb-1">
                also {pharaoh.alternateNames[0]}
              </p>
            )}

            <p className="text-xs text-sandstone mb-2">
              {dynasty?.name ?? pharaoh.dynastyId} &middot; {formatReign(pharaoh)}
            </p>

            {pharaoh.summary && (
              <p className="text-sm text-brown-light line-clamp-2">
                {pharaoh.summary}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
