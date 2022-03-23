import React from "react";
import styled from "@emotion/styled";
import classNames from "classnames";

const Box = styled.div`
  display: flex;
  width: 58px;
  height: 32px;
  margin-right: 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray6e};
  color: ${({ theme }) => theme.colors.black};

  font-size: 18px;
  font-weight: 400;

  &.selected {
    background-color: ${({ theme }) => theme.colors.chart67};
    border-color: ${({ theme }) => theme.colors.chart67};
    color: ${({ theme }) => theme.colors.white};
  }

  &:last-of-type {
    margin-right: 0px;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

// 하나의 버튼
interface DowProps {
  text: string;
  onPress(): void;
  isSelected: boolean;
}
const Button = ({ text, onPress, isSelected }: DowProps) => {
  return (
    <Box
      onClick={onPress}
      className={classNames({
        selected: isSelected,
      })}
    >
      {text}
    </Box>
  );
};

// 버튼 여러개
interface ButtonSelectorProps {
  list: string[];
  selectedIdx: number;
  setSelectedIdx: Function;
  className?: string;
}
const ButtonSelector = ({
  list,
  selectedIdx,
  setSelectedIdx,
  className,
}: ButtonSelectorProps) => {
  return (
    <RowContainer className={className}>
      {list.map((item, index) => (
        <Button
          key={index}
          text={item}
          onPress={() => {
            setSelectedIdx(index);
          }}
          isSelected={selectedIdx === index}
        />
      ))}
    </RowContainer>
  );
};

export default ButtonSelector;
