"use client";

import { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { searchWords, wordHref } from "@/lib/words";
import type { DictionaryWord } from "@/lib/types";
import { Quadrat } from "@/components/Quadrat";
import { Badge } from "@/components/ui/Badge";

const GRAMMAR_LABELS: Record<string, string> = {
  NOUN: "Noun", VERB: "Verb", ADJ: "Adjective", ADV: "Adverb",
  PREP: "Preposition", PRON: "Pronoun", PART: "Particle",
  CONJ: "Conjunction", INTJ: "Interjection", INTG: "Interrogative",
  IMPR: "Imperative", NUM: "Numeral", OTHER: "Other",
};

const GRAMMAR_BADGE_VARIANTS: Record<string, "gold" | "sandstone" | "outline" | "default"> = {
  NOUN: "gold", VERB: "default", ADJ: "sandstone", ADV: "sandstone",
  PREP: "outline", PRON: "outline",
};

function ResultRow({ word }: { word: DictionaryWord }) {
  return (
    <Link
      href={wordHref(word.transliteration)}
      className="group flex items-center gap-4 px-4 py-3 rounded-xl border border-gold/10 bg-papyrus/20 hover:bg-papyrus/50 hover:border-gold/35 transition-all duration-150"
    >
      <div className="flex-shrink-0 w-14 flex items-center justify-center">
        <Quadrat mdc={word.mdc} baseSize={26} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-0.5">
          <span className="font-mono font-semibold text-brown text-sm">
            {word.transliteration}
          </span>
          {word.grammar && (
            <Badge variant={GRAMMAR_BADGE_VARIANTS[word.grammar] ?? "outline"} size="sm">
              {GRAMMAR_LABELS[word.grammar] ?? word.grammar}
            </Badge>
          )}
        </div>
        <p className="text-sm text-brown-light truncate">{word.translation}</p>
      </div>
      <svg className="flex-shrink-0 w-4 h-4 text-sandstone/30 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

function WordsPageInner() {
  const [query, setQuery] = useState("");
  const [deferredQuery, setDeferredQuery] = useState("");

  // debounce 120ms
  useMemo(() => {
    const t = setTimeout(() => setDeferredQuery(query), 120);
    return () => clearTimeout(t);
  }, [query]);

  const results = useMemo(
    () => searchWords(deferredQuery, 40),
    [deferredQuery]
  );

  const hasQuery = deferredQuery.trim().length > 0;

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sandstone text-sm">
          <Link href="/" className="hover:text-gold transition-colors">PharaLex</Link>
          <span>/</span>
          <span>Words</span>
        </div>
        <h1 className="text-4xl font-display text-brown">Word Dictionary</h1>
        <p className="text-sandstone leading-relaxed">
          45,601 Middle Egyptian words — search by transliteration or English meaning.
        </p>
      </div>

      {/* Search box */}
      <div className="relative">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sandstone/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="nfr, father, beautiful…"
          className="
            w-full pl-12 pr-10 py-4 text-base rounded-2xl
            bg-ivory-dark border-2 border-sandstone/30
            focus:outline-none focus:border-gold/60
            text-brown placeholder-sandstone/40
            transition-colors
          "
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sandstone/50 hover:text-sandstone transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Results / empty states */}
      {!hasQuery ? (
        <div className="text-center py-12 text-sandstone space-y-3">
          <p className="text-5xl">𓂋</p>
          <p className="font-display text-xl text-brown-light">Start typing to search</p>
          <p className="text-sm max-w-sm mx-auto">
            Try <button onClick={() => setQuery("nfr")} className="text-gold hover:underline">nfr</button>,{" "}
            <button onClick={() => setQuery("father")} className="text-gold hover:underline">father</button>,{" "}
            <button onClick={() => setQuery("lord")} className="text-gold hover:underline">lord</button>, or{" "}
            <button onClick={() => setQuery("sun")} className="text-gold hover:underline">sun</button>
          </p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-12 text-sandstone space-y-2">
          <p className="text-4xl mb-3">𓀀</p>
          <p className="font-display text-xl text-brown-light">No results for &ldquo;{deferredQuery}&rdquo;</p>
          <p className="text-sm">Try a different transliteration or English word.</p>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-xs text-sandstone">
            {results.length === 40 ? "Top 40 results" : `${results.length} result${results.length !== 1 ? "s" : ""}`}
            {" "}for &ldquo;{deferredQuery}&rdquo;
          </p>
          {results.map((word, i) => (
            <ResultRow key={`${word.transliteration}-${i}`} word={word} />
          ))}
          {results.length === 40 && (
            <p className="text-xs text-sandstone/60 text-center pt-2">
              Refine your search to see more specific results.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function WordsClient() {
  return (
    <Suspense>
      <WordsPageInner />
    </Suspense>
  );
}
