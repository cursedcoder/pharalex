export interface GuidePage {
  slug: string;
  title: string;
  description: string;
  section: string;
  order: number;
  content: string;
}

export interface GuideSection {
  id: string;
  title: string;
  order: number;
}

export const GUIDE_SECTIONS: GuideSection[] = [
  { id: "basics", title: "Basics", order: 1 },
  { id: "signs", title: "Signs & Categories", order: 2 },
  { id: "using-pharalex", title: "Using PharaLex", order: 3 },
];

export const GUIDE_PAGES: GuidePage[] = [
  {
    slug: "introduction",
    title: "Introduction to Hieroglyphs",
    description: "A brief overview of the ancient Egyptian writing system, its history, and how it works.",
    section: "basics",
    order: 1,
    content: `
<p>Egyptian hieroglyphs are one of the oldest writing systems in the world, used for over 3,500 years — from roughly 3200 BCE until the late 4th century CE. The word "hieroglyph" comes from the Greek <em>hieroglyphikos</em>, meaning "sacred carving."</p>

<h2 id="three-scripts">Three Scripts</h2>
<p>The ancient Egyptians used three related scripts:</p>
<ul>
  <li><strong>Hieroglyphic</strong> — the formal, pictorial script carved on temple walls and monuments</li>
  <li><strong>Hieratic</strong> — a cursive shorthand used by priests and scribes on papyrus</li>
  <li><strong>Demotic</strong> — an even more abbreviated script for everyday use in the Late Period</li>
</ul>
<p>PharaLex focuses on hieroglyphic signs, the most visually distinctive of the three.</p>

<h2 id="how-it-works">How the Writing System Works</h2>
<p>Hieroglyphs are not purely pictographic — they combine three functional types:</p>
<ul>
  <li><strong>Logograms</strong> (ideograms) — signs that represent a whole word. For example, the sun disc 𓇳 can mean "Ra" or "sun."</li>
  <li><strong>Phonograms</strong> — signs that represent sounds (one, two, or three consonants). The owl 𓅓 represents the single consonant <em>m</em>.</li>
  <li><strong>Determinatives</strong> — silent signs placed at the end of a word to indicate its semantic category (e.g., a walking-legs sign after a verb of motion).</li>
</ul>
<p>Most words are written with a combination of phonograms (to spell the consonants) followed by a determinative (to clarify meaning). Vowels were generally not written.</p>

<h2 id="reading-direction">Reading Direction</h2>
<p>Hieroglyphs can be written left-to-right, right-to-left, or top-to-bottom. The direction is determined by which way the animal and human signs face — they always look toward the beginning of the text. If the birds face left, read from left to right.</p>

<h2 id="decipherment">Decipherment</h2>
<p>The ability to read hieroglyphs was lost after the Roman period and not recovered until 1822, when Jean-François Champollion deciphered the Rosetta Stone. The stone, inscribed in 196 BCE, carries the same decree in hieroglyphic, demotic, and Greek — giving Champollion the key to crack the code.</p>
    `.trim(),
  },
  {
    slug: "transliteration",
    title: "Understanding Transliteration",
    description: "How Egyptologists represent hieroglyphic sounds using the Latin alphabet.",
    section: "basics",
    order: 2,
    content: `
<p>Since we don't know exactly how ancient Egyptian was pronounced (vowels were not written), Egyptologists use a standardised set of Latin letters and special characters to represent the consonantal sounds. This is called <strong>transliteration</strong>.</p>

<h2 id="uniliteral-signs">The Uniliteral Signs</h2>
<p>Egyptian has 24 single-consonant ("uniliteral") signs — roughly equivalent to an alphabet. These are the building blocks of the writing system:</p>

<div class="overflow-x-auto">
<table>
  <thead><tr><th>Transliteration</th><th>Approximate Sound</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>ꜣ (A)</td><td>glottal stop (like "uh-oh")</td><td>𓇋</td></tr>
    <tr><td>ꜥ (a)</td><td>voiced pharyngeal fricative</td><td>𓂝</td></tr>
    <tr><td>w</td><td>"w" as in "water"</td><td>𓅱</td></tr>
    <tr><td>b</td><td>"b" as in "bed"</td><td>𓃀</td></tr>
    <tr><td>p</td><td>"p" as in "pet"</td><td>𓊪</td></tr>
    <tr><td>f</td><td>"f" as in "fox"</td><td>𓇋𓏲</td></tr>
    <tr><td>m</td><td>"m" as in "man"</td><td>𓅓</td></tr>
    <tr><td>n</td><td>"n" as in "net"</td><td>𓈖</td></tr>
    <tr><td>r</td><td>"r" as in "run"</td><td>𓂋</td></tr>
    <tr><td>h</td><td>"h" as in "hat"</td><td>𓉔</td></tr>
    <tr><td>ḥ (H)</td><td>emphatic "h"</td><td>𓎛</td></tr>
    <tr><td>ḫ (x)</td><td>"ch" as in Scottish "loch"</td><td>𓐍</td></tr>
    <tr><td>s</td><td>"s" as in "sun"</td><td>𓋴</td></tr>
    <tr><td>š (S)</td><td>"sh" as in "ship"</td><td>𓈩</td></tr>
    <tr><td>k</td><td>"k" as in "king"</td><td>𓎡</td></tr>
    <tr><td>g</td><td>"g" as in "go"</td><td>𓎼</td></tr>
    <tr><td>t</td><td>"t" as in "top"</td><td>𓏏</td></tr>
    <tr><td>d</td><td>"d" as in "dog"</td><td>𓂧</td></tr>
  </tbody>
</table>
</div>

<h2 id="conventions">Transliteration Conventions</h2>
<p>In PharaLex and Egyptological literature, you'll see two formats:</p>
<ul>
  <li><strong>Unicode transliteration</strong> — uses special characters: ꜣ, ꜥ, ḥ, ḫ, ẖ, š, ṯ, ḏ</li>
  <li><strong>ASCII (Manuel de Codage)</strong> — uses capital letters as substitutes: A, a, H, x, X, S, T, D</li>
</ul>
<p>Both represent the same sounds. PharaLex displays Unicode transliteration by default and uses MdC encoding internally for glyph sequences.</p>

<h2 id="reading-transliteration">Reading Transliteration</h2>
<p>When you see a transliteration like <em>nfr</em>, it represents only the consonants. Egyptologists conventionally insert an "e" between consonants for pronunciation, giving "nefer" — but this is a modern convention, not the ancient pronunciation.</p>
    `.trim(),
  },
  {
    slug: "gardiner-sign-list",
    title: "The Gardiner Sign List",
    description: "How hieroglyphic signs are organised into categories by Sir Alan Gardiner.",
    section: "signs",
    order: 1,
    content: `
<p>The <strong>Gardiner Sign List</strong> is the standard classification system for Egyptian hieroglyphs, created by Sir Alan Gardiner and published in his <em>Egyptian Grammar</em> (1927). It organises signs into thematic categories labelled A through Z, plus Aa for unclassified signs.</p>

<h2 id="categories">The 26 Categories</h2>
<p>Each category groups signs by what they depict:</p>

<div class="overflow-x-auto">
<table>
  <thead><tr><th>Code</th><th>Category</th><th>Examples</th></tr></thead>
  <tbody>
    <tr><td>A</td><td>Man and his Activities</td><td>seated man, man with arms raised</td></tr>
    <tr><td>B</td><td>Woman and her Activities</td><td>seated woman, pregnant woman</td></tr>
    <tr><td>C</td><td>Anthropomorphic Deities</td><td>god with sun disc, Osiris</td></tr>
    <tr><td>D</td><td>Parts of the Human Body</td><td>head, eye, arm, hand, leg</td></tr>
    <tr><td>E</td><td>Mammals</td><td>bull, lion, donkey, cat</td></tr>
    <tr><td>F</td><td>Parts of Mammals</td><td>ox head, heart, skin</td></tr>
    <tr><td>G</td><td>Birds</td><td>vulture, owl, falcon, duck</td></tr>
    <tr><td>H</td><td>Parts of Birds</td><td>feather, wing, egg</td></tr>
    <tr><td>I</td><td>Amphibians and Reptiles</td><td>crocodile, frog, snake</td></tr>
    <tr><td>K</td><td>Fish and Parts of Fish</td><td>tilapia, oxyrhynchus</td></tr>
    <tr><td>L</td><td>Invertebrates</td><td>bee, scarab, scorpion</td></tr>
    <tr><td>M</td><td>Trees and Plants</td><td>reed, lotus, papyrus</td></tr>
    <tr><td>N</td><td>Sky, Earth, Water</td><td>sun, star, mountain, water</td></tr>
    <tr><td>O</td><td>Buildings and Parts</td><td>house, temple, door</td></tr>
    <tr><td>P</td><td>Ships and Parts</td><td>boat, sail, oar</td></tr>
    <tr><td>Q</td><td>Furniture</td><td>throne, chest, headrest</td></tr>
    <tr><td>R</td><td>Temple Furniture, Sacred</td><td>altar, standard, shrine</td></tr>
    <tr><td>S</td><td>Crowns, Dress, Staves</td><td>white crown, sceptre</td></tr>
    <tr><td>T</td><td>Warfare, Hunting</td><td>mace, bow, arrow, knife</td></tr>
    <tr><td>U</td><td>Agriculture, Crafts</td><td>plough, sickle, chisel</td></tr>
    <tr><td>V</td><td>Rope, Baskets, Bags</td><td>rope coil, basket, ring</td></tr>
    <tr><td>W</td><td>Vessels</td><td>jar, pot, cup, bowl</td></tr>
    <tr><td>X</td><td>Bread and Cakes</td><td>bread loaf, offering loaf</td></tr>
    <tr><td>Y</td><td>Writings, Games, Music</td><td>scroll, reed pen, game board</td></tr>
    <tr><td>Z</td><td>Strokes and Figures</td><td>single stroke, plural strokes</td></tr>
    <tr><td>Aa</td><td>Unclassified</td><td>placenta, grain, other</td></tr>
  </tbody>
</table>
</div>

<h2 id="codes">Gardiner Codes</h2>
<p>Each sign gets a code consisting of its category letter and a number: <strong>A1</strong> is the first sign in category A (a seated man), <strong>G17</strong> is the 17th sign in the birds category (an owl, representing the consonant <em>m</em>).</p>
<p>Variant forms are indicated by lowercase letters: <strong>A1a</strong>, <strong>A1b</strong>, etc. Extended signs not in Gardiner's original list use longer numbers or special prefixes.</p>

<h2 id="beyond-gardiner">Beyond Gardiner</h2>
<p>Gardiner's original list contained about 750 signs. Modern catalogues — including the Unicode Hieroglyphica standard that PharaLex uses — extend this to over 5,000 signs by adding variants, composite signs, and newly discovered forms.</p>
    `.trim(),
  },
  {
    slug: "sign-functions",
    title: "How Signs Function",
    description: "Understanding logograms, phonograms, and determinatives — the three roles a hieroglyph can play.",
    section: "signs",
    order: 2,
    content: `
<p>A single hieroglyphic sign can serve different functions depending on context. The three main roles are:</p>

<h2 id="logograms">Logograms (Ideograms)</h2>
<p>A logogram represents a complete word or concept directly. The sign 𓇳 (N5, the sun disc) can mean "Ra" (the sun god) or "sun" / "day." When a sign is used as a logogram, it often has a short vertical stroke beneath it (Z1) to signal "read this sign as a word."</p>
<p>Examples:</p>
<ul>
  <li>𓉐 (O1, house plan) = <em>pr</em> "house"</li>
  <li>𓊃 (O34, bolt) = <em>z</em> / <em>s</em> "bolt" or the sound "s"</li>
  <li>𓂋 (D21, mouth) = <em>r</em> "mouth" (or the sound "r")</li>
</ul>

<h2 id="phonograms">Phonograms</h2>
<p>Phonograms represent sounds rather than meanings. They come in three varieties:</p>
<ul>
  <li><strong>Uniliterals</strong> — one consonant (the 24 "alphabet" signs)</li>
  <li><strong>Biliterals</strong> — two consonants (e.g., 𓊃 <em>mn</em>)</li>
  <li><strong>Triliterals</strong> — three consonants (e.g., 𓄤 <em>nfr</em> "good, beautiful")</li>
</ul>
<p>Biliteral and triliteral signs are often accompanied by uniliteral "phonetic complements" that partially or fully spell out the same consonants, reinforcing the reading.</p>

<h2 id="determinatives">Determinatives</h2>
<p>Determinatives are silent classifiers placed at the end of a word. They are not pronounced but tell the reader which semantic category the word belongs to. For example:</p>
<ul>
  <li>The seated-man sign (A1) after a word indicates it refers to a man or male person</li>
  <li>The walking-legs sign (D54) after a word indicates motion or movement</li>
  <li>The papyrus roll (Y1) indicates abstract concepts or things related to writing</li>
</ul>
<p>Determinatives are essential for disambiguation. Since Egyptian is written without vowels, many words with different meanings share the same consonantal skeleton — the determinative resolves the ambiguity.</p>

<h2 id="context">Context Matters</h2>
<p>The same sign can function as a logogram in one context and a phonogram in another. The mouth sign 𓂋 (D21) can be the logogram for "mouth" (<em>r</em>) or simply the phonogram for the consonant <em>r</em> in a longer word. This flexibility is part of what makes hieroglyphic writing rich and complex.</p>
    `.trim(),
  },
  {
    slug: "browsing-glyphs",
    title: "Browsing the Glyph Library",
    description: "How to explore PharaLex's collection of 8,000+ hieroglyphic signs.",
    section: "using-pharalex",
    order: 1,
    content: `
<h2 id="browse-page">The Browse Page</h2>
<p>The <a href="/browse">Browse</a> page shows all 8,000+ hieroglyphs in a scrollable grid. Each card displays the glyph image, its Gardiner code, and a short description. Click any card to open the full glyph detail page.</p>

<h2 id="categories-page">Categories</h2>
<p>The <a href="/categories">Categories</a> page groups glyphs by their Gardiner classification (A through Aa). Click a category to see all signs in that group. This is the best way to explore signs by what they depict — animals, body parts, buildings, and so on.</p>

<h2 id="glyph-detail">Glyph Detail Pages</h2>
<p>Each glyph's detail page shows:</p>
<ul>
  <li><strong>SVG rendering</strong> — a scalable, high-quality vector image of the sign</li>
  <li><strong>Gardiner code</strong> and Unicode codepoint</li>
  <li><strong>Transliteration</strong> — the sound(s) the sign represents</li>
  <li><strong>Meanings</strong> — logographic, phonographic, and determinative uses from multiple sources</li>
  <li><strong>Related signs</strong> — visually or functionally similar glyphs</li>
  <li><strong>Dictionary words</strong> — words from the dictionary that use this sign</li>
  <li><strong>Pharaoh names</strong> — royal names containing this sign</li>
</ul>

<h2 id="alphabet">The Alphabet Page</h2>
<p>The <a href="/alphabet">Alphabet</a> page is a quick reference for the 24 uniliteral signs — the closest thing ancient Egyptian has to an alphabet. Each entry shows the sign, its transliteration, and approximate pronunciation.</p>

<h2 id="search">Search</h2>
<p>Use the search bar (top of every page, or the dedicated <a href="/search">Search</a> page) to find glyphs by Gardiner code, transliteration, meaning, or description. Search results are grouped into Glyphs and Words tabs.</p>
    `.trim(),
  },
  {
    slug: "dictionary",
    title: "Using the Dictionary",
    description: "How to look up Middle Egyptian words, understand their entries, and navigate between related terms.",
    section: "using-pharalex",
    order: 2,
    content: `
<h2 id="word-entries">Word Entries</h2>
<p>PharaLex's dictionary contains over 45,000 entries from the Vygus Middle Egyptian Dictionary, supplemented with curated definitions from Wiktionary. Each word entry includes:</p>
<ul>
  <li><strong>Transliteration</strong> — the consonantal reading in Unicode and MdC format</li>
  <li><strong>Translation</strong> — one or more English glosses</li>
  <li><strong>Grammar</strong> — part of speech (noun, verb, adjective, etc.) with the original Vygus classification</li>
  <li><strong>Hieroglyphic spelling</strong> — the word written in hieroglyphs, rendered as a quadrat group</li>
  <li><strong>Notes</strong> — period, domain, or usage information (e.g., "late Egyptian", "mathematics")</li>
</ul>

<h2 id="spellings">Hieroglyphic Spellings</h2>
<p>Many words have multiple attested spellings. The quadrat rendering shows signs arranged vertically and horizontally, following patterns learned from a corpus of 190 published texts. This produces authentic-looking groupings, though they may not match every scholarly convention.</p>

<h2 id="related-words">Related Words</h2>
<p>The "Related Words" section at the bottom of each word page shows entries that share similar spellings, transliterations, or meanings. These links are computed from a weighted relation index built across the full dictionary.</p>

<h2 id="finding-words">Finding Words</h2>
<p>You can find words by:</p>
<ul>
  <li>Searching for a transliteration (e.g., "nfr") or English translation (e.g., "beautiful")</li>
  <li>Clicking a word link on a glyph detail page (shows all words using that glyph)</li>
  <li>Clicking a word link in a text reader (shows the dictionary entry for that token)</li>
</ul>
    `.trim(),
  },
];
