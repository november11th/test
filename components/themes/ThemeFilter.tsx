import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styled from "@emotion/styled";
import ThemeButton from "./ThemeButton";
import ArrowIcon from "../../assets/images/common/btn-arrow.svg";

const Container = styled.div`
  display: flex;
`;

const SwiperWrapper = styled(Swiper)`
  width: 100%;
`;

const SwiperButton = styled.div`
  &.next-button,
  &.prev-button {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 32px;
      height: 32px;
      fill: black;
    }
  }

  &.left-arrow {
    transform: rotate(180deg);
  }

  &.swiper-button-disabled {
    opacity: 0.3;
  }
`;

interface Props {
  themeList: string[];
  handleSelect: (theme: string) => void;
}

const ThemeFilter = ({
  themeList = [],
  handleSelect = (theme: string) => {},
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (theme: string, index: number) => {
    handleSelect(theme);
    setSelectedIndex(index);
  };

  return (
    <Container>
      <SwiperButton className={"prev-button left-arrow"}>
        <ArrowIcon />
      </SwiperButton>
      <SwiperWrapper
        spaceBetween={5}
        slidesPerView={8}
        modules={[Navigation]}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
      >
        {themeList.map((theme: any, index) => (
          <SwiperSlide key={index}>
            <ThemeButton
              text={theme}
              selected={index === selectedIndex}
              handleClick={() => handleClick(theme, index)}
            />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
      <SwiperButton className={"next-button"}>
        <ArrowIcon />
      </SwiperButton>
    </Container>
  );
};

export default ThemeFilter;
