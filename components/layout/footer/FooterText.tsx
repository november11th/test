import styled from "@emotion/styled";

const FooterText = styled.span`
  position: relative;
  display: inline-block;
  margin-right: 25px;
  margin-bottom: 7px;
  text-decoration: none;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    right: -12px;
    width: 1px;
    height: 18px;
    transform: translateY(-50%);
    background-color: #d0d3d7;
  }
  &:last-of-type {
    margin-right: 0;
    padding-right: 0;
    &:after {
      display: none;
    }
  }
`;

export default FooterText;
