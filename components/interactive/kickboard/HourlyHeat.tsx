import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import _ from "lodash";
import Map from "../common/Map";
import PlayController from "../common/PlayController";
import Meta from "../common/Meta";
import Footnote from "../common/Footnote";
import ButtonSelector from "../common/ButtonSelector";
import { HDAYINKOREAN, minuteToTime } from "../../../utils/common";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const MapContainer = styled.div`
  width: "100%";
  height: 500px;
`;
const StyledPlayController = styled(PlayController)`
  margin-top: 40px;
  margin-bottom: 40px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
const StyledButtonSelector = styled(ButtonSelector)`
  margin-bottom: 44px;
`;

interface Props {
  data: any;
}
const HourlyHeat = ({ data }: Props) => {
  const map = useRef<any>(null);
  const [value, setValue] = useState(0); //PlayController 분
  const [selectedHdayIdx, setSelectedHdayIdx] = useState<number>(0); //평일주말

  // 시간과 평일주말에 따라 데이터변경
  const time = minuteToTime(value);
  const filteredData =
    selectedHdayIdx === 0
      ? _.find(data, {
          time: time,
        }).weekdayPoint
      : _.find(data, {
          time: time,
        }).weekendPoint;

  // 지도 생성
  useEffect(() => {
    map.current = new Map("map", filteredData[0].lat, filteredData[0].lng, 14);
  }, []);

  // PlayController 초기화
  useEffect(() => {
    setValue(0);
  }, [selectedHdayIdx]);

  // 새로운 Heatmap 생성
  useEffect(() => {
    map.current.deleteHeatmap();
    map.current.createHeatmap(filteredData);
  }, [filteredData]);

  return (
    <Container>
      <Div>
        <Meta
          title={`[서울특별시 강남구]의 ${HDAYINKOREAN[selectedHdayIdx]} 공유 킥보드 주 운행 위치`} /* 추후 수정 */
          desc={`2022.02.01 ~ 2022.02.28 공유 킥보드 운행 추정 데이터 기준`} /* 추후 수정 직전달의 첫번째날부터 마지막날까지 */
        />
        <StyledButtonSelector
          list={HDAYINKOREAN}
          selectedIdx={selectedHdayIdx}
          setSelectedIdx={setSelectedHdayIdx}
        />
      </Div>

      <MapContainer id="map" ref={map} />
      <StyledPlayController
        value={value}
        setValue={setValue}
        min={0}
        max={1380}
        initial={0}
        step={60}
        delay={1500}
      />
      <Footnote href={"/data/공유킥보드?tabIndex=1"} />
    </Container>
  );
};

export default HourlyHeat;
