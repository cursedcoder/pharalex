"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { glyphHref } from "@/lib/glyphs";
import { translitToUnicode } from "@/lib/words";
import { Quadrat } from "@/components/Quadrat";
import type { SearchApiResult } from "@/app/api/search/route";

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

type MergedItem = SearchApiResult & { href: string };

export function SearchBar({
  size = "md",
  placeholder = "Search by meaning, code, or transliteration...",
  autoFocus = false,
  showResults = true,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<MergedItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const abortRef = useRef<AbortController | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    setSelectedIndex(-1);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!value.trim() || value.trim().length < 2) {
      setItems([]);
      setIsOpen(false);
      return;
    }

    setIsOpen(true);
    debounceRef.current = setTimeout(async () => {
      if (abortRef.current) abortRef.current.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(value.trim())}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        const results: MergedItem[] = (data.results ?? []).slice(0, 8).map(
          (r: SearchApiResult) => ({
            ...r,
            href: r.kind === "glyph"
              ? glyphHref(r.code)
              : r.href,
          })
        );
        setItems(results);
      } catch {
        // aborted or failed — ignore
      }
    }, 150);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) return;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case "Enter":
          e.preventDefault();
          if (selectedIndex >= 0 && items[selectedIndex]) {
            router.push(items[selectedIndex].href);
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
    [isOpen, items, selectedIndex, query, router],
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
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
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {showResults && isOpen && items.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-ivory dark:bg-ivory-dark border border-sandstone/30 rounded-lg shadow-lg overflow-hidden">
          {items.map((item, index) =>
            item.kind === "glyph" ? (
              <Link
                key={`g-${item.code}`}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-start gap-3 px-4 py-2.5 hover:bg-gold/10 transition-colors ${index === selectedIndex ? "bg-gold/10" : ""} ${index !== items.length - 1 ? "border-b border-sandstone/10" : ""}`}
              >
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-papyrus/60 border border-sandstone/20 overflow-hidden p-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/glyphs/${encodeURIComponent(item.code)}.svg`}
                    alt={item.code}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-sm text-brown">{item.code}</span>
                    <span className="text-xs text-sandstone truncate">{item.categoryName}</span>
                  </div>
                  <p className="text-xs text-brown-light truncate">{item.meanings[0]?.text || ""}</p>
                </div>
              </Link>
            ) : (
              <Link
                key={`w-${item.transliteration}`}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex gap-3 px-4 py-2.5 hover:bg-gold/10 transition-colors ${index === selectedIndex ? "bg-gold/10" : ""} ${index !== items.length - 1 ? "border-b border-sandstone/10" : ""}`}
              >
                <div className="self-start shrink-0 flex items-start justify-center rounded-lg bg-papyrus/60 border border-sandstone/20 px-2 py-1.5">
                  <Quadrat mdc={item.mdc} baseSize={22} disableLinks />
                </div>
                <div className="self-start flex-1 min-w-0 flex flex-col justify-start">
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-sm text-brown font-mono">
                      {translitToUnicode(item.transliteration)}
                    </span>
                    {item.grammar && (
                      <span className="text-xs text-sandstone">{item.grammar.toLowerCase()}</span>
                    )}
                  </div>
                  <p className="text-xs text-brown-light truncate">{item.translation}</p>
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
