import styled from "@emotion/styled";
import React, { useRef, useEffect } from "react";
import Footnote from "../common/Footnote";
import Meta from "../common/Meta";
import SimilarAptMap from "./SimilarAptMap";
import SimilarAptTable from "./SimilarAptTable";
import { AptSimilarStat, Option } from "../../../types/interactiveApt";
import { getLastYyyymm } from "../../../utils/common";

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
  data: AptSimilarStat;
  footnoteHref?: string;
  onTablePress: (item: Option) => void;
}
const SimilarApt = ({ data, footnoteHref, onTablePress }: Props) => {
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
        title={`${selected.name}의 유사 아파트 상위 5개`}
        desc={`${getLastYyyymm(new Date(), ".")} 거주 기준`}
      />
      <MapContainer id="map" />
      <TableContainer
        data={[data.selected, ...data.similar]}
        onTablePress={onTablePress}
      />
      <Footnote href={footnoteHref} />
    </Container>
  );
};

export default SimilarApt;
