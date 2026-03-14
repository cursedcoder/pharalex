/**
 * Detects and strips leaked MdC transliteration prefixes from Vygus translations.
 *
 * Many compound-word entries in the Vygus dictionary have transliterations that
 * cover only part of the Egyptian compound. The remaining MdC token(s) leak into
 * the start of the translation field, e.g.:
 *
 *   transliteration: "iry"   translation: "xt Overseer, Administrator"
 *                                          ^^^ leaked MdC (ḫt = "thing")
 *
 * This module detects those prefixes by cross-referencing against known
 * transliterations in the dictionary and strips them.
 */

/**
 * English words that could be false-positive matches (they exist as transliterations
 * but are legitimate English words when starting a translation).
 */
const ENGLISH_WORDS = new Set([
  // Articles, conjunctions, prepositions, pronouns
  "a", "an", "or", "so", "at", "in", "on", "to", "be", "do", "go", "if", "is",
  "it", "me", "my", "no", "of", "up", "us", "we", "as", "am", "by", "he", "hi",
  "lo", "oh", "ok", "the", "and", "but", "for", "not", "all", "any", "can", "had",
  "has", "her", "his", "how", "its", "let", "may", "new", "now", "old", "see",
  "way", "who", "did", "get", "him", "man", "our", "say", "she", "too", "use",
  "was", "are", "one", "two", "own", "per", "yet", "nor", "far", "few", "due",

  // Common English verbs/adjectives/nouns that could start translations
  "sift", "gain", "fall", "make", "set", "lay", "cut", "put", "cast", "hold",
  "draw", "back", "down", "fire", "food", "gold", "well", "good", "name", "king",
  "lord", "seal", "head", "part", "hand", "side", "half", "fair", "kind", "firm",

  // Short English words WITHOUT e/o/u that could be false positives
  "pay", "dry", "cry", "fry", "pry", "try", "fly", "ply", "shy", "sky", "sly",
  "spy", "sty", "why", "wry", "gym", "nay", "ray", "bay", "day", "hay", "jaw",
  "law", "may", "raw", "saw", "war", "way", "gap", "lap", "map", "nap", "rap",
  "sap", "tap", "zap", "bad", "dad", "mad", "pad", "sad", "bag", "gag", "rag",
  "tag", "wag", "ban", "can", "fan", "man", "pan", "ran", "tan", "van", "bar",
  "car", "far", "jar", "tar", "bat", "cat", "fat", "hat", "mat", "pat", "rat",
  "sat", "vat", "ax", "say", "lay",

  // Longer English words that might match
  "dead", "meat", "milk", "salt", "wine", "beer", "bird", "fish", "boat", "bone",
  "bull", "bear", "calf", "city", "corn", "dark", "dirt", "door", "drum", "dust",
  "east", "face", "farm", "fast", "fate", "feed", "feel", "fill", "find", "flat",
  "flow", "fold", "folk", "foot", "form", "fort", "four", "free", "from", "full",
  "gate", "gift", "give", "glad", "goat", "gone", "grab", "gray", "grew", "grip",
  "grow", "gulf", "hail", "hair", "hall", "halt", "hang", "hard", "harm", "hate",
  "have", "heal", "heap", "hear", "heat", "held", "help", "herb", "here", "hero",
  "hide", "high", "hill", "hole", "holy", "home", "hood", "hook", "hope", "horn",
  "host", "huge", "hull", "hung", "hunt", "hurt", "hymn", "idea", "inch", "iron",
  "isle", "jack", "jail", "join", "joke", "jump", "jury", "just", "keen", "keep",
  "kick", "knot", "know", "lace", "lack", "laid", "lake", "lamb", "lamp", "land",
  "lane", "last", "late", "lead", "leaf", "lean", "left", "lend", "less", "life",
  "lift", "like", "limb", "lime", "line", "link", "lion", "list", "live", "load",
  "lock", "long", "look", "lose", "loss", "lost", "loud", "love", "luck", "made",
  "mail", "main", "male", "many", "mark", "mass", "mate", "meal", "mean", "meet",
  "melt", "mere", "mesh", "mile", "mind", "mine", "miss", "mode", "mold", "mood",
  "moon", "more", "moss", "most", "move", "much", "myth", "near", "neat", "need",
  "nest", "next", "nice", "nine", "node", "none", "noon", "norm", "nose", "note",
  "odds", "once", "only", "open", "oral", "oven", "over", "pace", "pack", "page",
  "paid", "pain", "pair", "palm", "park", "pass", "past", "path", "peak", "peel",
  "pick", "pile", "pine", "pink", "pipe", "plan", "play", "plot", "plug", "plus",
  "pole", "poll", "pond", "pool", "poor", "port", "pose", "post", "pour", "pray",
  "pull", "pump", "pure", "push", "quit", "race", "rage", "rail", "rain", "rank",
  "rare", "rate", "read", "real", "rear", "rely", "rent", "rest", "rice", "rich",
  "ride", "ring", "rise", "risk", "road", "rock", "role", "roll", "roof", "room",
  "root", "rope", "rose", "rule", "rush", "safe", "said", "sake", "same", "sand",
  "save", "seat", "seed", "seek", "seem", "self", "sell", "send", "shed", "ship",
  "shop", "shot", "show", "shut", "sick", "sign", "silk", "site", "size", "skin",
  "slip", "slow", "snow", "soap", "sock", "soft", "soil", "sold", "sole", "some",
  "song", "soon", "sort", "soul", "spin", "spot", "star", "stay", "stem", "step",
  "stir", "stop", "such", "suit", "sure", "swim", "tail", "take", "tale", "talk",
  "tall", "tank", "tape", "task", "team", "tear", "tell", "tend", "term", "test",
  "text", "than", "them", "then", "they", "thin", "this", "thus", "tide", "till",
  "time", "tiny", "told", "toll", "tone", "took", "tool", "tops", "tore", "torn",
  "tour", "town", "trap", "tree", "trim", "trip", "true", "tube", "tune", "turn",
  "twin", "type", "ugly", "unit", "upon", "urge", "used", "user", "vale", "vary",
  "vast", "verb", "very", "view", "vine", "vote", "wage", "wait", "wake", "walk",
  "wall", "want", "warm", "warn", "wash", "wave", "weak", "wear", "week", "went",
  "were", "west", "what", "when", "whom", "wide", "wife", "wild", "will", "wind",
  "wing", "wire", "wise", "wish", "with", "wood", "word", "wore", "work", "worm",
  "worn", "wrap", "yard", "year", "zero", "zone",

  // 5+ letter common words
  "count", "point", "place", "under", "water", "world", "other", "young", "great",
  "sweet", "after", "below", "above", "right", "early", "human", "seven", "three",
  "organ", "child", "piece", "grass", "plant", "paper", "charm", "cloth", "chief",
  "dream", "power", "enemy", "flesh", "fruit", "grain", "green", "guard", "craft",
  "inner", "joint", "large", "light", "metal", "night", "nurse", "order", "owner",
  "press", "queen", "river", "royal", "round", "shape", "slave", "small", "south",
  "spell", "staff", "stand", "stone", "storm", "sugar", "thick", "title", "tower",
  "upper", "crown", "dress", "ivory", "chest", "price", "value", "death", "feast",
  "wound", "bring", "thing", "think", "black", "white", "carry", "clear", "clean",
  "close", "dance", "drink", "drive", "false", "final", "first", "fixed", "fresh",
  "happy", "heavy", "known", "level", "local", "lower", "major", "minor", "mouth",
  "north", "paint", "plain", "sharp", "short", "since", "spend", "split", "steep",
  "still", "store", "swamp", "swift", "teach", "their", "there", "these", "thick",
  "those", "touch", "trade", "trust", "truth", "twist", "waste", "watch", "whole",
  "birth", "bread", "break", "brick", "broad", "brush", "catch", "chain", "chair",
  "check", "cream", "cross", "curve", "earth", "eight", "exact", "extra", "feast",
  "field", "fight", "flame", "flesh", "float", "floor", "force", "frame", "front",
  "glass", "grace", "grand", "grant", "group", "harsh", "heart", "hence", "honor",
  "house", "image", "judge", "knife", "later", "laugh", "limit", "march", "match",
  "model", "moral", "naval", "noble", "offer", "panel", "party", "patch", "pause",
  "peace", "phase", "pilot", "pitch", "plain", "plate", "pride", "prime", "print",
  "proof", "proud", "prove", "quick", "quiet", "quite", "raise", "range", "rapid",
  "reach", "reign", "reply", "rider", "river", "rough", "royal", "ruler", "scene",
  "scope", "sense", "serve", "seven", "shade", "shall", "share", "shelf", "shell",
  "shift", "shirt", "shock", "shore", "sight", "sixth", "sixty", "skill", "sleep",
  "slide", "smart", "smell", "smoke", "snake", "solid", "solve", "sorry", "sound",
  "space", "spare", "speak", "speed", "sport", "spray", "stage", "stake", "steam",
  "steel", "steep", "stern", "stick", "stock", "storm", "story", "strip", "stuck",
  "study", "style", "sugar", "super", "surge", "swear", "sweep", "sword", "teeth",
  "tenth", "theme", "thick", "throw", "tight", "today", "total", "tough", "trace",
  "track", "trail", "train", "trait", "treat", "trend", "trial", "tribe", "trick",
  "troop", "truck", "truly", "under", "union", "unity", "until", "usual", "valid",
  "vital", "vivid", "voice", "waste", "water", "weigh", "wheel", "where", "which",
  "while", "white", "whole", "whose", "woman", "women", "world", "worry", "worth",
  "would", "write", "wrong", "youth",

  // Words likely to start Egyptological descriptions
  "sacred", "divine", "temple", "statue", "copper", "silver", "bronze", "linen",
  "coffin", "falcon", "jackal", "scarab", "basket", "desert", "pillar",
  "hidden", "seated", "raised", "joined", "double", "single", "making",
  "having", "giving", "taking", "coming", "going",
]);

const TOKEN_RE = /^[a-zA-Z0-9.=]+$/;

/**
 * Check if a token looks like it could be an MdC transliteration rather than English.
 * Uses vowel analysis: English words typically contain 'e', 'o', 'u' vowels,
 * while MdC transliterations are consonantal (only 'a', 'i', 'w' as semi-vowels).
 */
function looksConsonantal(token: string): boolean {
  // If it contains English-only vowels (e, o, u), likely English
  return !/[eouEOU]/.test(token);
}

/**
 * Detect and strip leaked MdC transliteration prefix(es) from a translation string.
 *
 * @param translation - The translation text to clean
 * @param knownTranslits - Set of known transliterations (lowercased, dots stripped)
 * @returns The cleaned translation, or the original if no leak detected
 */
export function stripLeakedMdC(
  translation: string,
  knownTranslits: Set<string>,
): { cleaned: string; stripped: string | null } {
  const parts = translation.split(" ");
  if (parts.length < 2) return { cleaned: translation, stripped: null };

  // Try stripping 1-3 leading tokens
  for (let n = 1; n <= Math.min(3, parts.length - 1); n++) {
    const candidateTokens = parts.slice(0, n);
    const rest = parts.slice(n).join(" ");

    // All candidate tokens must look like MdC
    const allMdC = candidateTokens.every((token) => {
      if (token.length < 2 || token.length > 12) return false;
      if (!TOKEN_RE.test(token)) return false;
      if (ENGLISH_WORDS.has(token.toLowerCase())) return false;

      const key = token.toLowerCase().replace(/\./g, "");
      if (!knownTranslits.has(key)) return false;

      // Must be consonantal (no e/o/u) to avoid English false positives
      return looksConsonantal(token);
    });

    if (!allMdC) continue;

    // The remaining text must be non-empty
    if (!rest.trim()) continue;

    // Guard: if the rest itself starts with another MdC-like consonantal token
    // that is NOT a known transliteration, we might be mid-phrase — skip.
    // But if it starts with something that looks English, accept.
    const restFirstWord = rest.split(" ")[0]?.toLowerCase() ?? "";
    const restIsAlsoMdC =
      looksConsonantal(restFirstWord) &&
      knownTranslits.has(restFirstWord.replace(/\./g, "")) &&
      !ENGLISH_WORDS.has(restFirstWord);

    // If rest also starts with MdC, try stripping more tokens (handled by loop)
    // Only accept single-token strip if rest looks like English
    if (n === 1 && restIsAlsoMdC) continue;

    return { cleaned: rest, stripped: candidateTokens.join(" ") };
  }

  return { cleaned: translation, stripped: null };
}

/**
 * Build the set of known transliterations from words data.
 */
export function buildTranslitSet(
  words: Array<{ transliteration: string }>,
): Set<string> {
  const set = new Set<string>();
  for (const w of words) {
    // Add each word's transliteration and its individual tokens
    const normalized = w.transliteration.toLowerCase().replace(/[. ]/g, "");
    set.add(normalized);
    // Also add individual tokens from compound transliterations
    for (const token of w.transliteration.split(/[. ]+/)) {
      if (token.length >= 2) {
        set.add(token.toLowerCase());
      }
    }
  }
  return set;
}
