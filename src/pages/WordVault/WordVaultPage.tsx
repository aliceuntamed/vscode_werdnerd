import { useState } from "react";
import { WordCard } from "../../WordCard";
import { Sparkles, Filter, Search, Heart } from "lucide-react";
import { useFavorites } from "./hooks/useFavorites";
import { useSpeech } from "./hooks/useSpeech";

interface Word {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  etymology?: string;
  example?: string;
  category: string;
  tags: string[];
}

const words: Word[] = [
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

const gradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
];

const categories = [
  "all",
  "emotion",
  "sensation",
  "action",
  "quality",
  "occurrence",
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const { speak } = useSpeech();

  const filteredWords = words.filter((w) => {
    const matchesCategory =
      selectedCategory === "all" || w.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFavorites = !showFavoritesOnly || favorites.includes(w.word);

    return matchesCategory && matchesSearch && matchesFavorites;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f] px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <h1
              className="font-display text-6xl sm:text-7xl font-bold tracking-tight"
              style={{
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Word Vault
            </h1>
            <Sparkles className="w-8 h-8 text-pink-400" />
          </div>
          <p className="font-body text-xl text-white/60 max-w-2xl mx-auto italic">
            A curated carnival of curious vocabulary for language enthusiasts
            and word weirdos
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search words or definitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full px-12 py-3 font-body text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <Filter className="w-5 h-5 text-white/40" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-full font-display text-sm transition-all duration-300
                ${
                  selectedCategory === category
                    ? "bg-white/10 text-white border border-white/20"
                    : "bg-white/5 text-white/50 border border-white/5 hover:bg-white/10 hover:text-white/70"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Favorites Toggle */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`
              px-5 py-2.5 rounded-full font-display text-sm transition-all duration-300 flex items-center gap-2
              ${
                showFavoritesOnly
                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                  : "bg-white/5 text-white/50 border border-white/5 hover:bg-white/10 hover:text-white/70"
              }
            `}
          >
            <Heart
              className={`w-4 h-4 ${showFavoritesOnly ? "fill-red-400" : ""}`}
            />
            {showFavoritesOnly ? "Showing Favorites" : "Show Favorites"}
            {favorites.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs">
                {favorites.length}
              </span>
            )}
          </button>
        </div>

        {/* Word Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWords.map((word, index) => (
            <WordCard
              key={word.word}
              {...word}
              gradient={gradients[index % gradients.length]}
              index={index}
              isFavorite={favorites.includes(word.word)}
              onToggleFavorite={toggleFavorite}
              onSpeak={speak}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredWords.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-white/40 text-lg">
              No words found. Try adjusting your filters or search.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/5">
          <p className="font-body text-white/40 text-sm">
            Collecting strange words, one definition at a time
          </p>
        </div>
      </div>
    </div>
  );
}
