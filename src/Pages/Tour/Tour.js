import React from "react";
import PopularDestination from "../../components/TourHomeComponents/PopularDestination";
import PopularTours from "../../components/TourHomeComponents/PopularTours";
import TourAd from "../../components/TourHomeComponents/TourAd";
import TourBanner from "../../components/TourHomeComponents/TourBanner";
import PopularTravel from "../../components/TourHomeComponents/PopularTravel";
import CounterUp from "../../components/CounterUp/CounterUp";
import TourVideo from "../../components/TourVideo/TourVideo";
import TourTestimonial from "../../components/TourTestimonial/TourTestimonial";

const Tour = (props) => {
  props.funNav(true);

  return (
    <>
      <TourBanner />
      <TourAd />
      <PopularTours />
      <CounterUp />

      <PopularDestination />

      <TourVideo />

      <PopularTravel />

      <TourTestimonial />
    </>
  );
};

export default Tour;
