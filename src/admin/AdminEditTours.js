import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout';
import EditProduct from '../components/Admin/EditProduct';
import EditTours from '../components/Admin/EditTours';


const AdminEditTours = (props) => {
    props.funNav(false)
    return (
        <AdminLayout>
            <EditTours />
        </AdminLayout>
    )
}

export default AdminEditTours;
