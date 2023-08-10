import React from 'react'
import AdminLayout from './AdminLayout';
import AdminLocationAdd from '../components/Admin/AdminLocationAdd';

const AddLocation = (props) => {
    props.funNav(false)
    return (
        <AdminLayout>
            <AdminLocationAdd />
        </AdminLayout>
    )
}

export default AddLocation;
