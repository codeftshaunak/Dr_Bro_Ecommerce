import React from "react";
import styled from "styled-components";

const SingleProdutDescription = ({ product }) => {
  return (
    <Wrapper>
      <div className="description__title">
        <h3>Mighty Smooth</h3>
        <p>{product}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .description__title {
    text-align: center;
    padding: 9rem 0;
    width: 80%;
    margin: auto;

    h3 {
      font-size: 40px;
      font-family: "Dancing Script", cursive !important;
    }
  }
`;

export default SingleProdutDescription;
