import React from "react";
import styled from "@emotion/styled";
import Text from "../elements/Text";
import { theme } from "../../styles/theme";

const Container = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Zero = styled.div`
  font-size: 288px;

  color: ${({ theme }) => theme.colors.grayAf};
  :before {
    content: "0";
  }
`;

const EmptyText = styled.div`
  transform: translateY(-100%);
`;

interface Props {
  text?: string;
}

const EmptyCardList = ({ text = "상품이 없습니다." }: Props) => {
  return (
    <Container>
      <Inside>
        <Zero />
        <EmptyText>
          <Text type={"copy"} scale={"2"} color={theme.colors.grayAf}>
            {text}
          </Text>
        </EmptyText>
      </Inside>
    </Container>
  );
};

export default EmptyCardList;
