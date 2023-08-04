import React from 'react'
import AdminLayout from './AdminLayout';
import ProductList from '../components/ProductComponents/ProductList';

const AdminEcom = (props) => {
    props.funNav(false)
    return (
        <AdminLayout>
            <ProductList />
        </AdminLayout>
    )
}

export default AdminEcom;
