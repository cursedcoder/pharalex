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
          { mdc: "i-Aa27", transliteration: "j nḏ", translation: "O, hail", grammar: "PART" },
          { mdc: "D&&&Y1", transliteration: "(ḏ)", translation: "(phonetic complement)", grammar: "PART" },
          { mdc: "Hr*Z1:k", transliteration: "ḥr=k", translation: "to you", grammar: "PREP" },
          { mdc: "nfr", transliteration: "nfr", translation: "beautiful", grammar: "ADJ" },
          { mdc: "f:r", transliteration: "ḥr", translation: "of face", grammar: "NOUN" },
          { mdc: "Hr*Z1:k-mA-A-G43&t-N8:Z2", transliteration: "nb", translation: "lord (of radiance)", grammar: "NOUN" },
        ],
        lineTranslation: "O, hail to you, beautiful of face, lord",
      },
      {
        number: 2,
        tokens: [
          { mdc: "Aa8:n-p:t-H-z:k:r-t:A40-z:A*q-A28-Y1:n-i-n:p-w-A40-r:D37-n:n", transliteration: "mꜣwt", translation: "of radiance", grammar: "NOUN" },
        ],
        lineTranslation: "of radiance,",
      },
      {
        number: 3,
        tokens: [
          { mdc: "f-G26:t*Z4-z:T:z-w-U39*A2:Z2-nfr-f:r-Hr:Z1-Z11-m*(Z1*Z1)-(Z1*Z1*Z1)-A40-ir:t*Z1:k-R14-M:t:D41-M:z", transliteration: "ṯs.n Ptḥ-Skr sqꜣ.n Jnpw rḏj.n n=f", translation: "joined together by Ptah-Sokar, raised by Anubis, to whom were given", grammar: "VERB" },
        ],
        lineTranslation: "joined together by Ptah-Sokar, raised by Anubis, to whom were given",
      },
      {
        number: 4,
        tokens: [
          { mdc: "V29-k:t-w-P3-ir:t*Z1:k-R15-tb-D41:M-V26:d-t*t:P3-i-w-i-K1:n-H-D13:D13:k", transliteration: "sṯsw Ḏḥwtj nfr ḥr jmj nṯrw jrt=k jmnt m", translation: "the supports of Thoth, beautiful of face, who is among the gods; your right eye is in the west", grammar: "NOUN" },
        ],
        lineTranslation: "the supports of Thoth, beautiful of face, who is among the gods. Your right eye is in the west",
      },
      {
        number: 5,
        tokens: [
          { mdc: "M:N9*t-(Z1*Z1*Z1)-A40-i-w-F13:t*Z1-k:M-i-n:p*w-i-w-M:D36:k-M16-A-tp:k", transliteration: "sktw jw jnḥwj=k jꜣbt mꜥnḏt jw jrt=k m tp=k", translation: "the evening bark; your eyebrows the east-bark; your left eye the morning bark on your head", grammar: "NOUN" },
        ],
        lineTranslation: "the evening bark; your eyebrows in the east bark, your left eye the morning bark on your head",
      },
      {
        number: 6,
        tokens: [
          { mdc: "M-G5-i-w-H-U8:n:z-Y1:k-M-p:t-H-z:k:r-t-A40-M-F4:t*Z1-ir:st*A40", transliteration: "m psḏt jw wpt=k m Jnpw mkḥꜣ=k m-ḥꜣt Wsjr", translation: "are of the Ennead; your brow is Anubis; the back of your head with Osiris", grammar: "PREP" },
        ],
        lineTranslation: "are of the Ennead, your brow is that of Anubis, the back of your head with Osiris",
      },
      {
        number: 7,
        tokens: [
          { mdc: "ir:f-i-m-k-z:T32-M:D54-k-sw-w-r-N31:t*Z1*Z1*Z1-nfr*w:Z2-H-A25-D40:k-n:f", transliteration: "mꜣ=f jm=k sšm=k sw r wꜣwt nfrw ḥw=k n=f", translation: "who sees thanks to you; may you guide him on smooth paths; may you smite for him", grammar: "VERB" },
        ],
        lineTranslation: "who sees thanks to you, may you guide him on smooth paths, may you smite for him",
      },
      {
        number: 8,
        tokens: [
          { mdc: "F36-A-i-i-t-D40:Z2-z:t:N37-A40-z:x:r-A15:D40-f:x:f-tyw*nw-Z2:k-Z2:k-x:r", transliteration: "smꜣyt Stš sḫr=f ḫftjw=k ḫr", translation: "the gang of Seth, that he may overthrow your enemies before", grammar: "NOUN" },
        ],
        lineTranslation: "the gang of Seth, that he may overthrow your enemies before",
      },
      {
        number: 9,
        tokens: [
          { mdc: "N9*t-A40:Z2-G36:r-i-Z11-O28-nw:O49-V15-t:D40-n:f-G36:r-r:t-i-m-x:r-G5", transliteration: "psḏt m ḥwt-sr wr jm Jwnw jṯ.n=f wrrt jm ḫr Ḥr", translation: "the Ennead in the great house in Heliopolis; that he take the crown before Horus", grammar: "NOUN" },
        ],
        lineTranslation: "the Ennead, in the great house in Heliopolis, and that he may take the crown before Horus,",
      },
      {
        number: 10,
        tokens: [
          { mdc: "nb-p:D36:t-A1*B1:Z2", transliteration: "nb pꜥt", translation: "lord of nobles", grammar: "NOUN" },
        ],
        lineTranslation: "lord of nobles,",
      },
      {
        number: 11,
        tokens: [
          { mdc: "ir:st*A40-sw-t:n", transliteration: "Wsjr nsw", translation: "the Osiris, king", grammar: "NOUN" },
          { mdc: "ra-xpr-Z2:nb", transliteration: "Nb-ḫprw-Rꜥ", translation: "Nebkheperure", grammar: "NOUN" },
          { mdc: "Aa11v-P8", transliteration: "mꜣꜥ-ḫrw", translation: "true of voice", grammar: "ADJ" },
          { mdc: "di-anx-ra:Z1-mi", transliteration: "ḏj ꜥnḫ mj Rꜥ", translation: "given life like Ra", grammar: "VERB" },
        ],
        lineTranslation: "the Osiris, king Nebkheperure (Tutankhamun), true of voice, given life like Ra.",
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
        number: 1,
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
        number: 2,
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
        number: 3,
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
        number: 4,
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
        number: 1,
        tokens: [
          { mdc: "HAt:a", transliteration: "ḥꜣt", translation: "beginning", grammar: "NOUN" },
          { mdc: "m", transliteration: "m", translation: "of", grammar: "PREP" },
          { mdc: "pA", transliteration: "pꜣ", translation: "the", grammar: "ART" },
          { mdc: "n:xt:x*t-G45-Z2:n", transliteration: "nḫtw", translation: "victories", grammar: "NOUN" },
        ],
        lineTranslation: "Beginning of the victories",
      },
      {
        number: 2,
        tokens: [
          { mdc: "sw:t-bit:t", transliteration: "nsw-bjtj", translation: "King of Upper and Lower Egypt", grammar: "NOUN" },
          { mdc: "ra-wsr-C10A-stp:n-ra", transliteration: "Wsr-mꜣꜥt-Rꜥ-stp-n-Rꜥ", translation: "Usermaatra-Setepenre", grammar: "NOUN" },
        ],
        lineTranslation: "King of Upper and Lower Egypt, Usermaatra-Setepenre,",
      },
      {
        number: 3,
        tokens: [
          { mdc: "zA*ra", transliteration: "sꜢ-Rꜥ", translation: "Son of Ra", grammar: "NOUN" },
          { mdc: "i-mn:n:N36-C2-ms-s-s", transliteration: "Rꜥ-ms-sw-mry-Jmn", translation: "Ramesses, beloved of Amun", grammar: "NOUN" },
        ],
        lineTranslation: "Son of Ra, Ramesses, beloved of Amun,",
      },
      {
        number: 4,
        tokens: [
          { mdc: "di-anx", transliteration: "dj-ꜥnḫ", translation: "given life", grammar: "VERB" },
          { mdc: "D*(t:tA)", transliteration: "ḏt", translation: "forever", grammar: "ADV" },
        ],
        lineTranslation: "given life forever.",
      },
      {
        number: 5,
        tokens: [
          { mdc: "ir:n:f", transliteration: "jr.n=f", translation: "He made", grammar: "VERB" },
          { mdc: "m", transliteration: "m", translation: "in", grammar: "PREP" },
          { mdc: "pA", transliteration: "pꜣ", translation: "the", grammar: "ART" },
          { mdc: "tA:N21*Z1:n", transliteration: "tꜣ", translation: "land", grammar: "NOUN" },
          { mdc: "(x:t)*U30:N25", transliteration: "ẖrw", translation: "of Kharu", grammar: "NOUN" },
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
        number: 1,
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
        number: 2,
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
        number: 3,
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
        number: 1,
        tokens: [
          {
            mdc: "G43-U28-G1-Y1-G54-G43-A2-A1-V28-W14-O34:Y1-D52:X1-D50-D50-Y1",
            transliteration: "jst bj nbt nḏt jꜣw",
            translation: "How hard and painful are all afflictions of old age!",
            grammar: "PART",
          },
        ],
        lineTranslation: "How hard and painful are all afflictions of old age!",
      },
      {
        number: 2,
        tokens: [
          {
            mdc: "E34-N35:O31-D36-F26:N35-S28-N35-W11-D21-G43-A2-A1",
            transliteration: "rmṯ nḫn fnḏ=f jrty=f msḏrwy=f",
            translation: "A man grows weak — his nose stopped, his eyes dim, his ears deaf",
            grammar: "NOUN",
          },
        ],
        lineTranslation: "A man grows weak — his nose stopped, his eyes dim, his ears deaf",
      },
      {
        number: 3,
        tokens: [
          {
            mdc: "G43-O34:Aa1-W10-Y1-Q1-X1-O1-N35:X1-O4-D21-Y1-A1-G17-S43-D46-G43-G43-A2-S29-Q3-D46-M44-Y1-D46-S29-Z7-T30:Z2",
            transliteration: "wp=f r=f m Hw=f Dd nw=f n-j=f sḏmw sḏm",
            translation: "Yet he speaks; and what he utters, let a listener hear it",
            grammar: "VERB",
          },
        ],
        lineTranslation: "His heart fails, he cannot recall yesterday;",
      },
      {
        number: 4,
        tokens: [
          {
            mdc: "D21-X1:O4-D56-D54-G17:D36-X1:N35-T14-G41-G37-D35:N35-V28-M2-N35:D54-D35-M17-S29-D2-Z1-O34:Q3-O50:I9-M17-D21-N41-G17-S29-B4-V31A-V28-N35:D36-I1-G1-X1-A1*B1:Z2",
            transliteration: "sḏm sꜢ mdwt nt nbt sꜣt",
            translation: "Be attentive, listener, to the words of every excellence",
            grammar: "VERB",
          },
        ],
        lineTranslation: "Be attentive, listener, to the words of every excellence.",
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
        number: 1,
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
        number: 2,
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
        number: 3,
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
        number: 4,
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
];
