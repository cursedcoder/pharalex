"use client";

import { useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

export interface LightboxProps {
  open: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  showNav?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Lightbox({
  open,
  onClose,
  onPrev,
  onNext,
  showNav = false,
  children,
  footer,
}: LightboxProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          e.preventDefault();
          onPrev?.();
          break;
        case "ArrowRight":
          e.preventDefault();
          onNext?.();
          break;
      }
    },
    [open, onClose, onPrev, onNext],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll while lightbox is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, handleKeyDown]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brown/60 dark:bg-black/70 backdrop-blur-sm" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-ivory dark:bg-ivory-dark border border-sandstone/30 shadow-lg text-sandstone hover:text-brown transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main content */}
        <div className="bg-ivory dark:bg-ivory-dark border border-sandstone/20 rounded-2xl shadow-2xl overflow-hidden">
          {children}
        </div>

        {/* Navigation arrows */}
        {showNav && (
          <>
            {onPrev && (
              <button
                onClick={onPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 flex items-center justify-center rounded-full bg-ivory dark:bg-ivory-dark border border-sandstone/30 shadow-lg text-sandstone hover:text-gold transition-colors"
                aria-label="Previous"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 flex items-center justify-center rounded-full bg-ivory dark:bg-ivory-dark border border-sandstone/30 shadow-lg text-sandstone hover:text-gold transition-colors"
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </>
        )}

        {/* Footer (e.g., thumbnail strip) */}
        {footer && (
          <div className="mt-3 w-full">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
