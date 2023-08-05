import React, { useState } from 'react'
import AdminLayout from './AdminLayout';
import PorductList from '../components/Admin/PorductList';
import Eaddproduct from '../components/Admin/Eaddproduct';
import { Button } from '@material-tailwind/react';

const AdminEcom = (props) => {
    props.funNav(false);

    const [showbox, setShowbox] = useState(false);
    const toggleForm = () => {
        setShowbox(false);
    };
    return (
        <AdminLayout>
            <Button className='text-2xl' onClick={() => setShowbox(true)}> Add Product </Button>

            <PorductList />
            {
                showbox && (
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-30 flex justify-center items-center">
                        <Eaddproduct onCloseForm={toggleForm} />
                    </div>
                )
            }
        </AdminLayout>
    )
}

export default AdminEcom;
