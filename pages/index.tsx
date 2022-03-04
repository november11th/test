import styled from "@emotion/styled";
import IntroPuzzleLogo from "../components/intro/IntroPuzzleLogo";
import IntroBanner from "../components/intro/IntroBanner";
import { bannerSlideList } from "../temp_data/banner";
import { Banner } from "../types/banner";
import CardList from "../components/CardList";
import { sampleDataList } from "../temp_data/data";
import { CardData } from "../types/cardData";
import InnerContainerBase from "../components/InnerContainerBase";
import Head from "next/head";

const Container = styled(InnerContainerBase)`
  margin-top: ${({ theme }) => theme.size.navBarHeight};
`;

const IntroWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 0px; /*24px;*/
`;

const DataListWrapper = styled.div`
  padding-top: 40px;
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
        <IntroWrapper>
          <IntroPuzzleLogo />
          <IntroBanner bannerList={bannerList} />
        </IntroWrapper>
        <DataListWrapper>
          <CardList dataList={dataList} isMain />
        </DataListWrapper>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { bannerList: bannerSlideList, dataList: sampleDataList },
  };
}

export default Intro;
