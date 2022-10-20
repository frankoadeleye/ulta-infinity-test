import "./styles.scss";

interface MetricProps {
  data: {
    firstIcon?: any;
    secondIcon?: any;
    title?: string;
    firstPercentage?: any;
    yesterday?: string;
    last_friday?: string;
    rightFirstText?: string;
    rightSecondText?: string;
    rightFirstMinText?: string;
    rightSecondMinText?: string;
  };
}

function MetricActivity({ data }: MetricProps) {
  const {
    firstIcon,
    secondIcon,
    title,
    firstPercentage,
    yesterday,
    last_friday,
    rightFirstText,
    rightSecondText,
    rightFirstMinText,
    rightSecondMinText,
  } = data;
  return (
    <>
      <div className="datarow">
        <div className="left">
          <div className="icon">
            <img src={firstIcon} alt="alt-img" className="first" />
            {secondIcon !== "" && <img src={secondIcon} alt="alt-img" />}
          </div>
          <div className="text">
            <div className="first">
              <span
                className={`first__span ${
                  firstPercentage < 1 &&
                  typeof firstPercentage === "number" &&
                  "color__red"
                }`}>
                {title}
              </span>
              {firstPercentage !== "" && (
                <span
                  className={`second__span ${
                    firstPercentage < 1 && "bg__red"
                  }`}>
                  {firstPercentage}%
                </span>
              )}
            </div>
            <div className="second">
              <span>{yesterday}</span>
              <span>Yesterday</span>
            </div>
            <div className="third">
              <span>{last_friday}</span>
              <span>Last friday</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div
            className={`right__first ${
              firstPercentage < 1 &&
              typeof firstPercentage === "number" &&
              "bg__red"
            }`}>
            {rightFirstText}
          </div>
          <div className="right__second">
            {rightSecondText}
            <div className="right__third">{rightFirstMinText}</div>
            <div className="right__fourth">
              <small>Help:</small>
              <small>{rightSecondMinText}</small>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal__line__cover">
        <div className="line"></div>
      </div>
    </>
  );
}

export default MetricActivity;
