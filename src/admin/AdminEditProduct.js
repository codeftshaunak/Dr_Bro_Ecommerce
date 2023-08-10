import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout';
import EditProduct from '../components/Admin/EditProduct';


const AdminEditProduct = (props) => {
    props.funNav(false)
    return (
        <AdminLayout>
            <EditProduct />
        </AdminLayout>
    )
}

export default AdminEditProduct;
