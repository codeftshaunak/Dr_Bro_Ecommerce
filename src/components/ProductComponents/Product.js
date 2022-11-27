import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AddCartButton from "../AddCartButton/AddCartButton";
import CartButton from "../CartButton/CartButton";
import FormatPrice from "../Helpers/FormatPrice";
import QuickViewButton from "../QuickViewButton/QuickViewButton";
import WishListButton from "../WishListButton/WishListButton";

const Product = ({ products }) => {
  const { id, name, image, price, category } = products;
  return (
    <Wrapper>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="product">
          <div className="product__image__data">
            <div className="buttons">
              <div className="product__button__icon">
                <CartButton />
                <WishListButton />
                <QuickViewButton />
              </div>
            </div>
            <figure>
              <img src={image} alt={name} />
              <figcaption className="caption">{category}</figcaption>
            </figure>
          </div>

          <div className="product__text__details">
            <div className="card-data-flex">
              <h3>{name}</h3>
              <p className="card-data--price">
                {<FormatPrice price={price} />}
              </p>
            </div>
            <div className="add__to__cart">
              <AddCartButton />
            </div>
          </div>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product {
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    background-color: #f9f9f9;;
    margin-bottom: 20px;

    .product__image__data {
      background-color: #e8e4e4;
      position: relative;    
    }

    .card-data-flex {
      padding-bottom: 10px;
    }

    figure{
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        transition: 2s all ease-in-out;
      }
    
    }

    figcaption {
        top: 10px;
        left: 0;
        color: white;
        background-color: #282828;
        width: 130px;
        text-align: center;
    }

     h3 {
        font-size: 14px;
        font-weight: 400;
        
      }

      p {
        font-size: 14px;
        font-weight: 400;
              color:#d60d45;

      }

      .product__text__details{
        padding:10px;
        overflow:hidden;
      }


    .buttons {
      background: rgba(27, 26, 26, 0.3);
      transition: all 0.3s ease-out;
      transform: translateX(-100%);
      position: absolute;
      line-height: 1.8;
      text-align: left;
      font-size: 105%;
      cursor: no-drop;
      color: #fff;
      height: 100%;
      width: 100%;
      z-index:2;
      left: 0;
      top: 0;

      .product__button__icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display:flex;
      width: 60%;
      margin:auto;
      justify-content: space-around;

      svg{
      color:white;
      font-size:20px;
      transition:0.3s ease-in-out;
    
      &:hover{
        color:#d60d45;
      }
      
    }
}
    }

     &:hover {
    box-shadow: 0 1px 1px rgba(159, 159, 159, 0.25), 0 1px 1px rgba(0,0,0,0.22);

      img {
        transform: scale(1.25);
      }

      .buttons {
         left: 0;
      top: 0;
        transform: translateX(0);
      }



    }
   

    }
  }
`;

export default Product;
