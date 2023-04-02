import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "../../context/productContext";
import AddToCart from "../AddToCart/AddToCart";
import FormatPrice from "../Helpers/FormatPrice";
import Loading from "../Loading/Loading";
import PageNavigation from "../PageNavigations/PageNavigation";
import SingleProdutDescription from "./SingleProdutDescription";

const API = "http://13.234.77.93:8000/ecommerce/Products/";

const SingleProduct = (props) => {
  props.funNav(true);

  const {
    getSingleProduct,
    isSingleLoading,
    singleProduct,
  } = useProductContext();

  const { id } = useParams();

  const {
    product_name,
    price,
    description,
    thumbnail,
    availiability,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}${id}`);
  }, [id]);


  if (isSingleLoading) {
    return (
      <>
        <div className="page__loading">
          <Loading />
        </div>
      </>
    );
  }

  return (
    <Wrapper>
      <PageNavigation title={product_name} />
      <div className="single__products__front">
        <div className="left__side__single">
          {/* <SliderProduct imgs={thumbnail} /> */}
          <img src={`http://13.234.77.93:8000/${thumbnail}`} alt="Product Image" />
        </div>
        <div className="right__side__single">
          <h2>{product_name}</h2>
          <h3>
            <FormatPrice price={price} />
          </h3>
          {availiability > 0 ? <AddToCart product={singleProduct} /> : <button disabled>Stock Out</button>}
        </div>
      </div>
      <SingleProdutDescription product={description} />
      {/* <DescriptionImage imgs={thumbnail} /> */}
      <img src={`http://13.234.77.93:8000/${thumbnail}`} alt="Product Image" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .single__products__front {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: auto;

    .left__side__single {
      max-width: 500px;
      margin: 0 10px;
      img{
        width: 400px;
        height: 450px;
        object-fit: cover;
      }
    }

    .right__side__single {
      h2 {
        font-family: "Dancing Script", cursive !important;
        font-size: 35px;
      }
      h3 {
        font-size: 15px;
        font-weight: 600;
      }
      width: 200px;
    }
  }
`;

export default SingleProduct;
