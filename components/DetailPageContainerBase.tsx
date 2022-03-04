import styled from "@emotion/styled";

const DetailPageContainerBase = styled.div`
  margin-top: calc(${({ theme }) => theme.size.navBarHeight} + 60px);

  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 220px;
    position: absolute;
    border-radius: 0;
    top: 0px;
    z-index: -10;
  }

  &::after {
    display: block;
    content: "";
    background-color: rgba(255, 255, 255, 0.2);
    width: 95%;
    height: 500px;
    position: fixed;
    border-radius: 40px;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;

export default DetailPageContainerBase;
