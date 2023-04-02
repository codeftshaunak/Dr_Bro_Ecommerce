import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartButton from "../CartButton/CartButton";
import FormatPrice from "../Helpers/FormatPrice";
import Star from "../Helpers/Star";
import WishListButton from "../WishListButton/WishListButton";

const Product = ({ products }) => {
  const { uuid, product_name, thumbnail, price, availiability } = products;
  return (
    <Wrapper>
      <NavLink to={`/singleproduct/${uuid}`}>
        <div className="product">
          <div className="product__image__data">
            <div className="buttons">
              <div className="product__button__icon">
                <CartButton />
                <WishListButton />
              </div>
            </div>
            <figure>
              <img src={`http://13.234.77.93:8000/${thumbnail}`} alt="Product Image" />
              <figcaption className="caption"> {product_name} </figcaption>
            </figure>
          </div>

          <div className="product__text__details">
            <div className="card-data-flex">
              <h3>{product_name}</h3>
              <p className="card-data--price">
                {<FormatPrice price={price} />}
              </p>
              <div className="star">
                <Star stars={availiability} />
              </div>
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
        height: 300px;
        object-fit: cover;
        transition: 2s all ease-in-out;
      }

      .caption{
    font-size: 1.3rem;
    font-weight:600;
    border-radius: 0;
      }
    
    }

    figcaption {
        top: 10px;
        left: 0;
        color: #333;
        background: #ffdc00;
        width: 130px;
        text-align: center;
box-shadow: 3px 5px 4px -1px rgba(0,0,0,1);
    }

     h3 {
        font-size: 20px;
        font-weight: 500;
        
      }

      p {
        font-size: 16px;
        font-weight: 400;
      }

      .product__text__details{
        padding:10px;
        overflow:hidden;
      }
.star{
  width:80px;
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
