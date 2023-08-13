import React from 'react';
import passport from '../../assets/passport.jpeg';
import { NavLink } from 'react-router-dom';


const PassportHero = () => {
    return (
        <div className="h-screen text-center relative flex justify-center items-center bg-cover bg-center w-full mt-32" style={{ backgroundImage: `url(${passport})` }}
        >
            <div className="hero">
                <div className="content">
                    <div className="relative">
                        <div className="bg-cover bg-center">
                            <div className="text-white bg-black p-8 w-1/2 m-auto drop-shadow rounded-lg">
                                <h1>Get Your Passport Online</h1>
                                <p>As a passport agent in Delhi, we helps people to get a new passport, renew an old one or make correction in existing</p>

                                <br />
                                <button className='rounded-lg bg-orange-600 hover:bg-white hover:text-black hover:border-orange-600 hover:border text-white px-4 py-0 font-semibold ease-in-out duration-500 h-14'>
                                    <NavLink to="/passportsignup">Get Passport</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PassportHero;
