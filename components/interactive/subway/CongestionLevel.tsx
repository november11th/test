import styled from "@emotion/styled";
import SvgCongestionLevel1 from "../../../assets/images/congestion-level-1.svg";
import SvgCongestionLevel2 from "../../../assets/images/congestion-level-2.svg";
import SvgCongestionLevel3 from "../../../assets/images/congestion-level-3.svg";
import SvgCongestionLevel4 from "../../../assets/images/congestion-level-4.svg";

const Container = styled.div`
  display: flex;
  align-items: stretch;
`;
const Bar = styled.div`
  width: 45px;
  height: 4px;

  &.congestion-level-1 {
    background-color: ${({ theme }) => theme.colors.congestionLevel1};
  }
  &.congestion-level-2 {
    background-color: ${({ theme }) => theme.colors.congestionLevel2};
  }
  &.congestion-level-3 {
    background-color: ${({ theme }) => theme.colors.congestionLevel3};
  }
  &.congestion-level-4 {
    background-color: ${({ theme }) => theme.colors.congestionLevel4};
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  className?: string;
}
const CongestionLevel = ({ className }: Props) => {
  return (
    <Container className={className}>
      {/* congestion-level-1 */}
      <Div>
        <Bar className={"congestion-level-1"} />
        <SvgContainer>
          <SvgCongestionLevel1 />
        </SvgContainer>
      </Div>
      {/* congestion-level-2 */}
      <Div>
        <Bar className={"congestion-level-2"} />
        <SvgContainer>
          <SvgCongestionLevel2 />
        </SvgContainer>
      </Div>
      {/* congestion-level-3 */}
      <Div>
        <Bar className={"congestion-level-3"} />
        <SvgContainer>
          <SvgCongestionLevel3 />
        </SvgContainer>
      </Div>
      {/* congestion-level-4 */}
      <Div>
        <Bar className={"congestion-level-4"} />
        <SvgContainer>
          <SvgCongestionLevel4 />
        </SvgContainer>
      </Div>
    </Container>
  );
};

CongestionLevel.defaultProps = {};
export default CongestionLevel;
