import styled from "@emotion/styled";
import { useState } from "react";
import CarHeatPanel from "./CarHeatPanel";
import CongestionLevel from "./CongestionLevel";
import PlayController from "./PlayController";
import Text from "../../elements/Text";
import { ICongestionCarStat } from "../../../types/interactiveSubway";
import { minuteToTime } from "../../../utils/common";
import { theme } from "../../../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 120px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 120px 0px 40px 0px;
`;
const Title = styled(Text)`
  margin-bottom: 8px;
`;
const Desc = styled(Text)``;
const StyledCarHeatPanel = styled(CarHeatPanel)`
  margin-bottom: 30px;
`;
const StyledCongestionLevel = styled(CongestionLevel)`
  margin-top: 60px;
  align-self: center;
`;
const StyledPlayController = styled(PlayController)`
  margin-top: 40px;
`;

interface Props {
  data: ICongestionCarStat[];
}
const CongestionCarStat = ({ data }: Props) => {
  const [value, setValue] = useState(330); //PlayController 분
  const chartData: Array<ICongestionCarStat> = data
    .filter((x: any) => x.time == minuteToTime(value))
    .map((x: any) => x.data[0]);

  return (
    <Container>
      <TextContainer>
        <Title type={"copy"} scale={"3"}>
          차트 제목
        </Title>
        <Desc type={"copy"} scale={"6"} color={theme.colors.gray8b}>
          2021.12.16 ~ 2022.01.16 차트 기준은 한 줄로
        </Desc>
      </TextContainer>

      {chartData.map((item: any, index: number) => {
        return (
          <StyledCarHeatPanel
            key={index}
            congestionTrainLevel={item.congestionTrainLevel}
            congestionCar={item.congestionCarLevel}
            nextStation={item.nextStation}
            endStation={item.endStation}
          />
        );
      })}
      <StyledCongestionLevel />
      <StyledPlayController value={value} setValue={setValue} initial={330} />
    </Container>
  );
};

export default CongestionCarStat;
