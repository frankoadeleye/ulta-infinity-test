import "./styles.scss";

type MetricsCardProps = {
  data: {
    state: string;
    percentage: string;
    averagePercentage: string;
  };
};

function MetricsCard({ data }: MetricsCardProps) {
  const { state, percentage, averagePercentage } = data;
  return (
    <div className="metrics__cards__element">
      <div className="metrics__cards__element__icon"></div>
      <div className="metrics__cards__element__text">
        <div className="metrics__cards__element__text__top">
          <span>{state}:</span>
          <span>{percentage}% </span>
        </div>
        <div className="metrics__cards__element__text__bottom">
          Average: {averagePercentage}%
        </div>
      </div>
    </div>
  );
}

export default MetricsCard;
