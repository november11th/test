import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  annotationPlugin
);

const labels = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

export const data = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: [
        0.74, 0.53, 0.38, 0.3, 0.42, 0.63, 1.09, 1.03, 1.46, 2.84, 11.23, 20.45,
        28.55, 35.6, 39.74, 41.12, 39.78, 35.83, 29.75, 26.7, 19.93, 8.9, 1.65,
        0.86,
      ],
    },
    {
      type: "bar" as const,
      label: "Dataset 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: [
        0.74, 0.53, 0.38, 0.3, 0.42, 0.63, 1.09, 1.03, 1.46, 2.84, 11.23, 20.45,
        28.55, 35.6, 39.74, 41.12, 39.78, 35.83, 29.75, 26.7, 19.93, 8.9, 1.65,
        0.86,
      ],
    },
  ],
};

const options = {
  plugins: {
    autocolors: false,
    annotation: {
      annotations: {
        box1: {
          // type: "box",
          xMin: 1,
          xMax: 2,
          yMin: 50,
          yMax: 70,
          backgroundColor: "rgba(255, 99, 132, 0.25)",
        },
      },
    },
  },
};
const CongestionCar = () => {
  return <Chart type="bar" data={data} options={options} />;
};

export default CongestionCar;
