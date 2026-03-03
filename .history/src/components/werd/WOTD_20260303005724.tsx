import { RefreshCw } from "lucide-react";
import { useWOTD } from "../../hooks/useWOTD";
import { WerdTagList } from "../werd/WerdTagList";

export default function WOTD() {
  const { werd, loading, error, refetch } = useWOTD();

  if (loading) {
    return (
      <div className="rounded-xl p-6 bg-[#0b0b0d] border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
        <p className="text-white/40 font-body">Loading word of the day…</p>
      </div>
    );
  }

  if (error || !werd) {
    return (
      <div className="rounded-xl p-6 bg-[#0b0b0d] border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
        <p className="text-white/40 font-body mb-4">Unable to load word.</p>
        <button
          onClick={refetch}
          className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition font-heading text-sm"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div
      className="
        rounded-xl p-6 bg-[#0b0b0d]
        border border-white/10
        shadow-[0_4px_12px_rgba(0,0,0,0.4)]
        hover:shadow-[0_6px_18px_rgba(0,0,0,0.55)]
        transition-shadow
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading text-xl text-white tracking-tight">
          Word of the Day
        </h2>

        <button
          onClick={refetch}
          className="text-white/40 hover:text-white transition"
          aria-label="Refresh word"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>

      {/* Chrome accent */}
      <div
        className="
          h-[3px] w-1/2 rounded-full mb-6
          bg-gradient-to-r from-[#e5e7eb] via-[#9bbcff] to-[#c084fc]
          opacity-70
        "
      />

      {/* Word */}
      <h3 className="font-heading text-3xl text-white tracking-tight">
        {werd.word}
      </h3>

      {/* Pronunciation */}
      {werd.pronunciation && (
        <p className="font-body text-white/50 italic text-sm mt-1">
          /{werd.pronunciation}/
        </p>
      )}

      {/* Tags */}
      <WerdTagList tags={werd.tags} />

      {/* Meaning */}
      <p className="font-body text-white/80 mt-4 leading-relaxed">
        {werd.meaning}
      </p>

      {/* Fun fact */}
      {werd.funfact && (
        <p className="font-body text-white/60 mt-4 italic">{werd.funfact}</p>
      )}

      {/* Divider */}
      <div className="my-6 h-px w-full bg-white/10" />

      {/* Source */}
      {werd.source && (
        <p className="font-body text-white/40 text-xs">Source: {werd.source}</p>
      )}
    </div>
  );
}
