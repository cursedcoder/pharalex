"use client";

import { usePathname } from "next/navigation";

interface ReportIssueLinkProps {
  title?: string;
  className?: string;
}

const BASE = "https://github.com/cursedcoder/pharalex/issues/new";

export function ReportIssueLink({ title, className = "" }: ReportIssueLinkProps) {
  const pathname = usePathname();
  const pageUrl = `https://pharalex.app${pathname}`;

  const params = new URLSearchParams({
    template: "data-correction.yml",
    "page-url": pageUrl,
  });
  if (title) params.set("title", title);

  return (
    <a
      href={`${BASE}?${params}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs
        bg-sandstone/10 text-sandstone hover:bg-sandstone/20 hover:text-brown
        transition-colors ${className}`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      Report issue
    </a>
  );
}
