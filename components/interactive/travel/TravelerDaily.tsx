import React from "react";
import styled from "@emotion/styled";
import Meta from "../common/Meta";
import Footnote from "../common/Footnote";
import TravelerDailyChart from "./TravelerDailyChart";
import { addDate } from "../../../utils/common";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  data: any;
  footnoteHref?: string;
}
const TravelerDaily = ({ data, footnoteHref }: Props) => {
  const date = data.domesticTraveler.date;
  const dateCriteria =
    date && `${addDate(date[0], 0)} ~ ${addDate(date[date.length - 1], 0)}`;

  return (
    <Container>
      <Meta
        title={`[${data.districtName}] 여행자 수 vs 국내 여행자 수 트렌드`}
        desc={`${dateCriteria}`}
      />
      <TravelerDailyChart data={data} />
      <Footnote href={footnoteHref} />
    </Container>
  );
};

export default TravelerDaily;
