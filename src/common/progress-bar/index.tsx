import "./styles.scss";

function ProgressBar() {
  return (
    <div className="progress__bar">
      <div className="progress__bar__chart">
        <div className="progress__bar__chart__item--yellow"></div>
        <div className="progress__bar__chart__item--purple"></div>
        <div className="progress__bar__chart__item--blue"></div>
        <div className="progress__bar__chart__item--grey"></div>
      </div>
      <div className="progress__bar__texts">
        <div className={`progress__bar__texts__item`}>
          <span className="yellow"></span>
          <span>Error 500: 1 256</span>
        </div>
        <div className={`progress__bar__texts__item`}>
          <span className="purple"></span>
          <span>Error 501: 800</span>
        </div>
        <div className={`progress__bar__texts__item`}>
          <span className="blue"></span>
          <span>Error 502: 650 </span>
        </div>
        <div className={`progress__bar__texts__item`}>
          <span className="grey"></span>
          <span>Other: 330 </span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
