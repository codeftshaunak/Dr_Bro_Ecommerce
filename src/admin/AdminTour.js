import React, { useState } from 'react'
import AdminLayout from './AdminLayout';
import TourTravelList from '../components/Admin/TourTravelList';
import { Button } from '@material-tailwind/react';

const AdminTour = (props) => {
    props.funNav(false);

    const [showbox, setShowbox] = useState(false);
    const toggleForm = () => {
        setShowbox(false);
    };

    return (
        <AdminLayout>
            <Button className='text-2xl' onClick={() => setShowbox(true)}> Add Product </Button>

            <TourTravelList />
            {
                showbox && (
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-30 flex justify-center items-center">
                        {/* <Eaddproduct onCloseForm={toggleForm} /> */}
                    </div>
                )
            }
        </AdminLayout>
    )
}

export default AdminTour;
