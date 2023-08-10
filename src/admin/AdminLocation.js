import React from 'react'
import AdminLayout from './AdminLayout';
import LocationList from '../components/Admin/LocationList';

const AdminLocation = (props) => {
    props.funNav(false)
    return (
        <AdminLayout>
            <LocationList />
        </AdminLayout>
    )
}

export default AdminLocation;
