import styled from "@emotion/styled";
import Text from "../../elements/Text";
import { theme } from "../../../styles/theme";

export const Partner = styled.div`
  display: inline-block;
  margin: 20px 0 0 0;
  padding: 8px 20px 8px 20px;
  border-radius: 20px;

  &.type-DATA {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
  &.type-INSIGHT {
    border: 1px solid #333333;
    backdrop-filter: blur(135.914px);
  }
`;

interface Props {
  partner: string;
  type?: "DATA" | "INSIGHT";
}
const ProjectWith = ({ partner, type }: Props) => {
  const textColor = type === "DATA" ? theme.colors.white : theme.colors.gray33;

  return (
    <Partner className={`type-${type}`}>
      <Text type={"copy"} scale={"7"} color={textColor}>
        {`PROJECT WITH ${partner}`}
      </Text>
    </Partner>
  );
};

export default ProjectWith;
