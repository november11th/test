import React from "react";
import Text from "./elements/Text";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  max-width: max-content;
`;

const TextWrapper = styled.div``;

const CountWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  transform: translateX(100%);
`;

interface Props {
  children: React.ReactNode;
  count: number;
}

const TextWithCount = ({ children = "", count = 0 }: Props) => {
  return (
    <Container>
      <TextWrapper>
        <Text type={"title"} scale={"4"}>
          {children}
        </Text>
      </TextWrapper>
      <CountWrapper>
        <Text type={"copy"} scale={"8"}>
          {count}
        </Text>
      </CountWrapper>
    </Container>
  );
};

export default TextWithCount;
