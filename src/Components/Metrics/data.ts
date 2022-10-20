import Svg from "./../../assets/svg";

const { arrowDown, downArrow, clicksIcon, cartIcon } = Svg;

const NavbarData = ["Last Hour", "Today", "Yesterday", "Last 3 days"];

const MetricsCardData = [
  { state: "Error", percentage: "0,12", averagePercentage: "0,11" },
  { state: "Zeroes", percentage: "5,12", averagePercentage: "0,11" },
  { state: "Timeouts", percentage: "0,12", averagePercentage: "0,11" },
];

const MetricsData = [
  {
    firstIcon: arrowDown,
    secondIcon: downArrow,
    title: "Searches",
    firstPercentage: "+5%",
    yesterday: "29 380",
    last_friday: "27 985",
    rightFirstText: "Mobile Traffic: 100%",
    rightSecondText: "Web Traffic: 100%",
    rightFirstMinText: "You get 100% traffic on mobile and desktop devices.",
    rightSecondMinText: "Help: Searches, Pessimisation",
  },

  {
    firstIcon: clicksIcon,
    secondIcon: downArrow,
    title: "Clicks",
    firstPercentage: "-13%",
    yesterday: "243",
    last_friday: "280",
    rightFirstText: "CTR: 0,04%",
    rightFirstMinText: "Conversion from searches  to clicks on all devices.",
    rightSecondMinText: "Help: Searches, Pessimisation",
  },

  {
    firstIcon: cartIcon,
    secondIcon: "",
    title: "Sales",
    yesterday: "24",
    last_friday: "24",
    rightFirstText: "STR: 6.2%",
    rightSecondText: "Avg. Check: 8 903",
    rightFirstMinText: "Conversion from cliks  to bookings on all devices.",
    rightSecondMinText: "Help: Searches, Pessimisation",
  },
];

export { MetricsCardData, MetricsData };

export { NavbarData };
