"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}

export function Tooltip({ content, children, delay = 50 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState<{ x: number; y: number; above: boolean } | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        const above = rect.top > 100 || rect.top > window.innerHeight - rect.bottom;
        setCoords({
          x: rect.left + rect.width / 2,
          y: above ? rect.top + window.scrollY : rect.bottom + window.scrollY,
          above,
        });
      }
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const tooltip =
    isVisible && content && coords
      ? createPortal(
          <span
            role="tooltip"
            style={{
              position: "absolute",
              left: coords.x,
              top: coords.above ? coords.y - 8 : coords.y + 8,
              transform: coords.above
                ? "translate(-50%, -100%)"
                : "translate(-50%, 0)",
            }}
            className="z-[9999] px-3 py-2 bg-[#2c2416] text-[#fefdfb] text-xs rounded-lg shadow-lg whitespace-nowrap pointer-events-none animate-in fade-in duration-150"
          >
            {content}
            <span
              className={`absolute left-1/2 -translate-x-1/2 border-4 border-transparent ${
                coords.above ? "top-full border-t-[#2c2416]" : "bottom-full border-b-[#2c2416]"
              }`}
            />
          </span>,
          document.body,
        )
      : null;

  return (
    <span
      ref={triggerRef}
      className="relative inline-flex"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {tooltip}
    </span>
  );
}

interface GlyphTooltipContentProps {
  code: string;
  transliteration?: string;
  meaning?: string;
  signName?: string;
}

export function GlyphTooltipContent({ code, transliteration, meaning, signName }: GlyphTooltipContentProps) {
  return (
    <span className="flex flex-col gap-0.5 max-w-48">
      <span className="flex items-center gap-2">
        <span className="font-semibold text-gold-light">{code}</span>
        {transliteration && (
          <span className="italic text-[#fefdfb]/70">({transliteration})</span>
        )}
      </span>
      {signName && (
        <span className="text-[#fefdfb]/90 whitespace-normal leading-snug">
          {signName}
        </span>
      )}
      {meaning && (
        <span className="text-[#fefdfb]/60 whitespace-normal leading-snug text-[10px]">
          {meaning.length > 80 ? `${meaning.slice(0, 80)}…` : meaning}
        </span>
      )}
    </span>
  );
}
