import React from "react";
import CloseButtonSVG from "../../../assets/images/common/icon-layer_close.svg";
import Link from "next/link";
import MenuStatus from "./MenuStatus";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Menu = styled(motion.div)`
  width: 640px;
  height: 100vh;
  opacity: 1;
  z-index: 101;
  background-color: white;
  border-radius: 0 20px 20px 0;
  position: absolute;
  left: -640px;
  pointer-events: auto;
`;

const MenuContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 64px 72px;
`;

const MenuList = styled.div`
  padding: 130px 0 0;
`;

const MenuItem = styled.div`
  margin-top: 32px;
  &:last-child {
    margin-top: 120px;
  }
`;

const MenuItemText = styled.a`
  display: block;
  font-size: 40px;
  font-weight: bold;
  line-height: 56px;
  letter-spacing: -0.4px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.grayAf};
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 64px;
  right: 80px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  svg {
    width: 40px;
    height: 40px;
  }
`;

interface MenuItem {
  url: string;
  title: string;
  statusTitle?: string;
}

const MENU_ITEM_DATA: MenuItem[] = [
  {
    url: "about",
    title: "서비스 소개",
  },
  {
    url: "insights",
    title: "모든 상품",
  },
  {
    url: "themes",
    title: "테마별 인사이트",
  },
  {
    url: "request",
    title: "데이터 요청하기",
    statusTitle: "진행중",
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MenuContents = ({ isOpen, onClose }: Props) => {
  return (
    <Menu
      animate={{ x: isOpen ? 640 : -640 }}
      transition={{ duration: isOpen ? 0.3 : 0.5 }}
    >
      <MenuContainer>
        <CloseButton onClick={onClose}>
          <CloseButtonSVG />
        </CloseButton>
        <MenuList>
          {MENU_ITEM_DATA.map(
            ({ url, title, statusTitle }: MenuItem, index) => (
              <MenuItem key={`${title}-${index}`}>
                {statusTitle && <MenuStatus>{statusTitle}</MenuStatus>}
                <Link href={`/${url}`} passHref>
                  <MenuItemText>{title}</MenuItemText>
                </Link>
              </MenuItem>
            )
          )}
        </MenuList>
      </MenuContainer>
    </Menu>
  );
};

export default MenuContents;
