import React, { useState } from "react";
import styled from "@emotion/styled";
import CarHeatPanel from "./CarHeatPanel";
import CongestionLevel from "./CongestionLevel";
import PlayController from "../common/PlayController";
import Meta from "../common/Meta";
import Footnote from "../common/Footnote";
import { CongestionCarStat } from "../../../types/interactiveSubway";
import { addDate, getTodayDow, minuteToTime } from "../../../utils/common";
import { addStationPostFix } from "../../../utils/interactiveSubway";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 120px;
`;
const StyledCarHeatPanel = styled(CarHeatPanel)`
  margin-bottom: 30px;
`;
const StyledPlayController = styled(PlayController)`
  margin-top: 40px;
`;
export const FootnoteWithLevel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 40px;
  align-items: flex-end;
  justify-content: space-between;
`;

interface Props {
  data: CongestionCarStat[];
  footnoteHref?: string;
}
const CongestionCar = ({ data, footnoteHref }: Props) => {
  const [value, setValue] = useState(330); //PlayController 분
  const { subwayLine, station, dt } = data[0].data[0];
  const chartData: Array<CongestionCarStat> = data
    .filter((x: any) => x.time == minuteToTime(value))
    .map((x: any) => x.data[0]);

  const station_ = station && `[${addStationPostFix(station)}]`;
  const dataCriteria = `${addDate(dt, -92)} ~ ${addDate(dt, -2)} 데이터 기준`;

  return (
    <Container>
      <Meta
        title={`${station_}으로 진입하는 열차의 칸 혼잡도`}
        desc={`${subwayLine}호선, ${getTodayDow()}요일, ${dataCriteria}`}
      />
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

      <StyledPlayController value={value} setValue={setValue} initial={330} />
      <FootnoteWithLevel>
        <Footnote href={footnoteHref} />
        <CongestionLevel />
      </FootnoteWithLevel>
    </Container>
  );
};

export default CongestionCar;
