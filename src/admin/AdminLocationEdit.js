import React from 'react'
import AdminLayout from './AdminLayout'
import LocationEdit from '../components/Admin/LocationEdit';

const AdminLocationEdit = (props) => {
    props.funNav(false);

    return (
        <AdminLayout>
            <LocationEdit />
        </AdminLayout>
    )
}

export default AdminLocationEdit
