export interface Word {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  etymology?: string;
  example?: string;
  category: string;
  tags: string[];
}

export const words: Word[] = [
  {
    word: "Petrichor",
    pronunciation: "PET-ri-kor",
    partOfSpeech: "noun",
    definition:
      "The pleasant, earthy smell that accompanies the first rain after a dry spell.",
    etymology:
      "From Greek petra 'stone' + ichor 'the fluid that flows in the veins of the gods'",
    example: "The petrichor filled the air as the summer storm began.",
    category: "sensation",
    tags: ["sensory", "scientific", "modern"],
  },
  {
    word: "Vellichor",
    pronunciation: "VEL-i-kor",
    partOfSpeech: "noun",
    definition:
      "The strange wistfulness of used bookstores, filled with thousands of old books you'll never have time to read.",
    example: "She wandered through the aisles, overwhelmed by vellichor.",
    category: "emotion",
    tags: ["neologism", "poetic", "literary"],
  },
  {
    word: "Sonder",
    pronunciation: "SON-der",
    partOfSpeech: "noun",
    definition:
      "The realization that each random passerby is living a life as vivid and complex as your own.",
    example: "Looking out at the crowded street, he felt a wave of sonder.",
    category: "emotion",
    tags: ["neologism", "philosophical", "existential"],
  },
  {
    word: "Defenestration",
    pronunciation: "dee-fen-uh-STRAY-shun",
    partOfSpeech: "noun",
    definition: "The act of throwing someone or something out of a window.",
    etymology: "From Latin de- 'down from' + fenestra 'window'",
    example:
      "The infamous Defenestration of Prague sparked the Thirty Years' War.",
    category: "action",
    tags: ["historical", "latin", "quirky"],
  },
  {
    word: "Phosphenes",
    pronunciation: "FOS-feenz",
    partOfSpeech: "noun",
    definition: "The stars and colors you see when you rub your eyes.",
    etymology: "From Greek phos 'light' + phainein 'to show'",
    example: "The phosphenes danced behind her closed eyelids.",
    category: "sensation",
    tags: ["sensory", "scientific", "greek"],
  },
  {
    word: "Limerence",
    pronunciation: "LIM-er-ence",
    partOfSpeech: "noun",
    definition:
      "The state of being infatuated with another person, characterized by intrusive thinking and an acute longing for reciprocation.",
    example: "His limerence made it impossible to focus on anything else.",
    category: "emotion",
    tags: ["psychological", "modern", "romantic"],
  },
  {
    word: "Numinous",
    pronunciation: "NOO-min-us",
    partOfSpeech: "adjective",
    definition:
      "Having a strong religious or spiritual quality; mysterious and awe-inspiring.",
    etymology: "From Latin numen 'divine will'",
    example: "The ancient temple had a numinous atmosphere.",
    category: "quality",
    tags: ["spiritual", "latin", "mystical"],
  },
  {
    word: "Hiraeth",
    pronunciation: "HEER-eyeth",
    partOfSpeech: "noun",
    definition:
      "A homesickness for a home you cannot return to, or that never was.",
    etymology: "Welsh word with no direct English translation",
    example: "She felt a deep hiraeth for her childhood summers.",
    category: "emotion",
    tags: ["welsh", "untranslatable", "melancholic"],
  },
  {
    word: "Apricity",
    pronunciation: "uh-PRIS-i-tee",
    partOfSpeech: "noun",
    definition: "The warmth of the sun in winter.",
    etymology: "From Latin apricus 'warmed by the sun'",
    example:
      "They sat on the bench, savoring the apricity of the December afternoon.",
    category: "sensation",
    tags: ["sensory", "rare", "latin"],
  },
  {
    word: "Chronophobia",
    pronunciation: "kron-uh-FOH-bee-uh",
    partOfSpeech: "noun",
    definition:
      "The fear of time passing or the anxiety about the passage of time.",
    etymology: "From Greek chronos 'time' + phobos 'fear'",
    example: "His chronophobia intensified as his birthday approached.",
    category: "emotion",
    tags: ["psychological", "greek", "existential"],
  },
  {
    word: "Ephemeral",
    pronunciation: "ih-FEM-er-ul",
    partOfSpeech: "adjective",
    definition: "Lasting for a very short time; transient.",
    etymology: "From Greek ephemeros 'lasting only a day'",
    example: "The cherry blossoms were ephemeral, gone within a week.",
    category: "quality",
    tags: ["poetic", "greek", "temporal"],
  },
  {
    word: "Serendipity",
    pronunciation: "ser-en-DIP-i-tee",
    partOfSpeech: "noun",
    definition:
      "The occurrence of events by chance in a happy or beneficial way; a fortunate accident.",
    etymology:
      "Coined by Horace Walpole in 1754 from the Persian fairy tale 'The Three Princes of Serendip'",
    example: "It was pure serendipity that they met at the café.",
    category: "occurrence",
    tags: ["coined", "literary", "whimsical"],
  },
];

export const gradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
];

export const categories = [
  "all",
  "emotion",
  "sensation",
  "action",
  "quality",
  "occurrence",
];
