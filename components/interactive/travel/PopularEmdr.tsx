import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import PopularEmdrMap from "./PopularEmdrMap";
import PopularEmdrTable from "./PopularEmdrTable";
import Meta from "../common/Meta";
import Footnote from "../common/Footnote";
import { addDate, getYyyymmdd } from "../../../utils/common";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const MapContainer = styled.div`
  width: "100%";
  height: 500px;
`;
const TableContainer = styled(PopularEmdrTable)`
  margin-top: 20px;
  width: 50%;
`;

interface Props {
  data: any;
  footnoteHref?: string;
}
const PopularEmdr = ({ data, footnoteHref }: Props) => {
  const map = useRef<any>(null);
  const { ctpName, sigName, riList: emdrList } = data;
  const today = getYyyymmdd(new Date());
  const dataCriteria = `${addDate(today, -32)} ~ ${addDate(today, -1)}`;

  useEffect(() => {
    map.current = new PopularEmdrMap("map", 37.5, 127.5);
  }, []);

  useEffect(() => {
    map.current?.addWindow(emdrList);
    map.current?.fitEdge();
    map.current?.panBy(0, 35);
  }, [data]);

  console.log("data", data);
  return (
    <Container>
      <Meta
        title={`[${ctpName} ${sigName}] 인기 방문 지역 Top 5`}
        desc={`${dataCriteria}`}
      />
      <MapContainer id="map" ref={map} />
      <TableContainer data={emdrList} />
      <Footnote href={footnoteHref} />
    </Container>
  );
};

export default PopularEmdr;

/* 추후 수정 ${data[0].ctpName} ${data[0].sigName}, */
