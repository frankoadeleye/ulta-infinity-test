import MetricsCard from "Components/MetricCard";
import MetricsNavbar from "Components/MetricNavBar";
import Layout from "./../../common/layout/index";
import { MetricsCardData, UltaInfinityTestData } from "./data";
import "./styles.scss";
import ProgressBar from "../../common/progress-bar/index";
import MetricActivity from "./../../common/MetricActivity/index";
import Svg from "./../../assets/svg";

const { arrowDown, downArrow } = Svg;

const {
  searches_current_last_3days,
  searches_current_yesterday,
  clicks_current_last_3days,
  clicks_current_yesterday,
  avg_price_yesterday,
  avg_price_last_3days,
} = UltaInfinityTestData.data[0];

function Metrics() {
  return (
    <Layout>
      <div className="metrics">
        <div className="metrics__heading__text">Main metrics </div>
        <MetricsNavbar />
        <div className="metrics__cards">
          {MetricsCardData.map((data, index) => {
            return <MetricsCard data={data} key={index} />;
          })}
        </div>
        <ProgressBar />
        <div className="metrics__activity">
          <MetricActivity
            title="Searches"
            yesterday={searches_current_yesterday}
            last_friday={searches_current_last_3days}
            firstIcon={arrowDown}
            firstPercentage="+5"
            secondIcon={downArrow}
            rightFirstText="Mobile Traffic: 100%"
            rightSecondText="Web Traffic: 100%"
            rightFirstMinText="You get 100% traffic on mobile and desktop devices."
            rightSecondMinText="Searches, Pessimisation"
          />
          <MetricActivity
            title="Clicks"
            yesterday={clicks_current_yesterday}
            last_friday={clicks_current_last_3days}
            firstIcon={arrowDown}
            secondIcon={downArrow}
            firstPercentage={-13}
            rightFirstText="CTR: 0,04%"
            rightFirstMinText="Conversion from searches  to clicks on all devices."
            rightSecondMinText=" CTR, Cliks"
          />
          <MetricActivity
            title="Sales"
            yesterday={avg_price_yesterday}
            last_friday={avg_price_last_3days}
            firstIcon={arrowDown}
            secondIcon={downArrow}
            firstPercentage=""
            rightFirstText="STR: 6.2%"
            rightSecondText="Avg. Check: 8 903"
            rightFirstMinText="You get 100% traffic on mobile and desktop devices."
            rightSecondMinText="STR, Bookings, Avg. Check"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Metrics;
