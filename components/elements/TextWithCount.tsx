import React from "react";
import Text from "./Text";
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
  transform: translate(calc(100% + 5px), -2px);
`;

interface Props {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  count: number;
}

const TextWithCount = ({
  children = "",
  count = 0,
  size = "medium",
}: Props) => {
  const textSize: { [key in "small" | "medium" | "large"]: "3" | "4" | "5" } = {
    small: "5",
    medium: "4",
    large: "3",
  };

  return (
    <Container>
      <TextWrapper>
        <Text type={"title"} scale={textSize[size]}>
          {children}
        </Text>
      </TextWrapper>
      <CountWrapper>
        <Text type={"copy"} scale={"7"}>
          {count}
        </Text>
      </CountWrapper>
    </Container>
  );
};

export default TextWithCount;
