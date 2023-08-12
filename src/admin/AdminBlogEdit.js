import React from 'react'
import AdminLayout from './AdminLayout'
import BlogEdit from '../components/Admin/BlogEdit'

const AdminBlogEdit = (props) => {
    props.funNav(false);

    return (
        <AdminLayout>
            <BlogEdit />
        </AdminLayout>
    )
}

export default AdminBlogEdit
