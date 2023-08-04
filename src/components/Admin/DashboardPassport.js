import React, { useState } from 'react';
import axios from 'axios';
import { Dialog } from '@material-tailwind/react';
import { Transition } from '@headlessui/react';
import AdminPassportEdit from '../../admin/AdminPassportEdit';
import { BASE_URL } from '../../config';


const DashboardPassport = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [formId, setFormId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [applications, setApplications] = useState([]);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedApplication, setSelectedApplication] = useState(null); // Track the selected application for editing

    const handleEdit = (id) => {
        // const selectedApp = applications.find((app) => app.pk === id);
        setSelectedApplication(id);
        setShowEditForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const accessToken = localStorage.getItem('accessToken'); // Replace with your actual access token

            const params = {};

            if (mobileNumber) {
                params['mobile_number'] = mobileNumber;
            }

            if (formId) {
                params['form_id'] = formId;
            }

            if (firstName) {
                params['first_name'] = firstName;
            }

            if (lastName) {
                params['last_name'] = lastName;
            }

            const response = await axios.get(`${BASE_URL}/admins/applicant-form-status/`, {
                params,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            });
            setApplications(response.data.results);
        } catch (error) {
            console.log(error)
        }


    };

    const handleEditFormClose = () => {
        setShowEditForm(false);
        setSelectedApplication(null);
    };
    return (
        <div>
            <div className={showEditForm && 'opacity-0 bg-black'}>
                <form onSubmit={handleSubmit} className="mx-auto p-4 bg-white shadow-md rounded-md flex justify-center items-center">
                    <div className="mb-4">
                        <label htmlFor="orderCourierStatus" className="block mb-2 text-2xl text-gray-700">Mobile</label>
                        <input
                            type="text"
                            id="mobile_number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 text-2xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="p-5"></div>
                    <div className="mb-4">
                        <label htmlFor="orderCourierStatus" className="block mb-2 text-2xl text-gray-700">Form Id</label>
                        <input
                            type="text"
                            id="form_id"
                            value={formId}
                            onChange={(e) => setFormId(e.target.value)}
                            className="w-full px-4 py-2 border text-2xl border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="p-5"></div>
                    <div className="mb-4">
                        <label htmlFor="orderCourierStatus" className="block mb-2 text-2xl font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="first_name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 text-2xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="p-5"></div>
                    <div className="mb-4">
                        <label htmlFor="orderCourierStatus" className="block mb-2 text-2xl font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="last_name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 text-2xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>



                    <button type="submit" className="w-auto h-7 px-5 py-5 items-center flex justify-center text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 ml-3">
                        Search
                    </button>
                </form>
                <table className="w-full border-collapse border border-gray-300 text-center">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border text-2xl border-gray-300">FormId</th>
                            <th className="px-4 py-2 border text-2xl border-gray-300">Mobile</th>
                            <th className="px-4 py-2 border text-2xl border-gray-300">Name</th>
                            <th className="px-4 py-2 border text-2xl border-gray-300">Status</th>
                            <th className="px-4 py-2 border text-2xl border-gray-300">Edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {applications?.map((application, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                <td className="px-4 py-2 border text-2xl border-gray-300">{application.form_id}</td>
                                <td className="px-4 py-2 border text-2xl border-gray-300">{application.mobile_number}</td>
                                <td className="px-4 py-2 border text-2xl border-gray-300">{`${application.first_name} ${application.last_name}`}</td>
                                <td className="px-4 py-2 border text-2xl border-gray-300">{application.status}</td>
                                <button
                                    onClick={() => handleEdit(application.pk)}
                                    className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded focus:outline-none"
                                >
                                    Edit
                                </button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Shoe the model */}
            {showEditForm && selectedApplication && (
                <div className="absolute top-0">
                    <AdminPassportEdit application={selectedApplication} onClose={handleEditFormClose} />
                </div>
            )}
        </div>
    )
}

export default DashboardPassport;
