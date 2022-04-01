import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import MenuModal from "../menu/MenuModal";
import NavbarLogo from "./NavbarLogo";
import ProjectJoinButton from "./ProjectJoinButton";
import { useRouter } from "next/router";
import { useIsOpenMenuState } from "../../../recoil/menuDialog";
import { useNavBarTheme } from "../../../hooks/useNavBarTheme";
import NavbarSearchInput from "./NavbarSearchInput";
import useNavBarStyle from "../../../hooks/useNavBarStyle";

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
  const navBarStyle = useNavBarStyle();
  const router = useRouter();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [router.pathname, router.query, setIsOpenMenu]);

  return (
    <Container backgroundColor={navBarStyle.backgroundColor}>
      <Inside>
        <ColumnLeft>
          <MenuButton onClick={() => setIsOpenMenu(true)}>
            {navBarStyle.menu}
          </MenuButton>
          <Link href={"/request"} passHref>
            <ProjectJoinButton className={`theme--${navBarTheme}`}>
              데이터 요청하기
            </ProjectJoinButton>
          </Link>
        </ColumnLeft>
        <ColumnCenter>
          <Link href={"/"} passHref>
            <NavbarLogo>{navBarStyle.logo}</NavbarLogo>
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
