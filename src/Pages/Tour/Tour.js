import React from "react";
import PopularDestination from "../../components/TourHomeComponents/PopularDestination";
import PopularTours from "../../components/TourHomeComponents/PopularTours";
import TourAd from "../../components/TourHomeComponents/TourAd";
import TourBanner from "../../components/TourHomeComponents/TourBanner";

const Tour = () => {
  return (
    <>
      {<TourBanner />}
      {<TourAd />}
      {<PopularTours />}

      {<PopularDestination />}
    </>
  );
};

export default Tour;
