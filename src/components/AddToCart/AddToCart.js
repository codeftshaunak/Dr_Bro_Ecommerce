import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
import Button from "../Button/Button";
import axios from "axios";
import { BASE_URL } from "../../config";
import { getAuthorizationHeader } from "../../auth/adminAuth";

const API = `${BASE_URL}/cart/something`;

const AddToCart = ({ product }) => {
  const { uuid,availiability } = product;
  console.log(product);
  const [amount, setAmount] = useState(1);

  const ACCESS_TOKEN = localStorage.getItem("access_token");
  
  const addtoCart = async (uuid, quantity) => {
    console.log(uuid);

    try {
      const response = await axios.post(
        API,
        {
          product_id: uuid,
          quantity:quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      console.log(response.data, "ADD TO CART");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const increaseAmount = () => {
    if (amount < availiability) {
      setAmount(amount + 1);
    }
  };

  return (
    <div>
      <div>
        {availiability > 0 ? (
          <>
            <CartAmountToggle
              amount={amount}
              setDecrease={decreaseAmount} // Fixed typo in function name
              setIncrease={increaseAmount} // Fixed typo in function name
              className="w-36"
            />
            {ACCESS_TOKEN ? (
              <NavLink
                to="/cart"
                className="ml-5"
                onClick={() => addtoCart(uuid, amount)}
              >
                <Button data={"ADD TO CART"} />
              </NavLink>
            ) : (
              <NavLink to="/signin" className="ml-5">
                <Button data={"ADD TO CART"} />
              </NavLink>
            )}
          </>
        ) : (
          <h3>Stock Is Not Available😥</h3>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
