import styled from "@emotion/styled";
import classNames from "classnames";

const Container = styled.button`
  display: inline-block;
  flex: none;
  width: 100%;
  max-width: 100%;
  appearance: none;
  cursor: pointer;

  text-align: center;
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};

  background-color: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  transition: background-color 0.1s cubic-bezier(0.45, 0, 0.55, 1);

  /* size */
  &.size--s {
    padding: 5px 30px;
    font-size: 16px;
    line-height: 24px;
  }

  &.size--m {
    padding: 9px 23px;
    font-size: 18px;
    line-height: 24px;
  }

  &.size--l {
    padding: 11px 23px;
    font-size: 20px;
    line-height: 28px;
  }

  /* color */
  &.color--blue {
    position: relative;
    background-color: ${({ theme }) => theme.colors.point6A};
    border-color: ${({ theme }) => theme.colors.point6A};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      background-color: #096fcc;
    }
  }

  &.color--black {
    background-color: ${({ theme }) => theme.colors.black};
    border-color: ${({ theme }) => theme.colors.gray6e};
    color: ${({ theme }) => theme.colors.white};
  }

  &.color--gray {
    background-color: ${({ theme }) => theme.colors.grayEa};
    border-color: ${({ theme }) => theme.colors.grayEa};
    color: ${({ theme }) => theme.colors.black};
    &:hover {
      background-color: #bbbdc0;
    }
  }

  &.color--white {
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.gray6e};
    color: ${({ theme }) => theme.colors.gray6e};
    &:hover {
      background-color: ${({ theme }) => theme.colors.grayEa};
    }
  }

  /* disabled */
  &.is--disabled {
    cursor: default;
    pointer-events: none;
    color: ${({ theme }) => theme.colors.grayAf} !important;
    border-color: ${({ theme }) => theme.colors.grayAf} !important;
  }
`;
const Text = styled.p`
  display: inline;
  padding: 0;
  /* background: none; */
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  border: 0;
  &:hover,
  &:focus {
    background-color: inherit;
  }
`;

export interface ButtonProps {
  size: "s" | "m" | "l";
  color: "black" | "gray" | "white" | "blue";
  text: string;
  onPress?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  size,
  color,
  text,
  onPress,
  className,
  disabled,
}: ButtonProps) => {
  return (
    <Container
      className={classNames([
        `size--${size} color--${color} ${className}`,
        {
          "is--disabled": disabled,
        },
      ])}
      onClick={onPress}
    >
      <Text>{text}</Text>
    </Container>
  );
};

Button.displayName = "Button";

export default Button;
