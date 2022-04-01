import React, { useState } from "react";
import InnerContainerBase from "../../components/layout/InnerContainerBase";
import Text from "../../components/elements/Text";
import styled from "@emotion/styled";
import { CardData } from "../../types/cardData";
import ScrollTopFloatingButton from "../../components/elements/ScrollTopFloatingButton";
import { newSampleInsightList } from "../../temp_data/insight";
import InsightTitleCardList from "../../components/card/InsightTitleCardList";
import OuterContainerBase from "../../components/layout/OuterContainerBase";

const Container = OuterContainerBase;

const Inside = styled(InnerContainerBase)`
  padding-bottom: 160px;
`;

const SubtitleWrapper = styled.div`
  padding-bottom: 44px;
`;

interface Props {
  dataList: CardData[];
  count: number;
}

const InsightPage = ({ dataList, count }: Props) => {
  const [insights, setInsights] = useState(dataList);

  const handleInfiniteScrollNext = () => {
    setInsights((prev) => [...prev, ...dataList]);
  };

  return (
    <Container>
      <Inside>
        <SubtitleWrapper>
          <Text type={"title"} scale={"3"}>
            PUZZLE에서 {count}개의 인사이트를 만나보세요!
          </Text>
        </SubtitleWrapper>
        <InsightTitleCardList
          cardList={[...dataList, ...dataList]}
          totalCardCount={dataList.length}
        />
      </Inside>
      <ScrollTopFloatingButton />
    </Container>
  );
};

export async function getStaticProps() {
  const insightList = Object.values(newSampleInsightList).reduce(
    (list: any, total) => [...total, ...list],
    []
  );

  return {
    props: {
      dataList: insightList,
      count: insightList.length,
    },
  };
}
export default InsightPage;
