import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Text from "../../elements/Text";
import _debounce from "lodash/debounce";
import _ from "lodash";
import { SearchItem } from "../../../types/common";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SearchContainer = styled.div`
  position: relative;
`;
export const GrayLine = styled.div`
  display: block;
  position: absolute;
  width: 318px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.grayD0};
  bottom: 0px;
  z-index: 40;
`;
export const InputWrapper = styled.div`
  width: 318px;
  background-color: "transparent";
  padding: 1px;
  display: flex;
  flex-wrap: wrap;
  z-index: 30;

  &.focused {
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: calc(318px + 12px);
      height: 220px;
      transform: translateX(-6px) translateY(-1px);
      background: ${({ theme }) => theme.colors.white};
      border-radius: 4px;
      box-shadow: 0 2px 10px 5px rgba(0, 0, 0, 0.06);
      z-index: 0;
    }
  }

  &.noResultAlert {
    &::before {
      display: none;
    }
    &::after {
      content: "검색 결과가 없습니다.";
      display: block;
      position: absolute;
      transform: translateY(60px);

      /* copy-case-7 */
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: normal;
      color: ${({ theme }) => theme.colors.chartD4};
    }
  }
`;
export const Input = styled.input`
  position: relative;
  padding: 10px 10px 10px 12px;
  height: 52px;
  box-sizing: border-box;
  padding: 4px 6px;
  width: 0;
  min-width: 30px;
  flex-grow: 1;
  border: 0;
  margin: 0;
  outline: 0;

  /* copy-case-5 */
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayAf};
  }
`;
export const Listbox = styled.ul`
  display: none;

  &.focused {
    display: block;
    width: 318px;
    margin: 2px 2px 0;
    padding: 0;
    position: absolute;
    list-style: none;
    background-color: ${({ theme }) => theme.colors.white};
    overflow: auto;
    max-height: 160px;
    border-radius: 4px;
    z-index: 20;

    /* scrollBar CSS */
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.grayF4};
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;
export const List = styled.div`
  padding: 5px 12px;
  display: flex;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayF4};
    & > p {
      color: ${({ theme }) => theme.colors.chart0C}; /*텍스트 색깔변화 */
    }
  }
`;
export const Button = styled.button`
  width: 92px;
  height: 52px;
  margin-left: 12px;
  border-radius: 4px;
  border: 0px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.grayEa};
  cursor: pointer;

  &:active {
    opacity: 0.3;
  }
`;

interface Props {
  placeholder: string;
  selectedItem: SearchItem; //최종선택된 아이템
  setSelectedItem: Function;
  onButtonPress: () => void;
  options: SearchItem[];
  className?: string;
}

const SearchInput = ({
  placeholder,
  selectedItem,
  setSelectedItem,
  onButtonPress,
  options,
  className,
}: Props) => {
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false); //하단 옵션리스트 등장 여부
  const [searchText, setSearchText] = useState<string>(selectedItem?.title); // 검색중인 단어
  const [searchResult, setSearchResult] = useState<any[] | null>(null); // 검색결과(=Filtered Options)
  const textInputRef = useRef<any>(null);
  const searchInputRef = useRef<any>(null);
  const [placeholder_, setPlacehoder_] = useState<string>("");

  useEffect(() => {
    setPlacehoder_(placeholder);
  }, [placeholder]);

  useEffect(() => {
    setSearchResult(options);
  }, [options]);

  /* 외부 영역을 클릭했을 때 검색창이 닫히도록 */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target as Node)
      ) {
        setIsSearchMode(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchInputRef]);

  /* query와 동일한 글자를 가진 option 필터링 */
  const filter = (item: any, query: string) =>
    item.title.toLowerCase().includes(query.toLowerCase());

  /* 리스트에서 원하는 아이템을 선택했을 때 */
  const onSelect = (selected: any) => {
    const onSelectedItem = options.filter(
      (option) => option.title === selected.trim()
    )[0];
    setSearchText(onSelectedItem?.title);
    setSelectedItem(onSelectedItem);
    setIsSearchMode(false);
  };

  /* 검색창에 검색어를 입력할 때 */
  const onChangeText = (query: string) => {
    setSearchText(query);
    setSearchResult(options.filter((item) => filter(item, query)));
  };

  /* 검색어에 따라 검색결과가 있는지 없는지 확인 */
  const checkNoResult = () => {
    if (searchText?.length > 1 && searchResult?.length === 0) return true;
    else return false;
  };

  return (
    <Container className={className}>
      <SearchContainer ref={searchInputRef}>
        <GrayLine />
        <InputWrapper
          onClick={() => setIsSearchMode(!isSearchMode)}
          className={classNames({
            focused: isSearchMode,
            noResultAlert: checkNoResult(),
          })}
        >
          <Input
            type="text"
            placeholder={placeholder_}
            value={searchText}
            autoComplete={"off"}
            onChange={(e) => onChangeText(e.target.value)}
            data-testid={"search-input"}
            ref={textInputRef}
          />
        </InputWrapper>
        <Listbox className={classNames({ focused: isSearchMode })}>
          {searchResult?.map((option: any, index: number) => (
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
      </SearchContainer>
      <Button onClick={onButtonPress}>
        <Text type={"copy"} scale={"6"}>
          확인
        </Text>
      </Button>
    </Container>
  );
};

SearchInput.defaultProps = {
  placeholder: "내용을 입력해 주세요.",
  onButtonPress: () => {},
};
export default SearchInput;
