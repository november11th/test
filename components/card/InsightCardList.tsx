import React, { useEffect, useMemo, useRef, useState } from "react";
import CardGrid from "./CardGrid";
import { CardData } from "../../types/cardData";
import InsightCard from "./InsightCard";
import {
  getColor,
  InsightCardListColorPatterns,
  resetColorIndex,
} from "../../utils/insightCardListUtils";
import EmptyCardList from "./EmptyCardList";

const COLOR_LIST = [
  "#67B0F5",
  "#0C8BFF",
  "#8C84EB",
  "#60D98D",
  "#EB5853",
  "#A5A6F6",
  "#EF5DA8",
  "#5D5FEF",
  "#F178B6",
];

interface Props {
  cardList: CardData[];
  colorList?: string[];
  pattern?: InsightCardListColorPatterns;
}

const InsightCardList = ({
  cardList: initialCardList,
  colorList = COLOR_LIST,
  pattern = "seven",
}: Props) => {
  const [totalCardList, setTotalCardList] = useState(initialCardList);

  useEffect(() => {
    setTotalCardList(initialCardList);
  }, [initialCardList]);

  const insightCardList = useMemo(() => {
    // 렌더링 시 Insight ColorListIndex 초기화
    resetColorIndex();

    return totalCardList.map((data, index) => (
      <React.Fragment key={index}>
        <InsightCard
          title={data.title}
          description={data.description}
          category={"일반 인사이트"}
          displayName={data.displayName}
          backgroundColor={getColor(index, colorList, pattern)}
        />
      </React.Fragment>
    ));
  }, [totalCardList]);

  if (totalCardList.length === 0)
    return <EmptyCardList text={"인사이트가 없습니다."} />;
  return <CardGrid>{insightCardList}</CardGrid>;
};

export default InsightCardList;
