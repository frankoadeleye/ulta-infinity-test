import { NavbarData } from "./data";
import "./styles.scss";

function MetricsNavbar() {
  return (
    <div className="metrics__navbar">
      {NavbarData.map((element, index) => {
        return (
          <div className={`metrics__navbar__element`} key={index}>
            {element}
          </div>
        );
      })}
    </div>
  );
}

export default MetricsNavbar;
