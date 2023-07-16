import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { BASE_URL } from "../../config";

const CartItem = (data) => {
  const access_token = localStorage.getItem("access_token");
  const API = `${BASE_URL}/cart/something`;





  // const removeItemCart = useCallback(() => {
  //   axios
  //     .post(
  //       API,
  //       {
  //         quantity: 0,
  //         product_id: uuid,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${access_token}`,
  //         },
  //       }
  //     )
  //     .then(() => {
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [access_token, uuid]);

  // return (
  //   <Wrapper>
  //     <div className="cart_heading grid grid-five-column">
  //       <div className="cart-image--name">
  //         <div>
  //           <figure>
  //             <img src={thumbnail} alt={uuid} />
  //           </figure>
  //         </div>
  //         <div>
  //           <p>{product_name}</p>
  //         </div>
  //       </div>

  //       {/* price */}
  //       <div className="cart-hide">
  //         <p>
  //           <FormatPrice price={price} />
  //         </p>
  //       </div>

  //       {/* Quantity */}
  //       <div className="amount">
  //         <p>{quantity}</p>
  //       </div>

  //       {/* Subtotal */}
  //       <div className="cart-hide">
  //         <p>
  //           <FormatPrice price={price * quantity} />
  //         </p>
  //       </div>

  //       {/* delete */}
  //       <div className="delete__item">
  //         <FaTrash className="remove_icon" onClick={removeItemCart} />
  //       </div>
  //     </div>
  //   </Wrapper>
  // );
};

const Wrapper = styled.section`
  .delete__item {
    display: flex;
    justify-content: center;
  }
`;

export default CartItem;
