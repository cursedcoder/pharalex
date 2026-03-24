"use client";

import { useState, useEffect, useCallback } from "react";
import { isBookmarked, toggleBookmark } from "@/lib/bookmarks";
import type { BookmarkType } from "@/lib/bookmarks";

interface BookmarkButtonProps {
  type: BookmarkType;
  id: string;
  label: string;
  size?: "sm" | "md";
}

export function BookmarkButton({ type, id, label, size = "md" }: BookmarkButtonProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isBookmarked(type, id));
  }, [type, id]);

  const handleToggle = useCallback(() => {
    const { added } = toggleBookmark(type, id, label);
    setSaved(added);
    // Dispatch event so other components (e.g., bookmarks page) can react
    window.dispatchEvent(new CustomEvent("pharalex-bookmarks-changed"));
  }, [type, id, label]);

  const sizeClasses = size === "sm"
    ? "w-8 h-8"
    : "w-10 h-10";

  const iconSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";

  return (
    <button
      onClick={handleToggle}
      aria-label={saved ? `Remove ${label} from bookmarks` : `Save ${label} to bookmarks`}
      title={saved ? "Remove from bookmarks" : "Save to bookmarks"}
      className={`
        ${sizeClasses} inline-flex items-center justify-center rounded-lg
        border transition-all focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold
        ${saved
          ? "bg-gold/15 border-gold/40 text-gold-dark hover:bg-gold/25"
          : "bg-ivory-dark/50 border-sandstone/20 text-sandstone/50 hover:text-gold hover:border-gold/30"
        }
      `}
    >
      <svg
        className={iconSize}
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill={saved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
      </svg>
    </button>
  );
}
