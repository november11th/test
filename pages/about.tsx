import styled from "@emotion/styled";
import AboutPageHeader from "../components/about/AboutPageHeader";
import WhatWeHave from "../components/about/WhatWeHave";
import { whatWeHaveList } from "../temp_data/about";

const Container = styled.div`
  margin-top: ${({ theme }) => theme.size.navBarHeight};
`;
const About = () => {
  return (
    <Container>
      <AboutPageHeader />
      <WhatWeHave itemList={whatWeHaveList} />
    </Container>
  );
};

export default About;
