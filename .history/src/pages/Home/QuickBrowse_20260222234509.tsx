export default function QuickBrowse() {
  return (
    <section className="quick-browse">
      <div className="quick-browse__container">
        <div className="quick-browse__header">
          <h2 className="section-title">Quick Browse</h2>
          <p className="section-subtitle">Navigate the vault by letter.</p>
        </div>
        <div className="quick-browse__grid">
          <div className="quick-browse__tile">
            <span className="quick-browse__letter">A-D</span>
            <span className="quick-browse__sample">Abecedarian</span>
            <div className="quick-browse__tip">
              <span>/ˌeɪ.biː.siːˈdeə.ri.ən/</span>
            </div>
          </div>
          <div className="quick-browse__tile">
            <span className="quick-browse__letter">E-H</span>
            <span className="quick-browse__sample">Ebullient</span>
            <div className="quick-browse__tip">
              <span>/ɪˈbʊl.i.ənt/</span>
            </div>
          </div>
          <div className="quick-browse__tile">
            <span className="quick-browse__letter">I-L</span>
            <span className="quick-browse__sample">Ineffable</span>
            <div className="quick-browse__tip">
              <span>/ɪnˈef.ə.bəl/</span>
            </div>
          </div>
          <div className="quick-browse__tile">
            <span className="quick-browse__letter">M-P</span>
            <span className="quick-browse__sample">Mellifluous</span>
            <div className="quick-browse__tip">
              <span>/məˈlɪf.lu.əs/</span>
            </div>
          </div>
          <div className="quick-browse__tile">
            <span className="quick-browse__letter">Q-U</span>
            <span className="quick-browse__sample">Sempiternal</span>
            <div className="quick-browse__tip">
              <span>/ˌsem.pɪˈtɜː.nəl/</span>
            </div>
          </div>
          <div className="quick-browse__tile">
            <span className="quick-browse__letter">V-Z</span>
            <span className="quick-browse__sample">Zephyr</span>
            <div className="quick-browse__tip">
              <span>/ˈzef.ər/</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
