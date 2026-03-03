import { useState, lazy, Suspense } from "react";
import { Sparkles, Filter, Search, Heart } from "lucide-react";
import { useFavorites } from "./hooks/useFavorites";
import { useSpeech } from "./hooks/useSpeech";
import { words, gradients, categories } from "../../data/wordsData";

// Lazy load WordCard component
const WordCard = lazy(() =>
  import("../../components/werd/WordCard").then((module) => ({
    default: module.WordCard,
  })),
);

// Loading component for WordCard
function CardSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 animate-pulse">
      <div className="h-6 bg-white/20 rounded mb-4 w-3/4"></div>
      <div className="h-4 bg-white/10 rounded mb-2"></div>
      <div className="h-4 bg-white/10 rounded w-5/6"></div>
    </div>
  );
}

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
            <Suspense key={word.word} fallback={<CardSkeleton />}>
              <WordCard
                {...word}
                gradient={gradients[index % gradients.length]}
                index={index}
                isFavorite={favorites.includes(word.word)}
                onToggleFavorite={toggleFavorite}
                onSpeak={speak}
              />
            </Suspense>
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
