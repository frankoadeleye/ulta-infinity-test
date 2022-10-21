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
    firstPercentage: "+5",
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
    firstPercentage: -13,
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
    firstPercentage: "",
    yesterday: "24",
    last_friday: "24",
    rightFirstText: "STR: 6.2%",
    rightSecondText: "Avg. Check: 8 903",
    rightFirstMinText: "Conversion from cliks  to bookings on all devices.",
    rightSecondMinText: "Help: Searches, Pessimisation",
  },
];

const UltaInfinityTestData = {
  "errors_last_3days": [
    {
      "count": 2,
      "code": 502,
    },
    {
      "count": 720,
      "code": 599,
    },
    {
      "count": 1780,
      "code": null,
    },
  ],
  "error_yesterday": [
    {
      "count": 615,
      "code": null,
    },
    {
      "count": 305,
      "code": 599,
    },
  ],
  "error_last_hour": [],
  "data": [
    {
      "bookings_current_last_3days": 7556,
      "timeout_yesterday": 0.217542189065684,
      "zeroes_yesterday": 5.03052033295241,
      "avg_price_yesterday": 9447.87135852322,
      "clicks_current_last_hour": 428,
      "avg_price_last_hour": 10243.0263157895,
      "zeroes_last_hour": null,
      "mobile_pessimizer": 0.000999999974737875,
      "bookings_current_last_hour": 32,
      "searches_current_last_3days": 4445192,
      "bookings_previous_last_hour": 98,
      "str_yesterday": 14.9289099526066,
      "errors_yesterday": 0.376232384954177,
      "ctr_last_hour": 0.640574721245229,
      "gate_id": 20,
      "ctr_yesterday": 1.06052388326287,
      "searches_current_yesterday": 2188541,
      "bookings_previous_last_3days": 8647,
      "zeroes_last_3days": 5.55262854787825,
      "clicks_previous_last_hour": 784,
      "timeout_last_3days": 0.122851836321131,
      "errors_last_3days": 0.143953287057117,
      "bookings_previous_yesterday": 3641,
      "searches_previous_yesterday": 2050500,
      "searches_previous_last_hour": 88385,
      "str_last_hour": null,
      "clicks_previous_yesterday": 23364,
      "avg_price_last_3days": 10694.8964067661,
      "searches_current_last_hour": 66815,
      "web_pessimizer": 100.0,
      "ctr_last_3days": 1.12946752356254,
      "clicks_previous_last_3days": 60505,
      "str_last_3days": 15.0496942657398,
      "timeout_last_hour": null,
      "clicks_current_last_3days": 50207,
      "bookings_current_yesterday": 3465,
      "searches_previous_last_3days": 6118984,
      "errors_last_hour": null,
      "clicks_current_yesterday": 23210,
    },
  ],
};

export { MetricsCardData, MetricsData, UltaInfinityTestData };

export { NavbarData };
