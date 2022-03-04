import styled from "@emotion/styled";
import classNames from "classnames";

const Tab = styled.div`
  width: max-content;
  position: fixed;
  overflow: hidden;
  z-index: 998;
  left: 50%;
  border-radius: 100px;
  transform: translate(-50%, 0);
  bottom: 48px;
  box-shadow: 0 2px 10px 5px rgba(0, 0, 0, 0.06);
  background: ${({ theme }) => theme.colors.white};

  /* 1280px 아래에서는 사라짐 */
  @media (max-width: 1280px) {
    display: none;
  }
`;
const TabAnchor = styled.button`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: 0px;
  border-radius: 0px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
  margin: 10px;
  padding: 16px 30px;

  &.isActive {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
    border-radius: 100px;
  }
`;

interface Props {
  tabIndex: number;
  setTabIndex: Function;
}

const RequestFloatingTab = ({ tabIndex, setTabIndex }: Props) => {
  const tabList = ["소개", "프로젝트 리스트", "요청하기"];
  return (
    <Tab>
      {tabList.map((item, i) => {
        return (
          <TabAnchor
            key={i}
            className={classNames({ isActive: tabIndex === i })}
            onClick={() => setTabIndex(i)}
          >
            {item}
          </TabAnchor>
        );
      })}
    </Tab>
  );
};

export default RequestFloatingTab;
