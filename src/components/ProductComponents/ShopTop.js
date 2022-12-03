import React from "react";
import styled from "styled-components";
import shopTop from "../../assets/clothing-home-slide1a.jpeg";

const ShopTop = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-center shoptop">
        <div
          className=" "
          style={{
            background: `url(${shopTop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "400px",
            width: "100%",
            opacity: "0.6",
          }}
        ></div>
        <h1 className="text-7xl font-bold text-black">Shop</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .shoptop {
    background: black;
    position: relative;
    h1 {
      position: absolute;
      bottom: 10px;
      left: 15px;
      color: white;
    }
  }
`;

export default ShopTop;
