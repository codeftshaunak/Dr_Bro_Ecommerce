import React from 'react'
import AdminLayout from './AdminLayout'
import AddBlogAdmin from '../components/Admin/AddBlogAdmin'

const AddBlogs = (props) => {
    props.funNav(false)
    return (
        <AdminLayout>
            <AddBlogAdmin />
        </AdminLayout>
    )
}

export default AddBlogs
