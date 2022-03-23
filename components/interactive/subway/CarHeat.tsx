import styled from "@emotion/styled";
import Text from "../../elements/Text";
import { CarProps, CarHeatProps } from "../../../types/interactiveSubway";
import { theme } from "../../../styles/theme";

const CarHeatContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 900px;

  &:last-of-type {
    margin-right: 0px;
  }
`;
const CarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px 0px 0px;
`;
const Box = styled.div`
  display: flex;
  width: 70px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 0;

  &.congestion-level-1 {
    background-color: ${({ theme }) => theme.colors.congestionLevel1};
  }
  &.congestion-level-2 {
    background-color: ${({ theme }) => theme.colors.congestionLevel2};
  }
  &.congestion-level-3 {
    background-color: ${({ theme }) => theme.colors.congestionLevel3};
  }
  &.congestion-level-4 {
    background-color: ${({ theme }) => theme.colors.congestionLevel4};
  }
`;
const Label = styled.div`
  display: flex;
  width: 74px;
  height: 24px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  em {
    margin: 0px 6px 0px 0px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.chart67};
  }
`;

const Car = ({ value, label, carNum }: CarProps) => {
  return (
    <CarContainer>
      <Box className={`congestion-level-${value}`}>
        <Text type={"copy"} scale={"3"} color={theme.colors.white}>
          {carNum}
        </Text>
      </Box>
      {label && (
        <Label>
          <em />
          <Text type={"copy"} scale={"7"}>
            {label}
          </Text>
        </Label>
      )}
    </CarContainer>
  );
};

const CarHeat = ({ data }: CarHeatProps) => {
  return (
    <CarHeatContainer>
      {data &&
        data.map((x, i) => {
          return (
            <Car
              key={i}
              value={x.value}
              label={x.label}
              carNum={(i + 1).toString()}
            />
          );
        })}
    </CarHeatContainer>
  );
};

export default CarHeat;
