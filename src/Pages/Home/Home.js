import React from "react";
import HeroSection from "../../components/HeroSection";

import BlogCard from "../../components/BlogCard";
import ShopSample from "../../components/ShopSample/ShopSample";
import GoogleMapComp from "../../components/GoogleMap/GoogleMapComp";
import DiscountBanner from "../../components/Banner/DiscountBanner";
import TravelBanner from "../../components/Banner/TravelBanner";
import PopularDestination from "../../components/TourHomeComponents/PopularDestination";

const Home = (props) => {
  props.funNav(true);
  return (
    <>
      <HeroSection />
      <PopularDestination />
      <ShopSample />
      {/* <DiscountBanner /> */}
      <BlogCard />
      <TravelBanner />

      <GoogleMapComp isMarkerShown />
    </>
  );
};

export default Home;
