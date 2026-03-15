"use client";

import { useState, useRef, useEffect } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  searchable?: boolean;
  className?: string;
}

export function Select({
  value,
  onChange,
  options,
  placeholder = "Select...",
  searchable = false,
  className = "",
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Focus search on open
  useEffect(() => {
    if (open && searchable && searchRef.current) {
      searchRef.current.focus();
    }
  }, [open, searchable]);

  const selectedLabel = options.find((o) => o.value === value)?.label ?? placeholder;

  const filtered = search
    ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()))
    : options;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => {
          setOpen(!open);
          setSearch("");
        }}
        className={`
          flex items-center justify-between gap-2 w-full
          px-3 py-2 text-sm rounded-lg text-left
          bg-ivory-dark border border-sandstone/30
          hover:border-sandstone/50 transition-colors
          focus:outline-none focus:ring-2 focus:ring-gold/50
          ${value ? "text-brown" : "text-sandstone"}
        `}
      >
        <span className="truncate">{selectedLabel}</span>
        <svg
          className={`w-4 h-4 text-sandstone/60 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 w-full min-w-[200px] bg-ivory border border-sandstone/30 rounded-xl shadow-lg overflow-hidden">
          {/* Search input */}
          {searchable && (
            <div className="p-2 border-b border-sandstone/15">
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full px-2.5 py-1.5 text-sm rounded-md bg-ivory-dark border border-sandstone/20 text-brown placeholder:text-sandstone/50 focus:outline-none focus:ring-1 focus:ring-gold/40"
              />
            </div>
          )}

          {/* Options */}
          <div className="max-h-[280px] overflow-y-auto py-1">
            {filtered.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                  setSearch("");
                }}
                className={`
                  w-full text-left px-3 py-2 text-sm transition-colors
                  ${option.value === value
                    ? "bg-gold/15 text-gold-dark font-medium"
                    : "text-brown hover:bg-papyrus/50"
                  }
                `}
              >
                {option.label}
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="px-3 py-2 text-sm text-sandstone/60 italic">No results</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
