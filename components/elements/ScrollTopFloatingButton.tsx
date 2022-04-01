import React, { useEffect, useState } from "react";

import styled from "@emotion/styled";

const SvgButtonArrow = () => {
  return (
    <svg viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter
          x="-227.1%"
          y="-116.2%"
          width="559.6%"
          height="332.5%"
          filterUnits="objectBoundingBox"
          id="test"
        >
          <feMorphology
            radius=".9"
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feMorphology radius="1" in="SourceAlpha" result="shadowInner" />
          <feOffset in="shadowInner" result="shadowInner" />
          <feComposite
            in="shadowOffsetOuter1"
            in2="shadowInner"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <path id="arrow-path" d="m14 4-7 7 7 7" />
      </defs>
      <g
        transform="rotate(-180 10.5 11)"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="21"
        height="22"
      >
        <use fill="#000" filter="url(#a)" href="#b" />
        <use stroke="#333" strokeWidth="1.8" href="#arrow-path" />
      </g>
    </svg>
  );
};

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
