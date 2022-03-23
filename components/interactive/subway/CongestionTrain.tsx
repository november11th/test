import React from "react";
import styled from "@emotion/styled";
import Meta from "../common/Meta";
import Footnote from "../common/Footnote";
import CongestionLevel from "./CongestionLevel";
import CongestionTrainChart from "./CongestionTrainChart";
import { addDate, getTodayDow } from "../../../utils/common";
import { FootnoteWithLevel } from "./CongestionCar";
import { addStationPostFix } from "../../../utils/interactiveSubway";
import { CongestionTrainStat } from "../../../types/interactiveSubway";

const Container = styled.div``;

interface Props {
  data: CongestionTrainStat;
  footnoteHref?: string;
}
const CongestionTrain = ({ data, footnoteHref }: Props) => {
  const { subwayLine, station, nextStation, dt } = data;
  const nextStation_ = nextStation ?? station;
  const dataCriteria = `${addDate(dt, -92)} ~ ${addDate(dt, -2)} 데이터 기준`;

  return (
    <Container>
      <Meta
        data-testid={"subwayCongestionTrain"}
        title={`[${addStationPostFix(
          station
        )}]으로 진입하는 열차의 시간대별 혼잡도`}
        desc={`${subwayLine}호선, ${nextStation_} 방면, ${getTodayDow()}요일, ${dataCriteria}`}
      />
      <CongestionTrainChart data={data} />
      <FootnoteWithLevel>
        <Footnote href={footnoteHref} />
        <CongestionLevel />
      </FootnoteWithLevel>
    </Container>
  );
};

export default CongestionTrain;
