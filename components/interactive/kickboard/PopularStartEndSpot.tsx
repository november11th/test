import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import Meta from "../common/Meta";
import ButtonSelector from "../common/ButtonSelector";
import Footnote from "../common/Footnote";
import PopularStartEndSpotMap from "./PopularStartEndSpotMap";
import {
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getLastYyyymm,
  RIDETYPEINKOREAN,
} from "../../../utils/common";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const MapContainer = styled.div`
  width: "100%";
  height: 500px;
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
  footnoteHref?: string;
}
const PopularStartEndSpot = ({ data, footnoteHref }: Props) => {
  const map = useRef<any>(null);
  const [selectedTypeIdx, setSelectedTypeIdx] = useState<number>(0); //평일주말

  // 승하차에 따라 데이터변경
  const filteredData = selectedTypeIdx === 0 ? data.startSpot : data.endSpot;

  // 처음에 지도 생성
  useEffect(() => {
    map.current = new PopularStartEndSpotMap("map", 37.5, 127.5);
  }, []);

  // 승하차 버튼바뀔때마다 기존 window지우고 새로 생성
  useEffect(() => {
    map.current.removeWindow();
    map.current.addWindow(filteredData, selectedTypeIdx);
    map.current.fitEdge();
  }, [selectedTypeIdx]);

  // 전월 첫째날 ~ 전월 마지막날 날짜 기준
  const lastMonth = getLastYyyymm(new Date());
  const dataCriteria = `${getFirstDayOfMonth(
    lastMonth,
    "."
  )} ~ ${getLastDayOfMonth(lastMonth, ".")}`;

  return (
    <Container>
      <Div>
        <Meta
          title={`[${data.districtName}]의 공유 킥보드 주요 ${RIDETYPEINKOREAN[selectedTypeIdx]} 위치`}
          desc={`${dataCriteria} 공유 킥보드 운행 추정 데이터 기준`}
        />
        <StyledButtonSelector
          list={RIDETYPEINKOREAN}
          selectedIdx={selectedTypeIdx}
          setSelectedIdx={setSelectedTypeIdx}
        />
      </Div>

      <MapContainer id="map" ref={map} />
      <Footnote href={footnoteHref} />
    </Container>
  );
};

export default PopularStartEndSpot;
