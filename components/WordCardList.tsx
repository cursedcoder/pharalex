import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { WordGlyph } from "@/components/WordGlyph";
import { wordHref, translitToUnicode } from "@/lib/word-utils";

export interface WordCardItem {
  transliteration: string;
  translation: string;
  grammar: string | null;
  mdc: string;
}

interface WordCardListProps {
  words: WordCardItem[];
  max?: number;
}

export function WordCardList({ words, max }: WordCardListProps) {
  const items = max ? words.slice(0, max) : words;
  if (items.length === 0) return null;

  return (
    <div className="space-y-2">
      {items.map((word) => (
        <Link
          key={word.transliteration}
          href={wordHref(word.transliteration)}
          className="block bg-ivory-dark/50 border border-sandstone/20 rounded-lg p-3 hover:border-gold/40 hover:shadow-sm transition-all group"
        >
          {word.mdc && (
            <WordGlyph mdc={word.mdc} baseSize={24} className="mb-2" disableLinks />
          )}
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-sm font-medium text-brown group-hover:text-gold-dark transition-colors italic">
              {translitToUnicode(word.transliteration)}
            </span>
            {word.grammar && (
              <Badge variant="outline" size="sm">
                {word.grammar}
              </Badge>
            )}
          </div>
          <p className="text-sm text-brown-light mt-1 line-clamp-1">
            {word.translation}
          </p>
        </Link>
      ))}
    </div>
  );
}
