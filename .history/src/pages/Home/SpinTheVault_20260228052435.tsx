export default function SpinTheVault() {
  return (
    <section className="spin-vault">
      <div className="spin-vault__overlay"></div>
      <div className="spin-vault__container">
        <div className="spin-vault__focus-area">
          <div className="spin-vault__machine">
            <div className="spin-vault__slot-header">
              <h2 className="section-title">Spin the Vault</h2>
              <p className="section-subtitle">
                Feeling lucky? Let the slots decide your next favorite werd.
              </p>
            </div>

            <div className="spin-vault__display">
              <div id="werdReel" className="spin-vault__reel">
                <span className="spin-vault__result">Limerence</span>
              </div>

              <div id="werdDetails" className="spin-vault__details">
                <p className="spin-vault__phonetic">/ˈlɪm.ɪ.rəns/</p>
                <p className="spin-vault__meaning">
                  The state of being infatuated or obsessed with another person.
                </p>
              </div>
            </div>

            <div className="spin-vault__actions">
              <button id="spinTrigger" className="btn btn-primary btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="werd-vault-thq-spin-vaultbtn-icon-elm"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                  </g>
                </svg>
                <span>Spin the Vault</span>
              </button>

              <a href="#">
                <div className="btn btn-link">
                  <span>View Full Entry</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
