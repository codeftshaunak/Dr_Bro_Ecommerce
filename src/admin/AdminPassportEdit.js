import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../config';
import axios from 'axios';

const AdminPassportEdit = ({ application, onSave, onClose }) => {
    const [editedData, setEditedData] = useState({ ...application });
    const [data, setData] = useState({});
    console.log(data);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

    // const getData = async (e) => {
    //     e.preventDefault();

    // }

    useEffect(async () => {
        const access_token = localStorage.getItem('accessToken');
        try {
            const response = await axios.get(`${BASE_URL}/admins/applicant-form-status/${application}/`, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });
            setData(response.data)
            console.log(response);
        } catch (error) {

        }
    }, [application])



    const handleSubmit = async (e) => {
        e.preventDefault();
        const access_token = localStorage.getItem('accessToken')
        try {
            // Send the edited data to the server to update the application
            // You can use Axios to make the PUT request to update the application data
            const response = await axios.put(`${BASE_URL}/admins/applicant-form-status/${application}/`, editedData, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                },
            });

            console.log('Updated Application:', response.data);

            // Close the modal after successful update
            onClose();
        } catch (error) {
            console.log('Error updating application:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 justify-around">
            <h2 className="text-2xl font-medium mb-4">Edit Application</h2>
            <div className="flex">

                <div>
                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium text-xl text-gray-700">Status</label>
                        <input
                            type="text"
                            id="form_id"
                            name="status"
                            value={data?.status}
                            onChange={handleChange}
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium text-xl text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="form_id"
                            name="first_name"
                            value={data?.first_name}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="form_id"
                            name="last_name"
                            value={data?.last_name}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">Mobile Number</label>
                        <input
                            type="text"
                            id="form_id"
                            name="last_name"
                            value={data?.mobile_number}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">Email</label>
                        <input
                            type="text"
                            id="form_id"
                            name="last_name"
                            value={data?.email}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">Date of Birth</label>
                        <input
                            type="text"
                            id="form_id"
                            name="dob"
                            value={data?.dob}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">Adaar Card No</label>
                        <input
                            type="text"
                            id="form_id"
                            name="aadhar_number"
                            value={data?.aadhar_number}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">Address of emergency contact</label>
                        <input
                            type="text"
                            id="form_id"
                            name="address_of_emergency_contact"
                            value={data?.address_of_emergency_contact}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700 capitalize">country of present address</label>
                        <input
                            type="text"
                            id="form_id"
                            name="address_of_emergency_contact"
                            value={data?.country_of_present_address}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700 capitalize">district of present address</label>
                        <input
                            type="text"
                            id="form_id"
                            name="address_of_emergency_contact"
                            value={data?.district_of_present_address}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700 capitalize">education qualification</label>
                        <input
                            type="text"
                            id="form_id"
                            name="address_of_emergency_contact"
                            value={data?.education_qualification}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Has Prohibiting Order
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="has_prohibiting_order"
                            value={data?.has_prohibiting_order ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Has Warrant or Summons Pending
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="has_warrant_or_summons_pending"
                            value={data?.has_warrant_or_summons_pending ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>


                <div>
                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700 capitalize">employment</label>
                        <input
                            type="text"
                            id="form_id"
                            name="address_of_emergency_contact"
                            value={data?.employment}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">Address of emergency contact</label>
                        <input
                            type="text"
                            id="form_id"
                            name="address_of_emergency_contact"
                            value={data.alias ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">Are Any Processing Pending</label>
                        <input
                            type="text"
                            id="form_id"
                            name="are_any_proceedings_pending"
                            value={data.are_any_proceedings_pending ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700 capitalize"> changed name</label>
                        <input
                            type="text"
                            id="form_id"
                            name="are_any_proceedings_pending"
                            value={data.changed_name ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">Alias Name</label>
                        <input
                            type="text"
                            id="form_id"
                            name="alias_name"
                            value={data.alias_name}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Ever Changed Name
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="ever_changed_name"
                            value={data?.ever_changed_name ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Family Member is Government Servant
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="family_member_is_govt_servant"
                            value={data?.family_member_is_govt_servant ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Father's First Name
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="fathers_first_name"
                            value={data?.fathers_first_name}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Father's Last Name
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="fathers_last_name"
                            value={data?.fathers_last_name}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Gender
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="gender"
                            value={data?.gender}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Has Arrest Warrant
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="has_arrest_warrant"
                            value={data?.has_arrest_warrant ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Has Conviction for Offence
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="has_conviction_for_offence"
                            value={data?.has_conviction_for_offence ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>



                </div>



                <div>
                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Has Your Passport Ever Been Impounded
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="has_your_passport_ever_been_impounded"
                            value={data?.has_your_passport_ever_been_impounded ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Has Your Passport Ever Been Revoked
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="has_your_passport_ever_been_revoked"
                            value={data?.has_your_passport_ever_been_revoked ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            House No and Street Name
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="house_no_and_street_name"
                            value={data?.house_no_and_street_name}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Is Active
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="is_active"
                            value={data?.is_active ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="last_name"
                            value={data?.last_name}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Legal Guardian First Name
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="legal_guardian_first_name"
                            value={data?.legal_guardian_first_name}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Legal Guardian Last Name
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="legal_guardian_last_name"
                            value={data?.legal_guardian_last_name}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Add the remaining fields similarly */}
                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Marital Status
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="marital_status"
                            value={data?.marital_status}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="mobile_number"
                            value={data?.mobile_number}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Mobile Number of Emergency Contact
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="mobile_number_of_emergency_contact"
                            value={data?.mobile_number_of_emergency_contact}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Mobile Number of Present Address
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="mobile_number_of_present_address"
                            value={data?.mobile_number_of_present_address}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                </div>


                <div>
                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Name of Emergency Contact
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="name_of_emergency_contact"
                            value={data?.name_of_emergency_contact}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            OTP
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="otp"
                            value={data?.otp}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            PAN Card
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="pan_card"
                            value={data?.pan_card || "N/A"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Permanent Address
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="permanent_address"
                            value={data?.permanent_address ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Place of Birth is in India
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="place_of_birth_is_india"
                            value={data?.place_of_birth_is_india ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Place of Birth Name
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="place_of_birth_name"
                            value={data?.place_of_birth_name}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Place of Present Address
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="place_of_present_address"
                            value={data?.place_of_present_address}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Present Address Out of India
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="present_address_out_of_india"
                            value={data?.present_address_out_of_india ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            State of Present Address
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="state_of_present_address"
                            value={data?.state_of_present_address}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Status
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="status"
                            value={data?.status}
                            onChange={handleChange}
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Telephone of Emergency Contact
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="telephone_of_emergency_contact"
                            value={data?.telephone_of_emergency_contact}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Telephone of Present Address
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="telephone_of_present_address"
                            value={data?.telephone_of_present_address}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Mother's First Name
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="mother_first_name"
                            value={data?.mother_first_name}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Mother's Last Name
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="mother_last_name"
                            value={data?.mother_last_name}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Visible Distinguishing Mark
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="visible_distinguishing_mark"
                            value={data?.visible_distinguishing_mark}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Voter ID
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="voter_id"
                            value={data?.voter_id}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            WhatsApp
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="whatsapp"
                            value={data?.whatsapp ? "Yes" : "No"}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form_id" className="block font-medium w-96 text-xl text-gray-700">
                            Zip Code of Present Address
                        </label>
                        <input
                            type="text"
                            id="form_id"
                            name="zip_code_of_present_address"
                            value={data?.zip_code_of_present_address}
                            onChange={handleChange}
                            disabled
                            className="w-60 px-4 py-2 border border-gray-300 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

            </div>

            <div className="flex justify-center mb-4">
                <button type="button" onClick={onClose} className="mr-2 text-white bg-gray-500 hover:bg-gray-600 px-4 py-1 rounded focus:outline-none">
                    Cancel
                </button>
                <button type="submit" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded focus:outline-none">
                    Save
                </button>
            </div>
        </form>
    );
};

export default AdminPassportEdit;
