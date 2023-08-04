import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "../../assets/logo/logo.png";
import Footer from '../Footer/Footer';
import { CgClose, CgMenu } from 'react-icons/cg';
import { Link } from 'react-router-dom';


const Wrapper = styled.section`
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
      padding-top: 5rem;
      padding-bottom: 5rem;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      // justify-content: center;
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
    .hero h1{
        font-size: 3rem;
    }
 
`

const PassportNav = () => {
    const [menuIcon, setmenuIcon] = useState(false);

    return (
        <Wrapper>

            {/* {
                showLogin && (<div className='absolute top-0 bottom-0 right-0 left-0 z-50'>
                    <PassportSignUp />
                    <button className='rounded-t-lg bg-orange-600 hover:bg-white hover:text-black hover:border-orange-600 hover:border text-white px-4 py-0 font-semibold ease-in-out duration-500 h-14' onClick={handleLoginClose}>
                        <a href="#">Close</a>
                    </button>
                </div>
                )
            } */}


            <div className={menuIcon ? "navbar active" : "navbar"}>

                <nav className='flex justify-around p-5 fixed w-full top-0 left-0 right-0 border border-black z-10'>
                    <div className="logo w-1/6">
                        <a href="/">
                            <img src={logo} alt="DR BRO" className="logo w-20" />
                        </a>
                    </div>
                    <div className="items flex justify-between w-6/12 navbar-lists">
                        <button className='rounded-t-lg bg-orange-600 hover:bg-white hover:text-black hover:border-orange-600 hover:border text-white px-4 py-0 font-semibold ease-in-out duration-500 h-14'>
                            <Link to="/passport">Home</Link>
                        </button>
                        <button className='rounded-t-lg bg-orange-600 hover:bg-white hover:text-black hover:border-orange-600 hover:border text-white px-4 py-0 font-semibold ease-in-out duration-500 h-14'>
                            <Link to="/passporttrack">Track Now</Link>
                        </button>
                        <button className='rounded-t-lg bg-orange-600 hover:bg-white hover:text-black hover:border-orange-600 hover:border text-white px-4 py-0 font-semibold ease-in-out duration-500 h-14'>
                            <Link to="/getpassports">Passport</Link>
                        </button>
                        <button className='rounded-t-lg bg-orange-600 hover:bg-white hover:text-black hover:border-orange-600 hover:border text-white px-4 py-0 font-semibold ease-in-out duration-500 h-14'>
                            <Link to="/passportsignup">SignUp</Link>
                        </button>
                        <button className='rounded-t-lg bg-orange-600 hover:bg-white hover:text-black hover:border-orange-600 hover:border text-white px-4 py-0 font-semibold ease-in-out duration-500 h-14'>
                            <Link to="/passportsignin">SignIn</Link>
                        </button>
                        <button className='rounded-t-lg bg-orange-600 hover:bg-white hover:text-black hover:border-orange-600 hover:border text-white px-4 py-0 font-semibold ease-in-out duration-500 h-14'>
                            <Link to="/adminlogin">Admin</Link>
                        </button>
                    </div>
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

                </nav>
            </div>
        </Wrapper>
    )
}

export default PassportNav;
