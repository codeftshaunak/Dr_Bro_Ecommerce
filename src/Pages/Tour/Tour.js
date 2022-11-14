import React from "react";
import PopularTours from "../../components/TourHomeComponents/PopularTours";
import TourAd from "../../components/TourHomeComponents/TourAd";
import TourBanner from "../../components/TourHomeComponents/TourBanner";

const Tour = () => {
  return (
    <>
      {<TourBanner />}
      {<TourAd />}
      {<PopularTours />}
    </>
  );
};

export default Tour;
