import styled from "@emotion/styled";

const ErrorPageButton = styled.div`
  width: 170px;
  height: 52px;
  padding: 12px 50px 12px 50px;
  box-sizing: border-box;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.colors.gray6e};
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayEa};
  }
`;

export default ErrorPageButton;
