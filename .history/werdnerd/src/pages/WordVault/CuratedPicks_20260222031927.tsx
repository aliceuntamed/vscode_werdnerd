export default function CuratedPicks() {
  return (
    <section className="curated-picks">
      <div className="curated-picks__container">
        {/* Header */}
        <div className="curated-picks__header">
          <h2 className="section-title">The Curious Collection</h2>
          <p className="section-subtitle">
            Handpicked gems for the discerning werd-nerd.
          </p>
        </div>

        {/* Grid */}
        <div className="curated-picks__grid">
          {/* Card 1 */}
          <article className="curated-picks__card">
            <div className="curated-picks__card-top">
              <span className="curated-picks__werd">Susurrus</span>
              <button
                aria-label="Listen"
                className="curated-picks__audio-trigger"
              >
                {/* SVG */}
              </button>
            </div>
            <p className="curated-picks__phonetic">/səˈsʌr.əs/</p>
            <p className="section-content">
              A whispering or rustling sound; a murmur.
            </p>
            <div className="curated-picks__tags">
              <span className="curated-picks__tag curated-picks__tag--rare">
                rare
              </span>
            </div>
          </article>

          {/* Card 2 */}
          <article className="curated-picks__card">
            <div className="curated-picks__card-top">
              <span className="curated-picks__werd">Defenestrate</span>
              <button
                aria-label="Listen"
                className="curated-picks__audio-trigger"
              >
                {/* SVG */}
              </button>
            </div>
            <p className="curated-picks__phonetic">/diːˈfɛn.ɪ.streɪt/</p>
            <p className="section-content">To throw someone out of a window.</p>
            <div className="curated-picks__tags">
              <span className="curated-picks__tag curated-picks__tag--quirky">
                quirky
              </span>
            </div>
          </article>

          {/* Card 3 */}
          <article className="curated-picks__card">
            <div className="curated-picks__card-top">
              <span className="curated-picks__werd">Quixotic</span>
              <button
                aria-label="Listen"
                className="curated-picks__audio-trigger"
              >
                {/* SVG */}
              </button>
            </div>
            <p className="curated-picks__phonetic">/kwɪkˈsɒt.ɪk/</p>
            <p className="section-content">
              Exceedingly idealistic; unrealistic and impractical.
            </p>
            <div className="curated-picks__tags">
              <span className="curated-picks__tag curated-picks__tag--archaic">
                archaic
              </span>
            </div>
          </article>

          {/* Card 4 */}
          <article className="curated-picks__card">
            <div className="curated-picks__card-top">
              <span className="curated-picks__werd">Biloculate</span>
              <button
                aria-label="Listen"
                className="curated-picks__audio-trigger"
              >
                {/* SVG */}
              </button>
            </div>
            <p className="curated-picks__phonetic">/baɪˈlɒk.jʊ.leɪt/</p>
            <p className="section-content">
              Divided into two small chambers or cells.
            </p>
            <div className="curated-picks__tags">
              <span className="curated-picks__tag curated-picks__tag--rare">
                rare
              </span>
            </div>
          </article>

          {/* Card 5 */}
          <article className="curated-picks__card">
            <div className="curated-picks__card-top">
              <span className="curated-picks__werd">
                Floccinaucinihilipilification
              </span>
              <button
                aria-label="Listen"
                className="curated-picks__audio-trigger"
              >
                {/* SVG */}
              </button>
            </div>
            <p className="curated-picks__phonetic">
              /ˌflɒksɪˌnɔːsɪˌnaɪɪlɪˌpɪlɪfɪˈkeɪʃən/
            </p>
            <p className="section-content">
              The action of estimating something as worthless.
            </p>
            <div className="curated-picks__tags">
              <span className="curated-picks__tag curated-picks__tag--quirky">
                quirky
              </span>
            </div>
          </article>

          {/* Card 6 */}
          <article className="curated-picks__card">
            <div className="curated-picks__card-top">
              <span className="curated-picks__werd">Apricity</span>
              <button
                aria-label="Listen"
                className="curated-picks__audio-trigger"
              >
                {/* SVG */}
              </button>
            </div>
            <p className="curated-picks__phonetic">/əˈprɪs.ɪ.ti/</p>
            <p className="section-content">The warmth of the sun in winter.</p>
            <div className="curated-picks__tags">
              <span className="curated-picks__tag curated-picks__tag--archaic">
                archaic
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
