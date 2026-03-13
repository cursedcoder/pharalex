import type { Metadata } from "next";
import BrowseClient from "./BrowseClient";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Browse Hieroglyphs",
  description:
    "Browse all ancient Egyptian hieroglyphs in the collection. Filter by Gardiner category, type (logogram, phonogram, determinative), or shape tag.",
  alternates: { canonical: "/browse" },
  openGraph: {
    title: "Browse Hieroglyphs - PharaLex",
    description:
      "Browse all ancient Egyptian hieroglyphs in the collection. Filter by Gardiner category, type, or shape tag.",
    url: "/browse",
  },
  twitter: {
    title: "Browse Hieroglyphs - PharaLex",
    description:
      "Browse all ancient Egyptian hieroglyphs in the collection. Filter by Gardiner category, type, or shape tag.",
  },
};

export default function BrowsePage() {
  return <BrowseClient />;
}
