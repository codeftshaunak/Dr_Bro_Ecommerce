import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../../context/cartContext";
// import AddCartButton from "../AddCartButton/AddCartButton";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
// import { FaCheck } from "react-icons/fa";
import Button from "../Button/Button";
// import { getToken } from "../../services/localStorageService";
import axios from "axios";

// const { access_token } = getToken();
const API = "http://13.234.77.93:8000/cart/something";

const AddToCart = ({ product }) => {
  // const { addToCart } = useCartContext();

  // const { id, stock, colors } = product;
  // const [color, setColor] = useState(colors[0]);
  const addtoCart = async (id, amount) => {
    await axios({
      method: "POST",
      url: `${API}`,
      data: {
        quantity: amount,
        id: id,
      },
      headers: {
        // Authorization: `Bearer ${access_token}`,
      },
    }).then((res) => {
      console.log(res.data, "ADD TO CART");
    });
  };

  const [amount, setAmount] = useState(1);
  const { id, availiability } = product;

  const setDecrase = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrase = () => {
    amount < availiability ? setAmount(amount + 1) : setAmount(availiability);
  };

  return (
    <div>
      <Wrapper>
        {/* <div className="colors">
          <p>
            Color:
            {colors.map((curColor, index) => {
              return (
                <button
                  key={index}
                  style={{ backgroundColor: curColor }}
                  className={
                    color === curColor ? "btnStyle active" : "btnStyle"
                  }
                  onClick={() => setColor(curColor)}
                >
                  {color === curColor ? (
                    <FaCheck className="checkStyle" />
                  ) : null}
                </button>
              );
            })}
          </p>
        </div> */}
      </Wrapper>
      <br />
      <div className="">
        {availiability > 0 ? (
          <>
            <CartAmountToggle
              amount={amount}
              setDecrase={setDecrase}
              setIncrase={setIncrase}
              className="w-36"
            />

            {/* <NavLink
              to="/cart"
              className="ml-5"
              onClick={() => {
                addToCart(id, color, amount, product);
              }}
            > */}
              <NavLink
                to="/cart"
                className="ml-5"
                onClick={() => addtoCart(id, amount)}
              >
                <Button data={"ADD TO CART"} />
              </NavLink>
            {/* {access_token ? (
              <NavLink
                to="/cart"
                className="ml-5"
                onClick={() => addtoCart(id, amount)}
              >
                <Button data={"ADD TO CART"} />
              </NavLink>
            ) : (
              <NavLink to="/signin" className="ml-5">
                <Button data={"ADD TO CART"} />
              </NavLink>
            )} */}
          </>
        ) : (
          <h3>Stock Is Not Available😥</h3>
        )}
      </div>
    </div>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    // background-color: #000;
    // border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1.5rem;
    color: #fff;
    margin-left: 2px;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;
