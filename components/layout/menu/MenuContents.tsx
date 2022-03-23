import React from "react";
import CloseButtonSVG from "../../../assets/images/common/icon-layer_close.svg";
import Link from "next/link";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import TextWithCount from "../../elements/TextWithCount";
import { newSampleInsightList } from "../../../temp_data/insight";
import Text from "../../elements/Text";
import MenuItem from "./MenuItem";
import { theme } from "../../../styles/theme";

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
  overflow-y: auto;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 72px;
`;

const MenuList = styled.div`
  padding-top: 100px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 74px;
  right: 90px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  svg {
    width: 40px;
    height: 40px;
  }
`;

const DataCatalogList = styled.div`
  margin-top: 49px;
`;

const DataCatalogHeaderWrapper = styled.div`
  margin-bottom: 21px;
`;

interface MenuItem {
  url: string;
  title: string;
  count: number;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MenuContents = ({ isOpen, onClose }: Props) => {
  // menuItem, totalInsightCount 시연 및 4월 오픈용 예제
  const menuItem = Object.keys(newSampleInsightList).map((data: string) => ({
    title: data,
    count: newSampleInsightList[data].length,
    url: `/data/${data}`,
  }));

  const totalInsightCount = menuItem.reduce(
    (sum: number, currentItem: MenuItem) => (sum += currentItem.count),
    0
  );

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
          <MenuItem link={"/about"}>
            <Text type={"title"} scale={"5"}>
              서비스 소개
            </Text>
          </MenuItem>
          <MenuItem link={"/insights"}>
            <Text type={"title"} scale={"5"}>
              모든 인사이트 보기
            </Text>
          </MenuItem>
          <DataCatalogList>
            <DataCatalogHeaderWrapper>
              <Text
                type={"copy"}
                scale={"6"}
                color={theme.colors.menuCatalogHeader}
              >
                DATA CATALOG
              </Text>
            </DataCatalogHeaderWrapper>
            {menuItem.map(({ url, title, count }: MenuItem, index) => (
              <MenuItem link={url} key={`${title}-${index}`}>
                <TextWithCount count={count} size={"small"}>
                  {title.replace(/-/g, " ")}
                </TextWithCount>
              </MenuItem>
            ))}
          </DataCatalogList>
        </MenuList>
      </MenuContainer>
    </Menu>
  );
};

export default MenuContents;
