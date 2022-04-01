import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { NextSeo } from "next-seo";
import InnerContainerBase from "../../components/layout/InnerContainerBase";
import PuzzleLoading from "../../components/elements/loading/PuzzleLoading";
import StickyTab from "../../components/elements/StickyTab";
import TabPanel from "../../components/elements/TabPanel";
import PuzzleMarkdown from "../../components/elements/PuzzleMarkdown";
import DataDetailPageHeader from "../../components/layout/DataDetailPageHeader";
import { CardData } from "../../types/cardData";
import { useSetNavBarTheme } from "../../hooks/useNavBarTheme";
import useNavBarThemeEffectWithScroll from "../../hooks/useNavBarThemeEffectWithScroll";
import { sampleDataList } from "../../temp_data/data";
import { newSampleInsightList } from "../../temp_data/insight";
import { sampleDataDescription } from "../../temp_data/data_description";
import InsightTitleCardList from "../../components/card/InsightTitleCardList";
import { theme } from "../../styles/theme";
import useScrollToTop from "../../hooks/useScrollToTop";
import ScrollTopFloatingButton from "../../components/elements/ScrollTopFloatingButton";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.cardListBackground};
  min-width: max-content;
`;
const Header = styled.header``;
const Inner = styled(InnerContainerBase)``;
const TabInside = styled.div`
  padding-top: 56px;
`;
const PuzzleMarkdownTabInside = styled(TabInside)`
  width: 900px;
`;

interface Props {
  tagList: string[];
  title: string;
  description: string;
  partner: string;
  insightList: CardData[];
  detailDescription: string;
  backgroundImageUrl: string;
}

const DataPage = ({
  tagList,
  title,
  description,
  partner,
  insightList,
  detailDescription,
  backgroundImageUrl,
}: Props) => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const ref = useRef<any>(null);
  const { isFallback, query } = useRouter();

  useEffect(() => {
    const { tabIndex } = query ?? {};
    if ([0, 1].includes(Number(tabIndex))) setTabIndex(Number(tabIndex));
  }, [query?.tabIndex]);

  useEffect(() => {
    setTabIndex(0);
  }, [query?.displayName]);

  useScrollToTop(tabIndex);
  useSetNavBarTheme(isFallback ? "white" : "black", [isFallback]);

  useNavBarThemeEffectWithScroll({
    id: "data-scroll",
    trigger: ref.current,
    start: "bottom 50px",
    end: "bottom bottom",
    onEnterColor: "gray",
    onLeaveBackColor: "black",
  });

  if (isFallback) return <PuzzleLoading />;

  return (
    <>
      <NextSeo title={title} description={description} />

      <Container>
        <Header ref={ref}>
          <DataDetailPageHeader
            imgUrl={backgroundImageUrl}
            tagList={tagList}
            title={title}
            description={description}
            partner={partner}
          />
        </Header>

        <Inner>
          <StickyTab
            backgroundColor={theme.colors.cardListBackground}
            tabColor={theme.colors.cardListBackground}
            tabList={["인사이트", "데이터 설명"]}
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
          />
          <TabPanel value={tabIndex} index={0}>
            <TabInside data-testid={"tab-panel-insight-list"}>
              <InsightTitleCardList
                cardList={insightList}
                totalCardCount={insightList.length}
              />
            </TabInside>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <PuzzleMarkdownTabInside data-testid={"tab-panel-description"}>
              <PuzzleMarkdown text={detailDescription} />
            </PuzzleMarkdownTabInside>
          </TabPanel>
        </Inner>
        <ScrollTopFloatingButton />
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const displayNameList = sampleDataList.map((data) => data.displayName);

  const paths = displayNameList.map((displayName) => ({
    params: { displayName },
  }));

  return {
    paths,
    fallback: true,
  };
};

interface Params extends ParsedUrlQuery {
  displayName: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { displayName } = params as Params;

  try {
    const foundItem = sampleDataList.find(
      (data) => data.displayName === displayName
    );

    if (!foundItem) return { notFound: true };

    return {
      props: {
        title: foundItem?.title,
        tagList: foundItem?.tagList,
        description: foundItem?.description,
        partner: foundItem?.partner ?? "SKTelecom",
        insightList: newSampleInsightList[displayName] ?? [],
        detailDescription: sampleDataDescription[displayName],
        backgroundImageUrl: foundItem?.backgroundImageUrl,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default DataPage;
