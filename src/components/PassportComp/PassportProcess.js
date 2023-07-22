import React, { useState } from 'react';
import PassportNav from '../PassportNav/PassportNav';
import { useNavigate } from 'react-router-dom';

const PassportProcess = (props) => {
    props.funNav(false);
    const nevigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        gender: '',
        dob: '',
        alias: false,
        alias_name: '',
        ever_changed_name: false,
        changed_name: '',
        place_of_birth_is_india: false,
        place_of_birth_name: '',
        marital_status: '',
        pan_card: '',
        voter_id: '',
        employment: '',
        family_member_is_govt_servant: false,
        education_qualification: '',
        visible_distinguishing_mark: '',
        aadhar_number: '',
        fathers_first_name: '',
        fathers_last_name: '',
        legal_guardian_first_name: '',
        legal_guardian_last_name: '',
        mother_first_name: '',
        mother_last_name: '',
        present_address_out_of_india: false,
        house_no_and_street_name: '',
        place_of_present_address: '',
        country_of_present_address: '',
        state_of_present_address: '',
        district_of_present_address: '',
        zip_code_of_present_address: '',
        mobile_number_of_present_address: '',
        telephone_of_present_address: '',
        email_of_present_address: '',
        permanent_address: false,
        name_of_emergency_contact: '',
        address_of_emergency_contact: '',
        mobile_number_of_emergency_contact: '',
        telephone_of_emergency_contact: '',
        email_of_emergency_contact: '',
        are_any_proceedings_pending: false,
        has_warrant_or_summons_pending: false,
        has_arrest_warrant: false,
        has_prohibiting_order: false,
        has_conviction_for_offence: false,
        have_you_ever_been_refused_denied_passport: false,
        has_your_passport_ever_been_impounded: false,
        has_your_passport_ever_been_revoked: false,
        have_granted_citizenship: false,
        have_held_passport_of_other_country: false,
        have_you_ever_surrendered_your_indian_passport: false,
        have_you_ever_applied_for_renunciation_of_indian_citizenship: false,
        have_you_ever_returned_to_india_on_emergency_certificate_ec: false,
        have_you_ever_been_deported_from_any_country: false,
        have_you_ever_been_repatriated_from_any_country_back_to_india: false,
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Retrieve the access token from sessionStorage
        const accessToken = sessionStorage.getItem('access_token');
        console.log(accessToken);

        console.log(formData);
        // Make the POST request
        fetch('http://35.154.44.25:8000/passport/create_application/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`, // Set the Authorization header with the access token
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                } else if (response.ok) {
                    alert("Application Submited");
                    nevigate("/tracking")
                }
                return response.json();
            })
            .then((data) => {
                console.log('Response:', data);
                // Handle the response data here
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle errors here
            });
    };




    return (
        <>
            <PassportNav />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="xl:w-2/4 md:w-2/3 sm:w-2/3 mx-auto p-6 bg-white rounded-md shadow-md">
                <h1 className="text-2xl font-bold mb-4">Fill The Form</h1>
                <form onSubmit={handleSubmit} className="space-y-4 w-full">
                    {/* <div>
                        <label className="block mb-2">
                            <span className="text-gray-800 text-2xl ">Form ID:</span>
                            <input
                                type="text"
                                name="form_id"
                                value={formData.form_id}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-2xl"
                            />
                        </label>
                    </div> */}

                    <div className="total-data xl:flex md:flex justify-between">
                        <div className="set-1 p-2">
                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">First Name:</span>
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Last Name:</span>
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Gender:</span>
                                    <input
                                        type="text"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Date Of Birth:</span>
                                    <input
                                        type="text"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="alias"
                                        checked={formData.alias}
                                        onChange={handleChange}
                                        className="form-checkbox"
                                    />
                                    <span className="text-gray-800 text-2xl ">Alias:</span>
                                </label>

                                {formData.alias && (
                                    <label className="block mt-2">
                                        <span className="text-gray-800 text-2xl ">Alias Name:</span>
                                        <input
                                            type="text"
                                            name="alias_name"
                                            value={formData.alias_name}
                                            onChange={handleChange}
                                            required
                                            className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                        />
                                    </label>
                                )}
                            </div>

                            <div>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="ever_changed_name"
                                        checked={formData.ever_changed_name}
                                        onChange={handleChange}
                                        className="form-checkbox"
                                    />
                                    <span className="text-gray-800 text-2xl ">Ever Changed Name:</span>
                                </label>

                                {formData.ever_changed_name && (
                                    <label className="block mt-2">
                                        <span className="text-gray-800 text-2xl ">Changed Name:</span>
                                        <input
                                            type="text"
                                            name="changed_name"
                                            value={formData.changed_name}
                                            onChange={handleChange}
                                            required
                                            className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                        />
                                    </label>
                                )}
                            </div>

                            <div>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="place_of_birth_is_india"
                                        checked={formData.place_of_birth_is_india}
                                        onChange={handleChange}
                                        className="form-checkbox"
                                    />
                                    <span className="text-gray-800 text-2xl ">Place of Birth is India:</span>
                                </label>

                                {formData.place_of_birth_is_india && (
                                    <label className="block mt-2">
                                        <span className="text-gray-800 text-2xl ">Place of Birth Name:</span>
                                        <input
                                            type="text"
                                            name="place_of_birth_name"
                                            value={formData.place_of_birth_name}
                                            onChange={handleChange}
                                            required
                                            className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                        />
                                    </label>
                                )}
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Marital Status:</span>
                                    <input
                                        type="text"
                                        name="marital_status"
                                        value={formData.marital_status}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">PAN Card:</span>
                                    <input
                                        type="text"
                                        name="pan_card"
                                        value={formData.pan_card}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Voter ID:</span>
                                    <input
                                        type="text"
                                        name="voter_id"
                                        value={formData.voter_id}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Employment:</span>
                                    <input
                                        type="text"
                                        name="employment"
                                        value={formData.employment}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>


                            <div>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="family_member_is_govt_servant"
                                        checked={formData.family_member_is_govt_servant || false}
                                        onChange={handleChange}
                                        className="form-checkbox"
                                    />
                                    <span className="text-gray-800 text-2xl ">Family Member is Government Servant:</span>
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Education Qualification:</span>
                                    <input
                                        type="text"
                                        name="education_qualification"
                                        value={formData.education_qualification || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Visible Distinguishing Mark:</span>
                                    <input
                                        type="text"
                                        name="visible_distinguishing_mark"
                                        value={formData.visible_distinguishing_mark || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Aadhar Number:</span>
                                    <input
                                        type="text"
                                        name="aadhar_number"
                                        value={formData.aadhar_number || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Father's First Name:</span>
                                    <input
                                        type="text"
                                        name="fathers_first_name"
                                        value={formData.fathers_first_name || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Father's Last Name:</span>
                                    <input
                                        type="text"
                                        name="fathers_last_name"
                                        value={formData.fathers_last_name || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Legal Guardian's First Name:</span>
                                    <input
                                        type="text"
                                        name="legal_guardian_first_name"
                                        value={formData.legal_guardian_first_name || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Legal Guardian's Last Name:</span>
                                    <input
                                        type="text"
                                        name="legal_guardian_last_name"
                                        value={formData.legal_guardian_last_name || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                        </div>
                        <div className="set-2 p-2">




                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Mother's First Name:</span>
                                    <input
                                        type="text"
                                        name="mother_first_name"
                                        value={formData.mother_first_name || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Mother's Last Name:</span>
                                    <input
                                        type="text"
                                        name="mother_last_name"
                                        value={formData.mother_last_name || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="present_address_out_of_india"
                                        checked={formData.present_address_out_of_india || false}
                                        onChange={handleChange}
                                        className="form-checkbox"
                                    />
                                    <span className="text-gray-800 text-2xl ">Present Address out of India:</span>
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">House No and Street Name:</span>
                                    <input
                                        type="text"
                                        name="house_no_and_street_name"
                                        value={formData.house_no_and_street_name || ''}
                                        onChange={handleChange}
                                        className={`border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300 ${!formData.present_address_out_of_india ? 'opacity-50' : ''}`}
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Place of Present Address:</span>
                                    <input
                                        type="text"
                                        name="place_of_present_address"
                                        value={formData.place_of_present_address || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Country of Present Address:</span>
                                    <input
                                        type="text"
                                        name="country_of_present_address"
                                        value={formData.country_of_present_address || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">State of Present Address:</span>
                                    <input
                                        type="text"
                                        name="state_of_present_address"
                                        value={formData.state_of_present_address || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">District of Present Address:</span>
                                    <input
                                        type="text"
                                        name="district_of_present_address"
                                        value={formData.district_of_present_address || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Zip Code of Present Address:</span>
                                    <input
                                        type="text"
                                        name="zip_code_of_present_address"
                                        value={formData.zip_code_of_present_address || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Mobile Number of Present Address:</span>
                                    <input
                                        type="text"
                                        name="mobile_number_of_present_address"
                                        value={formData.mobile_number_of_present_address || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Telephone of Present Address:</span>
                                    <input
                                        type="text"
                                        name="telephone_of_present_address"
                                        value={formData.telephone_of_present_address || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Email of Present Address:</span>
                                    <input
                                        type="email"
                                        name="email_of_present_address"
                                        value={formData.email_of_present_address || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="permanent_address"
                                        checked={formData.permanent_address || false}
                                        onChange={handleChange}
                                        className="form-checkbox"
                                    />
                                    <span className="text-gray-800 text-2xl ">Permanent Address:</span>
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Name of Emergency Contact:</span>
                                    <input
                                        type="text"
                                        name="name_of_emergency_contact"
                                        value={formData.name_of_emergency_contact || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Address of Emergency Contact:</span>
                                    <input
                                        type="text"
                                        name="address_of_emergency_contact"
                                        value={formData.address_of_emergency_contact || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Mobile Number of Emergency Contact:</span>
                                    <input
                                        type="text"
                                        name="mobile_number_of_emergency_contact"
                                        value={formData.mobile_number_of_emergency_contact || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Telephone of Emergency Contact:</span>
                                    <input
                                        type="text"
                                        name="telephone_of_emergency_contact"
                                        value={formData.telephone_of_emergency_contact || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-gray-800 text-2xl ">Email of Emergency Contact:</span>
                                    <input
                                        type="email"
                                        name="email_of_emergency_contact"
                                        value={formData.email_of_emergency_contact || ''}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 px-3 py-2 mt-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>



                    <div className="data-2">
                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="are_any_proceedings_pending"
                                    checked={formData.are_any_proceedings_pending || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Are Any Proceedings Pending:</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="has_warrant_or_summons_pending"
                                    checked={formData.has_warrant_or_summons_pending || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Has Warrant or Summons Pending:</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="has_arrest_warrant"
                                    checked={formData.has_arrest_warrant || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Has Arrest Warrant:</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="has_prohibiting_order"
                                    checked={formData.has_prohibiting_order || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Has Prohibiting Order:</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="has_conviction_for_offence"
                                    checked={formData.has_conviction_for_offence || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Has Conviction for Offence:</span>
                            </label>
                        </div>



                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="have_you_ever_been_refused_denied_passport"
                                    checked={formData.have_you_ever_been_refused_denied_passport || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Have You Ever Been Refused/Denied Passport:</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="has_your_passport_ever_been_impounded"
                                    checked={formData.has_your_passport_ever_been_impounded || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Has Your Passport Ever Been Impounded:</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="has_your_passport_ever_been_revoked"
                                    checked={formData.has_your_passport_ever_been_revoked || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Has Your Passport Ever Been Revoked:</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="have_granted_citizenship"
                                    checked={formData.have_granted_citizenship || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Have Granted Citizenship:</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="have_held_passport_of_other_country"
                                    checked={formData.have_held_passport_of_other_country || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Have Held Passport of Other Country:</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="have_you_ever_surrendered_your_indian_passport"
                                    checked={formData.have_you_ever_surrendered_your_indian_passport || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Have You Ever Surrendered Your Indian Passport:</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="have_you_ever_applied_for_renunciation_of_indian_citizenship"
                                    checked={formData.have_you_ever_applied_for_renunciation_of_indian_citizenship || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Have You Ever Applied for Renunciation of Indian Citizenship:</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="have_you_ever_returned_to_india_on_emergency_certificate_ec"
                                    checked={formData.have_you_ever_returned_to_india_on_emergency_certificate_ec || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Have You Ever Returned to India on Emergency Certificate (EC):</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="have_you_ever_been_deported_from_any_country"
                                    checked={formData.have_you_ever_been_deported_from_any_country || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Have You Ever Been Deported from Any Country:</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="have_you_ever_been_repatriated_from_any_country_back_to_india"
                                    checked={formData.have_you_ever_been_repatriated_from_any_country_back_to_india || false}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span className="text-gray-800 text-2xl ">Have You Ever Been Repatriated from Any Country back to India:</span>
                            </label>
                        </div>

                    </div>

                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default PassportProcess;
