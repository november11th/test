import styled from "@emotion/styled";
import Head from "next/head";

import CardList from "../components/card/CardList";
import InnerContainerBase from "../components/layout/InnerContainerBase";
import ProjectJoinCard from "../components/intro/ProjectJoinCard";
import IntroBanner from "../components/intro/IntroBanner";
import { newBannerList } from "../temp_data/banner";
import { Banner } from "../types/banner";
import { CardData } from "../types/cardData";
import { sampleDataList } from "../temp_data/data";

export const Container = styled(InnerContainerBase)`
  margin-top: ${({ theme }) => theme.size.navBarHeight};
`;

const DataListWrapper = styled.div`
  padding-top: 169px;
  padding-bottom: 40px;
`;

interface Props {
  bannerList: Banner[];
  dataList: CardData[];
}

const Intro = ({ bannerList, dataList }: Props) => {
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
        <IntroBanner bannerList={bannerList} />
        <DataListWrapper>
          <CardList dataList={dataList} />
        </DataListWrapper>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { bannerList: newBannerList, dataList: sampleDataList },
  };
}

export default Intro;
