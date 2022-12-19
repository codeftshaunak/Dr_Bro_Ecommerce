import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import styled from "styled-components";

const DescriptionImage = ({ imgs = [{ url: "" }] }) => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imgs?.map((product) => {
          return (
            <SwiperSlide>
              <div className="tour__card py-5 mb-10">
                <figure class="image-block">
                  <img src={product.url} alt="" />
                </figure>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .swiper-slide {
    width: 30%;
  }

  .swiper-slide:nth-child(2n) {
    width: 40%;
  }

  .swiper-slide:nth-child(3n) {
    width: 20%;
  }
  .swiper-slide:nth-child(3n) {
    width: 30%;
  }
`;

export default DescriptionImage;
