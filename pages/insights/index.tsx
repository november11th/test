import React, { useState } from "react";
import InnerContainerBase from "../../components/InnerContainerBase";
import Text from "../../components/elements/Text";
import styled from "@emotion/styled";
import { CardData } from "../../types/cardData";
import ScrollTopFloatingButton from "../../components/elements/ScrollTopFloatingButton";
import { sampleInsightList } from "../../temp_data/insight";
import CardListWithLabel from "../../components/CardListWithLabel";

const Container = styled(InnerContainerBase)`
  margin-top: ${({ theme }) => theme.size.navBarHeight};
`;

const SubtitleWrapper = styled.div`
  padding-bottom: 133px;
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
      <SubtitleWrapper>
        <Text type={"title"} scale={"3"}>
          PUZZLE에서 {count}개의 인사이트를 만나보세요!
        </Text>
      </SubtitleWrapper>
      <CardListWithLabel
        label={{ text: "Insight", count }}
        cardList={insights}
        fetchData={handleInfiniteScrollNext}
      />

      <ScrollTopFloatingButton />
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {
      dataList: [...sampleInsightList, ...sampleInsightList],
      count: 16,
    },
  };
}
export default InsightPage;
