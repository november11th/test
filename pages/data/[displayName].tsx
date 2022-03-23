import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import InnerContainerBase from "../../components/layout/InnerContainerBase";
import { sampleDataList } from "../../temp_data/data";
import StickyTab from "../../components/elements/StickyTab";
import TabPanel from "../../components/elements/TabPanel";
import CardListWithLabel from "../../components/card/CardListWithLabel";
import { CardData } from "../../types/cardData";
import { sampleDataDescription } from "../../temp_data/data_description";
import PuzzleMarkdown from "../../components/elements/PuzzleMarkdown";
import { useSetNavBarTheme } from "../../hooks/useNavBarTheme";
import useNavBarThemeEffectWithScroll from "../../hooks/useNavBarThemeEffectWithScroll";
import DetailPageHeader from "../../components/layout/DetailPageHeader";
import DetailPageContainerBase from "../../components/layout/DetailPageContainerBase";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import { getPageTitle } from "../../utils/common";
import { newSampleInsightList } from "../../temp_data/insight";
import PuzzleLoading from "../../components/elements/loading/PuzzleLoading";

const Container = DetailPageContainerBase;

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
}

const DataPage = ({
  tagList,
  title,
  description,
  partner,
  insightList,
  detailDescription,
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

  useSetNavBarTheme(isFallback ? "white" : "black", [isFallback]);

  useNavBarThemeEffectWithScroll({
    id: "data-scroll",
    trigger: ref.current,
    start: "top 96px",
    end: "bottom bottom",
    onEnterColor: "white",
    onLeaveBackColor: "black",
  });

  if (isFallback) return <PuzzleLoading />;

  return (
    <>
      <Head>
        <title>{getPageTitle(title)}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
      </Head>
      <Container ref={ref}>
        <DetailPageHeader
          tagList={tagList}
          title={title}
          description={description}
          partner={partner}
        />

        <Inner>
          <StickyTab
            tabList={["인사이트", "데이터 설명"]}
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
          />
          <TabPanel value={tabIndex} index={0}>
            <TabInside data-testid={"tab-panel-insight-list"}>
              <CardListWithLabel
                label={{ text: "Insight", count: insightList.length }}
                cardList={insightList}
              />
            </TabInside>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <PuzzleMarkdownTabInside data-testid={"tab-panel-description"}>
              <PuzzleMarkdown text={detailDescription} />
            </PuzzleMarkdownTabInside>
          </TabPanel>
        </Inner>
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
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default DataPage;
