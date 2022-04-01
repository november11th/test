import React from "react";
import CardGrid from "./CardGrid";
import DataCard from "./DataCard";
import { CardData } from "../../types/cardData";
import EmptyCardList from "./EmptyCardList";

interface Props {
  cardList: CardData[];
  gridColsCount?: number;
}

const DataCardList = ({ cardList, gridColsCount = 4 }: Props) => {
  if (cardList.length === 0)
    return <EmptyCardList text={"데이터가 없습니다."} />;
  return (
    <CardGrid gridColsCount={gridColsCount}>
      {cardList.map((data, index) => (
        <React.Fragment key={index}>
          <DataCard
            imageUrl={data.imgSrc}
            title={data.title}
            partner={data.partner ?? "SKTelecom"}
            description={data.description}
            displayName={data.displayName}
          />
        </React.Fragment>
      ))}
    </CardGrid>
  );
};

export default DataCardList;
