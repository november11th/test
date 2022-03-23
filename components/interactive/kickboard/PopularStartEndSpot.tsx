import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import Meta from "../common/Meta";
import ButtonSelector from "../common/ButtonSelector";
import Footnote from "../common/Footnote";
import PopularStartEndSpotMap from "./PopularStartEndSpotMap";
import { RIDETYPEINKOREAN } from "../../../utils/common";

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
}
const PopularStartEndSpot = ({ data }: Props) => {
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

  return (
    <Container>
      <Div>
        <Meta
          title={`[서울특별시 종로구]의 공유 킥보드 주 ${RIDETYPEINKOREAN[selectedTypeIdx]} 장소`} /* 추후 수정 */
          desc={`2022.02.01 ~ 2022.02.28 공유 킥보드 운행 추정 데이터 기준`}
        />
        <StyledButtonSelector
          list={RIDETYPEINKOREAN}
          selectedIdx={selectedTypeIdx}
          setSelectedIdx={setSelectedTypeIdx}
        />
      </Div>

      <MapContainer id="map" ref={map} />
      <Footnote href={"/data/공유킥보드?tabIndex=1"} />
    </Container>
  );
};

export default PopularStartEndSpot;
