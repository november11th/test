import React from "react";
import styled from "@emotion/styled";
import Text from "../elements/Text";

const Container = styled.div`
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.point6A};
    opacity: 0.5;
  }

  &.selected {
    background-color: ${({ theme }) => theme.colors.point6A};
    opacity: 1;
  }
`;

const ThemeText = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  padding-right: 8px;
  ${Container}:hover & {
    color: white;
  }

  ${Container}.selected & {
    color: white;
  }
`;

interface Props {
  text: string;
  selected: boolean;
  handleClick: () => void;
}

const ThemeButton = ({
  text = "",
  selected = false,
  handleClick = () => {},
}: Props) => {
  return (
    <Container className={selected ? "selected" : ""} onClick={handleClick}>
      <ThemeText type={"copy"} scale={"3"}>
        #{text}
      </ThemeText>
    </Container>
  );
};

export default ThemeButton;
