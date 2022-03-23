import styled from "@emotion/styled";
import ReactDOM from "react-dom";
import Text from "../../elements/Text";
import ContainerTooltip from "../common/ContainerTooltip";
import { getOrCreateTooltip } from "../../../utils/tooltip";
import { getDow, getYmd } from "../../../utils/common";

const Date = styled(Text)`
  &.copy-case7 {
    font-weight: 700;
  }
`;

// 툴팁 컴포넌트
interface Props {
  label: string;
  yLeftValue: number;
  yRightValue: number;
  sigName: string;
}
const TooltipRender = ({ label, yLeftValue, yRightValue, sigName }: Props) => {
  const dow = getDow(label);
  const { mm, dd } = getYmd(label);
  const ratio = Math.round((yLeftValue / yRightValue) * 100 * 10) / 10;

  return (
    <ContainerTooltip>
      <Date type={"copy"} scale={"7"}>{`${mm}월 ${dd}일 (${dow})`}</Date>
      <Text
        type={"copy"}
        scale={"7"}
      >{`국내 여행자 수 : ${yRightValue}명`}</Text>
      <Text
        type={"copy"}
        scale={"7"}
      >{`${sigName} 여행자 수 : ${yLeftValue}명(${ratio}%)`}</Text>
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
  const index = tooltip.dataPoints[0].parsed.x;
  const value = tooltip.dataPoints[0].raw;
  const yLeftValue = tooltip.dataPoints[0].dataset.sigTraveler[index];
  const yRightValue = tooltip.dataPoints[0].dataset.domesticTraveler[index];
  const sigName = tooltip.dataPoints[0].dataset.sigName;

  // 툴팁 Render
  if (tooltip.body) {
    ReactDOM.render(
      <TooltipRender
        label={label}
        yLeftValue={yLeftValue}
        yRightValue={yRightValue}
        sigName={sigName}
      />,
      tooltipEl
    );
  }

  // 툴팁위치 셋팅
  const position = chart.canvas.getBoundingClientRect();
  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = "fixed";
  tooltipEl.style.left = position.left + tooltip.caretX + "px";
  tooltipEl.style.top = position.top + tooltip.caretY + "px";
  //   tooltipEl.style.left = position.left + tooltip.x + "px";
  //   tooltipEl.style.top = position.top + tooltip.y + "px";
};
