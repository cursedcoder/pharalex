import type { Metadata } from "next";
import PharaohsClient from "./PharaohsClient";
import {
  getAllPharaohs,
  getAllDynasties,
  getAllPeriods,
  getPharaohStats,
} from "@/lib/pharaohs";
import type { Dynasty } from "@/lib/types";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Pharaohs of Ancient Egypt",
  description:
    "Explore the rulers of ancient Egypt — from the predynastic era to the Roman period. Browse pharaohs by dynasty, period, or search by name.",
  alternates: { canonical: "/pharaohs" },
  openGraph: {
    title: "Pharaohs of Ancient Egypt - PharaLex",
    description:
      "Explore the rulers of ancient Egypt — from the predynastic era to the Roman period. Browse pharaohs by dynasty, period, or search by name.",
    url: "/pharaohs",
  },
  twitter: {
    title: "Pharaohs of Ancient Egypt - PharaLex",
    description:
      "Explore the rulers of ancient Egypt — from the predynastic era to the Roman period. Browse pharaohs by dynasty, period, or search by name.",
  },
};

export default function PharaohsPage() {
  const allPharaohs = getAllPharaohs();
  const dynasties = getAllDynasties();
  const periods = getAllPeriods();
  const stats = getPharaohStats();

  const dynastyMap: Record<string, Dynasty> = {};
  for (const d of dynasties) {
    dynastyMap[d.id] = d;
  }

  return (
    <PharaohsClient
      allPharaohs={allPharaohs}
      dynasties={dynasties}
      periods={periods}
      stats={stats}
      dynastyMap={dynastyMap}
    />
  );
}
