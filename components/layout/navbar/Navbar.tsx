import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import MenuModal from "../menu/MenuModal";
import NavbarLogo from "./NavbarLogo";
import ProjectJoinButton from "./ProjectJoinButton";
import { useRouter } from "next/router";
import { useIsOpenMenuState } from "../../../recoil/menuDialog";
import { theme } from "../../../styles/theme";
import SvgIconMenuBlack from "../../../assets/images/layout/gnb-icon-menu-black.svg";
import SvgIconMenuWhite from "../../../assets/images/layout/gnb-icon-menu-white.svg";
import SvgIconLogoBlack from "../../../assets/images/layout/gnb-logo-black.svg";
import SvgIconLogoWhite from "../../../assets/images/layout/gnb-logo-white.svg";
import SvgIconSearchBlack from "../../../assets/images/layout/gnb-icon-search-black.svg";
import SvgIconSearchWhite from "../../../assets/images/layout/gnb-icon-search-white.svg";
import { useNavBarTheme } from "../../../hooks/useNavBarTheme";
import NavbarSearchInput from "./NavbarSearchInput";

const Container = styled.header<{ backgroundColor: string }>`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  min-width: ${({ theme }) => theme.size.pageWidth};
  background-color: ${(props) => props.backgroundColor};
`;

const Inside = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  font-size: 0;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: ${({ theme }) => theme.size.layoutXPadding};
  padding-right: ${({ theme }) => theme.size.layoutXPadding};
`;

const ColumnLeft = styled.div`
  position: relative;
  justify-content: center;
  svg {
    height: 32px;
  }
`;

const ColumnCenter = styled.div`
  text-align: center;
`;

const ColumnRight = styled.div`
  position: absolute;
  top: 22px;
  right: ${({ theme }) => theme.size.layoutXPadding};
`;

const MenuButton = styled.span`
  position: relative;
  cursor: pointer;
`;

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useIsOpenMenuState();
  const [navBarTheme] = useNavBarTheme();
  const router = useRouter();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [router.pathname, router.query, setIsOpenMenu]);

  const navBarStyle = () => {
    switch (navBarTheme) {
      case "white":
        return {
          color: theme.colors.black,
          backgroundColor: theme.colors.white,
          menu: <SvgIconMenuBlack />,
          logo: <SvgIconLogoBlack />,
          search: <SvgIconSearchBlack />,
        };
      case "black":
        return {
          color: theme.colors.white,
          backgroundColor: "transparent",
          menu: <SvgIconMenuWhite />,
          logo: <SvgIconLogoWhite />,
          search: <SvgIconSearchWhite />,
        };
      default:
        return {
          color: theme.colors.black,
          backgroundColor: theme.colors.white,
        };
    }
  };

  return (
    <Container backgroundColor={navBarStyle().backgroundColor}>
      <Inside>
        <ColumnLeft>
          <MenuButton onClick={() => setIsOpenMenu(true)}>
            {navBarStyle().menu}
          </MenuButton>
          <Link href={"/request"} passHref>
            <ProjectJoinButton className={`theme--${navBarTheme}`}>
              데이터 요청하기
            </ProjectJoinButton>
          </Link>
        </ColumnLeft>
        <ColumnCenter>
          <Link href={"/"} passHref>
            <NavbarLogo>{navBarStyle().logo}</NavbarLogo>
          </Link>
        </ColumnCenter>
        <ColumnRight>
          <NavbarSearchInput navBarTheme={navBarTheme} />
        </ColumnRight>
      </Inside>

      <MenuModal isOpen={isOpenMenu} onClose={() => setIsOpenMenu(false)} />
    </Container>
  );
};

export default Navbar;
