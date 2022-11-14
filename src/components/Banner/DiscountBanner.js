import React from "react";
import discountImg from "../../assets/mb1.webp";
import Banner from "./Banner";

const data = {
  hadding__text: "Get Extra",
  bold__text: "Sale-25%",
  footer__text: "On Order Over",
  imgData: <img src={discountImg} width="450" alt="banner" />,
  bg__color: "#C85A50",
};

const DiscountBanner = () => {
  return (
    <div className="my-28">
      <Banner myData={data} />
    </div>
  );
};

export default DiscountBanner;
