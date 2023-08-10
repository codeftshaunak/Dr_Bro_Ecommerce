import React, { useState } from 'react'
import AdminLayout from './AdminLayout';
import PorductList from '../components/Admin/PorductList';
import { Button } from '@material-tailwind/react';

const AdminEcom = (props) => {
    props.funNav(false);

    const [showbox, setShowbox] = useState(false);
    const toggleForm = () => {
        setShowbox(false);
    };
    
    return (
        <AdminLayout>
            <PorductList />
        </AdminLayout>
    )
}

export default AdminEcom;
