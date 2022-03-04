import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import StickyTab from "../../components/elements/StickyTab";
import InnerContainerBase from "../../components/InnerContainerBase";
import RelatedProductCard from "../../components/card/RelatedProductCard";
import {
  sampleInsightList,
  sampleRelatedProduct,
} from "../../temp_data/insight";
import { useSetNavBarTheme } from "../../hooks/useNavBarTheme";
import useNavBarThemeEffectWithScroll from "../../hooks/useNavBarThemeEffectWithScroll";
import DetailPageHeader from "../../components/DetailPageHeader";
import DetailPageContainerBase from "../../components/DetailPageContainerBase";
import InteractiveContainer from "../../components/InteractiveContainer";
import { Insight } from "../../types/insight";
import { sampleDataDescription } from "../../temp_data/data_description";
import PuzzleMarkdown from "../../components/elements/PuzzleMarkdown";
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
  padding-top: 73px;
`;

type Props = Partial<Insight>;

const InsightDetailPage = ({
  tagList = [],
  title = "",
  partner,
  type = "report",
  reportContent = "", // 220304 경현 임시 Temp
  interactiveType, // 220304 경현 임시 Temp
}: Props) => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const ref = useRef<any>(null);

  useSetNavBarTheme("black");
  useNavBarThemeEffectWithScroll({
    id: "insights-scroll",
    trigger: ref.current,
    start: "top 96px",
    end: "bottom bottom",
    onEnterColor: "white",
    onLeaveBackColor: "black",
  });

  return (
    <Container ref={ref}>
      <Wrapper>
        <DetailPageHeader
          tagList={tagList}
          title={title}
          partner={partner}
          imgUrl={"/assets/images/common/rectangle.svg"}
          category={"서비스"}
        />
        <Grid>
          <InsightWrapper>
            <StickyTab
              tabList={["서비스 소개"]}
              tabIndex={tabIndex}
              setTabIndex={setTabIndex}
              hasShare={true}
            />
            <Body>
              {type === "report" ? (
                <PuzzleMarkdown text={reportContent} />
              ) : interactiveType === "subway" ? (
                <InteractiveContainer />
              ) : null}
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
  );
};

export async function getServerSideProps(context: any) {
  const {
    query: { id },
  } = context;

  const foundItem: any =
    sampleInsightList.find((insight) => insight.id === id) ??
    sampleInsightList[0];

  return {
    props: {
      title: foundItem?.title,
      tagList: foundItem?.tagList,
      partner: foundItem?.partner,
      type: foundItem?.type,
      reportContent: foundItem?.reportContent,
      interactiveType: foundItem?.interactiveType,
    },
  };
}

export default InsightDetailPage;
