import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../config';
import { allProductList, handleDeleteProduct, } from '../../auth/adminapi';
import { Card, Typography } from "@material-tailwind/react";
import { getAuthorizationHeader } from '../../auth/adminAuth';
import { useNavigate } from 'react-router-dom';


const TABLE_HEAD = ["Product Image", "Product Name", "Availiability", "Category", "Price", "Description", "Action"];


const PorductList = () => {
    const [data, setData] = useState([]);
    const [showUpdateBox, setShowUpdateBox] = useState(false);
    const nevigate = useNavigate();

    const [uidData, setUidData] = useState({
        product_name: "",
        availiability: "",
        category: "",
        description: "",
        price: "",
        slug: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUidData({ ...uidData, [name]: value });
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await allProductList();
            setData(data.results)
        }
        fetchData();
    }, [])

    const handleDeleted = (uuid) => {
        handleDeleteProduct(uuid);
    }


    const handleEdit = (uuid) => {
        nevigate(`/adminecomaddprod/${uuid}`)
    }


    return (
        <div>
            <h3 className='font-bold'>All Our Products</h3>
            <div className='flex justify-evenly flex-wrap'>
                {/* {
                    data?.map((prod) => {
                        return <TableList data={prod} key={prod.id} />
                    })
                } */}
                <Card className="w-full h-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center">
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
                            {data?.map(({ product_name, availiability, category, description, thumbnail, price, uuid }, index) => {
                                const isLast = index === data.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={product_name} className='text-center'>
                                        <td className={classes}>
                                            <img src={thumbnail} alt="" className='w-36 m-auto' />
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="text-2xl">
                                                {product_name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="text-2xl">
                                                {availiability}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="text-2xl">
                                                {category}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="text-2xl">
                                                {price}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="text-2xl">
                                                {description.length > 13 ? description.slice(0, 13) + "..." : description}
                                            </Typography>
                                        </td>
                                        {/* <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="text-2xl">
                                        {job}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="text-2xl">
                                        {date}
                                    </Typography>
                                </td> */}
                                        <td className={`${classes}`}>
                                            <Typography as="a" href="#" variant="small" color="blue" className="text-2xl p-2 border text-center mb-1" onClick={() => handleEdit(uuid)}>
                                                Edit
                                            </Typography>
                                            <Typography as="a" href="#" variant="small" color="blue" className="text-2xl p-2 border text-center" onClick={() => handleDeleted(uuid)}>
                                                Delete
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div >
    )
}

export default PorductList;
