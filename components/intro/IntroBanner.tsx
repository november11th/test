import React from "react";
import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import IntroBannerItem from "./IntroBannerItem";
import { Banner } from "../../types/banner";

const Container = styled.div`
  position: relative;
`;

const SwiperContainer = styled(Swiper)`
  position: relative;
  height: 809px;

  .pagination {
    &.swiper-pagination.swiper-pagination-bullets {
      text-align: right;
      font-size: 0;
      bottom: 0px;
      right: 0px;

      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        margin: 0 5px;
        background: #8e8e8e;
      }
    }
  }
`;

const PrevButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-75px, -50%);
  color: ${({ theme }) => theme.colors.grayD0};

  --swiper-navigation-size: 60px;
`;

const NextButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(75px, -50%);
  color: ${({ theme }) => theme.colors.grayD0};

  --swiper-navigation-size: 60px;
`;

interface Props {
  bannerList: Banner[];
}

const IntroBanner = ({ bannerList }: Props) => {
  return (
    <Container>
      <SwiperContainer
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true, el: ".pagination" }}
      >
        {bannerList.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <IntroBannerItem
              category={item.category}
              title={item.title}
              description={item.description}
              buttonTitle={item.buttonTitle}
              link={item.link}
              imageUrl={item.imageUrl}
              bannerIndex={index}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination pagination" />
      </SwiperContainer>

      <PrevButtonWrapper className={"swiper-button-prev"} />
      <NextButtonWrapper className={"swiper-button-next"} />
    </Container>
  );
};

export default IntroBanner;
