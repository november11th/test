import React from "react";
import TitleContainer from "./TitleContainer";
import { CardData } from "../../types/cardData";
import DataCardList from "./DataCardList";

interface Props {
  cardList: CardData[];
  totalCardCount: number;
}

const DataTitleCardList = ({ cardList, totalCardCount }: Props) => {
  return (
    <TitleContainer
      title={"데이터"}
      titleCount={totalCardCount}
      description={
        "SK텔레콤에서 이동/체류 관련하여 제공 가능한 데이터 리스트입니다."
      }
    >
      <DataCardList cardList={cardList} />
    </TitleContainer>
  );
};

export default DataTitleCardList;
