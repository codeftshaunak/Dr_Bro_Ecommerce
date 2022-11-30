import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import logo from "../assets/logo/logo.png";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={logo} alt="DR BRO" className="logo" />
      </NavLink>

      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;

export default Header;
