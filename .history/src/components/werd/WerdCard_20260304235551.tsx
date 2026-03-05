import { Heart } from "lucide-react";
import { WerdTagList } from "./WerdTagList";
import type { Werd } from "@/types";

interface WerdCardProps extends Werd {
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export function WerdCard({
  werd,
  pronunciation,
  part_of_speech,
  definition,
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
        {werd}
      </h2>

      {/* Pronunciation */}
      {pronunciation && (
        <p className="font-body text-white/50 italic text-sm mt-1">
          /{pronunciation}/
        </p>
      )}

      {/* Part of speech */}
      {part_of_speech && (
        <p className="font-body text-white/40 text-sm mt-1">{part_of_speech}</p>
      )}

      {/* Tags */}
      {tags && <WerdTagList tags={tags.split(",")} />}

      {/* Definition */}
      <p className="font-body text-white/80 mt-4 leading-relaxed">
        {definition}
      </p>
    </div>
  );
}
