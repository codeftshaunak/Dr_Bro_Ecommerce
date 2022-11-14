import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/tour-banner-1.jpg";
import banner2 from "../../assets/tour-banner-2.jpg";
import banner3 from "../../assets/tour-banner-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Zoom, Navigation, Pagination, Autoplay } from "swiper";
import styled from "styled-components";

export default function TourBanner() {
  return (
    <Wrapper>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="banner-top">
              <div className="banner-top-text">
                <p className="top-title uppercase text-white">
                  let's travle the world with us
                </p>
                <h1 className="top-main-title text-white uppercase">
                  Explore the world <br /> with dr bro
                </h1>
              </div>
            </div>
            <img src={banner1} alt="banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="banner-top">
              <div className="banner-top-text">
                <p className="top-title uppercase text-white">
                  let's travle the world with us
                </p>
                <h1 className="top-main-title text-white uppercase">
                  Explore the world <br /> with dr bro
                </h1>
              </div>
            </div>
            <img src={banner2} alt="banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="banner-top">
              <div className="banner-top-text">
                <p className="top-title uppercase text-white">
                  let's travle the world with us
                </p>
                <h1 className="top-main-title text-white uppercase">
                  Explore the world <br /> with dr bro
                </h1>
              </div>
            </div>
            <img src={banner3} alt="banner" />
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .swiper-pagination-bullet {
    width: var(
      --swiper-pagination-bullet-width,
      var(--swiper-pagination-bullet-size, 20px)
    );
    height: var(
      --swiper-pagination-bullet-height,
      var(--swiper-pagination-bullet-size, 20px)
    );
    background: var(--swiper-pagination-bullet-inactive-color, #fff);
  }

  .mySwiper {
    width: 100%;
    margin-top: 20px;
    background-color: black;
    img {
      width: 100%;
      height: 600px;
      object-fit: cover;
      opacity: 0.7;
    }
    .swiper-zoom-container {
      position: reletive;
      .banner-top {
        position: absolute;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
      }
    }
  }
`;
