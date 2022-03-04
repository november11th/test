import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import React from "react";
import styled from "@emotion/styled";
import { getMediaQuery, mediaSize } from "../../utils/mediaQuery";
import { useIsOpenMenuState } from "../../recoil/menuDialog";

const Container = styled.div<{ scrollYDisabled: boolean }>`
  padding-bottom: ${({ theme }) => theme.size.layoutBottomPadding};
  height: ${({ scrollYDisabled }) => (scrollYDisabled ? "100vh" : "")};
  overflow-y: ${({ scrollYDisabled }) => (scrollYDisabled ? "hidden" : "")};
`;

const PageContainer = styled.div``;

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [isOpenMenu] = useIsOpenMenuState();

  return (
    <Container scrollYDisabled={isOpenMenu}>
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </Container>
  );
}
