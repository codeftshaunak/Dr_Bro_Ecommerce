import React from "react";
import styled from "styled-components";
import FilterSection from "../../components/ProductComponents/FilterSection";
import ProductList from "../../components/ProductComponents/ProductList";
import SortFilter from "../../components/ProductComponents/SortFilter";
import { useFilterContext } from "../../context/filterContext";

const Shop = () => {
  const { filter_products } = useFilterContext();

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>
        <div className="product-view--sort">
          <div className="sort-filter">
            <SortFilter />
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
