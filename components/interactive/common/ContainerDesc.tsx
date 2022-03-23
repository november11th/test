import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Text from "../../elements/Text";

const Container = styled.div`
  margin-bottom: 40px;
`;

interface Props {
  text: string;
}
const ContainerDesc = ({ text }: Props) => {
  const [text_, setText_] = useState<string>("");

  useEffect(() => {
    setText_(text);
  }, [text]);

  return (
    <Container>
      <Text type={"copy"} scale={"6"}>
        {text_}
      </Text>
    </Container>
  );
};

export default ContainerDesc;
