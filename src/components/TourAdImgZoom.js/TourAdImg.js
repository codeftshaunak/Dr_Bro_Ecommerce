import React from "react";
import styled from "styled-components";
import tourimage from "../../assets/tour-banner-1.jpg";

const TourAdImg = () => {
  return (
    <Wrapper>
      <div className="img-wrapper">
        <figure>
          <img className="object-cover inner-img" src={tourimage} alt="" />
        </figure>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .img-wrapper {
    height: 500px;
    overflow: hidden;
    width: 70%;

    box-shadow: 26px 25px 0px 1px rgba(0, 224, 255, 0.75);
    -webkit-box-shadow: 26px 25px 0px 1px rgba(0, 224, 255, 0.75);
    -moz-box-shadow: 26px 25px 0px 1px rgba(0, 224, 255, 0.75);

    img {
      height: 500px;
      width: 100%;
      margin-left: auto;
    }
  }

  .inner-img {
    transition: 0.3s;
  }

  .inner-img:hover {
    transform: scale(1.1);
  }

  .img-wrapper {
    display: inline-block;
    box-sizing: border-box;
  }
`;

export default TourAdImg;
