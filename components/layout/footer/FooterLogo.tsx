import styled from "@emotion/styled";
import Logo from "../../../assets/images/layout/footer-logo-black.svg";
import React from "react";

const Container = styled.div`
  width: auto;
  height: 61px;
  margin-top: 40px;
  bottom: 0px;
  right: 0;
  position: absolute;
  svg {
    height: 61px;
  }
`;
const FooterLogo = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default FooterLogo;
