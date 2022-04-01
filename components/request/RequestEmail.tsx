import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Button from "../elements/Button";
import Text from "../elements/Text";
import InnerContainerBase from "../layout/InnerContainerBase";
import { theme } from "../../styles/theme";
import useScrollToTop from "../../hooks/useScrollToTop";

const InnerContainer = styled(InnerContainerBase)``;
const Container = styled.div`
  margin: auto;
  width: 671px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div``;
const Email = styled(Text)`
  text-decoration: underline;
  margin-top: 94px;
  margin-bottom: 94px;
`;
const StyledButton = styled(Button)`
  width: 340px;
  height: 72px;
`;

const RequestEmail = () => {
  useScrollToTop();

  const router = useRouter();
  const onPress = () => {
    router.push("/");
  };

  return (
    <InnerContainer>
      <Container>
        <TextContainer>
          <Text type={"copy"} scale={"1"}>
            {`퍼즐에 관심을 가져주셔서 감사합니다.\n아래 이메일로 요청 사항을 보내주시면 빠른 시일 내 답변드리겠습니다.`}
          </Text>
          <Text type={"copy"} scale={"5"}>
            {`* 개인은 신청할 수 없으며, 법인만 신청 가능합니다.`}
          </Text>
        </TextContainer>
        <Email type="copy" scale="1" color={theme.colors.point6A}>
          <a href="mailto:data-puzzle@sk.com">{`data-puzzle@sk.com`}</a>
        </Email>
        <StyledButton
          size={"l"}
          color={"blue"}
          text={"메인페이지로 돌아가기"}
          onPress={onPress}
        />
      </Container>
    </InnerContainer>
  );
};

export default RequestEmail;
