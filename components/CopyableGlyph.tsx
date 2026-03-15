"use client";

import { useRef } from "react";
import { SmartGlyph } from "@/components/SmartGlyph";
import { CopyImageButton } from "@/components/CopyImageButton";
import type { Glyph } from "@/lib/types";

interface CopyableGlyphProps {
  glyph: Glyph;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function CopyableGlyph({ glyph, size = "xl", className }: CopyableGlyphProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={`flex flex-col items-center gap-2 ${className ?? ""}`}>
      <div ref={ref} className="inline-block">
        <SmartGlyph glyph={glyph} size={size} />
      </div>
      <CopyImageButton targetRef={ref} />
    </div>
  );
}
