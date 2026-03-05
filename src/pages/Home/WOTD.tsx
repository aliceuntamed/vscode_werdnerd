import { useWOTD } from "../../hooks/useWOTD";
import { WerdTagList } from "../../components/werd/WerdTagList";

export default function WOTD() {
  const { werd: wotd, loading, error } = useWOTD();

  if (loading) {
    return (
      <div className="rounded-xl p-6 bg-[#0b0b0d] border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
        <p className="text-white/40 font-body">Loading word of the day…</p>
      </div>
    );
  }

  if (error || !wotd) {
    return (
      <div className="rounded-xl p-6 bg-[#0b0b0d] border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
        <p className="text-white/40 font-body mb-4">Unable to load word.</p>
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
        {wotd.werd}
      </h3>

      {/* Pronunciation */}
      {wotd.pronunciation && (
        <p className="font-body text-white/50 italic text-sm mt-1">
          /{wotd.pronunciation}/
        </p>
      )}

      {/* Tags */}
      {wotd.tags && <WerdTagList tags={[wotd.tags]} />}

      {/* Meaning */}
      <p className="font-body text-white/80 mt-4 leading-relaxed">
        {wotd.definition}
      </p>
    </div>
  );
}
