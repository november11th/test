import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import SvgIconSearchBlack from "../../../assets/images/layout/gnb-icon-search-black.svg";
import SvgIconClose from "../../../assets/images/layout/style-btn-close.svg";
import { NavBarTheme } from "../../../types/common";
import { theme } from "../../../styles/theme";
import SvgIconSearchWhite from "../../../assets/images/layout/gnb-icon-search-white.svg";

const SearchButton = styled.div`
  cursor: pointer;
  margin-left: 9px;
  svg {
    width: 24px;
    height: 24px;
  }

  &.white-theme {
    svg g {
      stroke: #000;
    }
  }

  &.black-theme {
    svg g {
      stroke: #fff;
    }
  }
`;

const CloseButton = styled(SearchButton)`
  svg {
    width: 30px;
    height: 30px;
  }

  &.white-theme {
    svg path {
      stroke: #000;
    }
  }

  &.black-theme {
    svg path {
      stroke: #fff;
    }
  }
`;

const Container = styled.div<{
  is_search_mode: boolean;
  navbar_theme: NavBarTheme;
}>`
  width: 412px;
  height: 58px;
  box-sizing: border-box;
  position: relative;
  padding: 15px 20px;

  background-color: ${({ theme, is_search_mode, navbar_theme }) =>
    is_search_mode
      ? navbar_theme === "white"
        ? theme.colors.grayF4
        : theme.colors.gray97
      : "transparent"};
`;

const SearchInputWrapper = styled.div<{
  is_search_mode: boolean;
  navbar_theme: NavBarTheme;
}>`
  background-color: ${({ theme, is_search_mode, navbar_theme }) =>
    is_search_mode
      ? navbar_theme === "white"
        ? theme.colors.grayF4
        : theme.colors.gray97
      : "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ is_search_mode }) =>
    is_search_mode ? "visible" : "hidden"};
`;

const OpenSearchButtonWrapper = styled.div<{ is_search_mode: boolean }>`
  position: absolute;
  top: 15px;
  right: 20px;
  padding-right: 3px;
  padding-top: 3px;
  visibility: ${({ is_search_mode }) =>
    is_search_mode ? "hidden" : "visible"};
`;

const SearchInputText = styled.input<{
  navbar_theme: NavBarTheme;
}>`
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: none;

  font-size: 18px;
  font-weight: 400;
  line-height: 1.56;
  letter-spacing: normal;

  color: ${({ theme, navbar_theme }) =>
    navbar_theme === "black" ? theme.colors.white : theme.colors.black};

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }

  &:-webkit-autofill {
    outline: none;
    background-color: transparent;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayD0};
  }
`;

const PLACE_HOLDER_TEXT = "검색어를 입력해주세요.";

interface Props {
  navBarTheme: NavBarTheme;
}

const NavbarSearchInput = ({ navBarTheme }: Props) => {
  const router = useRouter();
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const textInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsSearchMode(false);
    setSearchText("");
  }, [router?.pathname]);

  useEffect(() => {
    if (isSearchMode) {
      textInputRef?.current?.focus();
    }
  }, [isSearchMode]);

  const navBarStyle: {
    [theme in NavBarTheme]: {
      color: string;
      backgroundColor: string;
      search: JSX.Element;
      close: JSX.Element;
    };
  } = {
    gray: {
      color: theme.colors.black,
      backgroundColor: theme.colors.white,
      search: <SvgIconSearchBlack />,
      close: <SvgIconClose />,
    },
    white: {
      color: theme.colors.black,
      backgroundColor: theme.colors.white,
      search: <SvgIconSearchBlack />,
      close: <SvgIconClose />,
    },
    black: {
      color: theme.colors.white,
      backgroundColor: "transparent",
      search: <SvgIconSearchWhite />,
      close: <SvgIconClose />,
    },
  };

  const navigateSearchPage = () => {
    if (searchText.length === 0) return;
    router.push(`/search?q=${searchText}`);
  };

  const handleSearchClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigateSearchPage();
  };

  return (
    <Container is_search_mode={isSearchMode} navbar_theme={navBarTheme}>
      <SearchInputWrapper
        data-testid={"search-input-wrapper"}
        is_search_mode={isSearchMode}
        navbar_theme={navBarTheme}
      >
        <SearchInputText
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={PLACE_HOLDER_TEXT}
          navbar_theme={navBarTheme}
          data-testid={"search-input"}
          ref={textInputRef}
          onKeyPress={(e) => {
            if (e.key === "Enter") navigateSearchPage();
          }}
        />

        <SearchButton
          className={navBarTheme === "black" ? "black-theme" : "white-theme"}
          onClick={handleSearchClick}
        >
          {navBarStyle[navBarTheme].search}
        </SearchButton>

        <CloseButton
          className={navBarTheme === "black" ? "black-theme" : "white-theme"}
          onClick={() => {
            setIsSearchMode(false);
            setSearchText("");
          }}
        >
          {navBarStyle[navBarTheme].close}
        </CloseButton>
      </SearchInputWrapper>

      <OpenSearchButtonWrapper is_search_mode={isSearchMode}>
        <SearchButton
          className={navBarTheme === "black" ? "black-theme" : "white-theme"}
          onClick={() => {
            setIsSearchMode(true);
          }}
          data-testid={"open-search-input-button"}
        >
          {navBarStyle[navBarTheme].search}
        </SearchButton>
      </OpenSearchButtonWrapper>
    </Container>
  );
};

export default NavbarSearchInput;
