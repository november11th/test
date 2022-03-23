import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import StickyTab from "../../components/elements/StickyTab";
import InnerContainerBase from "../../components/layout/InnerContainerBase";
import RelatedProductCard from "../../components/card/RelatedProductCard";
import {
  newSampleInsightList,
  sampleRelatedProduct,
} from "../../temp_data/insight";
import { useSetNavBarTheme } from "../../hooks/useNavBarTheme";
import useNavBarThemeEffectWithScroll from "../../hooks/useNavBarThemeEffectWithScroll";
import DetailPageHeader from "../../components/layout/DetailPageHeader";
import DetailPageContainerBase from "../../components/layout/DetailPageContainerBase";
import { Insight } from "../../types/insight";
import PuzzleMarkdown from "../../components/elements/PuzzleMarkdown";
import Head from "next/head";
import { getPageTitle } from "../../utils/common";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import PuzzleLoading from "../../components/elements/loading/PuzzleLoading";
import InteractiveContainer from "../../containers/interactive/InteractiveContainer";
import axios from "axios";
import { sampleDataList } from "../../temp_data/data";

const Container = DetailPageContainerBase;
const Wrapper = styled.section``;
const Grid = styled(InnerContainerBase)`
  display: grid;
`;
const InsightWrapper = styled.div`
  width: 900px;
  grid-column-start: 1;
  grid-column-end: 3;
`;
const ProductList = styled.div`
  /*900 + 40 + 340 = 1280*/
  margin-left: 40px;
  width: 340px;
  grid-column-start: 3;
`;
const RelatedProducts = styled.div`
  margin-top: 16px;
  padding: 0px;
  max-height: calc(100vh - 183px);
  overflow: auto;
`;
const StyledRelatedProductCard = styled(RelatedProductCard)`
  padding: 0px;
  margin-bottom: 16px;
`;
const Body = styled.div`
  padding-top: 56px;
`;

type Props = Partial<Insight> & { backgroundImageUrl: string };

const InsightDetailPage = ({
  tagList = [],
  title = "",
  partner,
  type = "report",
  reportContent = "",
  interactiveType,
  category = "",
  backgroundImageUrl = "/images/data_detail_bg_travel.svg",
}: Props) => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const ref = useRef<any>(null);
  const { isFallback } = useRouter();

  useSetNavBarTheme(isFallback ? "white" : "black", [isFallback]);

  useNavBarThemeEffectWithScroll({
    id: "insights-scroll",
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
        <Wrapper>
          <DetailPageHeader
            tagList={tagList}
            title={title}
            partner={partner}
            imgUrl={backgroundImageUrl}
            category={category}
          />
          <Grid>
            <InsightWrapper>
              <StickyTab
                tabList={type === "report" ? ["서비스 소개"] : ["인사이트"]}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
                hasShare={true}
              />
              <Body>
                {type === "report" ? (
                  <PuzzleMarkdown text={reportContent} />
                ) : (
                  <InteractiveContainer id={interactiveType ?? ""} />
                )}
              </Body>
            </InsightWrapper>
            <ProductList>
              <StickyTab tabList={["연관 데이터 상품"]} hasUnderline={false} />
              <RelatedProducts>
                {sampleRelatedProduct.map((item, index) => (
                  <StyledRelatedProductCard key={index} data={item} />
                ))}
              </RelatedProducts>
            </ProductList>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const insightList = Object.values(newSampleInsightList).reduce(
    (list: any, total) => [...total, ...list],
    []
  );

  const displayNameList = insightList.map((data) => data.displayName);

  const paths = displayNameList.map((displayName) => ({
    params: { displayName },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default InsightDetailPage;

interface Params extends ParsedUrlQuery {
  displayName: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { displayName } = params as Params;

  const insightList = Object.values(newSampleInsightList).reduce(
    (list: any, total) => [...total, ...list],
    []
  );

  try {
    let foundItem = insightList.find(
      (data) => data.displayName === displayName
    );

    if (!foundItem) {
      try {
        const { data } = await axios.get(
          `https://ingq17gyo3.execute-api.ap-northeast-2.amazonaws.com/dev/reports/${displayName}`
        );

        foundItem = {
          ...insightList[0],
          type: "report",
          title: data[0].name,
          reportContent: data[0].body,
        };
      } catch (e) {
        return { notFound: true };
      }
    }

    let backgroundImageUrl = "";
    for (let key of Object.keys(newSampleInsightList)) {
      if (
        newSampleInsightList[key].find(
          (insight) => insight.displayName === foundItem.displayName
        )
      ) {
        const foundData = sampleDataList.find(
          (data) => data.displayName === key
        );

        if (foundData) backgroundImageUrl = foundData?.backgroundImageUrl;

        break;
      }
    }

    return {
      props: {
        title: foundItem?.title,
        tagList: foundItem?.tagList,
        partner: foundItem?.partner ?? "SKTelecom",
        type: foundItem?.type,
        reportContent: foundItem?.reportContent,
        interactiveType: foundItem?.interactiveType ?? null,
        category: foundItem.category,
        backgroundImageUrl,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};
