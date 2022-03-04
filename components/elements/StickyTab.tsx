import styled from "@emotion/styled";
import classNames from "classnames";
import Text from "../../components/elements/Text";
import { theme } from "../../styles/theme";
import { copyCurrentURL } from "../../utils/common";

const Tab = styled.div`
  position: sticky;
  top: 96px;
  padding-top: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100;
  display: flex;
  justify-content: space-between;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grayD0};
  }

  &.noUnderline {
    &::before {
      opacity: 0;
    }
  }
`;
const Div = styled.div``;
const TabAnchor = styled.button`
  color: ${({ theme }) => theme.colors.grayAf};
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: inline-block;
  padding-bottom: 13px;
  background: transparent;
  border: 0;
  appearance: none;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s cubic-bezier(0.45, 0, 0.55, 1);

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.45, 0, 0.55, 1);
  }

  &.isActive {
    pointer-events: none;
    &::after {
      opacity: 1;
    }
  }

  &.noUnderline {
    &:first-of-type {
      padding-left: 0;
    }
    &::after {
      opacity: 0;
    }
  }

  & + & {
    margin-left: 40px;
  }
`;
const Share = styled.button`
  border: 0px;
  background-color: transparent;
  cursor: pointer;

  &:active {
    opacity: 0.3;
  }
`;

interface Props {
  tabList: string[];
  tabIndex: number;
  setTabIndex: Function;
  hasShare?: boolean;
  hasUnderline?: boolean; //false인 경우 하단의 회색 라인 없음
}

const StickyTab = ({
  tabList,
  tabIndex,
  setTabIndex,
  hasShare,
  hasUnderline,
}: Props) => {
  return (
    <Tab className={classNames({ noUnderline: !hasUnderline })}>
      <Div>
        {tabList.map((item, i) => {
          return (
            <TabAnchor
              key={i}
              className={classNames({
                isActive: tabIndex === i,
                noUnderline: !hasUnderline,
              })}
              onClick={() => setTabIndex(i)}
            >
              <Text
                type={"copy"}
                scale={"1"}
                color={
                  tabIndex === i ? theme.colors.black : theme.colors.grayAf
                }
              >
                {item}
              </Text>
            </TabAnchor>
          );
        })}
      </Div>
      {hasShare && (
        <Share onClick={() => copyCurrentURL()}>
          <Text type={"copy"} scale={"7"}>
            공유하기
          </Text>
        </Share>
      )}
    </Tab>
  );
};

StickyTab.defaultProps = {
  tabList: [],
  tabIndex: 0,
  setTabIndex: () => {},
  hasShare: false,
  hasUnderline: true,
};

export default StickyTab;
