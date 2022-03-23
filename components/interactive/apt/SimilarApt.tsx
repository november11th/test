import styled from "@emotion/styled";
import React, { useRef, useEffect } from "react";
import Footnote from "../common/Footnote";
import Meta from "../common/Meta";
import SimilarAptMap from "./SimilarAptMap";
import SimilarAptTable from "./SimilarAptTable";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const MapContainer = styled.div`
  width: "100%";
  height: 500px;
`;
const TableContainer = styled(SimilarAptTable)`
  margin-top: 20px;
  width: 100%;
`;

interface Props {
  data: any;
}
const SimilarApt = ({ data }: Props) => {
  const { selected, similar } = data;
  const map = useRef<any>(null);

  useEffect(() => {
    map.current = new SimilarAptMap("map", 37.5, 127.5);
  }, [selected, similar]);

  useEffect(() => {
    similar.forEach((x: any, i: number) => {
      map.current.addSimilarWindow(x, i);
    });

    map.current.addSelectedWindow(selected);
    map.current.fitEdge();
    map.current.panBy(0, 35);
  }, [data]);

  return (
    <Container>
      <Meta
        title={"[송파동부센트레빌]의 유사 아파트 상위 5개"} /* 추후 수정 */
        desc={"2022.03 거주 기준"}
      />
      <MapContainer id="map" />
      <TableContainer data={[data.selected, ...data.similar]} />
      <Footnote href={"/data/주거생활?tabIndex=1"} />
    </Container>
  );
};

export default SimilarApt;
