import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';

const AdminLogin = (props) => {
    props.funNav(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const nevigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Replace the URL with the correct login endpoint
            const response = await axios.post('http://3.110.195.48:8000/accounts/token/login/', {
                username,
                password,
            });
            console.log(response);
            const accessToken = response.data.access;

            // Store the access token in localStorage
            localStorage.setItem('accessToken', accessToken);

            // Perform any additional actions after successful login, e.g., redirect to another page
            console.log('Login successful!');
            nevigate('/admin')
        } catch (error) {
            console.log('Error during login:', error);
        }
    };

    return (
        <div className="">
            <AdminLayout />
            <div className=' align-bottom py-60 flex mx-auto my-auto w-24 absolute top-60 left-96 justify-center items-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block font-medium mb-1">Username</label>
                        <input
                            type="email"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block font-medium mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                        Login
                    </button>
                </form>
            </div>

        </div>
    );
};

export default AdminLogin;
