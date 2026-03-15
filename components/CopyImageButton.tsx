"use client";

import { useState, useCallback, type RefObject } from "react";
import { toPng } from "html-to-image";

interface CopyImageButtonProps {
  targetRef: RefObject<HTMLElement | null>;
  className?: string;
}

export function CopyImageButton({ targetRef, className = "" }: CopyImageButtonProps) {
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");

  const handleCopy = useCallback(async () => {
    const el = targetRef.current;
    if (!el) return;

    try {
      // Safari requires ClipboardItem with a Promise created synchronously
      // within the click handler's microtask
      const item = new ClipboardItem({
        "image/png": toPng(el, { pixelRatio: 2, backgroundColor: "transparent" }).then(
          (dataUrl) => {
            const arr = Uint8Array.from(atob(dataUrl.split(",")[1]), (c) =>
              c.charCodeAt(0)
            );
            return new Blob([arr], { type: "image/png" });
          }
        ),
      });
      await navigator.clipboard.write([item]);
      setState("ok");
      setTimeout(() => setState("idle"), 1500);
    } catch {
      setState("err");
      setTimeout(() => setState("idle"), 1500);
    }
  }, [targetRef]);

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs
        transition-all duration-200 cursor-pointer select-none
        ${state === "ok"
          ? "bg-green-500/15 text-green-600"
          : state === "err"
            ? "bg-red-500/15 text-red-500"
            : "bg-sandstone/10 text-sandstone hover:bg-sandstone/20 hover:text-brown"
        } ${className}`}
      title="Copy as image"
    >
      {state === "ok" ? (
        <>
          <CheckIcon />
          Copied
        </>
      ) : state === "err" ? (
        <>
          <XIcon />
          Failed
        </>
      ) : (
        <>
          <CopyIcon />
          Copy
        </>
      )}
    </button>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
