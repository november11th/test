import React from "react";
import styled from "@emotion/styled";
import Text from "./Text";
import { theme } from "../../styles/theme";

const CategoryContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 23px;
`;

interface Props {
  text: string;
  color?: string;
}

const CategoryLabel = ({ text = "", color = theme.colors.white }: Props) => {
  return (
    <CategoryContainer>
      <Text type={"copy"} scale={"4"} color={color}>
        {text}
      </Text>
    </CategoryContainer>
  );
};

export default CategoryLabel;
