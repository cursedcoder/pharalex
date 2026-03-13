import type { EgyptianText } from "@/lib/types";

export const TEXTS: EgyptianText[] = [
  // ─── Pharaoh-linked texts ────────────────────────────────────────────────────

  {
    slug: "tutankhamun-gold-mask",
    title: "Golden Mask of Tutankhamun",
    period: "new-kingdom",
    date: "c. 1323 BCE",
    pharaohSlug: "tutankhamun",
    object: "Golden Mask, Cairo Museum JE 60672",
    location: "Egyptian Museum, Cairo",
    description:
      "The inscription on the back and shoulders of Tutankhamun's famous golden death mask is a protective spell derived from Chapter 151b of the Book of the Dead. It addresses the deceased king as Osiris and invokes the gods to guard each part of his face and head.",
    lines: [
      {
        tokens: [
          {
            mdc: "i-Aa27-D&&&Y1-Hr*Z1:k",
            transliteration: "jnḏ-ḥr=k",
            translation: "hail to you",
            grammar: "VERB",
          },
          {
            mdc: "nfr-f:r-Hr*Z1",
            transliteration: "nfr-ḥr",
            translation: "beautiful of face",
            grammar: "ADJ",
          },
          {
            mdc: "V30",
            transliteration: "nb",
            translation: "lord",
            grammar: "NOUN",
          },
          {
            mdc: "mA-A-G43&t-N8:Z2",
            transliteration: "mꜣwt",
            translation: "of radiance",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "O, hail to you, beautiful of face, lord of radiance,",
      },
      {
        tokens: [
          {
            mdc: "Aa8:n",
            transliteration: "ṯs.n",
            translation: "joined together by",
            grammar: "VERB",
          },
          {
            mdc: "p:t-H-z:k:r-t:A40",
            transliteration: "Ptḥ-Skr",
            translation: "Ptah-Sokar",
            grammar: "NOUN",
          },
          {
            mdc: "z:A&&&q-A28-Y1:n",
            transliteration: "sqꜣ.n",
            translation: "raised by",
            grammar: "VERB",
          },
          {
            mdc: "i-n:p-w-A40",
            transliteration: "Jnpw",
            translation: "Anubis",
            grammar: "NOUN",
          },
          {
            mdc: "r:D37-n:n",
            transliteration: "rḏj.n n=",
            translation: "to whom were given",
            grammar: "VERB",
          },
        ],
        lineTranslation:
          "joined together by Ptah-Sokar, raised by Anubis, to whom were given",
      },
      {
        tokens: [
          {
            mdc: "f",
            transliteration: "=f",
            translation: "him",
            grammar: "PRON",
          },
          {
            mdc: "G26:t*Z4-z:T:z-w-U39*A2:Z2",
            transliteration: "sṯsw-Ḏḥwty",
            translation: "the supports of Thoth",
            grammar: "NOUN",
          },
          {
            mdc: "nfr",
            transliteration: "nfr",
            translation: "beautiful",
            grammar: "ADJ",
          },
          {
            mdc: "Hr",
            transliteration: "ḥr",
            translation: "of face",
            grammar: "NOUN",
          },
          {
            mdc: "Z11-m&&&(Z1*Z1)-(Z1*Z1*Z1)^^^nTr-A40",
            transliteration: "jmj nṯrw",
            translation: "who is among the gods",
            grammar: "PREP",
          },
          {
            mdc: "ir:t*Z1:k",
            transliteration: "jrt=k",
            translation: "your right eye",
            grammar: "NOUN",
          },
          {
            mdc: "R14",
            transliteration: "jmnt",
            translation: "western",
            grammar: "ADJ",
          },
          {
            mdc: "M",
            transliteration: "m",
            translation: "in",
            grammar: "PREP",
          },
        ],
        lineTranslation:
          "him, the supports of Thoth, beautiful of face, who is among the gods; your right eye is in",
      },
      {
        tokens: [
          {
            mdc: "V29-k:t-w-P3",
            transliteration: "skt.w",
            translation: "the evening bark",
            grammar: "NOUN",
          },
          {
            mdc: "ir:t*Z1:k",
            transliteration: "jrt=k",
            translation: "your eye",
            grammar: "NOUN",
          },
          {
            mdc: "R15-t^^^b",
            transliteration: "jꜣbt",
            translation: "left / eastern",
            grammar: "ADJ",
          },
          {
            mdc: "M",
            transliteration: "m",
            translation: "in",
            grammar: "PREP",
          },
          {
            mdc: "V26:d-t*t:P3",
            transliteration: "mꜥnḏt",
            translation: "the morning bark",
            grammar: "NOUN",
          },
          {
            mdc: "i-w",
            transliteration: "jw",
            translation: "as for",
            grammar: "PART",
          },
          {
            mdc: "i-K1:n-H-D13:D13:k",
            transliteration: "jnḥ.wj=k",
            translation: "your eyebrows",
            grammar: "NOUN",
          },
        ],
        lineTranslation:
          "the evening bark; your left eye in the morning bark; your eyebrows",
      },
      {
        tokens: [
          {
            mdc: "M:N9*t-(Z1*Z1*Z1)^^^nTr-A40",
            transliteration: "m psḏt nṯrw",
            translation: "of the divine Ennead",
            grammar: "NOUN",
          },
          {
            mdc: "i-w",
            transliteration: "jw",
            translation: "as for",
            grammar: "PART",
          },
          {
            mdc: "F13:t*Z1:k",
            transliteration: "wpt=k",
            translation: "your brow",
            grammar: "NOUN",
          },
          {
            mdc: "M",
            transliteration: "m",
            translation: "is",
            grammar: "PREP",
          },
          {
            mdc: "i-n:p*w",
            transliteration: "Jnpw",
            translation: "Anubis",
            grammar: "NOUN",
          },
          {
            mdc: "i-w",
            transliteration: "jw",
            translation: "as for",
            grammar: "PART",
          },
          {
            mdc: "F4:k",
            transliteration: "mkḥꜣ=k",
            translation: "the back of your head",
            grammar: "NOUN",
          },
          {
            mdc: "M16-A",
            transliteration: "ḥꜣt",
            translation: "upon",
            grammar: "PREP",
          },
          {
            mdc: "tp:k",
            transliteration: "tp=k",
            translation: "your head",
            grammar: "NOUN",
          },
        ],
        lineTranslation:
          "of the divine Ennead; your brow is Anubis; the back of your head upon your head",
      },
      {
        tokens: [
          {
            mdc: "M-G5",
            transliteration: "m Ḥr",
            translation: "is that of Horus",
            grammar: "NOUN",
          },
          {
            mdc: "i-w",
            transliteration: "jw",
            translation: "as for",
            grammar: "PART",
          },
          {
            mdc: "H-U8:n:z-Y1:k",
            transliteration: "ḥn=k",
            translation: "your locks",
            grammar: "NOUN",
          },
          {
            mdc: "M-p:t-H-z:k:r-t-A40",
            transliteration: "m Ptḥ-Skr",
            translation: "are those of Ptah-Sokar",
            grammar: "NOUN",
          },
          {
            mdc: "M-F4:t*Z1",
            transliteration: "m-ḥꜣt",
            translation: "before",
            grammar: "PREP",
          },
          {
            mdc: "ir:st*A40",
            transliteration: "Wsjr",
            translation: "Osiris",
            grammar: "NOUN",
          },
        ],
        lineTranslation:
          "is that of Horus; your locks are those of Ptah-Sokar; before Osiris",
      },
      {
        tokens: [
          {
            mdc: "ir:f",
            transliteration: "mꜣ=f",
            translation: "who sees",
            grammar: "VERB",
          },
          {
            mdc: "Z11-m-k",
            transliteration: "jm=k",
            translation: "through you",
            grammar: "PREP",
          },
          {
            mdc: "z:T32-M:D54-k",
            transliteration: "sšm=k",
            translation: "may you guide",
            grammar: "VERB",
          },
          {
            mdc: "sw-w",
            transliteration: "sw",
            translation: "him",
            grammar: "PRON",
          },
          {
            mdc: "r-N31:t*Z1*Z1*Z1",
            transliteration: "r wꜣ.wt",
            translation: "upon the paths",
            grammar: "PREP",
          },
          {
            mdc: "nfr*w:Z2",
            transliteration: "nfr.w",
            translation: "smooth / good",
            grammar: "ADJ",
          },
          {
            mdc: "H-A25-D40:k",
            transliteration: "ḥw=k",
            translation: "may you smite",
            grammar: "VERB",
          },
          {
            mdc: "n:f",
            transliteration: "n=f",
            translation: "for him",
            grammar: "PREP",
          },
        ],
        lineTranslation:
          "who sees through you; may you guide him on smooth paths; may you smite for him",
      },
      {
        tokens: [
          {
            mdc: "F36-A-i-i-t-D40:Z2",
            transliteration: "smꜣy.t",
            translation: "the gang of",
            grammar: "NOUN",
          },
          {
            mdc: "z:t:N37-A40",
            transliteration: "Stš",
            translation: "Seth",
            grammar: "NOUN",
          },
          {
            mdc: "z:x:r-A15:D40",
            transliteration: "sḫr=f",
            translation: "that he may overthrow",
            grammar: "VERB",
          },
          {
            mdc: "f:x:f-tyw&&&nw-Z2:k-Z2:k",
            transliteration: "ḫftjw=k",
            translation: "your enemies",
            grammar: "NOUN",
          },
          {
            mdc: "x:r",
            transliteration: "ḫr",
            translation: "before",
            grammar: "PREP",
          },
        ],
        lineTranslation:
          "the gang of Seth, that he may overthrow your enemies before",
      },
      {
        tokens: [
          {
            mdc: "N9*t-nTr*A40:Z2",
            transliteration: "psḏt nṯrw",
            translation: "the divine Ennead",
            grammar: "NOUN",
          },
          {
            mdc: "M-O6-A21-G36:r",
            transliteration: "m ḥwt-sr-wr",
            translation: "in the great royal house",
            grammar: "PREP",
          },
          {
            mdc: "Z11-O28-nw:O49",
            transliteration: "jm Jwnw",
            translation: "in Heliopolis",
            grammar: "PREP",
          },
          {
            mdc: "V15-t:D40-n:f",
            transliteration: "jṯ.n=f",
            translation: "that he may take",
            grammar: "VERB",
          },
          {
            mdc: "G36:r-r:t",
            transliteration: "wrr.t",
            translation: "the Great Crown",
            grammar: "NOUN",
          },
          {
            mdc: "Z11-x:r-G5",
            transliteration: "jm ḫr Ḥr",
            translation: "there before Horus",
            grammar: "PREP",
          },
        ],
        lineTranslation:
          "the divine Ennead, in the great royal house in Heliopolis, that he may take the Great Crown there before Horus,",
      },
      {
        tokens: [
          {
            mdc: "nb",
            transliteration: "nb",
            translation: "lord",
            grammar: "NOUN",
          },
          {
            mdc: "p:D36:t-A1*B1:Z2",
            transliteration: "pꜥ.t",
            translation: "of the nobles",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "lord of the nobles,",
      },
      {
        tokens: [
          {
            mdc: "ir:st*A40-sw-t:n",
            transliteration: "Wsjr nsw",
            translation: "the Osiris, king",
            grammar: "NOUN",
          },
          {
            mdc: "<-ra-xpr-Z2:nb->",
            transliteration: "Nb-ḫprw-Rꜥ",
            translation: "Nebkheperure",
            grammar: "NOUN",
          },
          {
            mdc: "Aa11v-P8",
            transliteration: "mꜣꜥ-ḫrw",
            translation: "true of voice",
            grammar: "ADJ",
          },
          {
            mdc: "di-anx-ra:Z1-mi",
            transliteration: "ḏj ꜥnḫ mj Rꜥ",
            translation: "given life like Ra",
            grammar: "VERB",
          },
        ],
        lineTranslation:
          "the Osiris, king Nebkheperure (Tutankhamun), true of voice, given life like Ra.",
      },
    ],
    bibliography: [
      "Nico Pollone, transcription of the Mask of Tutankhamun (CC-BY), via rosmord/MDC-texts",
      "James P. Allen, Middle Egyptian: An Introduction to the Language and Culture of Hieroglyphs, 3rd ed. (Cambridge, 2014)",
      "Nederhof, M.J., HieroJax Unicode Hieroglyphic Texts, https://nederhof.github.io/hierojax/texts/TutankhamunGoldMask.html",
      "Hawass, Z., Tutankhamun and the Golden Age of the Pharaohs (Washington D.C., 2005)",
    ],
  },

  {
    slug: "mentuhotep-ii-deir-el-bahari",
    title: "Mentuhotep II: Deir el-Bahari Temple Inscription",
    period: "middle-kingdom",
    date: "c. 2010 BCE",
    pharaohSlug: "mentuhotep-ii",
    object: "Temple of Mentuhotep II, Deir el-Bahari",
    location: "Deir el-Bahari, Luxor, Egypt",
    description:
      "An inscription from the mortuary temple of Mentuhotep II at Deir el-Bahari, the first great monument of the Middle Kingdom. The text presents a royal titulary and dedication formula, celebrating the king who reunified Egypt after the First Intermediate Period.",
    lines: [
      {
        tokens: [
          {
            mdc: "G5-F36:N19",
            transliteration: "Ḥr smꜣ-tꜢwj",
            translation: "Horus, Uniter of the Two Lands",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "Horus, Uniter of the Two Lands,",
      },
      {
        tokens: [
          {
            mdc: "G16-F36:N19",
            transliteration: "Nbty smꜣ-tꜢwj",
            translation: "Two Ladies, Uniter of the Two Lands",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "Two Ladies, Uniter of the Two Lands,",
      },
      {
        tokens: [
          {
            mdc: "M23*X1-L2*X1",
            transliteration: "nsw-bjt",
            translation: "king of Upper and Lower Egypt",
            grammar: "NOUN",
          },
          {
            mdc: "N35-D58-F12:Q3-X1-D21-G43",
            transliteration: "Nb-ḥꜢpt-rꜤ",
            translation: "Possessor of the Rudder of Ra",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "King of Upper and Lower Egypt, Nebhapetre,",
      },
      {
        tokens: [
          {
            mdc: "S3:N35",
            transliteration: "sꜢ-Rꜥ",
            translation: "Son of Ra",
            grammar: "NOUN",
          },
          {
            mdc: "Y5:N35-X1-G43-F12:X1:Q3",
            transliteration: "Mnṯw-ḥtp",
            translation: "Montu Is Satisfied",
            grammar: "NOUN",
          },
          {
            mdc: "D46:X1-Z5:Q3",
            transliteration: "ḏt",
            translation: "forever",
            grammar: "ADV",
          },
        ],
        lineTranslation: "Son of Ra, Mentuhotep, forever.",
      },
    ],
    bibliography: [
      "Naville, E., The XIth Dynasty Temple at Deir el-Bahari, Parts I–III (London, 1907–1913)",
      "Arnold, D., The Temple of Mentuhotep at Deir el-Bahari (New York, 1979)",
      "Lichtheim, M., Ancient Egyptian Literature vol. I (Berkeley, 1973)",
    ],
  },

  {
    slug: "ramesses-ii-kadesh-bulletin",
    title: "Ramesses II: Battle of Kadesh Bulletin",
    period: "new-kingdom",
    date: "c. 1274 BCE",
    pharaohSlug: "ramesses-ii",
    object: "Abu Simbel, Luxor Temple, and Karnak Temple inscriptions",
    location: "Abu Simbel, Egypt",
    description:
      "The opening of the Kadesh Bulletin, the earliest known detailed military account in history. This text describes Ramesses II's campaign against the Hittites and introduces him with a full titulary before recounting the famous battle at Kadesh on the Orontes River in Year 5 of his reign.",
    lines: [
      {
        tokens: [
          {
            mdc: "HAt:a",
            transliteration: "ḥꜣt",
            translation: "beginning",
            grammar: "NOUN",
          },
          {
            mdc: "m",
            transliteration: "m",
            translation: "of",
            grammar: "PREP",
          },
          {
            mdc: "pA",
            transliteration: "pꜣ",
            translation: "the",
            grammar: "ART",
          },
          {
            mdc: "n:xt:x*t-G45-Z2:n",
            transliteration: "nḫtw",
            translation: "victories",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "Beginning of the victories",
      },
      {
        tokens: [
          {
            mdc: "sw:t-bit:t",
            transliteration: "nsw-bjtj",
            translation: "King of Upper and Lower Egypt",
            grammar: "NOUN",
          },
          {
            mdc: "ra-wsr-C10A-stp:n-ra",
            transliteration: "Wsr-mꜣꜥt-Rꜥ-stp-n-Rꜥ",
            translation: "Usermaatra-Setepenre",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "King of Upper and Lower Egypt, Usermaatra-Setepenre,",
      },
      {
        tokens: [
          {
            mdc: "zA*ra",
            transliteration: "sꜢ-Rꜥ",
            translation: "Son of Ra",
            grammar: "NOUN",
          },
          {
            mdc: "i-mn:n:N36-C2-ms-s-s",
            transliteration: "Rꜥ-ms-sw-mry-Jmn",
            translation: "Ramesses, beloved of Amun",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "Son of Ra, Ramesses, beloved of Amun,",
      },
      {
        tokens: [
          {
            mdc: "di-anx",
            transliteration: "dj-ꜥnḫ",
            translation: "given life",
            grammar: "VERB",
          },
          {
            mdc: "D*(t:tA)",
            transliteration: "ḏt",
            translation: "forever",
            grammar: "ADV",
          },
        ],
        lineTranslation: "given life forever.",
      },
      {
        tokens: [
          {
            mdc: "ir:n:f",
            transliteration: "jr.n=f",
            translation: "He made",
            grammar: "VERB",
          },
          {
            mdc: "m",
            transliteration: "m",
            translation: "in",
            grammar: "PREP",
          },
          {
            mdc: "pA",
            transliteration: "pꜣ",
            translation: "the",
            grammar: "ART",
          },
          {
            mdc: "tA:N21*Z1:n",
            transliteration: "tꜣ",
            translation: "land",
            grammar: "NOUN",
          },
          {
            mdc: "(x:t)*U30:N25",
            transliteration: "ẖrw",
            translation: "of Kharu",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "He made in the land of Kharu",
      },
    ],
    bibliography: [
      "Rosmord/MDC-texts: Qadesh Poem-Pentaour.gly (CC-BY), transcription by Nico Pollone",
      "Kitchen, K.A., Ramesside Inscriptions, Historical and Biographical, vol. II (Oxford, 1979)",
      "Lichtheim, M., Ancient Egyptian Literature vol. II (Berkeley, 1976)",
      "Spalinger, A.J., War in Ancient Egypt (Oxford, 2005)",
    ],
  },

  // ─── Canonical texts ─────────────────────────────────────────────────────────

  {
    slug: "pyramid-text-utterance-1",
    title: "Pyramid Text Utterance 1",
    period: "old-kingdom",
    date: "c. 2375 BCE",
    object: "Pyramid of Unas, Saqqara",
    location: "Saqqara, Egypt",
    description:
      "The opening utterance of the Pyramid Texts, the oldest surviving corpus of religious literature in the world. Inscribed in the burial chamber of Pharaoh Unas (last ruler of the 5th Dynasty), these spells were intended to ensure the king's resurrection and passage to the afterlife. This utterance purifies the king and prepares him for the afterlife journey.",
    lines: [
      {
        tokens: [
          {
            mdc: "N37*Z1:X1",
            transliteration: "wꜢḏ",
            translation: "the green eye-paint",
            grammar: "NOUN",
          },
          {
            mdc: "D4-G17",
            transliteration: "jrt",
            translation: "eye",
            grammar: "NOUN",
          },
          {
            mdc: "G5",
            transliteration: "Ḥr",
            translation: "of Horus",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "The green eye-paint, the eye of Horus,",
      },
      {
        tokens: [
          {
            mdc: "D46-D36:X1",
            transliteration: "ḏꜢt",
            translation: "which",
            grammar: "PRON",
          },
          {
            mdc: "N35-D36",
            transliteration: "nḏ",
            translation: "protects",
            grammar: "VERB",
          },
          {
            mdc: "A1",
            transliteration: "=k",
            translation: "you",
            grammar: "PRON",
          },
          {
            mdc: "C4-R8",
            transliteration: "m nṯr",
            translation: "as a god",
            grammar: "PREP",
          },
        ],
        lineTranslation: "which protects you as a god,",
      },
      {
        tokens: [
          {
            mdc: "D4*X1:Z1",
            transliteration: "jrt=k",
            translation: "your eye",
            grammar: "NOUN",
          },
          {
            mdc: "V30*X1:N35",
            transliteration: "nbt",
            translation: "of every",
            grammar: "ADJ",
          },
          {
            mdc: "N23:X1",
            transliteration: "tꜣ",
            translation: "land",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "your eye, that of every land.",
      },
    ],
    bibliography: [
      "Faulkner, R.O., The Ancient Egyptian Pyramid Texts (Oxford, 1969)",
      "Allen, J.P., The Ancient Egyptian Pyramid Texts, Writings from the Ancient World 23 (Atlanta, 2005)",
      "Sethe, K., Die altägyptischen Pyramidentexte, 4 vols. (Leipzig, 1908–1922)",
    ],
  },

  {
    slug: "ptahhotep-maxim-1",
    title: "Teaching of Ptahhotep: Maxim 1",
    period: "middle-kingdom",
    date: "c. 1800 BCE",
    object: "Papyrus Prisse, Bibliothèque nationale de France, Paris",
    location: "Bibliothèque nationale de France, Paris",
    description:
      "The Teaching of Ptahhotep is the oldest philosophical text in the world, attributed to a vizier of the 5th Dynasty but copied in the Middle Kingdom on Papyrus Prisse. The first maxim meditates on the hardships of old age and the wisdom it brings, urging the young to listen to those with experience.",
    lines: [
      {
        // P16–P19: the opening lament on the miseries of old age
        tokens: [
          {
            mdc: "F34-Z1",
            transliteration: "jb",
            translation: "How",
            grammar: "PART",
          },
          {
            mdc: "U15-G17-Z7-G37:D35",
            transliteration: "wšb",
            translation: "hard",
            grammar: "ADJ",
          },
          {
            mdc: "S29-M12-G1-A2",
            transliteration: "s nb",
            translation: "for every man",
            grammar: "NOUN",
          },
          {
            mdc: "N35:I9-S30-N5",
            transliteration: "n jꜣw",
            translation: "who is old",
            grammar: "PREP",
          },
          {
            mdc: "N29-S29-T19",
            transliteration: "qꜣs",
            translation: "hard",
            grammar: "ADJ",
          },
          {
            mdc: "Y5:N35-N35:G37-I9:N35",
            transliteration: "nbt nḏt",
            translation: "and painful",
            grammar: "ADJ",
          },
          {
            mdc: "F40-G43-G43-Y1",
            transliteration: "ꜥw.wt",
            translation: "are all his limbs",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "How hard and painful it is for every man who is old!",
      },
      {
        // P20–P28: the body's decline — eyes, nose, speech, heart
        tokens: [
          {
            mdc: "D58-Z7-F35-I9:D21",
            transliteration: "bw nfr",
            translation: "Good",
            grammar: "NOUN",
          },
          {
            mdc: "L1-D21-G17",
            transliteration: "km m",
            translation: "becomes",
            grammar: "VERB",
          },
          {
            mdc: "D58-Z7-D58-M17-N35:G37",
            transliteration: "bj-bj n",
            translation: "misery",
            grammar: "NOUN",
          },
          {
            mdc: "D46-Q3:X1-F20-A2",
            transliteration: "ḏpt ḥꜣ",
            translation: "taste departs",
            grammar: "VERB",
          },
          {
            mdc: "V30:X1-N40-G17-X1:D54",
            transliteration: "nb.t jrj",
            translation: "all his senses fail",
            grammar: "VERB",
          },
          {
            mdc: "D4-D21:X1-M17-G1-Z7-A20",
            transliteration: "jrt jr.w",
            translation: "the eyes",
            grammar: "NOUN",
          },
          {
            mdc: "Z1:N35-D21-V13-A1*B1:Z2",
            transliteration: "n rmṯ",
            translation: "of a man",
            grammar: "PREP",
          },
          {
            mdc: "D58-M17-N35:G37",
            transliteration: "bj n",
            translation: "grow dim",
            grammar: "VERB",
          },
          {
            mdc: "G17-Aa1:X1-Y1:Z2-V30:X1",
            transliteration: "m ẖt nb.t",
            translation: "in every way",
            grammar: "PREP",
          },
          {
            mdc: "I9:N35-D46-D20-T25-Y1:D35",
            transliteration: "fnḏ=f ẖr",
            translation: "his nose is stopped",
            grammar: "NOUN",
          },
          {
            mdc: "S29-S29-N35:D20-N35:I9",
            transliteration: "ss n mdw",
            translation: "speech is difficult",
            grammar: "VERB",
          },
          {
            mdc: "N35-X1:N35-W24-G43-G37",
            transliteration: "n nt wꜣ.w",
            translation: "the distant",
            grammar: "PREP",
          },
          {
            mdc: "P6-D36:D54-N41-S29-X1-B4",
            transliteration: "pḥ=f jb=f",
            translation: "his heart forgets",
            grammar: "VERB",
          },
          {
            mdc: "V24-G43:X1-Y1:N35-G29:V31A-A1-M17-G17",
            transliteration: "ꜥḥꜥ=f r=f r jꜣw",
            translation: "he cannot recall yesterday",
            grammar: "VERB",
          },
        ],
        lineTranslation:
          "Good becomes misery; taste, sight, smell all fail; his nose is stopped, speech is difficult; his heart forgets.",
      },
      {
        // P30–P37: bones ache, limbs weary, the body is bad
        tokens: [
          {
            mdc: "M17-Aa1-Y1-I10&D46-A1:N35:I9",
            transliteration: "jḫt nbt jꜥ.t",
            translation: "Everything is bad",
            grammar: "NOUN",
          },
          {
            mdc: "S43-D46-G43-A2-F21-G17-M17-M17-G43-A1:Z2",
            transliteration: "ms.w=f ḥr mw.wt",
            translation: "his children are gone",
            grammar: "VERB",
          },
          {
            mdc: "O34:Aa1-D21-G43-Y1:Z2",
            transliteration: "ꜥw.wt=f",
            translation: "his limbs",
            grammar: "NOUN",
          },
          {
            mdc: "Z11-G17-G43-Z2:F4-X1:Ff301-Q3-G41-G1-G43-Z2-F21-G17-nTrw",
            transliteration: "jm=f n ṯꜣw nṯrw",
            translation: "fail him, forsaken by gods",
            grammar: "VERB",
          },
          {
            mdc: "M17-Aa1:Y1-D4:X1-N35:V31A",
            transliteration: "jrt=f n",
            translation: "his eyes see not",
            grammar: "VERB",
          },
          {
            mdc: "W19-X1:X1-Y1-D46-D21-A24-X1-G43-V7-N35:W24*Z7-G37:Z2",
            transliteration: "ḥwt.t dr.w ḥw.wt",
            translation: "his bones ache throughout",
            grammar: "NOUN",
          },
          {
            mdc: "G17-D21-Aa1-M17-M17-X1-G23-A1*B1:Z2-G29:V31A-N21-N21-G43&Z4",
            transliteration: "m rꜥ nb rmṯ",
            translation: "every single day for a man",
            grammar: "PREP",
          },
          {
            mdc: "I10&D46-M17-N35-N41-Z1:N35-R8-Z1-Q3:N35",
            transliteration: "ḏsr n nṯr qrs",
            translation: "it is hard to know god or grave",
            grammar: "NOUN",
          },
          {
            mdc: "N14-G1-A24-D21:V31A-M23-Z7",
            transliteration: "nꜣ dr nsw",
            translation: "those things that pass kings",
            grammar: "NOUN",
          },
        ],
        lineTranslation:
          "Everything is bad for a man who is old; his limbs fail him, his eyes see not, his bones ache, the heart is heavy.",
      },
      {
        // P39–P40: the exhortation to hear wisdom
        tokens: [
          {
            mdc: "M17-Aa1-Y1-D4:I9-D58-M17-N42-F18:Y1-Z2:N35",
            transliteration: "jḫt mj n ꜥḥꜥ=f",
            translation: "How then does he bear",
            grammar: "VERB",
          },
          {
            mdc: "F31-S29-Z7-B4-A1*B1:Z2-A21-G43-A1:Z2",
            transliteration: "ꜣs.w šsp.w mr.w",
            translation: "weakness, deafness, pain",
            grammar: "NOUN",
          },
          {
            mdc: "G35-N29-D54-F21-G17-A1-G17:I9",
            transliteration: "ꜣq=f ḥr=f r jrt=f",
            translation: "when his strength fails",
            grammar: "VERB",
          },
          {
            mdc: "D52-X1-D50-D50-Y1-F34-Z1-V30",
            transliteration: "mnt nb jb",
            translation: "every affliction of the heart",
            grammar: "NOUN",
          },
        ],
        lineTranslation:
          "How does he bear weakness, deafness and pain? Every affliction of the heart!",
      },
    ],
    bibliography: [
      "Rosmord/MDC-texts: P. Prisse (Gemnikai and Ptahotep).gly (CC-BY), transcription by Nico Pollone",
      "Lichtheim, M., Ancient Egyptian Literature vol. I (Berkeley, 1973), 61–80",
      "Simpson, W.K. (ed.), The Literature of Ancient Egypt, 3rd ed. (New Haven, 2003), 129–148",
    ],
  },

  {
    slug: "book-of-the-dead-chapter-1",
    title: "Book of the Dead: Chapter 1 (Opening Formula)",
    period: "new-kingdom",
    date: "c. 1550–1070 BCE",
    object: "Papyrus of Ani, British Museum EA 10470",
    location: "British Museum, London",
    description:
      "Chapter 1 of the Book of the Dead is the processional hymn spoken at the funeral, as the deceased's mummy is carried to the tomb. The Papyrus of Ani (c. 1275 BCE), now in the British Museum, contains the finest illustrated version. This opening formula presents the deceased before Osiris and proclaims his worthiness to enter the afterlife.",
    lines: [
      {
        tokens: [
          {
            mdc: "R7-D21",
            transliteration: "ḥnk.t",
            translation: "Beginning of",
            grammar: "NOUN",
          },
          {
            mdc: "D46-D21-G43",
            transliteration: "drw",
            translation: "the chapters",
            grammar: "NOUN",
          },
          {
            mdc: "G17-N35:X1",
            transliteration: "mnḫt",
            translation: "of going forth",
            grammar: "VERB",
          },
          {
            mdc: "M17-D54",
            transliteration: "m hrw",
            translation: "by day",
            grammar: "PREP",
          },
        ],
        lineTranslation: "Beginning of the chapters of going forth by day,",
      },
      {
        tokens: [
          {
            mdc: "D46:Z5-Q3",
            transliteration: "ḏd-mdw",
            translation: "words spoken",
            grammar: "VERB",
          },
          {
            mdc: "N35",
            transliteration: "n",
            translation: "by",
            grammar: "PREP",
          },
          {
            mdc: "C4-A1",
            transliteration: "Wsjr",
            translation: "Osiris",
            grammar: "NOUN",
          },
          {
            mdc: "G17-S29*S29-G17",
            transliteration: "Jni",
            translation: "Ani",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "Words spoken by the Osiris Ani,",
      },
      {
        tokens: [
          {
            mdc: "G17-D21-G17",
            transliteration: "wr",
            translation: "great",
            grammar: "ADJ",
          },
          {
            mdc: "D46:Z5",
            transliteration: "ḏd",
            translation: "scribe",
            grammar: "NOUN",
          },
          {
            mdc: "G17*G17-N35:X1",
            transliteration: "mꜣꜥt",
            translation: "of the offerings",
            grammar: "NOUN",
          },
          {
            mdc: "R8*Z2",
            transliteration: "nṯrw",
            translation: "of all the gods",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "the great scribe of the offerings of all the gods,",
      },
      {
        tokens: [
          {
            mdc: "R12:X1",
            transliteration: "mꜣꜥ-ḫrw",
            translation: "true of voice",
            grammar: "ADJ",
          },
          {
            mdc: "V30*X1:N35",
            transliteration: "nb",
            translation: "lord",
            grammar: "NOUN",
          },
          {
            mdc: "X1-D40",
            transliteration: "tp",
            translation: "of reverence",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "true of voice, lord of reverence.",
      },
    ],
    bibliography: [
      "Faulkner, R.O., The Ancient Egyptian Book of the Dead, revised ed. (London, 1985)",
      "Budge, E.A.W., The Papyrus of Ani: A Reproduction in Facsimile (London, 1913)",
      "Allen, T.G., The Book of the Dead or Going Forth by Day (Chicago, 1974)",
    ],
  },
  {
    slug: "ogardiner4",
    title: "O. Gardiner 4: Work-Attendance Register",
    period: "new-kingdom",
    date: "c. 1186–1070 BCE (Ramesside, Dynasty XX)",
    object: "Ostracon, limestone, Cairo Museum",
    location: "Cairo Museum",
    description:
      "A work-attendance register from Deir el-Medina, the village of craftsmen who built the royal tombs in the Valley of the Kings. Six lines record dates and names of absent workmen. Lacunae (hatched boxes) mark physically destroyed sections; signs on a hatched background are scholarly restorations.",
    lines: [
      {
        tokens: [
          {
            mdc: "M4-X1:N5",
            transliteration: "rnpt",
            translation: "year",
            grammar: "NOUN",
          },
          {
            mdc: "Z1*Z1*Z1:Z1*Z1",
            transliteration: "5",
            translation: "[x+1]",
            grammar: "NUM",
          },
          {
            mdc: "N11:Z1*Z1*Z1",
            transliteration: "ꜣbd 3",
            translation: "month 3",
            grammar: "NOUN",
          },
          {
            mdc: "N5-V20\\R270-V20\\R270-Z1\\R270:Z1\\R270:Z1\\R270:Z1\\R270-Z1\\R270:Z1\\R270:Z1\\R270:Z1\\R270",
            transliteration: "šmw sw 27",
            translation: "of Šmw, day 27",
            grammar: "NOUN",
          },
          {
            mdc: "D36:N37-A2",
            transliteration: "ꜥš",
            translation: "called out",
            grammar: "VERB",
          },
          {
            mdc: "M17-N35-G47-G1",
            transliteration: "jnj",
            translation: "brought",
            grammar: "VERB",
          },
          {
            mdc: "M17-M17-D53:D40",
            transliteration: "jj",
            translation: "coming",
            grammar: "VERB",
          },
          {
            mdc: "Y1:X1*Z1",
            transliteration: "mḏꜣ.t",
            translation: "document",
            grammar: "NOUN",
          },
          {
            mdc: "//",
            transliteration: "—",
            translation: "[damaged]",
            grammar: "OTHER",
          },
          {
            mdc: "N29-G1-M16-G1-N23-Z1-A1",
            transliteration: "Qꜣy",
            translation: "Qay",
            grammar: "NOUN",
          },
        ],
        lineTranslation:
          "Year [x+1], month 3 of Šmw, day 27. Called out; brought. Coming — document. [Damaged.] Qay.",
      },
      {
        tokens: [
          {
            mdc: "N35",
            transliteration: "n",
            translation: "of",
            grammar: "PREP",
          },
          {
            mdc: "M23*X1-G7",
            transliteration: "nswt",
            translation: "the king",
            grammar: "NOUN",
          },
          {
            mdc: "<-M17-Y5*N35-R4*X1-Z7-G7->",
            transliteration: "Jmn-ḥtp",
            translation: "Amenhotep (cartouche)",
            grammar: "NOUN",
          },
          {
            mdc: "S34-D10-O34-N35-D58",
            transliteration: "ꜥnḫ-wḏꜣ-snb",
            translation: "life, prosperity, health",
            grammar: "OTHER",
          },
          {
            mdc: "G29-V31",
            transliteration: "bꜣk",
            translation: "workman / servant",
            grammar: "NOUN",
          },
          {
            mdc: "//",
            transliteration: "...",
            translation: "[damaged]",
          },
          {
            mdc: "[F35]",
            transliteration: "nfr",
            translation: "Nefer (damaged)",
            grammar: "NOUN",
          },
          {
            mdc: "[G7]",
            transliteration: "...",
            translation: "(damaged determinative)",
          },
          {
            mdc: "[G17*D36]",
            transliteration: "m...ꜥ...",
            translation: "[damaged]",
          },
          {
            mdc: "[M17]-[M17]-[D54]-[G41]-[G1]",
            transliteration: "...",
            translation: "[heavily damaged]",
          },
        ],
        lineTranslation:
          "Of the king Amenhotep, l.p.h. Workman [damaged] … Nefer [damaged] … [heavily damaged].",
      },
      {
        tokens: [
          {
            mdc: "O4*Ff1*Ff1-N5*Z1",
            transliteration: "ḥꜣt-sp",
            translation: "year",
            grammar: "NOUN",
          },
          {
            mdc: "M17-G43-M17-G47-G1",
            transliteration: "iwj",
            translation: "coming",
            grammar: "VERB",
          },
          {
            mdc: "V28-D58-S29-Z7",
            transliteration: "ḥbs",
            translation: "clothing",
            grammar: "NOUN",
          },
          {
            mdc: "M17-Z7-I9",
            transliteration: "iy.f",
            translation: "his coming",
            grammar: "VERB",
          },
          {
            mdc: "W25*N35",
            transliteration: "ini",
            translation: "bringing",
            grammar: "VERB",
          },
          {
            mdc: "[Aa1*D21]",
            transliteration: "ḫr",
            translation: "[under / with] (restored)",
            grammar: "PREP",
          },
          {
            mdc: "[Q3]",
            transliteration: "p...",
            translation: "[damaged]",
          },
          {
            mdc: "S42-D40",
            transliteration: "xrp",
            translation: "controller / director",
            grammar: "NOUN",
          },
        ],
        lineTranslation:
          "Year [?], coming, clothing. His coming, bringing [damaged] … controller.",
      },
      {
        tokens: [
          {
            mdc: "S29-D21*N29-X1",
            transliteration: "Srqt",
            translation: "Serqet (scorpion goddess)",
            grammar: "NOUN",
          },
          {
            mdc: "M17-Y5*N35-F31-S29-Z7-A1",
            transliteration: "Mn-ms",
            translation: "Menmose (personal name)",
            grammar: "NOUN",
          },
          {
            mdc: "N35-O1",
            transliteration: "n pr",
            translation: "of the household",
            grammar: "PREP",
          },
          {
            mdc: "//",
            transliteration: "...",
            translation: "[damaged]",
          },
          {
            mdc: "[Z3A]-[X1]-[G1]-[T14]-[X1*O49]",
            transliteration: "...",
            translation: "[damaged / restored]",
          },
        ],
        lineTranslation:
          "Serqet, Menmose, of the household [damaged] … [partially restored — heavily damaged].",
      },
      {
        tokens: [
          {
            mdc: "M17*Ff1*Ff1*Ff1",
            transliteration: "i+i+i",
            translation: "(tally strokes)",
            grammar: "NUM",
          },
          {
            mdc: "D36*N37-A2",
            transliteration: "šꜥ",
            translation: "writing / record",
            grammar: "NOUN",
          },
          {
            mdc: "Aa1*D21",
            transliteration: "ḫr",
            translation: "under / by",
            grammar: "PREP",
          },
          {
            mdc: "D54-O1:Z1",
            transliteration: "pr",
            translation: "going out",
            grammar: "VERB",
          },
          {
            mdc: "//",
            transliteration: "...",
            translation: "[damaged]",
          },
          {
            mdc: "[N35]-[A24]-[Ff1]",
            transliteration: "n...",
            translation: "[damaged]",
          },
        ],
        lineTranslation:
          "Tally [i+i+i]. Record under [someone]. Going out [damaged] … [damaged].",
      },
      {
        tokens: [
          {
            mdc: "M17-Z7-I9",
            transliteration: "iy.f",
            translation: "his coming",
            grammar: "VERB",
          },
          {
            mdc: "//",
            transliteration: "...",
            translation: "[damaged]",
          },
          {
            mdc: "O4-G1-N35",
            transliteration: "ḥꜣ n",
            translation: "behind / after",
            grammar: "PREP",
          },
          {
            mdc: "D21-I10&D46-S29-X1",
            transliteration: "rḏi s",
            translation: "to send",
            grammar: "VERB",
          },
          {
            mdc: "G17-D37-X1*G1-M17*M17-I9",
            transliteration: "m dit iy.f",
            translation: "by causing him to come",
            grammar: "VERB",
          },
          {
            mdc: "G36*X1",
            transliteration: "wr.t",
            translation: "the great one (fem.)",
            grammar: "NOUN",
          },
        ],
        lineTranslation:
          "His coming [damaged] … after/behind [someone]. Sending, by causing him to come — the great one.",
      },
    ],
    bibliography: [
      "Černý, J., Ostraca Gardiner (Oxford, 1927)",
      "McDowell, A.G., Village Life in Ancient Egypt (Oxford, 1999)",
      "Rosmorduc, S. (transcription in JSesh, CC-BY); converted via HieroJax",
    ],
  },
];
