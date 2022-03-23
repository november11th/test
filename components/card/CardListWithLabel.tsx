import React from "react";
import styled from "@emotion/styled";
import TextWithCount from "../elements/TextWithCount";
import { CardData } from "../../types/cardData";
import EmptyCardList from "./EmptyCardList";
import CardList from "./CardList";
import InfiniteScroll from "react-infinite-scroll-component";

const Container = styled.div`
  padding-bottom: 52px;
`;

const CardListWrapper = styled.div`
  padding-top: 30px;
  overflow-x: hidden;
`;

interface Props {
  label: { text: "Data" | "Insight"; count: number };
  cardList: CardData[];
  fetchData?: () => void;
  afterComponent?: React.ReactNode;
}

const CardListWithLabel = ({
  label,
  cardList,
  fetchData = () => {},
  afterComponent,
}: Props) => {
  const { text, count } = label;
  const hasMore = cardList.length < count;

  const handleInfiniteScrollNext = () => {
    hasMore && fetchData();
  };

  return (
    <Container>
      <TextWithCount count={count}>{text}</TextWithCount>
      {count === 0 ? (
        <EmptyCardList />
      ) : (
        <InfiniteScroll
          dataLength={cardList.length}
          next={handleInfiniteScrollNext}
          hasMore={hasMore}
          loader={null}
        >
          <CardListWrapper>
            <CardList dataList={cardList} afterComponent={afterComponent} />
          </CardListWrapper>
        </InfiniteScroll>
      )}
    </Container>
  );
};

export default CardListWithLabel;
