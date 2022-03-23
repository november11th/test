import React from "react";
import styled from "@emotion/styled";
import InnerContainerBase from "./InnerContainerBase";

const FullPageContainer = styled(InnerContainerBase)`
  margin-top: ${({ theme }) => theme.size.navBarHeight};
  min-height: 500px;
  height: calc(
    100vh - ${({ theme }) => theme.size.navBarHeight} -
      ${({ theme }) => theme.size.footerHeight} -
      ${({ theme }) => theme.size.layoutBottomPadding} - 20px
  );

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

export default FullPageContainer;
