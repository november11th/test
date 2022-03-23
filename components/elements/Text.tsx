import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const P = styled.p<{ color: string }>`
  white-space: pre-line;
  color: ${(props) => props.color};
  vertical-align: center;
  margin: 0;

  /* Title */
  &.title-case1 {
    font-size: 200px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: normal;
  }
  &.title-case2 {
    font-size: 72px;
    font-weight: 700;
    line-height: 1.19;
    letter-spacing: normal;
  }
  &.title-case3 {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -0.4px;
  }
  &.title-case4 {
    font-size: 34px;
    font-weight: 700;
    line-height: 1.32;
    letter-spacing: -0.4px;
  }
  &.title-case5 {
    font-size: 28px;
    font-weight: 700;
    line-height: 1.36;
    letter-spacing: -0.4px;
  }
  &.title-case6 {
    font-size: 26px;
    font-weight: 700;
    line-height: 2.15;
    letter-spacing: -0.4px;
  }

  /* copy */
  &.copy-case1 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.33;
    letter-spacing: normal;
  }
  &.copy-case2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: normal;
  }
  &.copy-case3 {
    font-size: 22px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: normal;
  }
  &.copy-case4 {
    font-size: 22px;
    font-weight: 400;
    line-height: 1.64;
    letter-spacing: normal;
  }
  &.copy-case5 {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: normal;
  }
  &.copy-case6 {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.56;
    letter-spacing: normal;
  }
  &.copy-case7 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: normal;
  }
  &.copy-case8 {
    font-size: 12px;
    font-weight: 300;
    line-height: 2;
    letter-spacing: normal;
  }
`;

interface Props {
  children?: any;
  type: "title" | "copy";
  scale: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  color: string;
  className?: string;
  testId?: string;
}

const Text = ({
  children,
  type,
  scale,
  color,
  className,
  testId = "",
}: Props) => {
  return (
    <P
      className={`${type}-case${scale} ${className}`}
      color={color}
      data-testid={testId}
    >
      {children}
    </P>
  );
};

Text.defaultProps = {
  color: theme.colors.black,
};
export default Text;
