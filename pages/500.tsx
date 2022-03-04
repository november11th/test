import styled from "@emotion/styled";
import InnerContainerBase from "../components/InnerContainerBase";
import ErrorPagePanel from "../components/error/ErrorPagePanel";
import Text from "../components/elements/Text";
import ErrorPageMainButton from "../components/error/ErrorPageMainButton";
import * as ErrorPageStyledComponents from "../components/error/ErrorPageStyledComponents";

const ServerErrorPage = () => {
  return (
    <ErrorPageStyledComponents.Container>
      <ErrorPageStyledComponents.Inside>
        <ErrorPagePanel>
          <ErrorPageStyledComponents.TitleWrapper>
            <Text type={"title"} scale={"3"}>
              죄송합니다.
            </Text>
            <Text type={"title"} scale={"3"}>
              일시적인 오류가 발생했습니다.
            </Text>
          </ErrorPageStyledComponents.TitleWrapper>
          <ErrorPageStyledComponents.DescriptionWrapper>
            <Text type={"copy"} scale={"2"}>
              지금 이 서비스와 연결할 수 없습니다.
            </Text>
            <Text type={"copy"} scale={"2"}>
              문제를 해결하기 위해 열심히 노력하고 있으니 잠시 후 다시
              확인해주세요.
            </Text>
            <Text type={"copy"} scale={"2"}>
              감사합니다.
            </Text>
          </ErrorPageStyledComponents.DescriptionWrapper>
          <ErrorPageStyledComponents.ButtonWrapper>
            <ErrorPageMainButton />
          </ErrorPageStyledComponents.ButtonWrapper>
        </ErrorPagePanel>
      </ErrorPageStyledComponents.Inside>
    </ErrorPageStyledComponents.Container>
  );
};

export default ServerErrorPage;
