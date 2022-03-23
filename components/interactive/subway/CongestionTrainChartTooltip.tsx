import styled from "@emotion/styled";
import React from "react";
import ReactDOM from "react-dom";
import Text from "../../elements/Text";
import ContainerTooltip from "../common/ContainerTooltip";
import { getMeridiemhhmm } from "../../../utils/common";
import { getCongestionSvg } from "../../../utils/interactiveSubway";
import { getOrCreateTooltip } from "../../../utils/tooltip";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px 0px 3px 0px;
`;
const Time = styled(Text)`
  &.copy-case7 {
    font-weight: 700;
  }
`;
const Transform = styled.div`
  display: flex;
  transform: translateY(2px);
  margin-left: 3px;
`;

// 툴팁 컴포넌트
interface Props {
  label: string;
  value: number;
  level: number;
}
const TooltipRender = ({ label, value, level }: Props) => {
  const time = getMeridiemhhmm(label);
  return (
    <ContainerTooltip>
      <Time
        type={"copy"}
        scale={"7"}
      >{`${time[0]} ${time[1]}시 ${time[2]}분`}</Time>
      <Div>
        {`혼잡도 : `} <Transform>{getCongestionSvg(level)}</Transform>
        {`\b(${value})`}
      </Div>
    </ContainerTooltip>
  );
};

// TooltipHandler
export const externalTooltipHandler = (context: any) => {
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // set values for display of data in the tooltip
  const label = tooltip.dataPoints[0].label;
  const value = tooltip.dataPoints[0].raw;
  const index = tooltip.dataPoints[0].parsed.x;
  const level = tooltip.dataPoints[0].dataset.congestionTrainLevel[index];

  // 툴팁 Render
  if (tooltip.body) {
    ReactDOM.render(
      <TooltipRender label={label} value={value} level={level} />,
      tooltipEl
    );
  }

  // 툴팁위치 셋팅
  const position = chart.canvas.getBoundingClientRect();
  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = "fixed";
  tooltipEl.style.left = position.left + tooltip.caretX + "px";
  tooltipEl.style.top = position.top + tooltip.caretY + "px";
  // tooltipEl.style.left = position.left + tooltip.x + "px";
  // tooltipEl.style.top = position.top + tooltip.y + "px";
};
