import styled from "@emotion/styled";
import Text from "../../elements/Text";
import { theme } from "../../../styles/theme";

const w = 40;
const ButtonContainer = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  margin-right: 15px;
  flex-direction: column;
  align-items: center;
`;
const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${w}px;
  width: ${w}px;
  border-radius: ${w * 0.5}px;

  &.line--1 {
    background-color: ${({ theme }) => theme.colors.subwayLine1};
  }
  &.line--2 {
    background-color: ${({ theme }) => theme.colors.subwayLine2};
  }
  &.line--3 {
    background-color: ${({ theme }) => theme.colors.subwayLine3};
  }
  &.line--4 {
    background-color: ${({ theme }) => theme.colors.subwayLine4};
  }
  &.line--5 {
    background-color: ${({ theme }) => theme.colors.subwayLine5};
  }
  &.line--6 {
    background-color: ${({ theme }) => theme.colors.subwayLine6};
  }
  &.line--7 {
    background-color: ${({ theme }) => theme.colors.subwayLine7};
  }
  &.line--8 {
    background-color: ${({ theme }) => theme.colors.subwayLine8};
  }
  &.line--9 {
    background-color: ${({ theme }) => theme.colors.subwayLine9};
  }
`;
const Bar = styled.div`
  margin-top: 10px;
  width: ${w}px;
  height: ${w * 0.1}px;
  border-radius: ${w * 0.05}px;

  background-color: ${({ theme }) => theme.colors.grayAf};
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;

  &:last-of-type {
    margin-right: 0px;
  }
`;

interface ButtonProps {
  item: string;
  isSelected: boolean;
  hasBar?: boolean;
  onClick?: () => void;
}
export const Button = ({ item, isSelected, onClick, hasBar }: ButtonProps) => {
  return (
    <ButtonContainer>
      <Circle onClick={onClick} className={`line--${item}`}>
        <Text type={"copy"} scale={"5"} color={theme.colors.white}>
          {item}
        </Text>
      </Circle>
      {isSelected && hasBar && <Bar />}
    </ButtonContainer>
  );
};

interface Props {
  list: Array<string>;
  setIndex: Function;
  selectedIndex: number;
}
const SubwaylineSelector = ({ list, setIndex, selectedIndex }: Props) => {
  return (
    <Container>
      {list.map((item, index) => {
        return (
          <Button
            key={`${index}-${item}`}
            item={item}
            isSelected={index === selectedIndex}
            onClick={() => setIndex(index)}
            hasBar={true}
          />
        );
      })}
    </Container>
  );
};

SubwaylineSelector.defaultProps = {
  list: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  initialIndex: 0,
  setIndex: console.log,
};
export default SubwaylineSelector;
