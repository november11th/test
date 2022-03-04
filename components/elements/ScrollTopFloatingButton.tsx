import React, { useEffect, useState } from "react";
import SvgButtonArrow from "../../assets/images/common/btn-large-arrow.svg";
import styled from "@emotion/styled";

const FloatingButton = styled.div`
  background-color: white;
  cursor: pointer;
  width: 48px;
  height: 48px;
  position: fixed;
  bottom: 48px;
  right: 68px;
  z-index: 100;

  box-shadow: rgb(2 32 71 / 5%) 0px 4px 8px, rgb(0 27 55 / 10%) 0px 8px 16px;
  border-radius: 8px;

  transition: transform 0.5s ease;
  &.visible {
    transform: translateY(0px);
  }

  &.hidden {
    transform: translateY(300px);
  }

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    transform: rotate(270deg);
  }
`;

const ScrollTopFloatingButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = (e: any) => {
    const { top } = document.body.getBoundingClientRect();
    if (top * -1 > window.innerHeight) setVisible(true);
    else setVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <FloatingButton
      onClick={handleScrollTop}
      className={visible ? "visible" : "hidden"}
    >
      <SvgButtonArrow />
    </FloatingButton>
  );
};

export default ScrollTopFloatingButton;
