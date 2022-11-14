import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import AddCartButton from "../AddCartButton/AddCartButton";
// import { FaHeart, FaEye, FaShoppingCart, FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay, Grid } from "swiper";
import CartButton from "../CartButton/CartButton";
import WishListButton from "../WishListButton/WishListButton";
import QuickViewButton from "../QuickViewButton/QuickViewButton";

import { useRef } from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../context/productContext";

const ShopSample = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { isLoading, products } = useProductContext();
  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto relative">
        <div className="text-center">
          <div className="intro-data text-center">Check Now!</div>
          <div className="common-heading text-center">
            Let's Visit! Our Shop.
          </div>
        </div>

        <div className="mt-8">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1500: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={24}
            loop={true}
            navigation={{
              prevEl: "#prev_slide",
              nextEl: "#next_slide",
            }}
            modules={[Grid, Autoplay, Navigation]}
            autoplay={true}
            className="mySwiper"
            style={{ "--swiper-theme-color": "#27AE61" }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {products?.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product_widget26">
                  <div className="product_thumb_upper position-relative">
                    {product.discount > 0 && (
                      <span className="offer_badge">-{product.discount}% </span>
                    )}
                    <Link
                      to={`/singleproduct/${product?.id}`}
                      className="thumb text-center"
                    >
                      <img src={product.image} alt="" />
                    </Link>
                    <div className="product_action">
                      <WishListButton></WishListButton>
                      <QuickViewButton></QuickViewButton>
                      <CartButton></CartButton>
                    </div>
                  </div>
                  <div className="product_meta">
                    <Link to={`/singleproduct/${product?.id}`}>
                      {" "}
                      <h4 className="product_name">{product.name}</h4>
                    </Link>

                    <div>
                      <p className="text-justify product_description">
                        {product.description.length > 300
                          ? product.description.slice(0, 200)
                          : product.description}
                      </p>
                    </div>
                    <div className="product_prise flex items-center gap-2 justify-between">
                      <span className="text-lg product__stock">
                        {/* {product.discount > 0 &&
                                                    `₹${product.discount + product.book_price}.00`} */}
                        Stock: 2000
                      </span>
                      <p>₹{product.price}.00</p>
                    </div>
                    <AddCartButton />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="flex pt-3">
              {/* swiper slider */}
              <div className="swiperSlide_button_group">
                <div className="swiper_button swiper_button_prev" ref={prevRef}>
                  <BsArrowLeftShort></BsArrowLeftShort>
                </div>
                <div className="swiper_button swiper_button_next" ref={nextRef}>
                  <BsArrowRightShort></BsArrowRightShort>
                  {/* <i class="fa-solid fa-angle-right"></i> */}
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ShopSample;
