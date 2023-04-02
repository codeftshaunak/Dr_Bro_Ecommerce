import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import Titles from "./Titles";
import Button from "../Button/Button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";
import axios from "axios";

const PopularDestination = () => {
  const popularTourData = [
    {
      id: 1,
      package_titile: "Dubai",
      package_num: "8 Tours",
      Package_thumble:
        "https://webredox.net/demo/wp/travol/wp-content/uploads/2022/08/dubai1.jpg",
    },
    {
      id: 1,
      package_titile: "Grecee",
      package_num: "8 Tours",
      Package_thumble:
        "https://webredox.net/demo/wp/travol/wp-content/uploads/2022/08/greece1.jpg",
    },
    {
      id: 3,
      package_titile: "France",
      package_num: "8 Tours",
      Package_thumble:
        "https://i.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ",
    },
    {
      id: 4,
      package_titile: "Italy",
      package_num: "7 Tours",
      Package_thumble:
        "https://i.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8",
    },
    {
      id: 5,
      package_titile: "Maldivs",
      package_num: "6 Tours",
      Package_thumble:
        "https://i.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s",
    },
  ];

  const [tour, setTour] = useState([]);
  const API = "http://13.234.77.93:8000/tours/";

  const getTours = async (api) => {
    const res = await axios.get(api);
    const data = res.data.data;
    setTour(data);
  }

  useEffect(() => {
    getTours(API);
  }, [])

  return (
    <Wrapper className="container pb-36">
      <Titles
        toursubtitle="TOP DESTINATION"
        tourtitlestart="Popular"
        tourspan="Destination"
      />

      <Swiper
        breakpoints={{
          1500: {
            slidesPerView: 3,
          },
          922: {
            slidesPerView: 3,
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
        {popularTourData?.map((product) => {
          return (
            <SwiperSlide>
              <div className="tour__card py-5 mb-10">
                <figure class="image-block">
                  <span className="tour__num">{product.package_num}</span>

                  <img src={product.Package_thumble} alt="" />
                  <figcaption>
                    <div className="flex content-center">
                      <GoLocation className="text-5xl" />
                      <h3 className="text-5xl bold">
                        {product.package_titile}
                      </h3>
                    </div>
                    <hr />
                    <span className="text-3xl">
                      {product.package_num} Package
                    </span>
                    <NavLink to="alltour">
                      <Button data={"explore"} />
                    </NavLink>
                  </figcaption>
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
  .swiper-pagination-bullet {
    width: var(
      --swiper-pagination-bullet-width,
      var(--swiper-pagination-bullet-size, 20px)
    );
    height: var(
      --swiper-pagination-bullet-height,
      var(--swiper-pagination-bullet-size, 20px)
    );
    background: var(
      --swiper-pagination-bullet-inactive-color,
      rgb(110, 193, 228)
    );
  }

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

export default PopularDestination;
