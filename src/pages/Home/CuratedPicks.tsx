import { useCuratedPicks } from "../../hooks/useCuratedPicks";

export default function CuratedPicks() {
  const { werds, loading } = useCuratedPicks();

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#111] to-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="font-heading text-3xl md:text-4xl mb-2 bg-chrome-horizontal bg-clip-text text-transparent">
          Curated Picks
        </h2>

        <p className="text-text-muted mb-10">
          Hand‑selected gems from the vault.
        </p>

        {/* Loading / Empty States */}
        {loading && <p className="text-white/60">Loading curated picks…</p>}

        {!loading && werds.length === 0 && (
          <p className="text-white/60">No curated werds found.</p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {werds.map((w) => (
            <div
              key={w.werd_id}
              className="relative p-[2px] rounded-2xl bg-gradient-to-r from-[#e5e7eb] via-[#9bbcff] to-[#c084fc] transition-all duration-300 hover:shadow-[0_0_30px_2px_rgba(155,188,255,0.35)]"
            >
              <div className="rounded-2xl h-full w-full bg-black/60 backdrop-blur-sm p-6">
                <h3 className="font-heading text-2xl text-white mb-2">
                  {w.werd}
                </h3>

                {w.pronunciation && (
                  <p className="text-white/50 italic mb-3">{w.pronunciation}</p>
                )}

                <p className="text-white/80 leading-relaxed">{w.definition}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
