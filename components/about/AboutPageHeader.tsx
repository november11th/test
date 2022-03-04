import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Button from "../elements/Button";
import { ButtonProps } from "../elements/Button";
import Text from "../elements/Text";
import PageHeader from "../PageHeader";

const Container = styled(PageHeader)`
  padding-top: 166px;
  padding-bottom: 53px;
  height: 600px; /* 600px로 디자인 가이드에 명시 */
`;
const StyledButton = styled(Button)<ButtonProps>`
  width: 170px;
  height: 52px;
`;
const Div = styled.div`
  margin-top: 40px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AboutPageHeader = () => {
  const router = useRouter();
  const onPress = () => {
    // router.push("/");
  };

  return (
    <Container>
      <Text type="title" scale="3">
        {`퍼즐은\n데이터로 보여줄 수 있는 다양한 인사이트를 제공하고\n직접 체험할 수 있는 SK텔레콤의 데이터 서비스입니다.`}
      </Text>
      <Div>
        <Text type="copy" scale="4">
          {`어렵게만 느껴지던 데이터를 여러분들의 생활에서 느낄 수 있는 형태로 가공하여,\n각 사용자에게 맞게 유용한 정보를 제공합니다.`}
        </Text>
        <StyledButton
          size={"m"}
          color={"white"}
          text={"데이터 보러가기"}
          onPress={onPress}
        />
      </Div>
    </Container>
  );
};

export default AboutPageHeader;
