import React from "react";
import { useState } from "react";
import { useFilterContext } from "../../context/filterContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgClose, CgMenu } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo/logo.png";

const ShopNav = () => {
  const [menuIcon, setmenuIcon] = useState();

  const {
    updateFilterValue,
    filters: { text },
  } = useFilterContext();

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="logo__navbar"
        >
          <NavLink to="/">
            <img src={logo} alt="DR BRO" className="logo" />
          </NavLink>
          <div className={menuIcon ? "navbar active" : "navbar"}>
            <ul className="navbar-lists">
              <li>
                <NavLink
                  to="/"
                  className="navbar-link home-link"
                  onClick={() => setmenuIcon(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className="navbar-link"
                  onClick={() => setmenuIcon(false)}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="navbar-link"
                  onClick={() => setmenuIcon(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Buttons for responsive */}
            <div className="mobile-navbar-btn">
              <CgMenu
                name="menu-outline"
                className="mobile-nav-icon"
                onClick={() => setmenuIcon(true)}
              />
              <CgClose
                name="menu-outline"
                className="mobile-nav-icon close-outline"
                onClick={() => setmenuIcon(false)}
              />
            </div>
          </div>
        </div>

        <div className="search__cart">
          <div className="search">
            <form onSubmit={(e) => e.preventDefault()}>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="text"
                  value={text}
                  onChange={updateFilterValue}
                  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
              </div>
            </form>
          </div>
          <div className="cart">
            <ul>
              <li>
                <NavLink
                  to="/cart"
                  className="navbar-link cart-trolley--link"
                  onClick={() => setmenuIcon(false)}
                >
                  <AiOutlineShoppingCart className="cart-trolley"></AiOutlineShoppingCart>
                  <span className="cart-total--item">10</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: white;
  img {
    width: 50px;
  }
  .navbar {
    padding-left: 20px;
  }
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;
    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 400;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .logo__navbar {
    width: 57%;
  }

  .search__cart {
    display: flex;
    justify-content: space-evenly;
    width: 250px;
  }
  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }
  .close-outline {
    display: none;
  }
  .cart-trolley--link {
    position: relative;
    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }
    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }
  .user-login--name {
    text-transform: capitalize;
  }
  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};
      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }
    .logo__navbar {
      width: 45%;
      flex-direction: row-reverse;
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }
    .active .close-outline {
      display: inline-block;
    }
    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      /* transform-origin: top; */
      transition: all 3s linear;
    }
    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 3s linear;
      .navbar-link {
        font-size: 4.2rem;
      }
    }
    .cart-trolley--link {
      position: relative;
      .cart-trolley {
        position: relative;
      }
      .cart-total--item {
      }
    }
    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;

export default ShopNav;
