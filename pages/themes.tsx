import React, { useState } from "react";
import InnerContainerBase from "../components/layout/InnerContainerBase";
import Text from "../components/elements/Text";
import styled from "@emotion/styled";
import { newSampleInsightList } from "../temp_data/insight";
import ThemeFilter from "../components/themes/ThemeFilter";

import useSWR from "swr";
import { CardData } from "../types/cardData";
import { timeout } from "../utils/common";
import OuterContainerBase from "../components/layout/OuterContainerBase";
import InsightTitleCardList from "../components/card/InsightTitleCardList";
import PuzzleLoading from "../components/elements/loading/PuzzleLoading";

const Container = OuterContainerBase;
const Inside = InnerContainerBase;

const SubtitleWrapper = styled.div`
  padding-bottom: 44px;
`;

const CardListWrapper = styled.div``;

interface Props {
  count: number;
  themeList: string[];
}

const ThemePage = ({ count, themeList }: Props) => {
  const [selectedTheme, setSelectedTheme] = useState(themeList[0]);

  const { data: insightList, error } = useSWR(
    selectedTheme,
    async (selectedTheme) => {
      console.log(selectedTheme);
      await timeout(1000);

      if (selectedTheme === "점유율") return [];
      return Object.values(newSampleInsightList).reduce(
        (list: any, total) => [...total, ...list],
        []
      );
    }
  );

  const handleSelect = (theme: string) => {
    setSelectedTheme(theme);
  };

  return (
    <Container>
      <Inside>
        <SubtitleWrapper>
          <Text type={"title"} scale={"3"}>
            PUZZLE에서 {count}개의 인사이트를 만나보세요!
          </Text>
        </SubtitleWrapper>
        <ThemeFilter themeList={themeList} handleSelect={handleSelect} />
        <CardListWrapper>
          {insightList ? (
            <InsightTitleCardList
              cardList={insightList as CardData[]}
              totalCardCount={insightList.length}
            />
          ) : (
            <PuzzleLoading />
          )}
        </CardListWrapper>
      </Inside>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {
      themeList: [
        "코로나",
        "점유율",
        "지역분석",
        "가족",
        "여행",
        "주거생활",
        "음식점 통화",
        "숙박여행",
        "공유킥보드",
      ],
      count: 16,
    },
  };
}

export default ThemePage;
