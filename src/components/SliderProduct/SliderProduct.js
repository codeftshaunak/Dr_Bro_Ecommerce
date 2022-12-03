import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SliderProduct = ({ imgs = [{ url: "" }] }) => {
  return (
    <Wrapper className="container">
      <Swiper
        breakpoints={{
          1500: {
            slidesPerView: 1,
          },
          922: {
            slidesPerView: 1,
          },
          728: {
            slidesPerView: 1,
          },
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imgs?.map((product) => {
          console.log(product.url);
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
    height: 100%;
    object-fit: cover;
  }
  .tour__card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tour__icons.flex {
    margin-top: 10px;
  }

  figure {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 467px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      img {
        transform: scale(1.25);
      }
      figcaption {
        bottom: 0;
      }
    }

    .tour__num {
      position: absolute;
      top: 50px;
      left: 20px;
      margin: 0;
      padding: 5px;
      color: white;
      font-size: 15px;
      font-weight: 400;
      line-height: 1;
      background-color: #089dbd;
    }
    img {
      height: 100%;
      transition: 0.25s;
    }
    figcaption {
      position: absolute;
      bottom: -21%;
      left: 0;
      width: 100%;
      //height: 50%;
      margin: 0;
      padding: 30px;
      background-color: rgba(black, 0.85);
      box-shadow: 0 0 20px rgba(black, 0.4);
      color: white;
      line-height: 1;
      transition: 0.25s;
      h3 {
        margin: 0 0 20px;
        padding: 0;
      }
      p {
        font-size: 14px;
        line-height: 1.75;
      }
      button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0 0;
        padding: 10px 30px;
        background-color: #000;
        border: none;
        border-radius: 5px;
        color: rgb(110, 193, 228);
        font-size: 12px;
      }
    }
  }
`;

export default SliderProduct;
