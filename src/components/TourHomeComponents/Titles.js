import React from "react";
import styled from "styled-components";

const Titles = ({ toursubtitle, tourtitlestart, tourspan, tourtitleend }) => {
  return (
    <Wrapper className="titles text-center">
      <p className="tour-home-subtitle">{toursubtitle}</p>
      <h1 className="tour-home-title">
        {tourtitlestart}
        <span style={{ color: "#6EC1E4" }}> {tourspan}</span>
        <br />
        {tourtitleend}
      </h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .tour-home-title {
    font-size: 45px;
    line-height: 1.2em;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: #0f2454;
    position: relative;
    text-transform: uppercase;
    // margin-bottom: 20px;
  }

  .tour-home-subtitle {
    color: #2095ae;
    font-size: 13px;
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
    letter-spacing: 5px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .titles {
      text-align: center;
    }
  }
`;

export default Titles;
