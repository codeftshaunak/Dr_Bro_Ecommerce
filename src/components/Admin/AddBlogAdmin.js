import React, { useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { BASE_URL } from '../../config';
import { getAuthorizationHeader } from '../../auth/adminAuth';
import { allProductList } from '../../auth/adminapi';


const AddBlogAdmin = ({ onCloseForm }) => {
    const [formData, setFormData] = useState({
        title: '',
        link: '',
        thumbnail: null,
    });
    const [imageDataUrl, setImageDataUrl] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // const handleImageUpload = (event) => {
    //     const file = event.target.files[0];
    //     setFormData((prevData) => {
    //         return { ...prevData, thumbnail: file }
    //     });
    // };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageDataUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
        setFormData((prevData) => {
            return { ...prevData, thumbnail: file }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('title', formData.title);
            formDataToSend.append('link', formData.link);
            // Append the file data to the FormData object
            formDataToSend.append('thumbnail', formData.thumbnail);

            const response = await fetch(`${BASE_URL}/admins/blogs/`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: getAuthorizationHeader(), // Include authorization header if needed
                },
                body: formDataToSend,
            });
            if (!response.ok) {
                throw new Error('Failed to create the product.');
            }

            const data = await response.json();
            console.log('New Product:', data);
            allProductList()
            // Reset the form after successful submission
            setFormData({
                title: '',
                link: '',
            });
            setImageDataUrl(null)

        } catch (error) {
            console.error(error);
        }

    };

    return (
        <div>
            <form className='bg-white pt-10 pl-10' onSubmit={handleSubmit}>
                <h2 className="text-5xl font-bold leading-7 text-gray-900">Add Your Blog</h2>
                <p className="mt-1 text-2xl leading-6 text-gray-600">
                    Add your blog details here.
                </p>

                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 gap-0 grid grid-cols-1 sm:grid-cols-6 sm:gap-0">
                        <div className="sm:col-span-3">
                            <label htmlFor="product_name" className="block text-2xl font-medium leading-6 text-gray-900">
                                Blog Title
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    autoComplete="given-name"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="block w-full normal-case rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-2xl font-medium leading-6 text-gray-900">
                                Blog Video Link
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="link"
                                    id="availiability"
                                    autoComplete="availiability"
                                    value={formData.link}
                                    onChange={handleChange}
                                    className="block w-full normal-case rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-2xl font-medium leading-6 text-gray-900">
                                Blog Image
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-20 relative">

                                {imageDataUrl && (
                                    <img src={imageDataUrl} alt="Uploaded Cover" className="mx-auto h-full flex justify-center w-full absolute object-cover left-0 top-0" />
                                )}
                                <div className="text-center h-[190px] flex flex-col justify-center">

                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div className="mt-4 flex text-2xl leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer p-4 rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="thumbnail" type="file" className="sr-only" onChange={handleImageUpload} />
                                        </label>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=" flex items-center justify-end gap-x-6 ">
                    <button type="button" className="text-2xl font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddBlogAdmin;
