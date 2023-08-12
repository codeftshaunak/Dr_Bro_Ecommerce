import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <Wrapper>
      <div className="cart-button">
        <div className="amount-toggle">
          <button onClick={() => setDecrease()}>
            <FaMinus />
          </button>
          <div className="amount-style">{amount}</div>
          <button onClick={() => setIncrease()}>
            <FaPlus />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .amount-toggle {
    display: flex;
    justify-content: space-around;
    width: 132px;
    font-size: 10px;
    background-color: #dbd8d8;
    padding: 10px;
    border-radius: 20px;
    color: #080128;
    .amount-style {
      font-size: 12px;
      font-weight: bold;
    }
  }
`;

export default CartAmountToggle;
