import React from "react";
import HeroSection from "../../components/HeroSection";
// import HeroImg from "./assets/hero-img.png";
// import FeatureProducts from "../../components/FeatureProducts";
import BlogCard from "../../components/BlogCard";
import ShopSample from "../../components/ShopSample/ShopSample";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import DiscountBanner from "../../components/Banner/DiscountBanner";
import TravelBanner from "../../components/Banner/TravelBanner";
import PopularDestination from "../../components/TourHomeComponents/PopularDestination";

const Home = () => {
  // const data = {
  //   welcome_msg: `Welcome to`,
  //   title: "DR.BRO SHOP",
  //   image: <img src={HeroImg} alt="heroimg" className="img-style" />,
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quisquam quos autem accusamus exercitationem neque sapiente.Unde eos reprehenderit nemo.",
  //   button: "Shop Now",
  // };

  return (
    <>
      {/* <HeroSection Mydata={data} /> */}
      <HeroSection />
      {/* <FeatureProduct /> */}
      {/* <BestSelling /> */}
      <PopularDestination />
      <ShopSample />

      <DiscountBanner />

      <BlogCard />
      <TravelBanner />
      <GoogleMap />
    </>
  );
};

export default Home;
