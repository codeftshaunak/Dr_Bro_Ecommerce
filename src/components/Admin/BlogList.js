import React, { useEffect, useState } from 'react'
import { allBlogList, handleDeleteBlog } from '../../auth/adminapi';
import { Button, Card } from "@material-tailwind/react";
import { PhotoIcon } from '@heroicons/react/24/solid';
import { BASE_URL } from '../../config';
import { getAuthorizationHeader } from '../../auth/adminAuth';
import BlogEdit from './BlogEdit';
import { useNavigate } from 'react-router-dom';

const BlogList = () => {
    const [data, setData] = useState([]);
    const nevigate = useNavigate();
    // const [showEdit, setShowEdit] = useState(false);
    // const [imageDataUrl, setImageDataUrls] = useState({});
    // const [formData, setFormData] = useState({
    //     title: data.title || '',
    //     link: data.link || '',
    // });

    // console.log(data);
    useEffect(() => {
        const fetchData = async () => {
            const data = await allBlogList();
            setData(data.results)
        }
        fetchData();
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        handleDeleteBlog(id);
    }

    const handleEdit = (id) => {
        nevigate(`/adminblogedit/${id}`)

    }


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [name]: value,
    //     }));
    // };

    // useEffect(() => {
    //     setFormData({
    //         title: data.title,
    //         link: data.link,
    //     })
    // }, [data])

    // const handleImageUpload = (event, blogId) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setImageDataUrls((prevData) => ({
    //                 ...prevData,
    //                 [blogId]: reader.result,
    //             }));
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    // const handleUpdate = async (e, id) => {
    //     e.preventDefault()
    //     console.log(id);
    //     try {
    //         const formDataToSend = new FormData();
    //         formDataToSend.append('title', formData.title);
    //         formDataToSend.append('link', formData.link);
    //         if (imageDataUrl) {
    //             formDataToSend.append('thumbnail', formData.thumbnail);
    //         }

    //         console.log(formDataToSend);
    //         const response = await fetch(`${BASE_URL}/admins/blogs/${id}/`, {
    //             method: 'PUT',
    //             headers: {
    //                 Accept: 'application/json',
    //                 Authorization: getAuthorizationHeader(), // Include authorization header if needed
    //             },
    //             body: formDataToSend,
    //         });
    //         if (!response.ok) {
    //             throw new Error('Failed to create the product.');
    //         }

    //         const data = await response.json();
    //         setShowEdit(false)
    //         console.log('New Product:', data);
    //         // Reset the form after successful submission
    //         // setFormData({
    //         //     product_name: '',
    //         //     description: '',
    //         //     availiability: '',
    //         //     category: '',
    //         //     price: '',
    //         //     published: null
    //         // });


    //         // window.location.reload()
    //     } catch (error) {
    //         console.error('Error update product:', error);
    //     }
    // }

    return (
        <div>
            <h3 className='font-bold'>All Our Blogs</h3>
            <div className='flex justify-evenly flex-wrap'>
                <Card className="w-full h-full overflow-scroll">
                    <div className="flex p-10 justify-between flex-wrap">
                        {
                            data?.map((blog) => {
                                return <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[350px]">
                                    <a href={blog.link}>
                                        <img className="rounded-t-lg w-full h-96 object-cover p-5" src={blog.thumbnail} alt="" />
                                    </a>
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                                        <Button className='text-xl mr-2 z-0' onClick={() => handleEdit(blog.pk)}>Edit</Button>
                                        <Button className='text-xl ml-2' onClick={() => handleDelete(blog.pk)}>Delete</Button>
                                    </div>
                                    {/* {
                                        showEdit[blog.pk] && <>
                                            <Card className='absolute top-0 bottom-0 left-0 right-0 w-full bg-red-50 z-10'>
                                                <form action="#" className='w-[30%] m-auto z-50'>
                                                    <h3 className='font-bold p-4'>Edit Blog{blog.pk}</h3>
                                                    <input type="text" name="title" defaultValue={blog.title} onChange={handleChange}
                                                        className='normal-case text-2xl p-4 w-full m-auto' />
                                                    <br />
                                                    <br />
                                                    <input type="text" name="link" defaultValue={blog.link} onChange={handleChange}
                                                        className='normal-case text-2xl p-4 w-full m-auto' />
                                                    <br />
                                                    <br />
                                                    <div className="">
                                                        <label htmlFor="cover-photo" className="block text-2xl font-medium leading-6 text-gray-900">
                                                            Product Image
                                                        </label>
                                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 relative w-full">
                                                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 relative w-full">
                                                                {imageDataUrl[blog.pk] ? (
                                                                    <img src={imageDataUrl[blog.pk]} alt="Uploaded Cover" className="mx-auto h-full flex justify-center w-[300px] absolute object-cover left-0 top-0" />
                                                                ) : (
                                                                    <img src={blog.thumbnail} alt="Uploaded Cover" className="mx-auto h-full flex justify-center w-[300px] absolute object-cover left-0 top-0" />
                                                                )}
                                                                <div className="text-center h-[190px] flex flex-col justify-center">
                                                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                                    <div className="mt-4 flex text-2xl leading-6 text-gray-600">
                                                                        <label
                                                                            htmlFor={`file-upload-${blog.pk}`}
                                                                            className="relative cursor-pointer p-4 rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                                        >
                                                                            <span>Upload a file</span>
                                                                            <input
                                                                                id={`file-upload-${blog.pk}`}
                                                                                name={`thumbnail-${blog.pk}`}
                                                                                type="file"
                                                                                className="sr-only"
                                                                                onChange={(e) => handleImageUpload(e, blog.pk)}
                                                                            />
                                                                        </label>
                                                                    </div>
                                                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className=" flex items-center justify-end gap-x-6 ">
                                                        <button type="button" className="text-2xl font-semibold leading-6 text-gray-900" onClick={() => setShowEdit(false)} >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="rounded-md bg-indigo-600 px-3 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                            onClick={(e) => handleUpdate(e, blog.pk)}
                                                        >
                                                            Update
                                                        </button>
                                                    </div>
                                                </form>
                                            </Card>
                                        </>
                                    } */}
                                </div>
                            })
                        }
                    </div>

                </Card>
            </div >


        </div >
    )
}

export default BlogList;
