import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../config';
import { getAuthorizationHeader } from '../../auth/adminAuth';
import EproductItem from './EproductItem';
import { async } from 'q';
import {  allToursList } from '../../auth/adminapi';

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


    return (
        <div>
            <h1>All Our Products</h1>
            <div className='flex justify-evenly flex-wrap'>
                {
                    data?.map((prod) => {
                        return <EproductItem data={prod} key={prod.id} />
                    })
                }
            </div>
        </div>
    )
}

export default TourTravelList;


