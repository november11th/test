import styled from "@emotion/styled";
import React, { useRef } from "react";
import annotationPlugin from "chartjs-plugin-annotation";
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
import { theme } from "../../../styles/theme";
import { externalTooltipHandler } from "./CongestionRouteChartTooltip";
import { CongestionRouteStat } from "../../../types/interactiveSubway";
import { getCongestionLevelColor } from "../../../utils/interactiveSubway";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const Container = styled.div``;

interface Props {
  data: CongestionRouteStat;
}
const CongestionRouteChart = ({ data }: Props) => {
  const congestionRoutechartRef = useRef<any>(null);
  const { station, congestionTrain, congestionTrainLevel } = data;
  const n = station.length;

  const dataset = {
    labels: station,
    datasets: [
      {
        label: "경로혼잡도",
        data: congestionTrain,
        congestionTrainLevel: congestionTrainLevel,
        borderColor: getCongestionLevelColor(congestionTrainLevel),
        backgroundColor: getCongestionLevelColor(congestionTrainLevel),
        borderRadius: 10,
        // hoverBackgroundColor: theme.colors.chart0C,
      },
    ],
  };

  const options = {
    aspectRatio: 2.3 - 0.04 * n,
    animation: {
      duration: 0,
    },
    layout: {
      // padding: 20,
    },
    indexAxis: "y" as const, // coord-flip
    datasets: {
      bar: {
        barThickness: 10, // bar-width
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
        external: externalTooltipHandler,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      xAxes: {
        suggestedMin: 0,
        suggestedMax: 200,
        ticks: {
          stepSize: 50,
          autoSkip: true,
          maxRotation: 0,
          minRotation: 0,
          labelOffset: 4,
          padding: 10,
          font: {
            size: 16,
          },
        },
        grid: {
          display: true,
        },
      },
      x: {
        display: false, //하단 라인을 없애기

        ticks: {
          display: false, //새로운tick을 만들었으니 기존의 tick을 제거
        },
      },
      y: {
        ticks: {
          stepSize: 50,
          font: {
            size: 16,
          },
        },
        grid: {
          display: false, //뒷배경 라인 없애기
        },
      },
    },
  };

  return (
    <Container>
      <Bar options={options} data={dataset} ref={congestionRoutechartRef} />
    </Container>
  );
};

export default CongestionRouteChart;
