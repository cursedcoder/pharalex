"use client";

import { useState, useEffect, useMemo, useRef, useCallback, Suspense, Fragment } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { GlyphCard } from "@/components/GlyphCard";
import dynamic from "next/dynamic";

const Quadrat = dynamic(
  () => import("@/components/Quadrat").then((m) => m.Quadrat),
  { ssr: false },
);
import type { SearchApiResult } from "@/app/api/search/route";

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

// ── Auto-detect query type ──────────────────────────────────────────────────
const GARDINER_RE = /^[A-Z][a-z]?\d+[A-Za-z]?$/;
function looksLikeGardiner(q: string): boolean {
  return GARDINER_RE.test(q.trim());
}
function looksLikeTransliteration(q: string): boolean {
  const t = q.trim();
  if (t.length > 12) return false;
  if (/\s/.test(t) && t.split(/\s+/).length > 3) return false; // too many words = English
  // MdC/translit: short, ASCII-ish, no common English patterns
  return /^[a-zA-Z .=\-]+$/.test(t) && !/^(the|and|for|with|from|that|this|have|been|which|their|about|would|there|people|could|other|after|first|under|great|where|those|still|being|place|every|found|these|whole|royal|young|woman|water|stone|black|white|heart|death|house|field|river|south|north|upper|lower)$/i.test(t);
}

// ── Word Card ───────────────────────────────────────────────────────────────
function WordCard({ result }: { result: Extract<SearchApiResult, { kind: "word" }> }) {
  return (
    <Link href={result.href} className="block group">
      <div className="bg-ivory-dark/50 border border-sandstone/20 rounded-lg p-4 h-full hover:shadow-md hover:border-gold/40 transition-all duration-200">
        <div className="w-full rounded-lg bg-papyrus/50 border border-sandstone/20 flex items-center justify-center py-3 mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform">
          <Quadrat mdc={result.mdc} baseSize={36} disableLinks />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-display text-lg font-semibold text-brown">
            {result.transliterationUnicode}
          </h3>
          {result.grammar && (
            <Badge variant={GRAMMAR_BADGE_VARIANTS[result.grammar] ?? "outline"}>
              {GRAMMAR_LABELS[result.grammar] ?? result.grammar}
            </Badge>
          )}
        </div>
        <p className="text-sm text-brown-light line-clamp-2">{result.translation}</p>
      </div>
    </Link>
  );
}

// ── Group Header ────────────────────────────────────────────────────────────
function GroupHeader({ id, title, count }: { id: string; title: string; count: number }) {
  return (
    <div id={id} className="flex items-center gap-3 mt-12 mb-3 first:mt-2 scroll-mt-16">
      <h2 className="font-display text-xl font-semibold text-brown whitespace-nowrap">{title}</h2>
      <span className="text-xs text-sandstone/60 bg-sandstone/10 px-2 py-0.5 rounded-full">{count}</span>
      <div className="flex-1 border-t border-sandstone/30" />
    </div>
  );
}

function StickyGroupNav({ sections }: { sections: { id: string; title: string; count: number }[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Track which section is visible
    const observers: IntersectionObserver[] = [];
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(s.id); },
        { rootMargin: "-80px 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  useEffect(() => {
    // Show sticky bar when sentinel scrolls out of view
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (sections.length < 2) return <div ref={sentinelRef} />;

  return (
    <>
      {/* Sentinel — when this scrolls out, sticky bar appears */}
      <div ref={sentinelRef} />

      {/* Sticky bar — zero height when hidden */}
      <div className={`sticky top-0 z-30 transition-opacity duration-200 ${
        isSticky
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}>
        <div className={`bg-ivory/95 backdrop-blur-sm border-b border-sandstone/20 py-2 ${
          isSticky ? "" : "-mb-12"
        }`} style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", paddingLeft: "calc(50vw - 50% + 1rem)", paddingRight: "calc(50vw - 50% + 1rem)" }}>
          <nav className="flex items-center justify-between">
            {sections.map((s, i) => (
              <Fragment key={s.id}>
                <button
                  onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  className={`flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors shrink-0 ${
                    active === s.id ? "text-brown" : "text-sandstone/60 hover:text-brown"
                  }`}
                >
                  <span className="font-display text-lg font-semibold">{s.title}</span>
                  <span className="text-xs text-sandstone/60 bg-sandstone/10 px-2 py-0.5 rounded-full tabular-nums">{s.count}</span>
                </button>
                {i < sections.length - 1 && <div className="flex-1 border-t border-sandstone/30 mx-3" />}
              </Fragment>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

// ── Main Search ─────────────────────────────────────────────────────────────
function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";
  const initialTab = searchParams.get("show") === "glyphs" ? "glyphs" as const : "words" as const;
  const isGardiner = searchParams.get("gardiner") === "true";

  const [query, setQuery] = useState(initialQuery);
  const [tab, setTab] = useState<"words" | "glyphs">(initialTab);
  const [results, setResults] = useState<SearchApiResult[]>([]);
  const [isSearching, setIsSearching] = useState(!!initialQuery);

  const abortRef = useRef<AbortController | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pushTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const runSearch = useCallback(async (q: string, currentTab: "words" | "glyphs", gardiner = false) => {
    if (abortRef.current) abortRef.current.abort();
    if (!q.trim() || q.trim().length < 1) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const params = new URLSearchParams({ q: q.trim() });
      // Smart search: always exact for transliteration, always fuzzy for meaning
      // The API handles both in one call
      params.set("exact", "true");
      if (gardiner) params.set("gardiner", "true");
      const res = await fetch(`/api/search?${params}`, { signal: controller.signal });
      const data = await res.json();
      setResults(data.results ?? []);
    } catch (e) {
      if ((e as Error).name !== "AbortError") setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  // Run search on URL change (skip if we just triggered it ourselves)
  useEffect(() => {
    if (skipNextEffect.current) {
      skipNextEffect.current = false;
      return;
    }
    const q = searchParams.get("q") || "";
    const show = searchParams.get("show");
    const gard = searchParams.get("gardiner") === "true";
    const t = show === "glyphs" ? "glyphs" as const : "words" as const;
    setQuery(q);
    setTab(t);
    runSearch(q, t, gard);
  }, [searchParams, runSearch]);

  const updateURL = useCallback((q: string, t: "words" | "glyphs") => {
    if (pushTimer.current) clearTimeout(pushTimer.current);
    pushTimer.current = setTimeout(() => {
      if (q.trim()) {
        const p = new URLSearchParams({ q, show: t, exact: "true" });
        router.replace(`/search?${p}`, { scroll: false });
      } else {
        router.replace(`/search?show=${t}`, { scroll: false });
      }
    }, 500);
  }, [router]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      runSearch(newQuery, tab, isGardiner);
      updateURL(newQuery, tab);
    }, 150);
  };

  const skipNextEffect = useRef(false);
  const handleTabChange = (newTab: "words" | "glyphs") => {
    setTab(newTab);
    runSearch(query, newTab);
    skipNextEffect.current = true;
    updateURL(query, newTab);
  };

  // ── Group results ───────────────────────────────────────────────────────
  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const words = results.filter((r): r is Extract<SearchApiResult, { kind: "word" }> => r.kind === "word");
    const glyphs = results.filter((r): r is Extract<SearchApiResult, { kind: "glyph" }> => r.kind === "glyph");

    if (tab === "glyphs") {
      const exactCode = glyphs.filter((g) => g.code.toLowerCase() === q);
      const other = glyphs.filter((g) => g.code.toLowerCase() !== q);
      return { exactCode, otherGlyphs: other, exactTranslit: [] as typeof words, compounds: [] as typeof words, meaningMatches: [] as typeof words };
    }

    // Words tab: group by match type
    const normQ = q.replace(/y/g, "i").replace(/j/g, "i");
    const exactTranslit = words.filter((w) => {
      const normT = w.transliteration.toLowerCase().replace(/y/g, "i").replace(/j/g, "i");
      return normT === normQ;
    });
    const compounds = words.filter((w) => {
      const normT = w.transliteration.toLowerCase().replace(/y/g, "i").replace(/j/g, "i");
      return normT !== normQ && normT.includes(normQ);
    });
    const exactTranslitSet = new Set(exactTranslit.map((w) => `${w.transliteration}-${w.mdc}`));
    const compoundSet = new Set(compounds.map((w) => `${w.transliteration}-${w.mdc}`));
    const meaningMatches = words.filter((w) => {
      const key = `${w.transliteration}-${w.mdc}`;
      return !exactTranslitSet.has(key) && !compoundSet.has(key);
    });

    return { exactTranslit, compounds, meaningMatches, exactCode: glyphs, otherGlyphs: [] as typeof glyphs };
  }, [results, query, tab]);

  const totalResults = tab === "glyphs"
    ? grouped.exactCode.length + grouped.otherGlyphs.length
    : grouped.exactTranslit.length + grouped.compounds.length + grouped.meaningMatches.length;


  return (
    <div className="min-h-screen">
      <Header hideSearch />

      <main className="py-6 sm:py-8">
        <Container>
          <div className="mb-2">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown">Search</h1>

              {/* Tabs */}
              <div className="flex gap-1 bg-sandstone/10 rounded-lg p-1">
              {(["words", "glyphs"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => handleTabChange(t)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    tab === t
                      ? "bg-ivory shadow-sm text-brown"
                      : "text-sandstone hover:text-brown"
                  }`}
                >
                  {t === "words" ? "Words" : "Glyphs"}
                </button>
              ))}
              </div>
            </div>

            {/* Search input */}
            <div className="max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder={tab === "words" ? "Transliteration or English meaning..." : "Gardiner code or description..."}
                  autoFocus
                  className="
                    w-full py-4 px-6 text-lg
                    bg-ivory dark:bg-ivory-dark
                    border border-sandstone/30 rounded-xl
                    placeholder-sandstone/60
                    focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold
                  "
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sandstone/50">
                  {isSearching ? (
                    <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                </div>
              </div>

              {!query && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-sm text-sandstone">Try:</span>
                  {(tab === "words"
                    ? ["nfr", "mry", "beloved", "Ra", "sun", "pyramid"]
                    : ["A1", "G17", "owl", "sun", "seated man"]
                  ).map((term) => (
                    <button
                      key={term}
                      onClick={() => handleSearch(term)}
                      className="px-3 py-1 text-sm bg-gold/10 text-gold-dark rounded-full hover:bg-gold/20 transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          {isSearching ? (
            <div className="flex flex-col items-center justify-center py-20 select-none">
              <div className="relative flex items-center justify-center mb-6">
                <span className="font-hieroglyph text-6xl text-gold/80 animate-[hierospin_1.8s_ease-in-out_infinite]">𓂀</span>
                <span className="font-hieroglyph text-4xl text-sandstone/50 absolute -left-12 animate-[hierofade_1.8s_ease-in-out_infinite]" style={{ animationDelay: "0.3s" }}>𓃭</span>
                <span className="font-hieroglyph text-4xl text-sandstone/50 absolute -right-12 animate-[hierofade_1.8s_ease-in-out_infinite]" style={{ animationDelay: "0.6s" }}>𓆣</span>
              </div>
              <p className="text-sandstone text-sm tracking-widest uppercase">Consulting the scrolls…</p>
            </div>
          ) : query && totalResults > 0 ? (
            <div>
              {/* Words tab results */}
              {tab === "words" && (
                <>
                  <StickyGroupNav sections={[
                    ...(grouped.exactTranslit.length > 0 ? [{ id: "exact", title: "Exact matches", count: grouped.exactTranslit.length }] : []),
                    ...(grouped.compounds.length > 0 ? [{ id: "compounds", title: "Compounds", count: grouped.compounds.length }] : []),
                    ...(grouped.meaningMatches.length > 0 ? [{ id: "meanings", title: "Meanings", count: grouped.meaningMatches.length }] : []),
                  ]} />
                  {grouped.exactTranslit.length > 0 && (
                    <>
                      <GroupHeader id="exact" title="Exact transliteration matches" count={grouped.exactTranslit.length} />
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {grouped.exactTranslit.map((r, i) => (
                          <WordCard key={`et-${r.transliteration}-${r.mdc}-${i}`} result={r} />
                        ))}
                      </div>
                    </>
                  )}

                  {grouped.compounds.length > 0 && (
                    <>
                      <GroupHeader id="compounds" title={`Compound words containing "${query}"`} count={grouped.compounds.length} />
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {grouped.compounds.map((r, i) => (
                          <WordCard key={`cp-${r.transliteration}-${r.mdc}-${i}`} result={r} />
                        ))}
                      </div>
                    </>
                  )}

                  {grouped.meaningMatches.length > 0 && (
                    <>
                      <GroupHeader id="meanings" title="Meaning matches" count={grouped.meaningMatches.length} />
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {grouped.meaningMatches.map((r, i) => (
                          <WordCard key={`mm-${r.transliteration}-${r.mdc}-${i}`} result={r} />
                        ))}
                      </div>
                    </>
                  )}

                </>
              )}

              {/* Glyphs tab results */}
              {tab === "glyphs" && (
                <>
                  {grouped.exactCode.length > 0 && (
                    <>
                      <GroupHeader id="exact-code" title="Exact code matches" count={grouped.exactCode.length} />
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {grouped.exactCode.map((r) => (
                          <GlyphCard
                            key={`g-${r.code}`}
                            glyph={{
                              code: r.code, unicode: r.unicode, category: r.category,
                              categoryName: r.categoryName, description: r.description,
                              transliteration: r.transliteration,
                              meanings: r.meanings.map((m) => ({ text: m.text, type: m.type as "logogram" | "phonogram" | "determinative" | "other" })),
                              related: r.related,
                              source: r.source as "wiktionary" | "unicode" | "both" | undefined,
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  {grouped.otherGlyphs.length > 0 && (
                    <>
                      <GroupHeader id="desc-matches" title="Description matches" count={grouped.otherGlyphs.length} />
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {grouped.otherGlyphs.map((r) => (
                          <GlyphCard
                            key={`g-${r.code}`}
                            glyph={{
                              code: r.code, unicode: r.unicode, category: r.category,
                              categoryName: r.categoryName, description: r.description,
                              transliteration: r.transliteration,
                              meanings: r.meanings.map((m) => ({ text: m.text, type: m.type as "logogram" | "phonogram" | "determinative" | "other" })),
                              related: r.related,
                              source: r.source as "wiktionary" | "unicode" | "both" | undefined,
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          ) : query && !isSearching ? (
            <div className="text-center py-12">
              <div className="font-hieroglyph text-6xl text-sandstone/30 mb-4">𓂝</div>
              <p className="text-sandstone mb-4">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-sm text-sandstone/70">
                {tab === "words"
                  ? "Try a different transliteration or English meaning."
                  : "Try a Gardiner code (like A1) or description (like owl)."}
              </p>
            </div>
          ) : !query ? (
            <div className="text-center py-12">
              <div className="font-hieroglyph text-6xl text-sandstone/30 mb-4">𓁹</div>
              <p className="text-sandstone">
                {tab === "words"
                  ? "Type a transliteration or English meaning to search words"
                  : "Type a Gardiner code or description to search glyphs"}
              </p>
            </div>
          ) : null}
        </Container>
      </main>
    </div>
  );
}

export default function SearchClient() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen">
          <Header hideSearch />
          <main className="py-8 sm:py-12">
            <Container>
              <div className="animate-pulse">
                <div className="h-10 bg-sandstone/20 rounded-lg w-64 mb-4" />
                <div className="h-14 bg-sandstone/20 rounded-xl max-w-2xl" />
              </div>
            </Container>
          </main>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
