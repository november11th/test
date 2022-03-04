import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import InnerContainerBase from "../../components/InnerContainerBase";
import { sampleInsightList } from "../../temp_data/insight";
import { sampleDataList } from "../../temp_data/data";
import StickyTab from "../../components/elements/StickyTab";
import TabPanel from "../../components/elements/TabPanel";
import CardListWithLabel from "../../components/CardListWithLabel";
import { CardData } from "../../types/cardData";
import { sampleDataDescription } from "../../temp_data/data_description";
import PuzzleMarkdown from "../../components/elements/PuzzleMarkdown";
import { useSetNavBarTheme } from "../../hooks/useNavBarTheme";
import axios from "axios";
import useNavBarThemeEffectWithScroll from "../../hooks/useNavBarThemeEffectWithScroll";
import DetailPageHeader from "../../components/DetailPageHeader";
import DetailPageContainerBase from "../../components/DetailPageContainerBase";

const Container = DetailPageContainerBase;

const Inner = styled(InnerContainerBase)``;

const TabInside = styled.div`
  padding-top: 73px;
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
          <TabInside>
            <CardListWithLabel
              label={{ text: "Insight", count: insightList.length }}
              cardList={insightList}
            />
          </TabInside>
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <TabInside>
            <PuzzleMarkdown text={detailDescription} />
          </TabInside>
        </TabPanel>
      </Inner>
    </Container>
  );
};

// 임시로 getServerSideProps로 지정
export async function getServerSideProps(context: any) {
  const {
    query: { id },
  } = context;

  // 임시 PoC 데이터 연동 (for 데이터 분석가)
  const { data } = await axios.get(
    `https://ingq17gyo3.execute-api.ap-northeast-2.amazonaws.com/dev/reports/${id}`
  );

  const foundItem =
    sampleDataList.find((data) => data.id === id) ?? sampleDataList[0];

  return {
    props: {
      title: foundItem?.title,
      tagList: foundItem?.tagList,
      description: foundItem?.description,
      partner: foundItem?.partner ?? "SKTelecom",
      insightList: sampleInsightList,
      detailDescription: data[0]?.body ?? sampleDataDescription,
    },
  };
}

export default DataPage;
