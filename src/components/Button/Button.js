import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const Button = ({ data }) => {
  return (
    <Wrapper>
      <button className="button text-3xl">
        <p className="text-3xl font-bold">{data}</p>  <FaArrowRight className="ml-2" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .button {
    align-content: center;
    align-items: center;
    border: none;
    background-color: #fff;
    cursor: pointer;
    color: black;
    display: flex;
    font-family: "poppins";
    font-weight: 600;
    padding: 10px 21px;
    justify-content: space-evenly;
    border: 1px solid black;

    &:hover {
      background: black;
      color: #fff;
      transition: 0.3s;
    }
  }
`;
export default Button;
