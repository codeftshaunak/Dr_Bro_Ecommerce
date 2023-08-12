import React from "react";
import styled from "styled-components";
import { GiBackwardTime } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { Button } from "../../styles/Button";
import { useNavigate } from "react-router-dom";
const TourHomeCard = ({ data }) => {
  const nevigate = useNavigate();
  return (
    <Wrapper className="flex flex-wrap justify-evenly">
      {data?.map((tour) => {
        return (
          <div className="tour__card py-5">
            <figure class="image-block">
              <span className="price__tag ">{tour.price}</span>
              <img src={tour.thumbnail} alt="" />
              <figcaption>
                <h3 className="text-5xl">{tour.package_titile}</h3>
                <hr />
                <div className="tour__icons flex">
                  <div className="recent">
                    <GiBackwardTime />
                    <span>12 Days</span>
                  </div>
                  <div className="people">
                    <BsFillPeopleFill />
                    <span>12+</span>
                  </div>
                  <div className="location">
                    <GoLocation />
                    <span>Maldives</span>
                  </div>
                </div>
                <Button onClick={() => nevigate(`/singletour/${tour.uuid}`)}>Book Now</Button>
              </figcaption>
            </figure>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
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

    .recent,
    .people,
    .location {
      font-size: 15px;
      display: flex;
      padding: 0px 5px;
      font-weight: 600;
      color: white;
    }

    .price__tag {
      position: absolute;
      top: 50px;
      left: 20px;
      margin: 0;
      padding: 5px;
      color: white;
      font-size: 20px;
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
        background-color: $color-2;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 14px;
      }
    }
  }
`;

export default TourHomeCard;
