import React, { useState } from 'react';
import axios from 'axios';
import PassportNav from '../PassportNav/PassportNav';
import { useNavigate } from 'react-router-dom';

const PassportTrack = (props) => {
    props.funNav(false);
    const [statusData, setStatusData] = useState(null);
    const [error, setError] = useState("");
    console.log(error);
    const nevigate = useNavigate();

    const handleCheckStatus = async (e) => {
        e.preventDefault();
        try {
            const accessToken = sessionStorage.getItem('access_token');
            if (!accessToken) {
                setError('Access token not found in sessionStorage. Please SignUp/SignIn First');
                setTimeout(() => {
                    nevigate('/passportsignin')
                }, 2000);
                return;
            }

            const response = await axios.get('http://35.154.44.25:8000/passport/check-application-status/', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setStatusData(response.data);

        } catch (error) {
            console.log(error);
            if (error.response.status == 403 || 401) {
                setError("Your SignIn Session Is Expire.")
                setTimeout(() => {
                    nevigate('/passportsignin')
                }, 2000);
            } else if (error.response.data.status) {
                setError(error.response.data.status);
            }

            setStatusData(null);
        }
    };

    return (
        <>
            <PassportNav />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Passport Status</h2>
                    </div>
                    <form onSubmit={handleCheckStatus} className="mt-8 space-y-6">
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Check Status
                            </button>
                        </div>
                    </form>
                    {statusData && (
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-gray-900">Status Stages:</h2>
                            <ul className="mt-2 text-gray-600">
                                {statusData.stages.map((stage) => (
                                    <li key={stage.id} className="mb-1">
                                        {stage.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {error && <p className="mt-6 text-red-500">{error}</p>}
                </div>
            </div>
        </>
    );
};

export default PassportTrack;
