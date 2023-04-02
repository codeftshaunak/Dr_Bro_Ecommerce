import React, { useContext } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
import Button from "../Button/Button";
import axios from "axios";

const API = "http://13.234.77.93:8000/cart/something";

const AddToCart = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const { uuid, availiability } = product;
  const access_token = localStorage.getItem('access_token')

  const addtoCart = async (uuid, amount) => {
    await axios({
      method: "POST",
      url: `${API}`,
      data: {
        quantity: amount,
        product_id: uuid,
      },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }).then((res) => {
      console.log(res.data, "ADD TO CART");
    });
  };

  const setDecrase = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrase = () => {
    amount < availiability ? setAmount(amount + 1) : setAmount(availiability);
  };

  return (
    <div>
      <div className="">
        {availiability > 0 ? (
          <>
            <CartAmountToggle
              amount={amount}
              setDecrase={setDecrase}
              setIncrase={setIncrase}
              className="w-36"
            />
            {access_token ? (
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
