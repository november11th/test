import React from "react";
import styled from "@emotion/styled";
import Meta from "../common/Meta";
import Footnote from "../common/Footnote";
import CongestionLevel from "./CongestionLevel";
import CongestionRouteChart from "./CongestionRouteChart";
import { addDate, getTodayDow } from "../../../utils/common";
import { FootnoteWithLevel } from "./CongestionCar";
import { addStationPostFix } from "../../../utils/interactiveSubway";
import { CongestionRouteStat } from "../../../types/interactiveSubway";

const Container = styled.div``;

interface Props {
  data: CongestionRouteStat;
  footnoteHref?: string;
}
const CongestionRoute = ({ data, footnoteHref }: Props) => {
  const { fromStation, toStation, dt } = data;
  const route = `[${addStationPostFix(fromStation)}]→[${addStationPostFix(
    toStation
  )}]`;
  const dataCriteria = `${addDate(dt, -92)} ~ ${addDate(dt, -2)} 데이터 기준`;

  return (
    <Container>
      <Meta
        title={`${route} 구간의 경로 혼잡도`} /*추후 수정*/
        desc={`${getTodayDow()}요일, 오전 8시 탑승, ${dataCriteria}`}
      />
      <CongestionRouteChart data={data} />
      <FootnoteWithLevel>
        <Footnote href={footnoteHref} />
        <CongestionLevel />
      </FootnoteWithLevel>
    </Container>
  );
};

export default CongestionRoute;
