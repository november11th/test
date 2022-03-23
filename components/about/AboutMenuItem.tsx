import styled from "@emotion/styled";
import Text from "../elements/Text";
import Button from "../elements/Button";
import { useRouter } from "next/router";
import classNames from "classnames";
import { theme } from "../../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;
const Title = styled(Text)`
  height: 48px;
  &.copy-case6 {
    font-weight: 700;
  }
`;
const Desc = styled(Text)`
  height: 195px;
`;
const StyledButton = styled(Button)`
  width: 180px;
`;
const WeWillOpen = styled.div`
  display: flex;
  position: absolute;
  transform: translateY(-40px);
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pointA5};
  width: 140px;
  height: 30px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

interface Props {}

interface Props {
  title: string;
  desc: string;
  buttonText: string;
  buttonURL: string;
  disabled: boolean;
}
const AboutMenuItem = ({
  title,
  desc,
  buttonText,
  buttonURL,
  disabled,
}: Props) => {
  const router = useRouter();
  const onButtonPress = () => {
    router.push(buttonURL);
  };

  return (
    <Container>
      {disabled && (
        <WeWillOpen>
          <Text type={"copy"} scale={"6"} color={theme.colors.white}>
            곧 오픈 예정
          </Text>
        </WeWillOpen>
      )}

      <Title
        type={"copy"}
        scale={"6"}
        className={classNames({ disabled: disabled })}
      >
        {title}
      </Title>
      <Desc type={"copy"} scale={"6"}>
        {desc}
      </Desc>

      <StyledButton
        size={"s"}
        color={"white"}
        text={buttonText}
        onPress={onButtonPress}
        disabled={disabled}
      />
    </Container>
  );
};

export default AboutMenuItem;
