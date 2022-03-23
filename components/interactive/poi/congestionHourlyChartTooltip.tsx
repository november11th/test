import styled from "@emotion/styled";
import ReactDOM from "react-dom";
import ContainerTooltip from "../common/ContainerTooltip";
import Text from "../../elements/Text";
import { getMeridiemhhmm } from "../../../utils/common";
import { getOrCreateTooltip } from "../../../utils/tooltip";

const Time = styled(Text)`
  &.copy-case7 {
    font-weight: 700;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px 0px 3px 0px;
`;

// 툴팁 컴포넌트
interface Props {
  label: string;
  value: number;
  dow: string;
}
const TooltipRender = ({ label, value, dow }: Props) => {
  const time = getMeridiemhhmm(label);
  return (
    <ContainerTooltip>
      <Time
        type={"copy"}
        scale={"7"}
      >{`${dow}요일, ${time[0]} ${time[1]}시`}</Time>
      <Div>{`혼잡도 : ${Math.round(value)}`}</Div>
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
  const dow = tooltip.dataPoints[0].dataset.dow;

  // 툴팁 Render
  if (tooltip.body) {
    ReactDOM.render(
      <TooltipRender label={label} value={value} dow={dow} />,
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
