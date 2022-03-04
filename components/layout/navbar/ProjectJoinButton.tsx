import styled from "@emotion/styled";

const ProjectJoinButton = styled.a`
  display: inline-block;
  position: relative;
  top: -2px;

  margin-left: 24px;
  padding: 7px 18px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.grayEa};
  font-size: 17.6px;
  font-weight: 600;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.black};
  vertical-align: top;
  white-space: nowrap;
  cursor: pointer;
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  &.theme--white {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.grayEa};
    &:hover {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &.theme--black {
    color: ${({ theme }) => theme.colors.white};
    background-color: rgba(234, 237, 240, 0.2);
    &:hover {
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.grayEa};
    }
  }
`;

export default ProjectJoinButton;
