import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/logo/logo.png";
const Wrapper = styled.section`

`

const PassportNav = () => {
    return (
        <Wrapper>
            <nav className='flex justify-around'>
                <div className="logo w-1/6">
                    <img src={logo} alt="DR BRO" className="logo w-20" />
                </div>
                <div className="items flex justify-between w-9/12">
                    <button>
                        <a href="#">Track Now</a>
                    </button>
                    <button>
                        <a href="#">Passport</a>
                    </button>
                    <button>
                        <a href="#">SignUp</a>
                    </button>
                    <button>
                        <a href="#">SignIn</a>
                    </button>
                </div>
            </nav>

            <div className="hero">
                <div className="content">
                    <h1>Get Your Passport Online</h1>
                    <p>As a passport agent in Delhi, we helps people to get a new passport, renew an old one or make correction in existing</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default PassportNav;
