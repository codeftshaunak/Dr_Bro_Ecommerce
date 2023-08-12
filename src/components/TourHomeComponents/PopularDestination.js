import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GoAlert, GoContainer, GoLocation } from "react-icons/go";
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
import { BASE_URL } from "../../config";
import { AiFillDollarCircle } from "react-icons/ai";

const PopularDestination = () => {
  const [tour, setTour] = useState([]);
  console.log(tour);
  const API = `${BASE_URL}/tours/`;
  const getTours = async (api) => {
    const res = await axios.get(api);
    const data = res.data.results    ;
    // console.log(data);
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
        {tour?.map((tour) => {
          return (
            <SwiperSlide>
              <div className="tour__card py-5 mb-10">
                <figure class="image-block">
                  <span className="tour__num">{tour.Tours_name}</span>
                  <img src={`${tour.thumbnail}`} alt="" />
                  <figcaption>
                    <div className="flex items-center bg-white py-5 px-3 rounded">
                      <AiFillDollarCircle className="text-4xl text-black font-bold" />
                      <h3 className="text-3xl text-black font-bold">
                        {tour.price}/=
                      </h3>
                    </div>
                    <br />
                    <span className="text-3xl text font-bold text-gray-600">
                      {tour.category} Package
                    </span>
                    <NavLink to="/tour/alltour">
                      <Button data={"View More"} />
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
    height: 500px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      img {
        transform: scale(1.25);
        filter: blur(3px);
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
