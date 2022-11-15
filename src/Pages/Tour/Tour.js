import React from "react";
import PopularDestination from "../../components/TourHomeComponents/PopularDestination";
import PopularTours from "../../components/TourHomeComponents/PopularTours";
import TourAd from "../../components/TourHomeComponents/TourAd";
import TourBanner from "../../components/TourHomeComponents/TourBanner";
import PopularTravel from "../../components/TourHomeComponents/PopularTravel";

const Tour = () => {
  return (
    <>
      {<TourBanner />}
      {<TourAd />}
      {<PopularTours />}

      {<PopularDestination />}

      <PopularTravel />
    </>
  );
};

export default Tour;
