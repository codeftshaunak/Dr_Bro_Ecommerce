import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { singleBlogList, singleLocationList } from '../../auth/adminapi';
import { Card } from 'antd';
import { BASE_URL } from '../../config';
import { getAuthorizationHeader } from '../../auth/adminAuth';
import { PhotoIcon } from '@heroicons/react/24/solid';

const LocationEdit = () => {
    const [data, setData] = useState([]);
    const [imageDataUrl, setImageDataUrls] = useState(null);
    const nevigate = useNavigate();

    const { id } = useParams()
    const [formData, setFormData] = useState({
        title: data.title || '',
        lat: data.lat || '',
        long: data.long || '',
        thumbnail: data.thumbnail || null,
    });

    useEffect(() => {
        setFormData({
            title: data.title,
            lat: data.lat,
            long: data.long,
            thumbnail: data.thumbnail
        })
    }, [data])


    useEffect(() => {
        const fetchData = async () => {
            const data = await singleLocationList(id);
            console.log(data);
            setData(data)
        }
        fetchData()
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageDataUrls(reader.result);
            };
            reader.readAsDataURL(file);
        }
        setFormData((prevData) => {
            return { ...prevData, thumbnail: file }
        });
    };

    const handleUpdate = async (e, id) => {
        e.preventDefault()
        console.log(id);
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('title', formData.title);
            formDataToSend.append('lat', formData.lat);
            formDataToSend.append('long', formData.long);
            if (imageDataUrl) {
                formDataToSend.append('thumbnail', formData.thumbnail);
            }

            console.log(formDataToSend);
            const response = await fetch(`${BASE_URL}/admins/places/${id}/`, {
                method: 'PUT',
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
            nevigate("/adminlocation")

            console.log('New Product:', data);
            // Reset the form after successful submission
            // setFormData({
            //     product_name: '',
            //     description: '',
            //     availiability: '',
            //     category: '',
            //     price: '',
            //     published: null
            // });


            // window.location.reload()
        } catch (error) {
            console.error('Error update product:', error);
        }
    }



    return (
        <div>
            <Card className=''>
                <form action="#" className='w-[30%] m-auto z-50'>
                    <h3 className='font-bold pb-4'>Edit Location</h3>
                    <label htmlFor="#" className='text-2xl font-bold'>Location Name</label>
                    <input type="text" name="title" defaultValue={data.title} onChange={handleChange}
                        className='normal-case text-2xl p-4 w-full m-auto' />
                    <br />
                    <br />
                    <label htmlFor="#" className='text-2xl font-bold'>Lat. </label>
                    <input type="text" name="location" defaultValue={data.lat} onChange={handleChange}
                        className='normal-case text-2xl p-4 w-full m-auto' />
                    <br />
                    <br />
                    <label htmlFor="#" className='text-2xl font-bold'>Lon. </label>
                    <input type="text" name="location" defaultValue={data.long} onChange={handleChange}
                        className='normal-case text-2xl p-4 w-full m-auto' />
                    <br />
                    <br />
                    <div className="">
                        <label htmlFor="cover-photo" className="block text-2xl font-medium leading-6 text-gray-900">
                            Location Image
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 relative w-full">
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-20 relative w-full">
                                {imageDataUrl ? (
                                    <img src={imageDataUrl} alt="Uploaded Cover" className="mx-auto h-full flex justify-center w-full absolute object-cover left-0 top-0" />
                                ) : <img src={data.thumbnail} alt="Uploaded Cover" className="mx-auto h-full flex justify-center w-full absolute object-cover left-0 top-0" />
                                }
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
                    <div className=" flex items-center justify-end gap-x-6 ">
                        <button type="button" className="text-2xl font-semibold leading-6 text-gray-900" onClick={() => nevigate("/adminblog")}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={(e) => handleUpdate(e, data.pk)}
                        >
                            Update
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default LocationEdit;
