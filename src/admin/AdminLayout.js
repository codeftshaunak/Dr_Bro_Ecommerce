import React from 'react'
import AdminSidebar from './AdminSidebar'

const AdminLayout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto h-screen'>
                <AdminSidebar />
                <div className='grow'>
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout;
