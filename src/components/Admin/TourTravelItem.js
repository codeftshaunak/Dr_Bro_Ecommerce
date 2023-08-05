
import React, { useEffect, useState } from 'react'
import { getAuthorizationHeader } from '../../auth/adminAuth';
import { BASE_URL } from '../../config';
import { async } from 'q';

const TourTravelItem = ({ data }) => {
    const { Tours_name, availiability, category, description, price, slug, thumbnail, uuid } = data;
    console.log(data);
    const [showUpdateBox, setShowUpdateBox] = useState(false);
    const [uidData, setUidData] = useState({
        Tours_name: "",
        availiability: "",
        category: "",
        description: "",
        price: "",
        slug: "",
    });


    useEffect(() => {
        // Update the state using setUidData
        setUidData(() => ({
            availiability: availiability,
            Tours_name: Tours_name,
            category: category,
            description: description,
            price: price,
            slug: slug,
        }));
    }, [data]);


    console.log(uidData);
    //Handle Delete
    const handleDelete = async (id) => {
        try {
            const resp = await fetch(`${BASE_URL}/admins/tours/${id}/delete/`, {
                method: 'DELETE',
                headers: getAuthorizationHeader(), // Include authorization header if needed

            })
            console.log(resp);
            alert("Confirm Delete This Item?")
            window.location.reload()

        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }

    //Handle Update
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const resp = await fetch(`${BASE_URL}/admins/tours/travels/${uuid}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    ...getAuthorizationHeader()
                },
                // Include authorization header if needed
                body: JSON.stringify(uidData)
            })
            if (resp.status == 200) {
                window.location.reload()
                setShowUpdateBox(false)
            }
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }

    //Handle On Change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUidData({ ...uidData, [name]: value });
    }



    return (
        <>
            <div className="w-[350px] p-10 border mb-3 capitalize">
                <h3 className="product_title">Tour Name: {Tours_name}</h3>
                {/* <h3 className="availiability">availiability: {availiability}</h3> */}
                <h3 className="category">category: {category}</h3>
                <h3 className="description">description: {description}</h3>
                <h3 className="price">description: {price}</h3>
                <h3 className="slug">slug: {slug}</h3>
                <img className='w-96' src={thumbnail} alt={Tours_name} />

                <div className="buttons pt-5">
                    <button className='border-black bg-slate-400 px-5 py-2 mx-2' onClick={() => setShowUpdateBox(true)}>Edit</button>
                    <button className='border-black bg-slate-400 px-5 py-2 mx-2' onClick={() => handleDelete(uuid)}>Delete</button>
                </div>
            </div>
            {
                showUpdateBox && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-8 w-[400px]">
                            <h2 className="text-3xl font-bold mb-4">Edit This Product</h2>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="Tours_name" className="block text-2xl font-medium text-gray-800">
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        id="Tours_name"
                                        name="Tours_name"
                                        defaultValue={Tours_name}
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
                                        defaultValue={description}
                                        onChange={handleChange}
                                        className="border rounded-lg w-full p-2 text-2xl normal-case resize-none"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="availability" className="block text-2xl font-medium text-gray-800">
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        id="category"
                                        name="category"
                                        defaultValue={category}
                                        onChange={handleChange}
                                        className="border rounded-lg w-full p-2 text-2xl normal-case"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="availability" className="block text-2xl font-medium text-gray-800">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        defaultValue={price}
                                        onChange={handleChange}
                                        className="border rounded-lg w-full p-2 text-2xl normal-case"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="availability" className="block text-2xl font-medium text-gray-800">
                                        Slug
                                    </label>
                                    <input
                                        type="text"
                                        id="slug"
                                        name="slug"
                                        defaultValue={slug}
                                        onChange={handleChange}
                                        className="border rounded-lg w-full p-2 text-2xl normal-case"
                                        required
                                    />
                                </div>
                                {/* Add other form fields for category, price, published, and slug */}
                                <div className="flex justify-end">
                                    <button type="button" className="text-2xl text-gray-500 mr-4" onClick={() => setShowUpdateBox(false)}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="text-2xl text-white bg-blue-600 rounded-lg px-4 py-2" onClick={handleUpdate}>
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }

        </>

    )
}

export default TourTravelItem;
