import { useCuratedPicks } from "../../hooks/useCuratedPicks";

export default function CuratedPicks() {
  const { werds, loading } = useCuratedPicks();

  return (
    <section className="curated-picks">
      <h2 className="section-title">Curated Picks</h2>
      <p className="section-subtitle">Hand‑selected gems from the vault.</p>

      {loading && <p>Loading curated picks...</p>}

      {!loading && werds.length === 0 && <p>No curated werds found.</p>}

      <div className="curated-picks__grid">
        {werds.map((w) => (
          <div key={w.id} className="curated-picks__card">
            <h3 className="curated-picks__werd">{w.werd}</h3>
            <p className="curated-picks__phonetic">{w.phonetic}</p>
            <p className="curated-picks__meaning">{w.meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
