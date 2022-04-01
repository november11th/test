import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { theme } from "../../../styles/theme";
import Text from "../../elements/Text";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0px 0px 40px 0px;
`;
const Title = styled(Text)`
  margin-bottom: 15px;
`;
const Desc = styled(Text)`
  &.copy-case6 {
    line-height: 1;
  }
`;

interface Props {
  title: string;
  desc: string;
  className?: string;
}
const Meta = ({ title, desc, className }: Props) => {
  const [title_, setTitle_] = useState<string>("");
  const [desc_, setDesc_] = useState<string>("");

  useEffect(() => {
    setTitle_(title);
    setDesc_(desc);
  }, [title, desc]);

  return (
    <TextContainer className={className}>
      <Title type={"copy"} scale={"3"}>
        {title_}
      </Title>
      <Desc type={"copy"} scale={"6"} color={theme.colors.gray8b}>
        {desc_}
      </Desc>
    </TextContainer>
  );
};

export default Meta;
