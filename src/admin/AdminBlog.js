import React from 'react'
import AdminLayout from './AdminLayout';
import BlogList from '../components/Admin/BlogList';

const AdminBlog = (props) => {
    props.funNav(false)
    return (
        <AdminLayout>
            <BlogList />
        </AdminLayout>
    )
}

export default AdminBlog;
