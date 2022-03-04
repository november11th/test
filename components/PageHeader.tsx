import React from "react";
import styled from "@emotion/styled";
import InnerContainerBase from "./InnerContainerBase";

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: max-content;
  height: 650px; /* PC SVG와의 크기를 맞추기 위해 fix */
  background-color: ${({ theme }) => theme.colors.grayEa};
  justify-content: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

const Inside = styled(InnerContainerBase)`
  background-color: transparent;
`;

interface Props {
  children: React.ReactNode;
}

const PageHeader = ({ children, ...props }: Props) => {
  return (
    <Container>
      <Inside {...props}>{children}</Inside>
    </Container>
  );
};

export default PageHeader;
