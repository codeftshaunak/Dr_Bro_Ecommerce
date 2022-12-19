import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <section className="page_404">
        <div className="">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1 relative text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center">404</h1>
                </div>

                <div className="contant_box_404 text-center">
                  <NavLink to="/">
                    <Button>GO TO HOME</Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /*======================
    404 page
=======================*/

  .page_404 {
    padding: 40px 0;
    background: #fff;
    font-family: "Arvo", serif;
  }

  .page_404 img {
    width: 100%;
  }

  .four_zero_four_bg {
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 300px;
    background-position: center;
  }

  .four_zero_four_bg h1 {
    font-size: 80px;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(34, 193, 195);
  }

  .four_zero_four_bg h3 {
    font-size: 50px;
  }

  .link_404 {
    color: #fff !important;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    display: inline-block;
  }
  .contant_box_404 {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default ErrorPage;
