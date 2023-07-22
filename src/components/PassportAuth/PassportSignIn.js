import React, { useState } from 'react'
import PassportNav from '../PassportNav/PassportNav';
import { useNavigate } from 'react-router-dom';

const PassportSignIn = (props) => {
    props.funNav(false);
    const [otp, setOtp] = useState();
    const [mobile, setMobile] = useState();
    const [resendOtp, setResendOtp] = useState(false);
    const nevigate = useNavigate();


    //Hnadle Opt
    const handleOtp = (e) => {
        e.preventDefault();
        fetch('http://35.154.44.25:8000/passport/applicant/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ otp: otp, mobile_number: mobile })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response:', data);
                if (data.access) {
                    sessionStorage.setItem('access_token', data.access);
                    nevigate("/getpassports")
                } else {
                    alert("You're not verified")
                }
                // Handle the response data
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle the error appropriately
            });

    }

    const handleChangeVerift = (e) => {
        const { name, value } = e.target;
        if (name === 'otp') {
            setOtp(value);
        } else if (name === 'mobile_number') {
            setMobile(value);
        }
    };


    //Handle Resend Otp
    const handleResendOtp = (e) => {
        e.preventDefault();
        fetch('http://35.154.44.25:8000/passport/resend-otp/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ mobile_number: mobile })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response:', data);
                if (data.mobile_number) {
                    alert("Input Mobile Number And Get OTP")
                } else {
                    alert(data.message)
                    setResendOtp(true)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Something Is Wrong")
                // Handle the error appropriately
            });
    }


    return (
        <>
            <PassportNav />



            <>
                <div className={'flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  w-full h-screen items-center'}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign In to your account
                        </h2>
                    </div>
                    <div className="mt-10 rounded p-5 bg-slate-200">

                        <form className="space-y-6 py-5 w-96 px-5" onSubmit={handleOtp}>
                            <div>
                                <label htmlFor="last-name" className="block text-2xl font-medium leading-6 text-black">
                                    Mobile
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="mobile_number"
                                        name="mobile_number"
                                        type="number"
                                        autoComplete="off"
                                        onChange={handleChangeVerift}
                                        value={mobile}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl sm:leading-6"
                                    />
                                </div>
                                <div className='resend-otp'>
                                    <button onClick={handleResendOtp}>
                                        <p className='text-black text-2xl'>Get Otp</p>
                                    </button>

                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-2xl font-medium leading-6 text-black">
                                    Your Otp
                                </label>
                                <div className="mt-2">
                                    <input
                                        disabled={!resendOtp}
                                        id="otp"
                                        name="otp"
                                        type="number"
                                        autoComplete="off"
                                        onChange={handleChangeVerift}
                                        value={otp}
                                        className="block w-full rounded-md border-0 py-1.5 text-2xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                                    />
                                </div>
                            </div>



                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-2xl"
                                >
                                    Login
                                </button>
                            </div>


                        </form>
                    </div>

                </div>
            </>
        </>
    )
}

export default PassportSignIn;
