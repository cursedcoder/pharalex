"use client";

import { useState, useRef, useEffect } from "react";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}

export function Tooltip({ content, children, delay = 50 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<"top" | "bottom">("top");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        const spaceAbove = rect.top;
        const spaceBelow = window.innerHeight - rect.bottom;
        setPosition(spaceAbove > 100 || spaceAbove > spaceBelow ? "top" : "bottom");
      }
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
      
      {isVisible && content && (
        <span
          role="tooltip"
          className={`
            absolute z-50 px-3 py-2
            bg-brown text-ivory text-xs
            rounded-lg shadow-lg
            whitespace-nowrap
            pointer-events-none
            animate-in fade-in duration-150
            ${position === "top" 
              ? "bottom-full left-1/2 -translate-x-1/2 mb-2" 
              : "top-full left-1/2 -translate-x-1/2 mt-2"
            }
          `}
        >
          {content}
          {/* Arrow */}
          <span
            className={`
              absolute left-1/2 -translate-x-1/2
              border-4 border-transparent
              ${position === "top"
                ? "top-full border-t-brown"
                : "bottom-full border-b-brown"
              }
            `}
          />
        </span>
      )}
    </span>
  );
}

interface GlyphTooltipContentProps {
  code: string;
  transliteration?: string;
  meaning?: string;
}

export function GlyphTooltipContent({ code, transliteration, meaning }: GlyphTooltipContentProps) {
  return (
    <span className="flex flex-col gap-0.5 max-w-48">
      <span className="flex items-center gap-2">
        <span className="font-semibold text-gold-light">{code}</span>
        {transliteration && (
          <span className="italic text-ivory/70">({transliteration})</span>
        )}
      </span>
      {meaning && (
        <span className="text-ivory/80 whitespace-normal leading-snug">
          {meaning.length > 80 ? `${meaning.slice(0, 80)}…` : meaning}
        </span>
      )}
    </span>
  );
}
