import React from "react";
import { CardData } from "../types/cardData";
import InnerContainerBase from "../components/InnerContainerBase";
import CardListWithLabel from "../components/CardListWithLabel";
import { sampleInsightList } from "../temp_data/insight";
import { sampleDataList } from "../temp_data/data";
import styled from "@emotion/styled";

const Container = styled(InnerContainerBase)`
  margin-top: ${({ theme }) => theme.size.navBarHeight};
`;

interface Props {
  dataList: CardData[];
  insightList: CardData[];
}

const SearchPage = ({ dataList, insightList }: Props) => {
  return (
    <Container>
      <CardListWithLabel
        label={{ text: "Data", count: dataList.length }}
        cardList={dataList}
      />
      <CardListWithLabel
        label={{ text: "Insight", count: insightList.length }}
        cardList={insightList}
      />
    </Container>
  );
};

export async function getServerSideProps(context: any) {
  const {
    query: { q },
  } = context;

  console.log(q);

  return {
    props: {
      dataList: sampleDataList.slice(0, 2),
      insightList: sampleInsightList,
    },
  };
}

export default SearchPage;
