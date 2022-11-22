import React from "react";
import aboutBanner from "../../assets/tour-banner-3.jpg";
import DestinationCards from "../DestinationCard/DestinationCards";
import TourPageNavigation from "../PageNavigations/TourPageNavigation";

const TourTotalData = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${aboutBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
        className="flex items-center justify-center"
      >
        <div className=" ">
          <h1 className=" text-5xl font-bold text-white">
            All Our Destination
          </h1>
        </div>
      </div>
      <TourPageNavigation title={"All Destination"} />

      <div className="all__destinations">
        <DestinationCards />
      </div>
    </div>
  );
};

export default TourTotalData;
