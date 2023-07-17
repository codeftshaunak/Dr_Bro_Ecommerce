import React, { useState } from 'react'
import PassportNav from '../PassportNav/PassportNav';

const PassportSignIn = (props) => {
    props.funNav(false);
    const [isChecked, setIsChecked] = useState(false);
    const [openVerify, setOpenVerify] = useState(ture);
    const [otp, setOtp] = useState();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        mobile_number: '',
        dob: '',
        email: '',
        whatsapp: isChecked
    });

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //Handle SignUp
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://35.154.44.25:8000/passport/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response:', data);
                // Handle the response data
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle the error appropriately
            });
    };

    //Hnadle Opt
    const handleOtp = (e) => {
        e.preventDefault();

    }

    const handleChageOtpStatus = (e) => {
        setOtp(e.target.value)
    }

    return (
        <>
            <PassportNav />



            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-500 w-full h-screen items-center">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="first-name" className="block text-2xl font-medium leading-6 text-gray-900">
                                First Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first_name"
                                    type="text"
                                    autoComplete="first name"
                                    value={formData.first_name}
                                    onChange={handleInputChange}
                                    required
                                    className="block w-80 rounded-md border-0 py-1.5 text-2xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 2xl:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="last-name" className="block text-2xl font-medium leading-6 text-gray-900">
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="last_name"
                                    type="text"
                                    autoComplete="last name"
                                    value={formData.last_name}
                                    onChange={handleInputChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-2xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="last-name" className="block text-2xl font-medium leading-6 text-gray-900">
                                Mobile
                            </label>
                            <div className="mt-2">
                                <input
                                    id="mobile"
                                    name="mobile_number"
                                    type="number"
                                    autoComplete="mobile"
                                    value={formData.mobile_number}
                                    onChange={handleInputChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="last-name" className="block text-2xl font-medium leading-6 text-gray-900">
                                Date Of Birth
                            </label>
                            <div className="mt-2">
                                <input
                                    id="dateofbirth"
                                    name="dob"
                                    type="date"
                                    autoComplete="dateofbirth"
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl sm:leading-6"
                                />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="last-name" className="block text-2xl font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="last-name" className=" text-2xl font-medium leading-6 text-gray-900 flex">
                                <input
                                    id="whatsapp-checkbox"
                                    name="whatsapp_checkbox"
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <p>
                                    What's app used on this number?
                                </p>
                            </label>
                        </div>


                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-2xl"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}

export default PassportSignUp;
