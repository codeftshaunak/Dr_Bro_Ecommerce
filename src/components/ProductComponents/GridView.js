import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="container pb-36">
        <div className="grid__view">
          {products?.map((currEle, id) => {
            return <Product products={currEle} key={id} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid__view {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .product {
      width: 270px;
    }
  }
`;

export default GridView;
