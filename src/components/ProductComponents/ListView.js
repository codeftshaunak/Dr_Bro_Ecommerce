import React from "react";
import styled from "styled-components";
import Product from "./Product";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      <div className="container pb-36">
        <div className="list__view">
          {products?.map((currEle, id) => {
            return <Product products={currEle} key={id} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .list__view {
    justify-content: center;
    display: grid;
    .product {
      display: flex;
      align-items: center;
      width: 600px;
      flex-wrap: wrap;
      .product__image__data img {
        width: 300px;
      }
      .product__text__details {
        width: 300px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .list__view {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .product {
        width: 300px;
        flex-direction: column;
        margin-left: 10px;
      }
    }
  }
`;

export default ListView;
