import React from "react";
import { GoLocation } from "react-icons/go";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";

const PopuladTravelDesgin = ({ data }) => {
  return (
    <Wrapper className="py-36">
      <div className="popular__travel__title">
        <h3 className="text-5xl font-bold" style={{ color: "#0f2454" }}>
          {data}
        </h3>
        <p className="text-2xl py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          deleniti dolorem ea ex ratione possimus expedita omnis perferendis
          laboriosam, maxime vel, reprehenderit pariatur corporis aut non
          delectus totam saepe mollitia.
        </p>
        <div className="location__data flex flex-col justify-around text-2xl">
          <div className="location__top flex justify-between py-5">
            <div className="countrt__location">
              <GoLocation />
              <span>Roma</span>
            </div>
            <div className="countrt__location">
              <GoLocation />
              <span>Venice</span>
            </div>
            <div className="countrt__location">
              <GoLocation />
              <span>Perugia</span>
            </div>
          </div>

          <div className="location__bottom flex justify-between py-5">
            <div className="countrt__location">
              <GoLocation />
              <span>Itali</span>
            </div>
            <div className="countrt__location">
              <GoLocation />
              <span>Venice</span>
            </div>
            <div className="countrt__location">
              <GoLocation />
              <span>Perugia</span>
            </div>
          </div>
        </div>
        <NavLink to="alltour">
          <Button data={"All Tour"} />
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .popular__travel__title {
    width: 400px;

    .location__data {
      display: flex;
      flex-wrap: wrap;

      .countrt__location {
        display: flex;
        align-items: center;
        color: #2095ae;
      }
    }
  }
`;

export default PopuladTravelDesgin;
