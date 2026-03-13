import type { Glyph } from "@/lib/types";

export function GlyphWatermark({ glyphs }: { glyphs: Glyph[] }) {
  const chars = glyphs.map((g) => g.unicode).join("");

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none">
      <div className="font-hieroglyph text-[18rem] text-brown whitespace-nowrap">
        {chars}
      </div>
    </div>
  );
}
