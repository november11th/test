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
import { externalTooltipHandler } from "./CongestionTrainChartTooltip";
import { CongestionTrainStat } from "../../../types/interactiveSubway";
import { getHour } from "../../../utils/common";
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
  data: CongestionTrainStat;
}
const CongestionTrainChart = ({ data }: Props) => {
  const congestionTrainchartRef = useRef<any>(null);
  const { time, congestionTrain, congestionTrainLevel } = data;

  const dataset = {
    labels: time,
    datasets: [
      {
        label: "열차혼잡도",
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
    animation: {
      duration: 0,
    },
    layout: {
      // padding: 20,
    },
    // indexAxis: 'y', // coord flip
    plugins: {
      tooltip: {
        enabled: false,
        external: externalTooltipHandler,
      },
      legend: {
        display: false,
        position: "bottom" as const,
        align: "start" as const,
        onClick: () => {},
        labels: {
          usePointStyle: true,
          boxWidth: 8, //point 크기 작게 지정
          padding: 20,
          font: {
            size: 18,
          },
        },
      },
    },
    scales: {
      xAxes: {
        ticks: {
          autoSkip: true,
          maxRotation: 0,
          minRotation: 0,
          labelOffset: 0,
          padding: 14,
          font: {
            size: 16,
          },
          callback: function (i: any) {
            const x = time[i];
            return `${getHour(x)}시`;
          },
        },
        grid: {
          display: false, //뒷배경 라인 없애기
        },
      },
      x: {
        display: false, //하단 라인을 없애기
        ticks: {
          display: false, //새로운tick을 만들었으니 기존의 tick을 제거
        },
      },
      y: {
        suggestedMin: 0,
        suggestedMax: 200,
        ticks: {
          stepSize: 50,
          font: {
            size: 16,
          },
        },
      },
    },
  };

  return (
    <Container>
      <Bar options={options} data={dataset} ref={congestionTrainchartRef} />
    </Container>
  );
};

export default CongestionTrainChart;
