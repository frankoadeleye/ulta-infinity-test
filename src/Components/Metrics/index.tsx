import MetricsCard from "Components/MetricCard";
import MetricsNavbar from "Components/MetricNavBar";
import Layout from "./../../common/layout/index";
import { MetricsCardData, MetricsData } from "./data";
import "./styles.scss";
import ProgressBar from "../../common/progress-bar/index";
import MetricActivity from "./../../common/MetricActivity/index";

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
          {MetricsData.map((data, index) => {
            return <MetricActivity data={data} key={index} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Metrics;
