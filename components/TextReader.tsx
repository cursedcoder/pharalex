"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import type { EgyptianText, TextToken } from "@/lib/types";
import { mdcToCodes } from "@/lib/mdc";
import { getGlyphByCode, glyphHref } from "@/lib/glyphs";
import { Quadrat, getWordWidth } from "./Quadrat";
import { Tooltip, GlyphTooltipContent } from "./Tooltip";

type DisplayMode = "hieroglyphs" | "parallel";

interface TextReaderProps {
  text: EgyptianText;
  compact?: boolean;
}

interface ActiveToken {
  lineIndex: number;
  tokenIndex: number;
  token: TextToken;
}

/** Dot connector rendered between two word boxes. */
function DotConnector() {
  return (
    <div className="flex items-center self-stretch px-2 shrink-0">
      <span className="text-gold/70 text-base select-none leading-none" aria-hidden>·</span>
    </div>
  );
}

/** Small icon shown at the end of a wrapped row to indicate continuation. */
function WrapBreakIndicator() {
  return (
    <div className="flex items-center self-stretch pl-2 select-none shrink-0">
      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-papyrus border border-stone-300/60 text-sandstone/50 text-[10px] font-semibold">
        ↵
      </div>
    </div>
  );
}

/** A single word box: outline containing glyphs + transliteration + translation stacked. */
function WordBox({
  token,
  isActive,
  isParallel,
  baseSize,
  onClick,
}: {
  token: TextToken;
  isActive: boolean;
  isParallel: boolean;
  baseSize: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={`Word: ${token.transliteration}`}
      className={`
        group relative flex flex-col items-center rounded-xl border transition-all duration-150 px-2 pt-2 pb-1.5 shrink-0
        ${isActive
          ? "bg-gold/10 border-gold/50 shadow-sm"
          : "border-stone-300/50 hover:border-gold/40 hover:bg-gold/5"
        }
      `}
    >
      {/* Glyphs */}
      <div className="flex items-end justify-center">
        <Quadrat mdc={token.mdc} baseSize={baseSize} />
      </div>

      {isParallel && (
        <>
          {/* Divider */}
          <div className="w-full border-t border-stone-300/50 mt-1.5 mb-1" />
          {/* Transliteration */}
          <span className="text-xs italic text-brown-light font-medium leading-tight text-center">
            {token.transliteration}
          </span>
          {/* Translation */}
          <span className="text-[10px] text-sandstone/70 leading-tight text-center mt-0.5">
            {token.translation}
          </span>
        </>
      )}
    </button>
  );
}

export function TextReader({ text, compact = false }: TextReaderProps) {
  const [mode, setMode] = useState<DisplayMode>("parallel");
  const [activeToken, setActiveToken] = useState<ActiveToken | null>(null);

  const baseSize = compact ? 28 : 36;
  const isParallel = mode === "parallel";

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
          {(["hieroglyphs", "parallel"] as DisplayMode[]).map((m) => (
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
      <div className="space-y-6">
        {text.lines.map((line, lineIndex) => {
          const isActiveLine = activeToken?.lineIndex === lineIndex;

          return (
            <div key={lineIndex}>
              <div className="flex gap-3 items-start">
                {/* Line number */}
                {!compact && (
                  <span className="text-xs text-sandstone/60 font-mono mt-3 w-5 shrink-0 text-right select-none">
                    {lineIndex + 1}
                  </span>
                )}

                <div className="flex-1 min-w-0 pb-3 border-b border-gold/15">
                  {/* Token rows */}
                  <div className="flex flex-wrap items-start gap-y-3 gap-x-0">
                    {line.tokens.map((token, tokenIndex) => {
                      const isActive = isActiveLine && activeToken?.tokenIndex === tokenIndex;
                      const isLast = tokenIndex === line.tokens.length - 1;

                      return (
                        <div key={tokenIndex} className="flex items-stretch">
                          <WordBox
                            token={token}
                            baseSize={baseSize}
                            isActive={isActive}
                            isParallel={isParallel}
                            onClick={() => handleTokenClick(lineIndex, tokenIndex, token)}
                          />
                          {!isLast && <DotConnector />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Line translation */}
                  {line.lineTranslation && (
                    <p className="text-xs text-sandstone/70 italic pt-2 mt-1">
                      {line.lineTranslation}
                    </p>
                  )}
                </div>
              </div>

              {/* Token detail panel */}
              {isActiveLine && activeToken && !compact && (
                <div className="pl-8">
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

function TokenDetail({ token, onClose }: { token: TextToken; onClose: () => void }) {
  const codes = mdcToCodes(token.mdc);
  return (
    <div className="bg-papyrus/60 border border-gold/30 rounded-xl p-4 space-y-3 mt-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-end gap-4 flex-wrap">
          {codes.map((code, i) => {
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
        <div className="grid grid-cols-[8rem_1fr] gap-x-3 items-baseline">
          <span className="text-xs text-sandstone uppercase tracking-wider font-medium">MdC</span>
          <span className="font-mono text-xs text-sandstone/80">{token.mdc}</span>
        </div>
        <div className="grid grid-cols-[8rem_1fr] gap-x-3 items-baseline">
          <span className="text-xs text-sandstone uppercase tracking-wider font-medium">Transliteration</span>
          <span className="italic text-brown-light font-medium">{token.transliteration}</span>
        </div>
        <div className="grid grid-cols-[8rem_1fr] gap-x-3 items-baseline">
          <span className="text-xs text-sandstone uppercase tracking-wider font-medium">Translation</span>
          <span className="text-brown">{token.translation}</span>
        </div>
        {token.grammar && (
          <div className="grid grid-cols-[8rem_1fr] gap-x-3 items-baseline">
            <span className="text-xs text-sandstone uppercase tracking-wider font-medium">Grammar</span>
            <span className="text-xs font-mono bg-gold/10 text-sandstone px-1.5 py-0.5 rounded self-start">
              {token.grammar}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
