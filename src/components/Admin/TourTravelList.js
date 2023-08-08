import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../config';
import { getAuthorizationHeader } from '../../auth/adminAuth';
import EproductItem from './EproductItem';
import { async } from 'q';
import { allToursList, handleDeleteTour } from '../../auth/adminapi';
import TourTravelItem from './TourTravelItem';
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Tour Image", "Tour Name", "Category", "Price", "Description", "Action"];

const TourTravelList = () => {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        const fetchData = async () => {
            const data = await allToursList();
            setData(data.results)
        }
        fetchData();
    }, [])

    const handleDeleted = (uuid) => {
        handleDeleteTour(uuid)
    }

    return (
        <div>
            <h3 className='font-bold'>All Our Tours</h3>
            <div className='flex justify-evenly flex-wrap'>

                <Card className="w-full h-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b text-center border-blue-gray-100 bg-blue-gray-50 p-4">
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
                            {data?.map(({ Tours_name, category, description, thumbnail, price, uuid }, index) => {
                                const isLast = index === data.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={Tours_name} className="text-center">
                                        <td className={classes}>
                                            <img src={thumbnail} alt="" className='w-36 m-auto' />
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="text-2xl">
                                                {Tours_name}
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
                                        <td className={`${classes}`}>
                                            <Typography as="a" href="#" variant="small" color="blue" className="text-2xl p-2 border text-center mb-1">
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


                {/* <TableList /> */}
            </div>
        </div >
    )
}

export default TourTravelList;


