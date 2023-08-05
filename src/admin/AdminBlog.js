import React from 'react'
import AdminLayout from './AdminLayout';

const AdminBlog = (props) => {
    props.funNav(false)
    return (
        <AdminLayout>
            <h1>Bolog</h1>
        </AdminLayout>
    )
}

export default AdminBlog;
