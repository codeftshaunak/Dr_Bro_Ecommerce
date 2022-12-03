import React from "react";
import styled from "styled-components";
import FilterSection from "../../components/ProductComponents/FilterSection";
import ProductList from "../../components/ProductComponents/ProductList";
import ShopNav from "../../components/ProductComponents/ShopNav";
import ShopTop from "../../components/ProductComponents/ShopTop";
import Sort from "../../components/ProductComponents/Sort";

const Shop = (props) => {
  props.funNav(false);
  return (
    <Wrapper>
      <ShopNav />
      <ShopTop />
      <div className="container grid grid-filter-column pt-20">
        <div>
          <FilterSection />
        </div>
        <div className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  transition: 0.5s ease-in-out;
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Shop;
