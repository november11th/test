import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import classNames from "classnames";
import Text from "../../elements/Text";
import {
  Container as Container_,
  SearchContainer as SearchContainer_,
  GrayLine as GrayLine_,
  InputWrapper as InputWrapper_,
  Input as Input_,
  Listbox as Listbox_,
  List as List_,
  Button as Button_,
} from "./SearchInput";
import SvgIconDown from "../../../assets/images/common/icon-dropdown-down.svg";
import SvgIconUp from "../../../assets/images/common/icon-dropdown-up.svg";
import { SearchItem } from "../../../types/common";

/* SearchInput의 스타일을 대부분 사용 */
const Container = Container_;
const DropdownContainer = SearchContainer_;
const InputWrapper = styled(InputWrapper_)`
  position: relative;
`;
const GrayLine = GrayLine_;
const Input = styled(Input_)`
  &:disabled {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
const Listbox = Listbox_;
const List = List_;
const Button = Button_;
const SvgWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  &:active {
    opacity: 0.3;
  }
`;

interface Props {
  onButtonPress: () => void;
  selectedItem: SearchItem; //최종선택된 아이템
  setSelectedItem: Function;
  options: SearchItem[];
  className?: string;
}

const SearchDropdown = ({
  onButtonPress,
  selectedItem,
  setSelectedItem,
  options,
  className,
}: Props) => {
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false); //하단 옵션리스트 등장 여부
  const dropdownInputRef = useRef<any>(null);
  const searchDropdownRef = useRef<any>(null);

  /* 외부 영역을 클릭했을 때 검색창이 닫히도록 */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (
        searchDropdownRef.current &&
        !searchDropdownRef.current.contains(e.target as Node)
      ) {
        setIsSearchMode(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchDropdownRef]);

  /* 리스트에서 원하는 아이템을 선택했을 때 */
  const onSelect = (selected: any) => {
    setSelectedItem(
      options.filter((option) => option?.title === selected.trim())[0]
    );
    setIsSearchMode(false);
  };

  return (
    <Container className={className}>
      <DropdownContainer ref={searchDropdownRef}>
        <GrayLine />
        <InputWrapper
          onClick={() => setIsSearchMode(!isSearchMode)}
          className={classNames({ focused: isSearchMode })}
        >
          <Input
            disabled
            value={selectedItem?.title}
            autoComplete={"off"}
            data-testid={"dropdown-input"}
            ref={dropdownInputRef}
          />
          <SvgWrapper>
            {isSearchMode ? <SvgIconUp /> : <SvgIconDown />}
          </SvgWrapper>
        </InputWrapper>
        <Listbox className={classNames({ focused: isSearchMode })}>
          {options?.map((option: any, index: number) => (
            <List
              key={index}
              onClick={(e) => {
                const eventTarget = e.target as unknown as HTMLElement;
                onSelect(eventTarget.innerText);
              }}
            >
              <Text type={"copy"} scale={"5"}>
                {option.title}
              </Text>
            </List>
          ))}
        </Listbox>
      </DropdownContainer>
      <Button onClick={onButtonPress}>
        <Text type={"copy"} scale={"6"}>
          확인
        </Text>
      </Button>
    </Container>
  );
};

SearchDropdown.defaultProps = {
  onButtonPress: () => {},
};

export default SearchDropdown;
