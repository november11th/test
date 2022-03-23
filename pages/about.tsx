import React from "react";
import styled from "@emotion/styled";
import AboutMenu from "../components/about/AboutMenu";
import AboutMessage from "../components/about/AboutMessage";
import TutorialVideo from "../components/about/TutorialVideo";
import AboutPuzzleLogo from "../components/about/AboutPuzzleLogo";
import Text from "../components/elements/Text";
import Partners from "../components/about/Partners";
import { whatWeHaveList } from "../temp_data/about";
import { theme } from "../styles/theme";
import InnerContainerBase from "../components/layout/InnerContainerBase";

export const Container = styled(InnerContainerBase)`
  margin-top: ${({ theme }) => theme.size.navBarHeight};
  display: flex;
  flex-direction: column;
  padding-bottom: 300px;
`;

const IntroWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 0px;
  gap: 80px;
`;

const Tutorial = styled(Text)`
  align-self: center;
  margin: 200px 0px 160px 0px;
`;
const StyledAboutMenu = styled(AboutMenu)`
  margin-top: 120px;
`;

const About = () => {
  const title = `PUZZLE은 
  SK텔레콤의 위치데이터를 기반으로 
  사람들의 거주/이동/체류에 대한 
  다양한 인사이트를 제공하는 데이터 서비스입니다`;
  const desc = `
  위치데이터는 우리 생활과 산업 전반에 많은 가치를 제공할 수 있습니다. 도로의 혼잡 수준을 분석하여 더욱 빠르게 이동을 가능하게 해주고 지하철, 쇼핑몰, 여행지 등 사람들이 많이 이용하는 장소의 혼잡 수준을 분석하여 보다 쾌적한 시설 이용에도 도움을 줄 수 있습니다.

  데이터를 저장하는 것만큼 데이터를 ‘잘' 활용하는 것은 매우 어려운 일입니다. PUZZLE은 데이터를 단순히 그 자체로 보여주는 것이 아니라 데이터의 무한한 활용성을 여러가지 형태의 인사이트로 구성하여 제공, 일반인부터 서비스 기획/개발자까지 모두가 그 가치를 체험할 수 있도록 구성하였습니다.`;

  return (
    <Container>
      <IntroWrapper>
        <AboutPuzzleLogo />
        <AboutMessage title={title} desc={desc} />
      </IntroWrapper>

      <Tutorial type={"title"} scale={"3"} color={theme.colors.gray6e}>
        TUTORIAL
      </Tutorial>
      <TutorialVideo />
      <StyledAboutMenu itemList={whatWeHaveList} />
      <Partners />
    </Container>
  );
};

export default About;
