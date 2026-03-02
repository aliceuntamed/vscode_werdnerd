export default function VaultHero() {
  return (
    <section className="vault-hero">
      {/* Background Video */}
      <div className="vault-hero__video-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.pexels.com/videos/34128974/pictures/preview-0.jpg"
          src="https://videos.pexels.com/video-files/34128974/14471950_640_360_30fps.mp4"
          className="vault-hero__video"
        ></video>
        <div className="vault-hero__overlay"></div>
      </div>

      {/* Content */}
      <div className="vault-hero__content">
        <div className="vault-hero__brand">
          <span className="vault-hero__logo-text">WerdNerd</span>
        </div>

        <h1 className="werd-vault-hero-title hero-title">
          Unlock the English Language&apos;s Best Secrets
        </h1>

        <p className="hero-subtitle">
          A curated vault for the logophile, the quirky, and the unusual.
        </p>

        {/* Search Bar */}
        <div className="vault-hero__search-container">
          <div className="vault-hero__search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="vault-hero__search-icon"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="m21 21l-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </g>
            </svg>

            <input
              type="text"
              placeholder="Search the vault..."
              className="vault-hero__input"
            />
          </div>
        </div>

        {/* werd of the Day Callout */}
        <div className="vault-hero__wotd-callout">
          <div className="vault-hero__wotd-label">
            <span>werd of the Day</span>
          </div>

          <div className="vault-hero__wotd-card">
            <div className="vault-hero__wotd-main">
              <span className="vault-hero__wotd-werd">Petrichor</span>
              <span className="vault-hero__wotd-phonetic">/ˈpɛtrɪkɔːr/</span>
            </div>

            <button
              aria-label="Play pronunciation"
              className="vault-hero__audio-btn btn btn-accent btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM16 9a5 5 0 0 1 0 6m3.364 3.364a9 9 0 0 0 0-12.728"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
