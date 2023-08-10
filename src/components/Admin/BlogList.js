import React, { useEffect, useState } from 'react'
import { allBlogList, handleDeleteBlog } from '../../auth/adminapi';
import { Button, Card } from "@material-tailwind/react";

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
