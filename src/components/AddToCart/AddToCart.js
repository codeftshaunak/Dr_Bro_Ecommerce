import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../../context/cartContext";
import AddCartButton from "../AddCartButton/AddCartButton";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
import { FaCheck } from "react-icons/fa";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, stock, colors } = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrase = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrase = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div>
      <Wrapper>
        <div className="colors">
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
        </div>
      </Wrapper>
      <br />
      <div className="flex justify-between flex-wrap">
        {stock > 0 ? (
          <>
            <CartAmountToggle
              amount={amount}
              setDecrase={setDecrase}
              setIncrase={setIncrase}
              className="w-36"
            />

            <NavLink
              to="/cart"
              className="ml-5"
              onClick={() => {
                addToCart(id, amount, product);
              }}
            >
              <AddCartButton />
            </NavLink>
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
    background-color: #000;
    border-radius: 50%;
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
