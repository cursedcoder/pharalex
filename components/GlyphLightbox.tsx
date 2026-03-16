"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Lightbox } from "./Lightbox";
import { glyphSvgSrc } from "@/lib/glyph-utils";

export interface GlyphLightboxItem {
  code: string;
  label?: string;
}

interface GlyphLightboxProps {
  items: GlyphLightboxItem[];
  initialIndex?: number;
  trigger: React.ReactNode;
}

export function GlyphLightbox({ items, initialIndex = 0, trigger }: GlyphLightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(initialIndex);

  const current = items[index];
  const hasMultiple = items.length > 1;

  const handleOpen = useCallback(() => {
    setIndex(initialIndex);
    setOpen(true);
  }, [initialIndex]);

  const handlePrev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : items.length - 1));
  }, [items.length]);

  const handleNext = useCallback(() => {
    setIndex((i) => (i < items.length - 1 ? i + 1 : 0));
  }, [items.length]);

  return (
    <>
      <button
        onClick={handleOpen}
        className="cursor-zoom-in"
        aria-label={`View ${current?.code || "glyph"} in lightbox`}
      >
        {trigger}
      </button>

      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        onPrev={hasMultiple ? handlePrev : undefined}
        onNext={hasMultiple ? handleNext : undefined}
        showNav={hasMultiple}
        footer={
          hasMultiple ? (
            <ThumbnailStrip
              items={items}
              activeIndex={index}
              onSelect={(i) => setIndex(i)}
            />
          ) : undefined
        }
      >
        {current && (
          <div className="flex flex-col items-center p-6 sm:p-8">
            {/* Large glyph */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={glyphSvgSrc(current.code)}
                alt={current.code}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="text-center">
              <Link
                href={`/glyph/${encodeURIComponent(current.code)}`}
                className="font-display text-2xl font-bold text-brown hover:text-gold transition-colors"
                onClick={() => setOpen(false)}
              >
                {current.code}
              </Link>
              {current.label && (
                <p className="text-sm text-sandstone mt-1">{current.label}</p>
              )}
              {hasMultiple && (
                <p className="text-xs text-sandstone/60 mt-2">
                  {index + 1} / {items.length}
                </p>
              )}
            </div>
          </div>
        )}
      </Lightbox>
    </>
  );
}

function ThumbnailStrip({
  items,
  activeIndex,
  onSelect,
}: {
  items: GlyphLightboxItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-1.5 flex-wrap">
      {items.map((item, i) => (
        <button
          key={item.code}
          onClick={() => onSelect(i)}
          className={`
            w-10 h-10 flex items-center justify-center rounded-lg border transition-all
            ${i === activeIndex
              ? "border-gold bg-gold/15 shadow-sm"
              : "border-sandstone/20 bg-ivory dark:bg-ivory-dark hover:border-gold/40"
            }
          `}
          aria-label={`View ${item.code}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={glyphSvgSrc(item.code)}
            alt={item.code}
            className="w-7 h-7 object-contain"
          />
        </button>
      ))}
    </div>
  );
}
