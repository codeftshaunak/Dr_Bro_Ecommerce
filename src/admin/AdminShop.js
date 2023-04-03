import React from 'react'
import Products from './Product';
import AddProduct from './AddProduct';

const AdminShop = () => {
    return (
        <div>
            <AddProduct />
            <br />
            <h2>Products</h2>
            <div className="flex justify-around">
                <Products />
            </div>
        </div>
    )
}

export default AdminShop;
