import style from "./CircleChart.module.scss";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { GitHubData } from "@types";
Chart.register([ArcElement, Tooltip]);

type Props = { lanagaugeList: GitHubData.LanguageItem[] };
const CircleChart = (props: Props) => {
  const { lanagaugeList } = props;
  const graphData = {
    labels: lanagaugeList.map((it) => it.name),
    datasets: [
      {
        label: "My First Dataset",
        data: lanagaugeList.map((it) => it.bytes),
        backgroundColor: lanagaugeList.map((it) => it.color),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Doughnut
      options={{
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              // @ts-ignore
              label: function (tooltipItem, data) {
                return graphData.labels[tooltipItem.dataIndex];
              },
            },
            cornerRadius: 10,
            padding: {
              left: 20,
              right: 20,
              top: 10,
              bottom: 10,
            },
            backgroundColor: "white",
            bodyFontColor: "black",
            bodyColor: "black",
            bodyFont: {
              family: "bold",
              size: 12,
            },
            titleColor: "black",
            titleFont: {
              family: "bold",
            },
            titleFontSize: 16,
            titleFontColor: "#0066ff",
            bodyFontSize: 14,
          },
        },
      }}
      data={graphData}
    />
  );
};
export default CircleChart;
