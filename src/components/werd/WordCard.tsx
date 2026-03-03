import { motion } from "motion/react";
import { BookOpen, Volume2, Heart } from "lucide-react";

interface WordCardProps {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  etymology?: string;
  example?: string;
  gradient: string;
  index: number;
  isFavorite: boolean;
  onToggleFavorite: (word: string) => void;
  onSpeak: (word: string) => void;
  tags: string[];
}

// Abbreviate part of speech
const abbreviatePOS = (pos: string): string => {
  const abbreviations: { [key: string]: string } = {
    noun: "n.",
    adjective: "adj.",
    verb: "v.",
    adverb: "adv.",
  };
  return abbreviations[pos.toLowerCase()] || pos;
};

// Vibrant tag colors
const tagColors: { [key: string]: string } = {
  sensory: "#ff6b9d",
  scientific: "#00d4ff",
  modern: "#c084fc",
  neologism: "#fbbf24",
  poetic: "#a78bfa",
  literary: "#60a5fa",
  philosophical: "#34d399",
  existential: "#818cf8",
  historical: "#fb923c",
  latin: "#f472b6",
  quirky: "#facc15",
  greek: "#38bdf8",
  psychological: "#e879f9",
  romantic: "#fb7185",
  spiritual: "#a3e635",
  mystical: "#c084fc",
  welsh: "#14b8a6",
  untranslatable: "#f97316",
  melancholic: "#8b5cf6",
  rare: "#4ade80",
  temporal: "#06b6d4",
  coined: "#fcd34d",
  whimsical: "#f472b6",
};

export function WordCard({
  word,
  pronunciation,
  partOfSpeech,
  definition,
  etymology,
  example,
  gradient,
  index,
  isFavorite,
  onToggleFavorite,
  onSpeak,
  tags,
}: WordCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
        style={{ background: gradient }}
      />
      <div className="relative bg-[#0f0f14] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
        {/* Top actions */}
        <div className="flex items-center justify-between mb-4">
          {/* Gradient accent line */}
          <div className="h-1 w-20 rounded-full" style={{ background: gradient }} />
          
          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSpeak(word)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group/btn"
              aria-label="Pronounce word"
            >
              <Volume2 className="w-4 h-4 text-white/60 group-hover/btn:text-white/90 transition-colors" />
            </button>
            <button
              onClick={() => onToggleFavorite(word)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group/btn"
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart 
                className={`w-4 h-4 transition-all ${
                  isFavorite 
                    ? 'fill-red-500 text-red-500' 
                    : 'text-white/60 group-hover/btn:text-white/90'
                }`} 
              />
            </button>
          </div>
        </div>
        
        {/* Word, pronunciation, and part of speech */}
        <div className="mb-4">
          <h3 className="text-3xl font-display font-bold text-white mb-1 tracking-tight">
            {word}
          </h3>
          <div className="flex items-baseline gap-2">
            <p className="text-white/50 font-body italic">{pronunciation}</p>
            <span className="text-white/40 font-body text-sm">{abbreviatePOS(partOfSpeech)}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs font-display font-medium"
              style={{
                backgroundColor: `${tagColors[tag] || "#666"}20`,
                color: tagColors[tag] || "#999",
                border: `1px solid ${tagColors[tag] || "#666"}40`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Definition */}
        <p className="font-body text-white/90 leading-relaxed mb-4">
          {definition}
        </p>

        {/* Example usage */}
        {example && (
          <div className="border-l-2 pl-4 mb-4" style={{ borderColor: `${gradient}` }}>
            <p className="font-body text-white/60 italic text-sm">
              "{example}"
            </p>
          </div>
        )}

        {/* Etymology */}
        {etymology && (
          <div className="flex items-start gap-2 pt-4 border-t border-white/5">
            <BookOpen className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
            <p className="text-xs font-body text-white/40 leading-relaxed">
              {etymology}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
