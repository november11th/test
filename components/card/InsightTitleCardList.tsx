import React from "react";
import { CardData } from "../../types/cardData";
import TitleContainer from "./TitleContainer";
import InsightCardList from "./InsightCardList";

interface Props {
  cardList: CardData[];
  totalCardCount: number;
}
const InsightTitleCardList = ({ cardList, totalCardCount }: Props) => {
  return (
    <TitleContainer
      title={"인사이트"}
      titleCount={totalCardCount}
      description={
        "각 데이터는 여러 개의 인사이트로 구성되어 있습니다.\n" +
        "인사이트 에서는 데이터를 다양한 관점을 풀어내며 새로운 활용처를 상상해낼 수있게 합니다."
      }
    >
      <InsightCardList cardList={cardList} />
    </TitleContainer>
  );
};

export default InsightTitleCardList;
