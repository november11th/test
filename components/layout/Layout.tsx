import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import React from "react";
import styled from "@emotion/styled";
import { useIsOpenMenuState } from "../../recoil/menuDialog";

const Container = styled.div<{ scrollYDisabled: boolean }>`
  height: ${({ scrollYDisabled }) => (scrollYDisabled ? "100vh" : "")};
  overflow-y: ${({ scrollYDisabled }) =>
    scrollYDisabled ? "hidden" : "unset"};
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
