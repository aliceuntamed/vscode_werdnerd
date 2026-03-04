import { Heart } from "lucide-react";
import { WerdTagList } from "./WerdTagList";
import { Werd } from "../../../types/Werd";

interface WerdCardProps extends Werd {
  partOfSpeech?: string;
  funfact?: string;
  source?: string;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export function WerdCard({
  word,
  pronunciation,
  partOfSpeech,
  meaning,
  funfact,
  source,
  tags,
  isFavorite,
  onToggleFavorite,
}: WerdCardProps) {
  return (
    <div
      className="
        relative rounded-xl p-6 
        bg-[#0b0b0d] 
        border border-white/10 
        shadow-[0_4px_12px_rgba(0,0,0,0.4)]
        hover:shadow-[0_6px_18px_rgba(0,0,0,0.55)]
        transition-shadow
      "
    >
      {/* Chrome accent + favorite */}
      <div className="flex items-center justify-between mb-4">
        <div
          className="
            h-[3px] w-1/2 rounded-full 
            bg-gradient-to-r from-[#e5e7eb] via-[#9bbcff] to-[#c084fc]
            opacity-70
          "
        />
        <button
          onClick={onToggleFavorite}
          className="text-white/40 hover:text-white transition"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "fill-pink-400 text-pink-400" : ""
            }`}
          />
        </button>
      </div>

      {/* Word */}
      <h2 className="font-heading text-2xl text-white tracking-tight">
        {word}
      </h2>

      {/* Pronunciation */}
      {pronunciation && (
        <p className="font-body text-white/50 italic text-sm mt-1">
          /{pronunciation}/
        </p>
      )}

      {/* Part of speech */}
      {partOfSpeech && (
        <p className="font-body text-white/40 text-sm mt-1">{partOfSpeech}</p>
      )}

      {/* Tags */}
      <WerdTagList tags={tags} />

      {/* Definition */}
      <p className="font-body text-white/80 mt-4 leading-relaxed">{meaning}</p>

      {/* Fun fact */}
      {funfact && (
        <p className="font-body text-white/60 mt-4 italic">{funfact}</p>
      )}

      {/* Divider */}
      <div className="my-6 h-px w-full bg-white/10" />

      {/* Source */}
      {source && (
        <p className="font-body text-white/40 text-xs">Source: {source}</p>
      )}
    </div>
  );
}
