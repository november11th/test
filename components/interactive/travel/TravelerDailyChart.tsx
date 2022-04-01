import styled from "@emotion/styled";
import React, { useRef } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { theme } from "../../../styles/theme";
import { getDow, getYmd } from "../../../utils/common";
import { externalTooltipHandler } from "./TravelerDailyChartTooltip";

const Container = styled.div``;

interface Props {
  data: any;
}
const TravelerDailyChart = ({ data }: Props) => {
  const congestionTrainchartRef = useRef<any>(null);
  const { districtName, sigName, domesticTraveler, sigTraveler } = data;

  const xAxisTickColor = (c: any) => {
    switch (getDow(domesticTraveler.date[c.index])) {
      case "일":
        return "#FF0000";
      case "토":
        return "#000080";
      default:
        return theme.colors.gray6e;
    }
  };

  const dataset = {
    labels: domesticTraveler.date,
    datasets: [
      {
        type: "line" as const,
        label: `국내 여행자 수`,
        data: domesticTraveler.travelerScore,
        borderColor: theme.colors.point8C,
        backgroundColor: theme.colors.point8C,
        hoverBackgroundColor: theme.colors.chart0C,
        yAxisID: "y1",
        /* for tooltip */
        sigName: sigName,
        sigTraveler: sigTraveler.travelerScore,
        domesticTraveler: domesticTraveler.travelerScore,
      },
      {
        type: "bar" as const,
        label: `${districtName} 여행자 수`,
        data: sigTraveler.travelerScore,
        borderColor: theme.colors.chart67,
        backgroundColor: theme.colors.chart67,
        borderRadius: 10,
        barThickness: 20,
        hoverBackgroundColor: theme.colors.chart0C,
        yAxisID: "y",
        /* for tooltip */
        sigName: sigName,
        sigTraveler: sigTraveler.travelerScore,
        domesticTraveler: domesticTraveler.travelerScore,
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
    plugins: {
      tooltip: {
        enabled: false,
        external: externalTooltipHandler,
      },
      legend: {
        display: true,
        position: "bottom" as const,
        align: "start" as const,
        reverse: true,
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
    elements: {
      point: {
        radius: 0,
        hoverRadius: 0,
      },
    },
    scales: {
      xAxes: {
        ticks: {
          autoSkip: false,
          labelOffset: 0,
          padding: 4,
          font: {
            size: 16,
          },
          color: xAxisTickColor,
          callback: function (i: any) {
            const x = domesticTraveler.date[i];
            return `${getYmd(x).mm}/${getYmd(x).dd}`;
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
        type: "linear" as const,
        display: true,
        position: "left" as const,
        title: {
          display: true,
          text: `${districtName} 여행자 수`,
          font: {
            size: 15,
          },
          padding: {
            bottom: 20,
          },
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          font: {
            size: 14,
          },
          callback: function (value: any) {
            return value + "만";
          },
        },
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 100000,
          font: {
            size: 14,
          },
          callback: function (value: any) {
            return value + "만";
          },
        },
        title: {
          display: true,
          text: "국내 여행자 수",
          font: {
            size: 15,
          },
          padding: {
            bottom: 20,
          },
        },
      },
    },
  };

  return (
    <Container>
      <Chart
        type="bar"
        options={options}
        data={dataset}
        ref={congestionTrainchartRef}
      />
    </Container>
  );
};

export default TravelerDailyChart;
