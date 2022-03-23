import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: calc(50vh - 48px);
  width: 100%;
  height: 3em;

  white-space: pre-line;
  font-size: 60px;
  font-weight: bold;
  line-height: 88px;
  letter-spacing: -0.4px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0;

  transform: translateY(-50%);
`;

interface Props {
  id: string;
  text: string;
}
const RequestMessage = ({ id, text }: Props) => {
  return (
    <Container className="inner" id={id}>
      {text}
    </Container>
  );
};

export default RequestMessage;
