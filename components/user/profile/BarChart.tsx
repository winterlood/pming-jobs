import React from "react";
import style from "./BarChart.module.scss";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { GitHubData } from "@types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = { lanagaugeList: GitHubData.LanguageItem[] };

const BarChart = ({ lanagaugeList }: Props) => {
  const labels = lanagaugeList.map((it) => it.name);
  const totalBytes = lanagaugeList.reduce((ac, cur) => ac + cur.bytes, 0);
  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    scales: {
      y: {
        display: false, // Hide Y axis labels
      },
      x: {
        display: true, // Hide X axis labels
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          // @ts-ignore
          label: function (tooltipItem, data) {
            const curItem = lanagaugeList[tooltipItem.dataIndex];
            const percent = Math.floor((curItem.bytes / totalBytes) * 100);
            return `${percent}%`;
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
  };

  const data = {
    labels,
    datasets: [
      {
        data: lanagaugeList.map((it) =>
          Math.floor((it.bytes / totalBytes) * 100)
        ),
        // borderColor: "rgb(255, 99, 132)",
        backgroundColor: lanagaugeList.map((it) => it.color),
      },
    ],
  };

  // @ts-ignore
  return <Bar options={options} data={data} />;
};

export default BarChart;
