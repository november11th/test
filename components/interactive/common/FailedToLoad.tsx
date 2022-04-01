import styled from "@emotion/styled";
import SvgFailedToLoad from "../../../public/assets/images/common/failed-to-load.svg";
import Text from "../../elements/Text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
  margin-bottom: 60px;

  & > p {
    margin-top: 60px;
    text-align: center;
  }
`;

interface Props {
  text: string;
  className?: string;
}
const FailedToLoad = ({ text, className }: Props) => {
  return (
    <Container className={className}>
      <SvgFailedToLoad />
      <Text type={"copy"} scale={"4"}>
        {text}
      </Text>
    </Container>
  );
};

FailedToLoad.defaultProps = {
  text: `일시적인 장애로 데이터 호출에 실패하였습니다.\n잠시 후 다시 시도해 주세요.`,
};
export default FailedToLoad;
