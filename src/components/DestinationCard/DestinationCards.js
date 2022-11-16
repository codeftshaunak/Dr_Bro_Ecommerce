import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import FormatPrice from "../Helpers/FormatPrice";
import Star from "../Helpers/Star";

function DestinationCards() {
  return (
    <Wrapper>
      <div className="demo__blog pt-36 pb-36 mx-auto relative">
        <div className="all__card flex justify-evenly flex-wrap">
          {/* Card-1 Start */}
          <div className="card tour__card w-1/4 bg-white text-black shadow-xl">
            <figure>
              <img
                src="https://i.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s"
                alt="London"
              />

              <div className="button">
                <Button>Book Now</Button>
              </div>
            </figure>

            <div className="card-body text-center">
              <h3 className="card-title">London</h3>
              <h4 className="country">London</h4>

              <Star stars={4.6} reviews={144} />

              <h4 className="travel-price text-3xl">
                <FormatPrice price={400000} />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
.all__card{

.button{
   background: rgba(27, 26, 26, 0.3);
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
    position: absolute;
    line-height: 1.8;
    text-align: left;
    font-size: 105%;
    cursor: no-drop;
    color: #FFF;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;

    button{
        position: absolute;
      top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
      
    }
}

  .tour__card {
    width: 450px;
    height: 560px;
    margin: 5px;
    overflow: hidden;
    position: relative;

    figure{
            height: 400px;
    overflow: hidden;
        position: relative;

    }

     img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 400px;
      transition: 2s all ease-in-out;
    }

    h3 {
      font-size: 30px;
      font-weight: 600;
      color:#0f2454;
    }

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      img {
        transform: scale(1.25);
      }
.button{transform: translateX(0);}
  }

 


  .card-body {
    padding: 20px;
    h2 {
      font-size: 14px;
    }
    .travel-price {
      font-weight: 500;
      color:#d60d45;
    }
    .badge {
      font-size: 10px;
      background: red;
      width: 35px;
      color: white;
      text-align: center;
    }
    .country {
      font-size: 15px;
      font-weight: 400;
    }
    .card-description {
      font-size: 12px;
      font-weight: 400;
      text-align: justify;
    }
  }
}
`;

export default DestinationCards;
