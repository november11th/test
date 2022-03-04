import React, { useState } from "react";
import InnerContainerBase from "../components/InnerContainerBase";
import Text from "../components/elements/Text";
import styled from "@emotion/styled";
import { sampleInsightList } from "../temp_data/insight";
import ThemeFilter from "../components/themes/ThemeFilter";

import useSWR from "swr";
import CardListWithLabel from "../components/CardListWithLabel";
import CardListWithLabelLoading from "../components/CardListWithLabelLoading";
import { CardData } from "../types/cardData";

const Container = styled(InnerContainerBase)`
  margin-top: ${({ theme }) => theme.size.navBarHeight};
`;

const SubtitleWrapper = styled.div`
  padding-bottom: 133px;
`;

const CardListWrapper = styled.div`
  margin-top: 106px;
`;

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
      return sampleInsightList;
    }
  );

  const handleSelect = (theme: string) => {
    setSelectedTheme(theme);
  };

  return (
    <Container>
      <SubtitleWrapper>
        <Text type={"title"} scale={"3"}>
          PUZZLE에서 {count}개의 인사이트를 만나보세요!
        </Text>
      </SubtitleWrapper>
      <ThemeFilter themeList={themeList} handleSelect={handleSelect} />
      <CardListWrapper>
        {insightList ? (
          <CardListWithLabel
            label={{ text: "Insight", count: insightList.length }}
            cardList={insightList as CardData[]}
          />
        ) : (
          <CardListWithLabelLoading />
        )}
      </CardListWrapper>
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
