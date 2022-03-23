import React from "react";
import styled from "@emotion/styled";
import Meta from "../common/Meta";
import Footnote from "../common/Footnote";
import TravelerDailyChart from "./TravelerDailyChart";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  data: any;
}
const TravelerDaily = ({ data }: Props) => {
  return (
    <Container>
      <Meta
        /* 추후 수정*/
        title={"[제주특별자치도 제주시] 여행자 수 vs 국내 여행자 수 트렌드"}
        desc={`최근 2주 트렌드`}
      />
      <TravelerDailyChart data={data} />
      <Footnote href={"/data/여행?tabIndex=1"} />
    </Container>
  );
};

export default TravelerDaily;
