import React from "react";
import travelImg from "../../assets/travel.jpg";
import Banner from "./Banner";

const data = {
  hadding__text: "",
  bold__text: "Let's Enjoy!",
  footer__text: "",
  imgData: <img src={travelImg} width="450" alt="banner" />,
  bg__color: "#fecb4e",
  text__color: "#52382b",
};

const TravelBanner = () => {
  return (
    <div className="mb-28">
      <Banner myData={data} />
    </div>
  );
};

export default TravelBanner;
