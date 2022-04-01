import React from "react";
import { CardData } from "../types/cardData";
import InnerContainerBase from "../components/layout/InnerContainerBase";
import { newSampleInsightList } from "../temp_data/insight";
import { sampleDataList } from "../temp_data/data";
import styled from "@emotion/styled";
import DataTitleCardList from "../components/card/DataTitleCardList";
import OuterContainerBase from "../components/layout/OuterContainerBase";
import InsightTitleCardList from "../components/card/InsightTitleCardList";
import { useSetNavBarTheme } from "../hooks/useNavBarTheme";
import ScrollTopFloatingButton from "../components/elements/ScrollTopFloatingButton";

const Container = OuterContainerBase;

const Inside = styled(InnerContainerBase)``;

const Section = styled.div`
  padding-bottom: 137px;
`;

interface Props {
  dataList: CardData[];
  insightList: CardData[];
}

const SearchPage = ({ dataList, insightList }: Props) => {
  useSetNavBarTheme("gray");
  return (
    <Container>
      <Inside>
        <Section>
          <DataTitleCardList
            cardList={dataList}
            totalCardCount={dataList.length}
          />
        </Section>
        <Section>
          <InsightTitleCardList
            cardList={insightList}
            totalCardCount={insightList.length}
          />
        </Section>
      </Inside>
      <ScrollTopFloatingButton />
    </Container>
  );
};

export async function getServerSideProps(context: any) {
  const {
    query: { q },
  } = context;

  const totalInsightList = Object.values(newSampleInsightList).reduce(
    (list: any, total) => [...total, ...list],
    []
  );

  const foundData = sampleDataList.filter((data) =>
    data.title.includes(q.trim())
  );

  const foundInsight = totalInsightList.filter((data) =>
    data.title.includes(q)
  );

  return {
    props: {
      dataList: foundData,
      insightList: foundInsight,
    },
  };
}

export default SearchPage;
