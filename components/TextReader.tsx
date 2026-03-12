"use client";

import { useState } from "react";
import Link from "next/link";
import type { EgyptianText, TextToken } from "@/lib/types";
import { getGlyphByCode, glyphHref } from "@/lib/glyphs";
import { Tooltip, GlyphTooltipContent } from "./Tooltip";

type DisplayMode = "hieroglyphs" | "interlinear" | "parallel";

interface TextReaderProps {
  text: EgyptianText;
  compact?: boolean;
}

interface ActiveToken {
  lineIndex: number;
  tokenIndex: number;
  token: TextToken;
}


function TokenDetail({ token, onClose }: { token: TextToken; onClose: () => void }) {
  return (
    <div className="bg-papyrus/60 border border-gold/30 rounded-xl p-4 space-y-3 mt-3">
      <div className="flex items-start justify-between gap-3">
        {/* Glyph cards */}
        <div className="flex items-end gap-4 flex-wrap">
          {token.codes.map((code, i) => {
            const glyph = getGlyphByCode(code);
            return (
              <Link
                key={`${code}-${i}`}
                href={glyphHref(code)}
                className="group flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/glyphs/${code}.svg`}
                  alt={code}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-[10px] text-sandstone font-mono group-hover:text-gold transition-colors">
                  {code}
                </span>
                {glyph?.meanings[0] && (
                  <span className="text-[10px] text-sandstone/70 text-center leading-tight max-w-[5rem]">
                    {glyph.meanings[0].text.length > 24
                      ? `${glyph.meanings[0].text.slice(0, 24)}…`
                      : glyph.meanings[0].text}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="text-sandstone hover:text-brown transition-colors text-xl leading-none shrink-0"
          aria-label="Close token detail"
        >
          ×
        </button>
      </div>

      <div className="border-t border-gold/20 pt-3 space-y-2">
        <div className="grid grid-cols-[8rem_1fr] gap-x-3 gap-y-0 items-baseline">
          <span className="text-xs text-sandstone uppercase tracking-wider font-medium">
            Transliteration
          </span>
          <span className="italic text-brown-light font-medium">{token.transliteration}</span>
        </div>
        <div className="grid grid-cols-[8rem_1fr] gap-x-3 gap-y-0 items-baseline">
          <span className="text-xs text-sandstone uppercase tracking-wider font-medium">
            Translation
          </span>
          <span className="text-brown">{token.translation}</span>
        </div>
        {token.grammar && (
          <div className="grid grid-cols-[8rem_1fr] gap-x-3 gap-y-0 items-baseline">
            <span className="text-xs text-sandstone uppercase tracking-wider font-medium">
              Grammar
            </span>
            <span className="text-xs font-mono bg-gold/10 text-sandstone px-1.5 py-0.5 rounded self-start">
              {token.grammar}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function TextReader({ text, compact = false }: TextReaderProps) {
  const [mode, setMode] = useState<DisplayMode>("interlinear");
  const [activeToken, setActiveToken] = useState<ActiveToken | null>(null);

  const glyphSize = compact ? "sm" : "md";

  function handleTokenClick(lineIndex: number, tokenIndex: number, token: TextToken) {
    if (
      activeToken?.lineIndex === lineIndex &&
      activeToken?.tokenIndex === tokenIndex
    ) {
      setActiveToken(null);
    } else {
      setActiveToken({ lineIndex, tokenIndex, token });
    }
  }

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      {!compact && (
        <div className="flex items-center gap-1 p-1 bg-ivory-dark/50 rounded-lg w-fit">
          {(["hieroglyphs", "interlinear", "parallel"] as DisplayMode[]).map((m) => (
            <button
              key={m}
              onClick={() => {
                setMode(m);
                setActiveToken(null);
              }}
              className={`
                px-3 py-1.5 rounded-md text-sm font-medium capitalize transition-all duration-150
                ${mode === m
                  ? "bg-gold text-brown shadow-sm"
                  : "text-sandstone hover:text-brown hover:bg-papyrus/50"
                }
              `}
            >
              {m}
            </button>
          ))}
        </div>
      )}

      {/* Text lines */}
      <div className={mode === "parallel" ? "space-y-4" : "space-y-6"}>
        {text.lines.map((line, lineIndex) => {
          const isActiveLine = activeToken?.lineIndex === lineIndex;

          return (
            <div key={lineIndex}>
              <div className="flex gap-3 items-start">
                {/* Line number */}
                {line.number != null && !compact && (
                  <span className="text-xs text-sandstone/60 font-mono mt-3 w-5 shrink-0 text-right select-none">
                    {line.number}
                  </span>
                )}

                <div className="flex-1 min-w-0">
                  {mode === "parallel" ? (
                    /* ── Parallel mode ────────────────────────────────────── */
                    /* Each token is a column: glyphs / transliteration / translation */
                    <div className="pb-3 border-b border-gold/15">
                      <div className="flex flex-wrap gap-x-6 gap-y-4 items-start mb-2">
                        {line.tokens.map((token, tokenIndex) => {
                          const isActive = isActiveLine && activeToken?.tokenIndex === tokenIndex;
                          return (
                            <button
                              key={tokenIndex}
                              onClick={() => handleTokenClick(lineIndex, tokenIndex, token)}
                              className={`
                                flex flex-col items-center gap-1 rounded-lg px-1.5 pt-1 pb-1.5
                                transition-all duration-150
                                ${isActive ? "bg-gold/20 ring-1 ring-gold/50" : "hover:bg-papyrus/40"}
                              `}
                            >
                              <div className="flex items-end gap-1">
                                {token.codes.map((code, ci) => {
                                  const glyph = getGlyphByCode(code);
                                  const primaryMeaning = glyph?.meanings[0]?.text;
                                  const phonetic = glyph?.transliteration[0];
                                  const description = glyph?.description;
                                  const sizeClass = glyphSize === "sm" ? "w-6 h-6" : "w-8 h-8";
                                  return (
                                    <div key={`${code}-${ci}`} className="flex flex-col items-center gap-0.5">
                                      <Tooltip
                                        content={
                                          <GlyphTooltipContent
                                            code={code}
                                            transliteration={phonetic}
                                            meaning={primaryMeaning || description}
                                          />
                                        }
                                      >
                                        <Link
                                          href={glyphHref(code)}
                                          onClick={(e) => e.stopPropagation()}
                                          className="hover:scale-110 hover:drop-shadow-md transition-transform duration-150 inline-block"
                                        >
                                          {/* eslint-disable-next-line @next/next/no-img-element */}
                                          <img
                                            src={`/glyphs/${code}.svg`}
                                            alt={code}
                                            className={`${sizeClass} object-contain`}
                                          />
                                        </Link>
                                      </Tooltip>
                                      {phonetic && (
                                        <span className="text-[10px] italic text-brown-light/70 leading-none text-center">
                                          {phonetic}
                                        </span>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                              <span className="text-sm italic text-brown-light leading-tight text-center mt-1">
                                {token.transliteration}
                              </span>
                              <span className="text-sm text-sandstone leading-tight text-center">
                                {token.translation}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                      {/* Full-line prose translation — only shown when it adds context beyond the single token */}
                      {line.lineTranslation && line.tokens.length > 1 && (
                        <p className="text-sm text-sandstone/70 italic mt-1">
                          {line.lineTranslation}
                        </p>
                      )}
                    </div>
                  ) : (
                    /* ── Hieroglyphs / Interlinear mode ───────────────────── */
                    <div className="flex flex-wrap gap-x-3 gap-y-4 items-start">
                      {line.tokens.map((token, tokenIndex) => {
                        const isActive = isActiveLine && activeToken?.tokenIndex === tokenIndex;

                        return (
                          <button
                            key={tokenIndex}
                            onClick={() => handleTokenClick(lineIndex, tokenIndex, token)}
                            className={`
                              flex flex-col items-center rounded-lg px-1.5 pt-1 pb-1.5
                              transition-all duration-150 min-w-[2rem]
                              ${isActive
                                ? "bg-gold/20 ring-1 ring-gold/50"
                                : "hover:bg-papyrus/40 cursor-pointer"
                              }
                            `}
                          >
                            {/* Per-glyph columns: each glyph above its own phonetic value */}
                            <div className="flex items-end gap-1">
                              {token.codes.map((code, ci) => {
                                const glyph = getGlyphByCode(code);
                                const primaryMeaning = glyph?.meanings[0]?.text;
                                const phonetic = glyph?.transliteration[0];
                                const description = glyph?.description;
                                const sizeClass = glyphSize === "sm" ? "w-6 h-6" : "w-8 h-8";
                                return (
                                  <div key={`${code}-${ci}`} className="flex flex-col items-center gap-0.5">
                                    <Tooltip
                                      content={
                                        <GlyphTooltipContent
                                          code={code}
                                          transliteration={phonetic}
                                          meaning={primaryMeaning || description}
                                        />
                                      }
                                    >
                                      <Link
                                        href={glyphHref(code)}
                                        onClick={(e) => e.stopPropagation()}
                                        className="hover:scale-110 hover:drop-shadow-md transition-transform duration-150 inline-block"
                                      >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                          src={`/glyphs/${code}.svg`}
                                          alt={code}
                                          className={`${sizeClass} object-contain`}
                                        />
                                      </Link>
                                    </Tooltip>
                                    {mode === "interlinear" && phonetic && (
                                      <span className="text-[10px] italic text-brown-light/70 leading-none text-center">
                                        {phonetic}
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>

                            {mode === "interlinear" && (
                              <span className="text-[11px] text-sandstone leading-tight text-center mt-1">
                                {token.translation}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Line translation (interlinear + hieroglyphs modes) */}
                  {mode !== "parallel" && line.lineTranslation && (
                    <p className="text-xs text-sandstone/70 italic border-t border-gold/15 pt-1.5 mt-2">
                      {line.lineTranslation}
                    </p>
                  )}
                </div>
              </div>

              {/* Token detail panel — inline, directly below the active line */}
              {isActiveLine && activeToken && !compact && (
                <div className={line.number != null ? "pl-8" : ""}>
                  <TokenDetail
                    token={activeToken.token}
                    onClose={() => setActiveToken(null)}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
