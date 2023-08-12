import React from "react";
import PopularDestination from "../../components/TourHomeComponents/PopularDestination";
import PopularTours from "../../components/TourHomeComponents/PopularTours";
import TourBanner from "../../components/TourHomeComponents/TourBanner";
import PopularTravel from "../../components/TourHomeComponents/PopularTravel";
import CounterUp from "../../components/CounterUp/CounterUp";
import TourVideo from "../../components/TourVideo/TourVideo";

const Tour = (props) => {
  props.funNav(true);

  return (
    <>
      <TourBanner />
      <br />
      <br />
      <PopularTours />
      <CounterUp />

      <PopularDestination />

      <TourVideo />

      <PopularTravel />

    </>
  );
};

export default Tour;
