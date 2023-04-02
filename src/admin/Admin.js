import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const Admin = (props) => {
    props.funNav(false)
    return (
        <div className="flex flex-col w-100 h-screen bg-white">
            <Sidebar />
        </div>
    );
};

export default Admin;
