import type { DictionaryWord } from "@/lib/types";
import wordsJson from "@/lib/data/words.json";

const WORDS = wordsJson as DictionaryWord[];

export function getAllWords(): DictionaryWord[] {
  return WORDS;
}

export function getWordsByTransliteration(transliteration: string): DictionaryWord[] {
  return WORDS.filter((w) => w.transliteration === transliteration);
}

export function searchWords(query: string): DictionaryWord[] {
  const q = query.toLowerCase();
  return WORDS.filter(
    (w) =>
      w.transliteration.toLowerCase().includes(q) ||
      w.translation.toLowerCase().includes(q)
  );
}

export function getWordsByGrammar(grammar: string): DictionaryWord[] {
  return WORDS.filter((w) => w.grammar === grammar);
}

export function getWordsByGardinerCode(code: string): DictionaryWord[] {
  return WORDS.filter((w) => w.gardinerCodes.includes(code));
}
