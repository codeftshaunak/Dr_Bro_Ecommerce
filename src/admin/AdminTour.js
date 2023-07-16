import React from 'react'
import Products from './Product';
import AddTour from './AddTour';

const AdminShop = () => {
    return (
        <div>
            <AddTour />
            <br />
            <h2>Tour</h2>
            <div className="flex justify-around">
                <Products />
            </div>
        </div>
    )
}

export default AdminShop;
