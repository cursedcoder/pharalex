"use client";

import { useRef, useEffect, useState } from "react";

/**
 * Renders a Unicode hieroglyph character, hiding it if the font
 * can't render it (tofu detection via canvas measurement).
 */
export function UnicodeChar({ char, className = "" }: { char: string; className?: string }) {
  // Start as null to avoid hydration mismatch — canvas measurement
  // is client-only, so we must not render until we've checked.
  const [status, setStatus] = useState<"pending" | "visible" | "hidden">("pending");
  const measured = useRef(false);

  useEffect(() => {
    if (measured.current || !char) {
      if (!char) setStatus("hidden");
      return;
    }
    measured.current = true;

    // Compare the character width against a known-missing codepoint.
    // If they render at the same width, the font doesn't have this glyph.
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setStatus("visible");
        return;
      }

      const font = '48px "NewGardiner", "Noto Sans Egyptian Hieroglyphs", sans-serif';
      ctx.font = font;

      const charWidth = ctx.measureText(char).width;
      // U+FFFF is a guaranteed non-character — always renders as tofu
      const tofuWidth = ctx.measureText("\uFFFF").width;

      // If same width as tofu, the glyph is missing
      setStatus(charWidth === tofuWidth || charWidth === 0 ? "hidden" : "visible");
    } catch {
      setStatus("visible");
    }
  }, [char]);

  if (status !== "visible") return null;

  return <span className={`font-hieroglyph ${className}`}>{char}</span>;
}
