import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import PopularEmdRiMap from "./PopularEmdRiMap";
import PopularEmdRiTable from "./PopularEmdRiTable";
import Meta from "../common/Meta";
import Footnote from "../common/Footnote";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const MapContainer = styled.div`
  width: "100%";
  height: 500px;
`;
const TableContainer = styled(PopularEmdRiTable)`
  margin-top: 20px;
  width: 50%;
`;

interface Props {
  data: any;
}
const PopularEmdRi = ({ data }: Props) => {
  const map = useRef<any>(null);

  useEffect(() => {
    map.current = new PopularEmdRiMap("map", 37.5, 127.5);
  }, []);

  useEffect(() => {
    map.current?.addWindow(data);
    map.current?.fitEdge();
    map.current?.panBy(0, 35);
  }, [data]);

  return (
    <Container>
      <Meta
        title={"[서울특별시 종로구] 인기 방문 지역 Top5"}
        desc={`${data[0].ctpName} ${data[0].sigName}, 최근 1개월 통계`} /* 추후 수정 */
      />
      <MapContainer id="map" ref={map} />
      <TableContainer data={data} />
      <Footnote href={"/data/여행?tabIndex=1"} />
    </Container>
  );
};

export default PopularEmdRi;
