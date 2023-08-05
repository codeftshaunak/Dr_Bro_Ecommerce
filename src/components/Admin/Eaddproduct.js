import React, { useState } from 'react';
import { BASE_URL } from '../../config';
import { getAuthorizationHeader } from '../../auth/adminAuth';
import { allProductList } from '../../auth/adminapi';

const Eaddproduct = ({ onCloseForm }) => {
    const [formData, setFormData] = useState({
        product_name: '',
        description: '',
        availiability: '',
        category: '',
        price: '',
        published: false,
        slug: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/admins/ecommerce/products/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: getAuthorizationHeader(), // Include authorization header if needed
                },
                body: JSON.stringify(formData), // Convert formData to JSON
            });

            if (!response.ok) {
                throw new Error('Failed to create the product.');
            }

            const data = await response.json();
            console.log('New Product:', data);
            allProductList()
            // Reset the form after successful submission
            setFormData({
                product_name: '',
                description: '',
                availiability: '',
                category: '',
                price: '',
                published: true,
                slug: '',
            });

            // Close the form
            onCloseForm();
            window.location.reload()
        } catch (error) {
            console.error('Error creating product:', error.message);
        }

    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 w-[400px]">
                <h2 className="text-3xl font-bold mb-4">Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="product_name" className="block text-2xl font-medium text-gray-800">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="product_name"
                            name="product_name"
                            value={formData.product_name}
                            onChange={handleChange}
                            className="border rounded-lg w-full p-2 text-2xl normal-case"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-2xl font-medium text-gray-800">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="border rounded-lg w-full p-2 text-2xl normal-case resize-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="availiability" className="block text-2xl font-medium text-gray-800">
                            availiability
                        </label>
                        <input
                            type="number"
                            id="availiability"
                            name="availiability"
                            value={formData.availiability}
                            onChange={handleChange}
                            className="border rounded-lg w-full p-2 text-2xl normal-case"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="availiability" className="block text-2xl font-medium text-gray-800">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="border rounded-lg w-full p-2 text-2xl normal-case"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="availiability" className="block text-2xl font-medium text-gray-800">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="border rounded-lg w-full p-2 text-2xl normal-case"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="availiability" className="block text-2xl font-medium text-gray-800">
                            Slug
                        </label>
                        <input
                            type="text"
                            id="slug"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            className="border rounded-lg w-full p-2 text-2xl normal-case"
                            required
                        />
                    </div>
                    {/* Add other form fields for category, price, published, and slug */}
                    <div className="flex justify-end">
                        <button type="button" className="text-2xl text-gray-500 mr-4" onClick={onCloseForm}>
                            Cancel
                        </button>
                        <button type="submit" className="text-2xl text-white bg-blue-600 rounded-lg px-4 py-2">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Eaddproduct;
