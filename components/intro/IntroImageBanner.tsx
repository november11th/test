import React from "react";
import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageBannerItem from "./ImageBannerItem";
import { Banner } from "../../types/banner";

const Container = styled.div`
  position: relative;
`;

const SwiperContainer = styled(Swiper)`
  position: relative;
`;

const PaginationWrapper = styled.div`
  width: ${({ theme }) => theme.size.pageWidth};
  margin: 0 auto;
  position: relative;
  .pagination {
    &.swiper-pagination.swiper-pagination-bullets {
      text-align: right;
      font-size: 0;
      position: absolute;

      bottom: 35.76px;

      display: flex;
      justify-content: center;

      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        margin: 0 5px;
        background: #8e8e8e;
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  width: ${({ theme }) => theme.size.pageWidth};
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 800px;
`;

const PrevButtonWrapper = styled.div`
  left: 0;
  color: ${({ theme }) => theme.colors.grayD0};
  --swiper-navigation-size: 40px;
`;

const NextButtonWrapper = styled.div`
  color: ${({ theme }) => theme.colors.grayD0};
  right: 0;
  --swiper-navigation-size: 40px;
`;

interface Props {
  bannerList: Banner[];
}

const IntroImageBanner = ({ bannerList }: Props) => {
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
        {bannerList.map(
          (
            { imageUrl, title, description, buttonTitle, link },
            index: number
          ) => (
            <SwiperSlide key={index}>
              <ImageBannerItem
                imageUrl={imageUrl}
                title={title}
                description={description}
                buttonTitle={buttonTitle}
                link={link}
              />
            </SwiperSlide>
          )
        )}

        <PaginationWrapper>
          <div className="swiper-pagination pagination" />
        </PaginationWrapper>
      </SwiperContainer>

      <ButtonWrapper>
        <PrevButtonWrapper className={"swiper-button-prev"} />
        <NextButtonWrapper className={"swiper-button-next"} />
      </ButtonWrapper>
    </Container>
  );
};

export default IntroImageBanner;
