export default function ContributeCTA() {
  return (
    <div className="contribute-cta__card">
      <div className="contribute-cta__icon-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 12h8m-4-4v8"></path>
          </g>
        </svg>
      </div>
      <h2 className="section-title">Contribute a werd</h2>
      <p className="section-subtitle">
        Found a werd that makes your brain tingle? Share it with the WerdNerd
        community.
      </p>
      <div className="contribute-cta__recent">
        <p className="contribute-cta__recent-label">Recent Community Gems:</p>
        <div className="contribute-cta__pills">
          <span className="contribute-cta__pill">Scintilla</span>
          <span className="contribute-cta__pill">Pogonophile</span>
          <span className="contribute-cta__pill">Glabella</span>
        </div>
      </div>
      <a href="#">
        <div className="btn btn-secondary btn-xl">
          <span>Suggest a werd</span>
        </div>
      </a>
    </div>
  );
}
