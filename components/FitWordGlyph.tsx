"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { WordGlyph } from "@/components/WordGlyph";

interface FitWordGlyphProps {
  mdc: string;
  baseSize?: number;
  className?: string;
}

/** WordGlyph that scales down to fit its container width. */
export function FitWordGlyph({ mdc, baseSize = 36, className }: FitWordGlyphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;
    const available = container.clientWidth;
    const needed = content.scrollWidth;
    setScale(needed > available ? available / needed : 1);
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale, mdc]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className ?? ""}`}>
      <div
        ref={contentRef}
        style={{
          transform: scale < 1 ? `scale(${scale})` : undefined,
          transformOrigin: "left center",
          height: scale < 1 ? `${baseSize * scale}px` : undefined,
        }}
      >
        <WordGlyph mdc={mdc} baseSize={baseSize} />
      </div>
    </div>
  );
}
