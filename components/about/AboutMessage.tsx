import styled from "@emotion/styled";
import Text from "../elements/Text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Title = styled(Text)`
  margin-bottom: 33px;
`;
const Desc = styled(Text)`
  margin-bottom: 20px;
`;

interface Props {
  title: string;
  desc: string;
}

const AboutMessage = ({ title, desc }: Props) => {
  return (
    <Container>
      <Title type={"title"} scale={"5"}>
        {title}
      </Title>
      <Desc type={"copy"} scale={"4"}>
        {desc}
      </Desc>
    </Container>
  );
};

export default AboutMessage;
