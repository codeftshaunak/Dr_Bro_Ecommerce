import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

const SelectColors = ({ product }) => {
  const { colors } = product;

  const [color, setColor] = useState(colors[0]);

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors
          {colors.map((curColor, index) => {
            return (
              <button
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                key={index}
                style={{ backgroundColor: curColor }}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>
    </Wrapper>
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

export default SelectColors;
