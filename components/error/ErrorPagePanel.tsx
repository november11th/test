import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 150px 0;
`;

interface Props {
  children: React.ReactNode;
}

const ErrorPagePanel = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default ErrorPagePanel;
