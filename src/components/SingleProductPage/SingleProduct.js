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
import { BASE_URL } from "../../config";
import CarosalImage from "./CarosalImage";


const API = `${BASE_URL}/ecommerce/Products/`;

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
    discount,
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
  const discountPrice = price - (price * discount / 100);
  return (
    <Wrapper>
      <PageNavigation title={product_name} />
      <div className="single__products__front">
        <div className="left__side__single">
          <img src={`${BASE_URL}/${thumbnail}`} alt="Product Image" />
        </div>
        <div className="right__side__single">
          <h2>{product_name}</h2>
          <br />
          <h3>
            {
              discount ?
                <>
                  <p className="p-2 bg-orange-500 w-[150px] text-white rounded">Get {discount}% Discount</p>
                  <p className="card-data--price">
                    Original Price:<strike> {price} </strike>
                  </p>
                  <p className="card-data--price">
                    {/* Discount Price: <strong>{<FormatPrice price={discountPrice} />}</strong> */}
                    Discount Price: <strong>{discountPrice}</strong>
                  </p>
                </>
                : <p className="card-data--price">
                  Original Price: {<FormatPrice price={price} />}
                </p>
            }
          </h3>
          <br />
          {availiability > 0 ? <AddToCart product={singleProduct} /> : <button disabled>Stock Out</button>}
        </div>
      </div>
      <SingleProdutDescription product={description} />
      <div className="w-full">
        {
          singleProduct.Products && <CarosalImage images={singleProduct.Products} />
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  .single__products__front {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: auto;

    .left__side__single {
      width: 50%;
      margin: 0 10px;
      img{
        width: 100%;
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

  @media only screen and (max-width: 760px) {
    .single__products__front {
      .left__side__single{
        width: 100%;
      }
    }
  }
`;

export default SingleProduct;
