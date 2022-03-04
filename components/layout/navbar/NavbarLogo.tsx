import styled from "@emotion/styled";

const NavbarLogo = styled.span`
  position: absolute;
  display: inline-block;
  left: 50%;
  transform: translate(-50%, 0%);
  cursor: pointer;

  & > svg {
    height: 36px;
  }
`;

export default NavbarLogo;
