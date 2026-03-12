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
        number: 1,
        tokens: [
          {
            codes: ["A30"],
            transliteration: "jnḏ-ḥr=k",
            translation: "Hail to you",
            grammar: "VERB",
          },
          {
            codes: ["G4", "R8", "D2"],
            transliteration: "nfr-ḥr",
            translation: "beautiful of face",
            grammar: "ADJ",
          },
          {
            codes: ["V30", "X1", "N35"],
            transliteration: "nb",
            translation: "lord",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "Hail to you, beautiful of face, lord",
      },
      {
        number: 2,
        tokens: [
          {
            codes: ["M2", "G17", "N35", "X1"],
            transliteration: "mꜣwt",
            translation: "of radiance",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "of radiance,",
      },
      {
        number: 3,
        tokens: [
          {
            codes: ["X1", "N35", "V13", "D4", "N35"],
            transliteration: "ṯs.n",
            translation: "joined together by",
            grammar: "VERB",
          },
          {
            codes: ["R4", "X1", "Q3"],
            transliteration: "Ptḥ",
            translation: "Ptah",
            grammar: "NOUN",
          },
          {
            codes: ["S29", "D46", "M40"],
            transliteration: "Skr",
            translation: "Sokar",
            grammar: "NOUN",
          },
          {
            codes: ["D54", "N35"],
            transliteration: "sqꜣ.n",
            translation: "raised by",
            grammar: "VERB",
          },
          {
            codes: ["E17", "Z1", "G17"],
            transliteration: "Jnpw",
            translation: "Anubis",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "joined together by Ptah-Sokar, raised by Anubis,",
      },
      {
        number: 4,
        tokens: [
          {
            codes: ["D21", "D46", "N35"],
            transliteration: "rḏj.n",
            translation: "to whom were given",
            grammar: "VERB",
          },
          {
            codes: ["I9", "Z4"],
            transliteration: "n=f",
            translation: "for him",
            grammar: "PREP",
          },
          {
            codes: ["F36", "N35"],
            transliteration: "sṯsw",
            translation: "supports",
            grammar: "NOUN",
          },
          {
            codes: ["G26"],
            transliteration: "Ḏḥwtj",
            translation: "of Thoth",
            grammar: "NOUN",
          },
        ],
        lineTranslation:
          "to whom were given the supports of Thoth,",
      },
      {
        number: 5,
        tokens: [
          {
            codes: ["G4", "R8", "D2"],
            transliteration: "nfr-ḥr",
            translation: "beautiful of face",
            grammar: "ADJ",
          },
          {
            codes: ["C4"],
            transliteration: "jmj",
            translation: "who is among",
            grammar: "PREP",
          },
          {
            codes: ["R8", "Z2"],
            transliteration: "nṯrw",
            translation: "the gods",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "beautiful of face, who is among the gods.",
      },
      {
        number: 6,
        tokens: [
          {
            codes: ["D4", "X1", "Z1"],
            transliteration: "jrt=k",
            translation: "your right eye",
            grammar: "NOUN",
          },
          {
            codes: ["S28"],
            transliteration: "jmnt",
            translation: "is in the west",
            grammar: "PREP",
          },
        ],
        lineTranslation: "Your right eye is in",
      },
      {
        number: 7,
        tokens: [
          {
            codes: ["N31", "X1", "P1"],
            transliteration: "sktw",
            translation: "the evening bark",
            grammar: "NOUN",
          },
          {
            codes: ["D4", "X1", "Z1"],
            transliteration: "jrt=k",
            translation: "your left eye",
            grammar: "NOUN",
          },
          {
            codes: ["S28"],
            transliteration: "jꜣbt",
            translation: "is in the east",
            grammar: "PREP",
          },
          {
            codes: ["N31", "D46", "X1"],
            transliteration: "mꜥnḏt",
            translation: "the morning bark",
            grammar: "NOUN",
          },
        ],
        lineTranslation:
          "the evening bark; your left eye is in the morning bark.",
      },
      {
        number: 8,
        tokens: [
          {
            codes: ["N37", "X1", "Z1"],
            transliteration: "jnḥwj=k",
            translation: "your eyebrows",
            grammar: "NOUN",
          },
          {
            codes: ["C4"],
            transliteration: "m",
            translation: "are those of",
            grammar: "PREP",
          },
          {
            codes: ["N8", "Z1"],
            transliteration: "psḏt",
            translation: "the Ennead",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "Your eyebrows are those of the Ennead,",
      },
      {
        number: 9,
        tokens: [
          {
            codes: ["D2", "X1", "Z1"],
            transliteration: "wpt=k",
            translation: "your brow",
            grammar: "NOUN",
          },
          {
            codes: ["C4"],
            transliteration: "m",
            translation: "is that of",
            grammar: "PREP",
          },
          {
            codes: ["E17", "Z1", "G17"],
            transliteration: "Jnpw",
            translation: "Anubis",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "your brow is that of Anubis,",
      },
      {
        number: 10,
        tokens: [
          {
            codes: ["N8", "Z1"],
            transliteration: "psḏt",
            translation: "the Ennead",
            grammar: "NOUN",
          },
          {
            codes: ["O1", "Z1"],
            transliteration: "m ḥwt",
            translation: "in the house",
            grammar: "PREP",
          },
          {
            codes: ["V30", "X1", "N35"],
            transliteration: "wr",
            translation: "great",
            grammar: "ADJ",
          },
          {
            codes: ["N18", "N35"],
            transliteration: "jm",
            translation: "therein",
            grammar: "PREP",
          },
          {
            codes: ["N25", "X1"],
            transliteration: "Jwnw",
            translation: "in Heliopolis",
            grammar: "NOUN",
          },
        ],
        lineTranslation:
          "the Ennead, in the great house in Heliopolis,",
      },
      {
        number: 11,
        tokens: [
          {
            codes: ["V30", "X1", "N35"],
            transliteration: "nb",
            translation: "lord",
            grammar: "NOUN",
          },
          {
            codes: ["G1", "X1", "Z1"],
            transliteration: "pꜥt",
            translation: "of nobles",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "lord of nobles,",
      },
      {
        number: 12,
        tokens: [
          {
            codes: ["C4", "A1"],
            transliteration: "Wsjr",
            translation: "the Osiris",
            grammar: "NOUN",
          },
          {
            codes: ["M23", "X1", "L2", "X1"],
            transliteration: "nsw",
            translation: "king",
            grammar: "NOUN",
          },
          {
            codes: ["V30", "D58", "X1", "M17", "N5"],
            transliteration: "Nb-ḫprw-Rꜥ",
            translation: "Nebkheperure",
            grammar: "NOUN",
          },
          {
            codes: ["R12", "X1"],
            transliteration: "mꜣꜥ-ḫrw",
            translation: "true of voice",
            grammar: "ADJ",
          },
        ],
        lineTranslation:
          "the Osiris, king Nebkheperure (Tutankhamun), true of voice.",
      },
    ],
    bibliography: [
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
        number: 1,
        tokens: [
          {
            codes: ["G5", "F36", "N19"],
            transliteration: "Ḥr smꜣ-tꜢwj",
            translation: "Horus, Uniter of the Two Lands",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "Horus, Uniter of the Two Lands,",
      },
      {
        number: 2,
        tokens: [
          {
            codes: ["G16", "F36", "N19"],
            transliteration: "Nbty smꜣ-tꜢwj",
            translation: "Two Ladies, Uniter of the Two Lands",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "Two Ladies, Uniter of the Two Lands,",
      },
      {
        number: 3,
        tokens: [
          {
            codes: ["M23", "X1", "L2", "X1"],
            transliteration: "nsw-bjt",
            translation: "king of Upper and Lower Egypt",
            grammar: "NOUN",
          },
          {
            codes: ["N35", "D58", "F12", "Q3", "X1", "D21", "G43"],
            transliteration: "Nb-ḥꜢpt-rꜤ",
            translation: "Possessor of the Rudder of Ra",
            grammar: "NOUN",
          },
        ],
        lineTranslation:
          "King of Upper and Lower Egypt, Nebhapetre,",
      },
      {
        number: 4,
        tokens: [
          {
            codes: ["S3", "N35"],
            transliteration: "sꜢ-Rꜥ",
            translation: "Son of Ra",
            grammar: "NOUN",
          },
          {
            codes: ["Y5", "N35", "X1", "G43", "F12", "X1", "Q3"],
            transliteration: "Mnṯw-ḥtp",
            translation: "Montu Is Satisfied",
            grammar: "NOUN",
          },
          {
            codes: ["D46", "X1", "Z5", "Q3"],
            transliteration: "ḏt",
            translation: "forever",
            grammar: "ADV",
          },
        ],
        lineTranslation:
          "Son of Ra, Mentuhotep, forever.",
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
        number: 1,
        tokens: [
          {
            codes: ["G5"],
            transliteration: "Ḥr",
            translation: "Horus",
            grammar: "NOUN",
          },
          {
            codes: ["K1", "N35", "X1"],
            transliteration: "nḫt",
            translation: "mighty bull",
            grammar: "ADJ",
          },
          {
            codes: ["M12", "Z1", "N14"],
            transliteration: "mry-Mꜣꜥt",
            translation: "beloved of Maat",
            grammar: "ADJ",
          },
        ],
        lineTranslation: "Horus, mighty bull, beloved of Maat,",
      },
      {
        number: 2,
        tokens: [
          {
            codes: ["G16"],
            transliteration: "Nbty",
            translation: "Two Ladies",
            grammar: "NOUN",
          },
          {
            codes: ["V30", "X1", "N35"],
            transliteration: "nb",
            translation: "Lord",
            grammar: "NOUN",
          },
          {
            codes: ["D58", "N25"],
            transliteration: "qn",
            translation: "of valor",
            grammar: "NOUN",
          },
          {
            codes: ["M15", "X1"],
            transliteration: "sḫꜣ",
            translation: "who strikes",
            grammar: "VERB",
          },
          {
            codes: ["T14", "Z2"],
            transliteration: "ḫꜣswt",
            translation: "foreign lands",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "Two Ladies, lord of valor who strikes foreign lands,",
      },
      {
        number: 3,
        tokens: [
          {
            codes: ["M23", "X1", "L2", "X1"],
            transliteration: "nsw-bjt",
            translation: "king of Upper and Lower Egypt",
            grammar: "NOUN",
          },
          {
            codes: ["G17", "N5", "D21", "X1", "N35", "D21"],
            transliteration: "Wsr-mꜣꜥt-Rꜥ-stp-n-Rꜥ",
            translation: "Usermaatra-Setepenre",
            grammar: "NOUN",
          },
        ],
        lineTranslation:
          "King of Upper and Lower Egypt, Usermaatra-Setepenre,",
      },
      {
        number: 4,
        tokens: [
          {
            codes: ["S3", "N35"],
            transliteration: "sꜢ-Rꜥ",
            translation: "Son of Ra",
            grammar: "NOUN",
          },
          {
            codes: ["D21", "G43", "G17", "S29", "S29", "G17", "N35"],
            transliteration: "Rꜥ-ms-sw",
            translation: "Ramesses",
            grammar: "NOUN",
          },
          {
            codes: ["M12", "Z1", "C2"],
            transliteration: "mry-Jmn",
            translation: "beloved of Amun",
            grammar: "ADJ",
          },
        ],
        lineTranslation: "Son of Ra, Ramesses, beloved of Amun,",
      },
      {
        number: 5,
        tokens: [
          {
            codes: ["S34", "Z1"],
            transliteration: "ꜥnḫ",
            translation: "given life",
            grammar: "VERB",
          },
          {
            codes: ["D46", "X1", "Z5", "Q3"],
            transliteration: "ḏt",
            translation: "forever",
            grammar: "ADV",
          },
          {
            codes: ["M17", "M17", "N35"],
            transliteration: "mj-Rꜥ",
            translation: "like Ra",
            grammar: "PREP",
          },
        ],
        lineTranslation: "given life forever like Ra.",
      },
    ],
    bibliography: [
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
        number: 1,
        tokens: [
          {
            codes: ["N37", "Z1", "X1"],
            transliteration: "wꜢḏ",
            translation: "the green eye-paint",
            grammar: "NOUN",
          },
          {
            codes: ["D4", "G17"],
            transliteration: "jrt",
            translation: "eye",
            grammar: "NOUN",
          },
          {
            codes: ["G5"],
            transliteration: "Ḥr",
            translation: "of Horus",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "The green eye-paint, the eye of Horus,",
      },
      {
        number: 2,
        tokens: [
          {
            codes: ["D46", "D36", "X1"],
            transliteration: "ḏꜢt",
            translation: "which",
            grammar: "PRON",
          },
          {
            codes: ["N35", "D36"],
            transliteration: "nḏ",
            translation: "protects",
            grammar: "VERB",
          },
          {
            codes: ["A1"],
            transliteration: "=k",
            translation: "you",
            grammar: "PRON",
          },
          {
            codes: ["C4", "R8"],
            transliteration: "m nṯr",
            translation: "as a god",
            grammar: "PREP",
          },
        ],
        lineTranslation: "which protects you as a god,",
      },
      {
        number: 3,
        tokens: [
          {
            codes: ["D4", "X1", "Z1"],
            transliteration: "jrt=k",
            translation: "your eye",
            grammar: "NOUN",
          },
          {
            codes: ["V30", "X1", "N35"],
            transliteration: "nbt",
            translation: "of every",
            grammar: "ADJ",
          },
          {
            codes: ["N23", "X1"],
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
        number: 1,
        tokens: [
          {
            codes: ["O34", "G17"],
            transliteration: "jst",
            translation: "How hard",
            grammar: "PART",
          },
          {
            codes: ["D28", "Z1"],
            transliteration: "bj",
            translation: "and painful",
            grammar: "ADJ",
          },
          {
            codes: ["V30", "X1", "N35"],
            transliteration: "nbt",
            translation: "every",
            grammar: "ADJ",
          },
          {
            codes: ["N35", "D46", "Z5", "D4"],
            transliteration: "nḏt",
            translation: "affliction",
            grammar: "NOUN",
          },
          {
            codes: ["F29", "Z1"],
            transliteration: "jꜣw",
            translation: "of old age",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "How hard and painful are every affliction of old age!",
      },
      {
        number: 2,
        tokens: [
          {
            codes: ["D21", "G43", "G1", "X1"],
            transliteration: "rwꜣt",
            translation: "He who is weak",
            grammar: "NOUN",
          },
          {
            codes: ["D19"],
            transliteration: "fnḏ",
            translation: "his nose",
            grammar: "NOUN",
          },
          {
            codes: ["D4"],
            transliteration: "jrty",
            translation: "his eyes",
            grammar: "NOUN",
          },
          {
            codes: ["D28"],
            transliteration: "=fj",
            translation: "his",
            grammar: "PRON",
          },
        ],
        lineTranslation:
          "He who is weak — his nose and eyes grow dim,",
      },
      {
        number: 3,
        tokens: [
          {
            codes: ["F21", "Z1"],
            transliteration: "msḏrwj",
            translation: "his ears",
            grammar: "NOUN",
          },
          {
            codes: ["D35"],
            transliteration: "n",
            translation: "do not",
            grammar: "NEG",
          },
          {
            codes: ["D54"],
            transliteration: "sḏm",
            translation: "hear",
            grammar: "VERB",
          },
        ],
        lineTranslation: "his ears do not hear.",
      },
      {
        number: 4,
        tokens: [
          {
            codes: ["G17", "D21"],
            transliteration: "mr",
            translation: "Be attentive",
            grammar: "VERB",
          },
          {
            codes: ["D54", "Z2"],
            transliteration: "sḏmw",
            translation: "listener",
            grammar: "NOUN",
          },
          {
            codes: ["M17", "X1"],
            transliteration: "mdt",
            translation: "to the words",
            grammar: "NOUN",
          },
          {
            codes: ["V30", "X1", "N35"],
            transliteration: "nbt",
            translation: "of every",
            grammar: "ADJ",
          },
          {
            codes: ["G40", "X1", "Z1"],
            transliteration: "sꜣt",
            translation: "excellence",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "Be attentive, listener, to the words of every excellence.",
      },
    ],
    bibliography: [
      "Lichtheim, M., Ancient Egyptian Literature vol. I (Berkeley, 1973), 61–80",
      "Simpson, W.K. (ed.), The Literature of Ancient Egypt, 3rd ed. (New Haven, 2003), 129–148",
      "Žabkar, L.V., 'The Theocracy of Amarna and the Doctrine of the Ba', JNES 13 (1954)",
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
        number: 1,
        tokens: [
          {
            codes: ["R7", "D21"],
            transliteration: "ḥnk.t",
            translation: "Beginning of",
            grammar: "NOUN",
          },
          {
            codes: ["D46", "D21", "G43"],
            transliteration: "drw",
            translation: "the chapters",
            grammar: "NOUN",
          },
          {
            codes: ["G17", "N35", "X1"],
            transliteration: "mnḫt",
            translation: "of going forth",
            grammar: "VERB",
          },
          {
            codes: ["M17", "D54"],
            transliteration: "m hrw",
            translation: "by day",
            grammar: "PREP",
          },
        ],
        lineTranslation: "Beginning of the chapters of going forth by day,",
      },
      {
        number: 2,
        tokens: [
          {
            codes: ["D46", "Z5", "Q3"],
            transliteration: "ḏd-mdw",
            translation: "words spoken",
            grammar: "VERB",
          },
          {
            codes: ["N35"],
            transliteration: "n",
            translation: "by",
            grammar: "PREP",
          },
          {
            codes: ["C4", "A1"],
            transliteration: "Wsjr",
            translation: "Osiris",
            grammar: "NOUN",
          },
          {
            codes: ["G17", "S29", "S29", "G17"],
            transliteration: "Jni",
            translation: "Ani",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "Words spoken by the Osiris Ani,",
      },
      {
        number: 3,
        tokens: [
          {
            codes: ["G17", "D21", "G17"],
            transliteration: "wr",
            translation: "great",
            grammar: "ADJ",
          },
          {
            codes: ["D46", "Z5"],
            transliteration: "ḏd",
            translation: "scribe",
            grammar: "NOUN",
          },
          {
            codes: ["G17", "G17", "N35", "X1"],
            transliteration: "mꜣꜥt",
            translation: "of the offerings",
            grammar: "NOUN",
          },
          {
            codes: ["R8", "Z2"],
            transliteration: "nṯrw",
            translation: "of all the gods",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "the great scribe of the offerings of all the gods,",
      },
      {
        number: 4,
        tokens: [
          {
            codes: ["R12", "X1"],
            transliteration: "mꜣꜥ-ḫrw",
            translation: "true of voice",
            grammar: "ADJ",
          },
          {
            codes: ["V30", "X1", "N35"],
            transliteration: "nb",
            translation: "lord",
            grammar: "NOUN",
          },
          {
            codes: ["X1", "D40"],
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
];
