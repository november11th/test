import styled from "@emotion/styled";
import Head from "next/head";
import { TEMP_BANNER_LIST } from "../temp_data/banner";
import { Banner } from "../types/banner";
import { CardData } from "../types/cardData";
import { sampleDataList } from "../temp_data/data";
import DataTitleCardList from "../components/card/DataTitleCardList";
import React, { useRef } from "react";
import Text from "../components/elements/Text";
import { theme } from "../styles/theme";
import Link from "next/link";
import { useSetNavBarTheme } from "../hooks/useNavBarTheme";
import useNavBarThemeEffectWithScroll from "../hooks/useNavBarThemeEffectWithScroll";
import IntroImageBanner from "../components/intro/IntroImageBanner";
import ScrollTopFloatingButton from "../components/elements/ScrollTopFloatingButton";

export const Container = styled.div`
  position: relative;
`;

const BannerWrapper = styled.div`
  background-color: white;
`;

const DataListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.cardListBackground};

  padding-top: 30px;
  padding-bottom: 100px;
`;

interface Props {
  bannerList: Banner[];
  dataList: CardData[];
}

const RequestWrapper = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 154px 0px;
`;

const RequestTitleWrapper = styled.div``;

const RequestDescriptionWrapper = styled.div`
  margin-top: 35px;
`;

const RequestButtonWrapper = styled.div`
  margin-top: 67px;
`;

const RequestButton = styled.a`
  padding: 12px 44px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.point8C};

  &:hover {
    background-color: #5d5fef;
  }
`;

const Intro = ({ bannerList, dataList }: Props) => {
  const ref = useRef<any>(null);
  useSetNavBarTheme("black");

  useNavBarThemeEffectWithScroll({
    id: "data-scroll",
    trigger: ref.current,
    start: "bottom 50px",
    end: "bottom bottom",
    onEnterColor: "gray",
    onLeaveBackColor: "black",
  });

  return (
    <>
      <Head>
        <link
          rel="preload"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/assets/fonts/Pretendard-SemiBold.woff2`}
          as="font"
          type="font/woff2"
        />
      </Head>
      <Container>
        <BannerWrapper ref={ref}>
          <IntroImageBanner bannerList={bannerList} />
        </BannerWrapper>
        <DataListWrapper>
          <DataTitleCardList
            cardList={dataList}
            totalCardCount={dataList.length}
          />
        </DataListWrapper>
        <RequestWrapper>
          <RequestTitleWrapper>
            <Text type={"title"} scale={"4"}>
              마음에 드는 데이터가 없나요?
            </Text>
          </RequestTitleWrapper>
          <RequestDescriptionWrapper>
            <Text type={"copy"} scale={"4"}>
              아래 데이터 요청하기 버튼을 눌러 새로운 데이터를 요청하세요.
            </Text>
          </RequestDescriptionWrapper>
          <RequestButtonWrapper>
            <Link href={"/request"} passHref={true}>
              <RequestButton>
                <Text type={"copy"} scale={"6"} color={theme.colors.white}>
                  데이터 요청하기
                </Text>
              </RequestButton>
            </Link>
          </RequestButtonWrapper>
        </RequestWrapper>
        <ScrollTopFloatingButton />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { bannerList: TEMP_BANNER_LIST, dataList: sampleDataList },
  };
}

export default Intro;
