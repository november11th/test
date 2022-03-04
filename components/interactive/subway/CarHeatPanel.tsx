import styled from "@emotion/styled";
import CarHeat from "./CarHeat";
import Text from "../../elements/Text";
import { getCongestionSvg } from "../../../utils/interactiveSubway";
import { CarProps } from "../../../types/interactiveSubway";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Information = styled.div`
  display: flex;
  align-items: center;
  height: 43px;
  padding-left: 12px;
  margin-bottom: 16px;
`;
const StyledText = styled(Text)`
  margin-right: 10px;
`;

export interface PanelProps {
  congestionTrainLevel: number;
  congestionCar: Array<CarProps>;
  nextStation?: string;
  endStation: string;
  className?: string;
}

const CarHeatPanel = ({
  congestionTrainLevel,
  congestionCar,
  nextStation,
  endStation,
  className,
}: PanelProps) => {
  return (
    <Container className={className}>
      <Information>
        <StyledText type={"copy"} scale={"3"}>
          {endStation}행{nextStation ? `(${nextStation} 방면)` : ""}
        </StyledText>
        {getCongestionSvg(congestionTrainLevel)}
      </Information>
      <CarHeat data={congestionCar} />
    </Container>
  );
};

export default CarHeatPanel;
