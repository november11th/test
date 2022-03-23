import styled from "@emotion/styled";
import ReactDOM from "react-dom";
import { getCongestionSvg } from "../../../utils/interactiveSubway";
import { getOrCreateTooltip } from "../../../utils/tooltip";
import ContainerTooltip from "../common/ContainerTooltip";

const StyledContainerTooltip = styled(ContainerTooltip)`
  flex-direction: row;
`;

// 툴팁 컴포넌트
interface Props {
  value: string;
  level: number;
}
const TooltipRender = ({ value, level }: Props) => {
  return (
    <StyledContainerTooltip>
      {`혼잡도 :\b`}
      {getCongestionSvg(level)}
      {`\b(${value})`}
    </StyledContainerTooltip>
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
  const index = tooltip.dataPoints[0].parsed.y; /* coord-flip으로 바뀜 */
  const level = tooltip.dataPoints[0].dataset.congestionTrainLevel[index];

  // 툴팁 Render
  if (tooltip.body) {
    ReactDOM.render(<TooltipRender value={value} level={level} />, tooltipEl);
  }

  // 툴팁위치 셋팅
  // coord-flip 때문에 위치 설정 manually 수정
  const position = chart.canvas.getBoundingClientRect();
  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = "fixed";
  tooltipEl.style.left = position.left + tooltip.x + "px";
  tooltipEl.style.top = position.top + tooltip.y + "px";
};
