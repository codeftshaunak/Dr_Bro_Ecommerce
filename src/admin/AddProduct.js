import React from 'react'
import AdminLayout from './AdminLayout';
import AddProduc from '../components/Admin/AddProduc';

const AddProduct = (props) => {
    props.funNav(false)
    return (
        <AdminLayout>
            <AddProduc />
        </AdminLayout>
    )
}

export default AddProduct
