import styled from "@emotion/styled";

const A = styled.a`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.chart0C};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-decoration: underline;
`;

interface Props {
  href?: string;
  className?: string;
}
const Footnote = ({ href, className }: Props) => {
  return (
    <A href={href} className={className}>
      데이터 상세 확인
    </A>
  );
};

Footnote.defaultProps = {};
export default Footnote;
