import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import _ from "lodash";
import Meta from "../common/Meta";
import Footnote from "../common/Footnote";
import CongestionHourlyChart from "./congestionHourlyChart";
import CongestionHourlyMap from "./congestionHourlyMap";
import ButtonSelector from "../common/ButtonSelector";
import {
  addDate,
  DOWINENGLISH,
  DOWINKOREAN,
  getTodayDowIdx,
} from "../../../utils/common";
import { CongestionHourlyStat, PoiMeta } from "../../../types/interactivePoi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const MapContainer = styled.div`
  width: 450px;
  height: 300px;
  position: absolute;
  right: 0px;
  top: -105px;
`;
const StyledMeta = styled(Meta)`
  margin-top: 250px;
`;
const StyledButtonSelector = styled(ButtonSelector)`
  display: flex;
  align-self: flex-end;
  margin-bottom: 10px;
`;

interface Props {
  metaData: PoiMeta;
  congestionData: CongestionHourlyStat[];
  footnoteHref?: string;
}

const CongestionHourly = ({
  metaData,
  congestionData,
  footnoteHref,
}: Props) => {
  const map = useRef<any>(null);
  const [selectedDowIdx, setSelectedDowIdx] = useState<number>(0);
  const { date } = congestionData[0];
  const dataCriteria = `${addDate(date, -32)} ~ ${addDate(date, -1)}`;

  // 지도 생성하고 오늘 요일 설정
  useEffect(() => {
    map.current = new CongestionHourlyMap("map", 37.5, 127.5, 14);
    setSelectedDowIdx(getTodayDowIdx());
  }, []);

  // 검색 POI 정보
  useEffect(() => {
    map.current.removeWindow();
    map.current.addWindow(metaData);
    map.current.fitEdge();
  }, [metaData]);

  // 선택 요일로 데이터 필터
  const filteredCongestionData = congestionData.filter(
    (x: CongestionHourlyStat) => x.dow === DOWINENGLISH[selectedDowIdx]
  )[0];

  return (
    <Container>
      <MapContainer id="map" ref={map} />
      <StyledMeta
        title={`요일/시간대별 장소 혼잡도`}
        desc={`${dataCriteria} 10분 이상 체류 대상 통계`}
      />
      <StyledButtonSelector
        list={DOWINKOREAN}
        selectedIdx={selectedDowIdx}
        setSelectedIdx={setSelectedDowIdx}
      />
      <CongestionHourlyChart data={filteredCongestionData} />
      <Footnote href={footnoteHref} />
    </Container>
  );
};

export default CongestionHourly;
