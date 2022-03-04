import styled from "@emotion/styled";
import classNames from "classnames";

const Container = styled.li`
  display: block;
  margin-top: 42px;
  margin-bottom: 40px;
  margin-left: 16px;
`;
const TitleContainer = styled.div`
  display: flex;
`;
const TitleNo = styled.div`
  width: 40px;
  height: 40px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  margin-right: 20px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  background: ${({ theme }) => theme.colors.grayEa};
  color: ${({ theme }) => theme.colors.grayAf};
  opacity: 0.3;

  &.isActive {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 1;
  }
`;
const Title = styled.div`
  font-weight: bold;
  margin-left: 64px;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.4px;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.3;

  &.isActive {
    color: ${({ theme }) => theme.colors.white};
    opacity: 1;
  }
`;
const Desc = styled.p`
  white-space: pre-line;
  font-size: 20px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.white};
  margin-left: 64px;
  margin-top: 8px;
  overflow: hidden;
  opacity: 0;
  transition: none;
  max-height: 0;

  &.isActive {
    transition: opacity 0.5s, max-height 0.5s 0.3s;
    opacity: 0.8;
    max-height: 3em;
  }
`;

interface Props {
  no: number;
  title: string;
  desc: string;
  isActive: boolean;
}
const RequestProcedureStep = ({ no, title, desc, isActive }: Props) => {
  return (
    <Container>
      <TitleContainer>
        <TitleNo className={classNames({ isActive: isActive })}>{no}</TitleNo>
        <Title className={classNames({ isActive: isActive })}>{title}</Title>
      </TitleContainer>
      <Desc className={classNames({ isActive: isActive })}>{desc}</Desc>
    </Container>
  );
};

export default RequestProcedureStep;
