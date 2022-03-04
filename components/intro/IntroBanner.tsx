import React, { useEffect } from "react";
import styled from "@emotion/styled";
import IntroBannerItem from "./IntroBannerItem";
import { Banner } from "../../types/banner";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Inside = styled.div`
  width: 97%;
`;

const SwiperContainer = styled(Swiper)`
  border-radius: 18px;
  cursor: pointer;

  .pagination {
    &.swiper-pagination.swiper-pagination-bullets {
      text-align: right;
      font-size: 0;
      bottom: 40px;
      left: auto;
      right: 33px;

      .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        margin: 0 7px;
        background: white;
      }
    }
  }
`;

interface Props {
  bannerList: Banner[];
}

const IntroBanner = ({ bannerList }: Props) => {
  return (
    <Container>
      <Inside>
        <SwiperContainer
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true, el: ".pagination" }}
        >
          {bannerList.map(({ src, link, title, category }, index) => (
            <SwiperSlide key={`${index}-${title}`}>
              <IntroBannerItem
                src={src}
                title={title}
                link={link}
                category={category}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination pagination" />
        </SwiperContainer>
      </Inside>
    </Container>
  );
};

export default IntroBanner;
