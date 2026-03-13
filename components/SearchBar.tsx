"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Glyph, DictionaryWord } from "@/lib/types";
import { fuzzySearch } from "@/lib/search";
import { glyphHref } from "@/lib/glyphs";
import { searchWords, wordHref, translitToUnicode } from "@/lib/words";
import { Quadrat } from "@/components/Quadrat";

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

type MergedItem =
  | { kind: "glyph"; glyph: Glyph; score: number; href: string }
  | { kind: "word"; word: DictionaryWord; score: number; href: string };

function wordScore(word: DictionaryWord, q: string): number {
  const tl = word.transliteration.toLowerCase();
  const tr = word.translation.toLowerCase();
  if (tl === q) return 0;
  if (tl.startsWith(q)) return 0.05;
  if (tr === q) return 0.08;
  if (tr.startsWith(q)) return 0.12;
  if (tl.includes(q)) return 0.2;
  if (tr.includes(q)) return 0.25;
  return 0.35;
}

export function SearchBar({
  size = "md",
  placeholder = "Search by meaning, code, or transliteration...",
  autoFocus = false,
  showResults = true,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [wordResults, setWordResults] = useState<DictionaryWord[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Merge and sort by relevance score
  const merged = useMemo<MergedItem[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const glyphItems: MergedItem[] = fuzzySearch(q, 8).map((r) => ({
      kind: "glyph",
      glyph: r.glyph,
      score: r.score ?? 1,
      href: glyphHref(r.glyph.code),
    }));
    const wordItems: MergedItem[] = wordResults.map((w) => ({
      kind: "word",
      word: w,
      score: wordScore(w, q),
      href: wordHref(w.transliteration),
    }));
    return [...glyphItems, ...wordItems]
      .sort((a, b) => a.score - b.score)
      .slice(0, 8);
  }, [wordResults, query]);

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    if (value.trim().length > 0) {
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setWordResults([]);
      setIsOpen(false);
    }
  }, []);

  // Debounced search execution — runs 150ms after typing stops
  useEffect(() => {
    const q = query.trim();
    if (!q) return;
    const timer = setTimeout(() => {
      setWordResults(searchWords(q, 5));
    }, 150);
    return () => clearTimeout(timer);
  }, [query]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) return;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < merged.length - 1 ? prev + 1 : prev,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case "Enter":
          e.preventDefault();
          if (selectedIndex >= 0 && merged[selectedIndex]) {
            router.push(merged[selectedIndex].href);
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
    [isOpen, merged, selectedIndex, query, router],
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

      {showResults && isOpen && merged.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-ivory dark:bg-ivory-dark border border-sandstone/30 rounded-lg shadow-lg overflow-hidden">
          {merged.map((item, index) =>
            item.kind === "glyph" ? (
              <Link
                key={`g-${item.glyph.code}`}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-start gap-3 px-4 py-2.5 hover:bg-gold/10 transition-colors ${index === selectedIndex ? "bg-gold/10" : ""} ${index !== merged.length - 1 ? "border-b border-sandstone/10" : ""}`}
              >
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-papyrus/60 border border-sandstone/20 overflow-hidden p-1">
                  <GlyphThumb glyph={item.glyph} />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-sm text-brown">
                      {item.glyph.code}
                    </span>
                    <span className="text-xs text-sandstone truncate">
                      {item.glyph.categoryName}
                    </span>
                  </div>
                  <p className="text-xs text-brown-light truncate">
                    {item.glyph.meanings[0]?.text || ""}
                  </p>
                </div>
              </Link>
            ) : (
              <Link
                key={`w-${item.word.transliteration}`}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex gap-3 px-4 py-2.5 hover:bg-gold/10 transition-colors ${index === selectedIndex ? "bg-gold/10" : ""} ${index !== merged.length - 1 ? "border-b border-sandstone/10" : ""}`}
              >
                <div className="self-start shrink-0 flex items-start justify-center rounded-lg bg-papyrus/60 border border-sandstone/20 px-2 py-1.5">
                  <Quadrat mdc={item.word.mdc} baseSize={22} disableLinks />
                </div>
                <div className="self-start flex-1 min-w-0 flex flex-col justify-start">
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-sm text-brown font-mono">
                      {translitToUnicode(item.word.transliteration)}
                    </span>
                    {item.word.grammar && (
                      <span className="text-xs text-sandstone">
                        {item.word.grammar.toLowerCase()}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-brown-light truncate">
                    {item.word.translation}
                  </p>
                </div>
              </Link>
            ),
          )}

          {query.trim() && (
            <Link
              href={`/search?q=${encodeURIComponent(query)}`}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-center text-sm text-gold hover:bg-gold/10 border-t border-sandstone/20"
            >
              See all results for &ldquo;{query}&rdquo;
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
