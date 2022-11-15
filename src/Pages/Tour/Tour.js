import React from "react";
import PopularDestination from "../../components/TourHomeComponents/PopularDestination";
import PopularTours from "../../components/TourHomeComponents/PopularTours";
import TourAd from "../../components/TourHomeComponents/TourAd";
import TourBanner from "../../components/TourHomeComponents/TourBanner";
import PopularTravel from "../../components/TourHomeComponents/PopularTravel";
import CounterUp from "../../components/CounterUp/CounterUp";

const Tour = () => {
  return (
    <>
      {<TourBanner />}
      {<TourAd />}
      {<PopularTours />}
      <CounterUp />

      {<PopularDestination />}

      <PopularTravel />
    </>
  );
};

export default Tour;
