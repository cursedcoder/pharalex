/**
 * Lemma clustering: assigns a `lemmaId` to each DictionaryWord entry.
 *
 * Words with the same transliteration but genuinely different meanings
 * (e.g. xprw "form, shape" vs xprw "successors") get different lemmaIds
 * so they can be rendered on separate pages.
 *
 * Algorithm:
 *   1. Group entries by transliteration
 *   2. Extract unique senses (grammar||translation pairs)
 *   3. Cluster senses by translation keyword overlap (transitive closure)
 *   4. Largest cluster → lemmaId = "" (primary, backward-compatible URL)
 *   5. Smaller clusters → lemmaId = first 4 hex chars of MD5(canonical translation)
 */

import { createHash } from "node:crypto";

interface WordEntry {
  transliteration: string;
  translation: string;
  grammar: string | null;
  [key: string]: unknown;
}

const STOP_WORDS = new Set([
  "a", "an", "the", "of", "in", "to", "for", "and", "or", "is", "be",
  "with", "by", "on", "at", "from", "as", "it", "its", "that", "this",
  "not", "no", "but", "do", "does", "did", "was", "were", "been", "being",
  "have", "has", "had", "having", "will", "shall", "would", "should",
  "may", "might", "can", "could", "etc", "also", "very", "much", "more",
  "most", "all", "any", "some", "many", "few", "other", "another",
  "one", "two", "three", "four", "who", "what", "which", "where", "when",
  "how", "why", "up", "out", "into", "over", "under", "about", "between",
]);

/** Extract significant keywords from a translation string. */
function keywords(translation: string): Set<string> {
  const words = translation
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
  return new Set(words);
}

/** MD5 hash, first 4 hex chars. */
function shortHash(s: string): string {
  return createHash("md5").update(s).digest("hex").slice(0, 4);
}

/**
 * Union-Find data structure for transitive clustering.
 */
class UnionFind {
  private parent: number[];
  private rank: number[];

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  find(x: number): number {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  union(a: number, b: number): void {
    const ra = this.find(a);
    const rb = this.find(b);
    if (ra === rb) return;
    if (this.rank[ra] < this.rank[rb]) {
      this.parent[ra] = rb;
    } else if (this.rank[ra] > this.rank[rb]) {
      this.parent[rb] = ra;
    } else {
      this.parent[rb] = ra;
      this.rank[ra]++;
    }
  }
}

/**
 * Assign lemmaIds to all word entries in-place.
 * Returns the number of transliterations that were split into multiple lemmas.
 */
export function assignLemmaIds(words: WordEntry[]): number {
  // Group entries by transliteration
  const groups = new Map<string, WordEntry[]>();
  for (const w of words) {
    const g = groups.get(w.transliteration);
    if (g) g.push(w);
    else groups.set(w.transliteration, [w]);
  }

  let splitCount = 0;

  for (const [, entries] of groups) {
    // Extract unique senses
    const senseMap = new Map<string, { grammar: string | null; translation: string; kw: Set<string>; entries: WordEntry[] }>();
    for (const e of entries) {
      const key = `${e.grammar ?? ""}||${e.translation.toLowerCase().trim()}`;
      if (!senseMap.has(key)) {
        senseMap.set(key, {
          grammar: e.grammar,
          translation: e.translation,
          kw: keywords(e.translation),
          entries: [],
        });
      }
      senseMap.get(key)!.entries.push(e);
    }

    const senses = [...senseMap.values()];

    // Single sense → all entries get empty lemmaId
    if (senses.length <= 1) {
      for (const e of entries) (e as Record<string, unknown>).lemmaId = "";
      continue;
    }

    // Cluster senses by keyword overlap using union-find
    const uf = new UnionFind(senses.length);
    for (let i = 0; i < senses.length; i++) {
      for (let j = i + 1; j < senses.length; j++) {
        // Check if any keyword is shared
        for (const kw of senses[i].kw) {
          if (senses[j].kw.has(kw)) {
            uf.union(i, j);
            break;
          }
        }
      }
    }

    // Group senses by cluster root
    const clusters = new Map<number, typeof senses>();
    for (let i = 0; i < senses.length; i++) {
      const root = uf.find(i);
      const c = clusters.get(root);
      if (c) c.push(senses[i]);
      else clusters.set(root, [senses[i]]);
    }

    // Single cluster after merging → all entries get empty lemmaId
    if (clusters.size <= 1) {
      for (const e of entries) (e as Record<string, unknown>).lemmaId = "";
      continue;
    }

    splitCount++;

    // Sort clusters: largest first (by number of entries), then by earliest entry index for stability
    const clusterList = [...clusters.values()].sort((a, b) => {
      const countA = a.reduce((s, sense) => s + sense.entries.length, 0);
      const countB = b.reduce((s, sense) => s + sense.entries.length, 0);
      if (countB !== countA) return countB - countA; // largest first
      // Tie-break: earliest entry in original array
      const idxA = Math.min(...a.flatMap((s) => s.entries.map((e) => entries.indexOf(e))));
      const idxB = Math.min(...b.flatMap((s) => s.entries.map((e) => entries.indexOf(e))));
      return idxA - idxB;
    });

    // Assign lemmaIds
    for (let ci = 0; ci < clusterList.length; ci++) {
      const cluster = clusterList[ci];
      let id: string;
      if (ci === 0) {
        // Primary cluster: empty lemmaId (backward-compatible URL)
        id = "";
      } else {
        // Secondary: hash of shortest translation in cluster
        const canonical = cluster
          .map((s) => s.translation)
          .sort((a, b) => a.length - b.length)[0];
        id = shortHash(canonical);
      }

      for (const sense of cluster) {
        for (const e of sense.entries) {
          (e as Record<string, unknown>).lemmaId = id;
        }
      }
    }

    // Check for hash collisions within this transliteration
    const usedHashes = new Set<string>();
    for (let ci = 1; ci < clusterList.length; ci++) {
      const cluster = clusterList[ci];
      const id = (cluster[0].entries[0] as Record<string, unknown>).lemmaId as string;
      if (usedHashes.has(id)) {
        // Collision: append cluster index to disambiguate
        const newId = id + ci;
        for (const sense of cluster) {
          for (const e of sense.entries) {
            (e as Record<string, unknown>).lemmaId = newId;
          }
        }
      }
      usedHashes.add(id);
    }
  }

  return splitCount;
}
