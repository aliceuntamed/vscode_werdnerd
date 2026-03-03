import { useWOTD } from "../../hooks/useWOTD";

export default function WOTD() {
  const { werd: wotd, loading, error } = useWOTD();

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#0c0c0c] to-[#111]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="font-heading text-3xl md:text-4xl mb-2 bg-chrome-horizontal bg-clip-text text-transparent">
          werd of the Day
        </h2>

        <p className="text-text-muted mb-10">A daily delight from the vault.</p>

        {/* Loading / Error / Empty */}
        {loading && <p className="text-white/60">Loading werd of the day…</p>}
        {error && <p className="text-white/60">Error loading werd.</p>}
        {!loading && !wotd && <p className="text-white/60">No werd found.</p>}

        {/* werd Card */}
        {wotd && (
          <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-[#e5e7eb] via-[#9bbcff] to-[#c084fc] shadow-[0_0_20px_rgba(0,0,0,0.35)]">
            <div className="rounded-2xl bg-black/60 backdrop-blur-sm p-8">
              {/* werd + Pronunciation */}
              <div className="mb-6">
                <h3 className="font-heading text-4xl text-white mb-2">
                  {wotd.werd}
                </h3>

                {wotd.pronunciation && (
                  <p className="text-white/50 italic text-lg">
                    {wotd.pronunciation}
                  </p>
                )}
              </div>

              {/* Definition */}
              <p className="text-white/80 leading-relaxed mb-6">
                {wotd.definition}
              </p>

              {/* Tags */}
              {wotd.tags &&
                typeof wotd.tags === "string" &&
                wotd.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {wotd.tags.split(",").map((tag: string) => (
                      <span
                        key={tag.trim()}
                        className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm border border-white/10"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
