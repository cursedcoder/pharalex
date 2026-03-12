"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Glyph } from "@/lib/types";
import { instantSearch } from "@/lib/search";
import { glyphHref } from "@/lib/glyphs";

interface SearchBarProps {
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  autoFocus?: boolean;
  showResults?: boolean;
}

const sizes = {
  sm: "py-2 px-3 text-sm",
  md: "py-3 px-4 text-base",
  lg: "py-4 px-6 text-lg",
};

function GlyphThumb({ glyph }: { glyph: Glyph }) {
  const [error, setError] = useState(false);
  if (!error) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/glyphs/${encodeURIComponent(glyph.code)}.svg`}
        alt={glyph.code}
        className="w-8 h-8 object-contain shrink-0"
        onError={() => setError(true)}
      />
    );
  }
  return (
    <span className="font-hieroglyph text-2xl w-8 text-center shrink-0">
      {glyph.unicode}
    </span>
  );
}

export function SearchBar({
  size = "md",
  placeholder = "Search by meaning, code, or transliteration...",
  autoFocus = false,
  showResults = true,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Glyph[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    if (value.trim().length > 0) {
      const searchResults = instantSearch(value);
      setResults(searchResults);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < results.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case "Enter":
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            router.push(glyphHref(results[selectedIndex].code));
            setIsOpen(false);
          } else if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}`);
            setIsOpen(false);
          }
          break;
        case "Escape":
          setIsOpen(false);
          inputRef.current?.blur();
          break;
      }
    },
    [isOpen, results, selectedIndex, query, router]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={`
            w-full bg-ivory dark:bg-ivory-dark
            border border-sandstone/30 rounded-lg
            placeholder-sandstone/60
            focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold
            ${sizes[size]}
          `}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sandstone/50">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {showResults && isOpen && results.length > 0 && (
        <div
          className="
            absolute z-50 w-full mt-2
            bg-ivory dark:bg-ivory-dark
            border border-sandstone/30 rounded-lg
            shadow-lg max-h-80 overflow-y-auto
          "
        >
          {results.map((glyph, index) => (
            <Link
              key={glyph.code}
            href={glyphHref(glyph.code)}
              onClick={() => setIsOpen(false)}
              className={`
                flex items-center gap-3 px-4 py-3
                hover:bg-gold/10 transition-colors
                ${index === selectedIndex ? "bg-gold/10" : ""}
                ${index !== results.length - 1 ? "border-b border-sandstone/10" : ""}
              `}
            >
              <GlyphThumb glyph={glyph} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-brown">{glyph.code}</span>
                  <span className="text-xs text-sandstone">
                    {glyph.categoryName}
                  </span>
                </div>
                <p className="text-sm text-brown-light truncate">
                  {glyph.meanings[0]?.text || ""}
                </p>
              </div>
            </Link>
          ))}

          {query.trim() && (
            <Link
              href={`/search?q=${encodeURIComponent(query)}`}
              onClick={() => setIsOpen(false)}
              className="
                block px-4 py-3 text-center text-sm
                text-gold hover:bg-gold/10
                border-t border-sandstone/20
              "
            >
              See all results for &ldquo;{query}&rdquo;
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
