import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../config';
import { getAuthorizationHeader } from '../../auth/adminAuth';
import EproductItem from './EproductItem';
import { async } from 'q';
import { allBlogList, allProductList, handleDeleteBlog } from '../../auth/adminapi';
import { Button, Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Blog Title", "Blog Image", "Edit Blog"];


const BlogList = () => {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        const fetchData = async () => {
            const data = await allBlogList();
            setData(data.results)
        }
        fetchData();
    }, []);

    const handleDelete = (id) => {
        handleDeleteBlog(id);
    }

    const handleEdit = (id) => {
        console.log(id);
    }


    return (
        <div>
            <h3 className='font-bold'>All Our Blogs</h3>
            <div className='flex justify-evenly flex-wrap'>

                <Card className="w-full h-full overflow-scroll">
                    {/* <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className=" text-2xl leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(({ title, thumbnail }, index) => {
                                const isLast = index === data.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={title}>
                                          <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="text-2xl">
                                                {title}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <img src={thumbnail} alt="" className='w-36' />
                                        </td>
                                      
                                        <td className={classes}>
                                            <Typography as="a" href="#" variant="small" color="blue" className="text-2xl">
                                                Edit
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table> */}
                    <div className="flex p-10 justify-between flex-wrap">
                        {
                            data?.map((blog) => {
                                return <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[350px]">
                                    <a href={blog.link}>
                                        <img className="rounded-t-lg w-full h-96 object-cover" src={blog.thumbnail} alt="" />
                                    </a>
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                                        <Button className='text-xl mr-2' onClick={() => handleEdit(blog.id)}>Edit</Button>
                                        <Button className='text-xl ml-2' onClick={() => handleDelete(blog.id)}>Delete</Button>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                </Card>
            </div>
        </div>
    )
}

export default BlogList;
