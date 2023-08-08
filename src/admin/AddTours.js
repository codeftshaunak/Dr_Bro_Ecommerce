import React, { useState } from 'react'
import AdminLayout from './AdminLayout';
import AddTour from '../components/Admin/AddTour';

const AddTours = (props) => {
    props.funNav(false);
    const [showbox, setShowbox] = useState(true)
    const toggleForm = () => {
        setShowbox(false);
    };

    return (
        <AdminLayout>
            <AddTour onCloseForm={toggleForm} />
        </AdminLayout>
    )
}

export default AddTours;
