import React, { useState } from 'react'
import PassportNav from '../PassportNav/PassportNav';
import { NavLink, useNavigate } from 'react-router-dom';

const PassportSignUp = (props) => {
    props.funNav(false);
    const [isChecked, setIsChecked] = useState(false);
    const [openVerify, setOpenVerify] = useState(false);
    const [otp, setOtp] = useState();
    const [mobile, setMobile] = useState();
    const [resendOtp, setResendOtp] = useState(false);
    const nevigate = useNavigate();


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

    //for item into cart 
    const [cartOpen, setCartOpen] = useState(false);

    const [selectedApplyType, setSelectedApplyType] = useState("");
    const [selectedApplicationType, setSelectedApplicationType] = useState("");
    const [selectedBookletType, setSelectedBookletType] = useState("");

    const handleApplyTypeChange = (event) => {
        setSelectedApplyType(event.target.value);
    };

    const handleApplicationTypeChange = (event) => {
        setSelectedApplicationType(event.target.value);
    };

    const handleBookletTypeChange = (event) => {
        setSelectedBookletType(event.target.value);
    };

    const handleCartApplication = (event) => {
        event.preventDefault();
        const accessToken = sessionStorage.getItem("access_token");
        // Call the API with the selected values and the access token
        fetch('http://35.154.44.25:8000/passport/login-and-add-to-cart/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                applying_for: selectedApplyType,
                type_of_application: selectedApplicationType,
                booklet: selectedBookletType
            })
        })
            .then(response => response.json())
            .then(data => {
                // Handle API response data
                // console.log(data);
                alert(data.success);
                nevigate("/passportsignin");
                setCartOpen(false);

            })
            .catch(error => {
                // Handle API error
            });
    };


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
                setOpenVerify(true);
                alert(data?.message);
                // Handle the response data
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Something Is Wrong")
                // Handle the error appropriately
            });
    };

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
                    setOpenVerify(false);
                    sessionStorage.setItem('access_token', data.access);
                    alert("You're Varified Now.")
                    setCartOpen(true);
                } else {
                    alert("You're not verified")
                    setResendOtp(true);
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
            {
                cartOpen && (
                    <div className="mt-10 sm:mx-auto w-2/12 z-50 flex items-center justify-center absolute top-10 bottom-0 left-0 right-0">
                        <form onSubmit={handleCartApplication} className="p-6 bg-black rounded-lg shadow w-full">
                            <h4 className='text-white text-2xl'>Details of your passport</h4>
                            <br />
                            <div className="mb-4">
                                <label htmlFor="applyType" className="block text-2xl mb-4 text-white">
                                    Apply Type:
                                </label>
                                <select
                                    id="applyType"
                                    name="applyType"
                                    value={selectedApplyType}
                                    onChange={handleApplyTypeChange}
                                    className="block w-full border rounded-md text-2xl shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                                    required
                                >
                                    <option value="">Select Apply Type</option>
                                    <option value="Fresh_Passport">Fresh Passport</option>
                                    <option value="Re-Issue">Re-Issue</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="applicationType" className="block text-2xl mb-2 text-white">
                                    Application Type:
                                </label>
                                <select
                                    id="applicationType"
                                    name="applicationType"
                                    value={selectedApplicationType}
                                    onChange={handleApplicationTypeChange}
                                    className="block w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none text-2xl"
                                    required
                                >
                                    <option value="">Select Application Type</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Tatkaal">Tatkaal</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="bookletType" className="block mb-2 text-2xl text-white">
                                    Booklet Type:
                                </label>
                                <select
                                    id="bookletType"
                                    name="bookletType"
                                    value={selectedBookletType}
                                    onChange={handleBookletTypeChange}
                                    className="block w-full border text-2xl rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                                    required
                                >
                                    <option value="">Select Booklet Type</option>
                                    <option value="36_pages">36 pages</option>
                                    <option value="60_pages">60 pages</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                )
            }
            {
                openVerify && (
                    <>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm z-50 flex items-center justify-center absolute top-10 bottom-0 left-0 right-0">
                            <form className="space-y-6 bg-slate-900 py-5 w-96 px-5" onSubmit={handleOtp}>

                                <div>
                                    <label htmlFor="last-name" className="block text-2xl font-medium leading-6 text-white">
                                        Your Otp
                                    </label>
                                    <div className="mt-2">
                                        <input
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
                                    <label htmlFor="last-name" className="block text-2xl font-medium leading-6 text-white">
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
                                </div>

                                <div className='resend-otp'>
                                    <button onClick={handleResendOtp} disabled={!resendOtp}>
                                        <p className='text-white text-xl'>Resend Otp</p>
                                    </button>

                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-2xl"
                                    >
                                        Verify Otp
                                    </button>
                                </div>


                            </form>


                        </div>
                    </>
                )
            }
            <div className={`flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  w-full h-screen items-center ${openVerify || cartOpen ? 'opacity-20 backdrop-blur' : ''}`}>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up to your account
                    </h2>
                </div>

                <div className="mt-10 rounded p-5 bg-slate-200">
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
                                    className="block w-full rounded-md border-0 py-1.5 text-2xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 2xl:text-sm sm:leading-6"
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
                            <label htmlFor="last-name" className=" text-2xl font-medium leading-6 text-gray-900 flex justify-center items-center">
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
                      <h6 className='text-center'>Or</h6> 
                        <br />
                        <NavLink to="/passportsignin" className='text-black font-bold text-xl text-center w-full m-auto'>Already Have An Account?</NavLink>

                    </form>


                </div>
            </div>
        </>
    )
}

export default PassportSignUp;
