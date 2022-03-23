import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";
import Text from "../../elements/Text";

const Container = styled.div<{ bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  padding: 0px 4px 0px 4px;
  margin: 0px 4px 0px 0px;
  border-radius: 3px;
  background-color: ${(props) => props.bgColor};
`;

interface Props {
  type: "text" | "ranking";
  text?: string;
  ranking?: number;
  color?: string;
}
const MapInfoTag = ({ type, text, ranking, color }: Props) => {
  const msg = type === "ranking" ? `${ranking}위` : `${text}`;
  const bgColor = color ?? theme.colors.point8C;

  return (
    <Container bgColor={bgColor}>
      <Text type={"copy"} scale={"7"} color={theme.colors.white}>
        {msg}
      </Text>
    </Container>
  );
};
export default MapInfoTag;
