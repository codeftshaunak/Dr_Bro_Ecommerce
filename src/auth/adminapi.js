import { async } from "q";
import { BASE_URL } from "../config";
import { getAuthorizationHeader } from "./adminAuth";

export const allProductList = async () => {
    try {
        const resp = await fetch(`${BASE_URL}/admins/ecommerce/products/list`, {
            headers: getAuthorizationHeader(),
        });
        if (!resp.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await resp.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

export const allToursList = async () => {
    try {
        const resp = await fetch(`${BASE_URL}/admins/tours/travels/list`, {
            headers: getAuthorizationHeader()
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const allBlogList = async () => {
    try {
        const resp = await fetch(`${BASE_URL}/admins/blogs/`, {
            headers: getAuthorizationHeader()
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


    //Handle Delete
    export const handleDeleteProduct = async (id) => {
        try {
            const resp = await fetch(`${BASE_URL}/admins/ecommerce/products/${id}/delete/`, {
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

    export const handleDeleteTour = async (id) => {
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

    export const handleDeleteBlog = async (id) => {
        try {
            const resp = await fetch(`${BASE_URL}/admins/blogs/${id}/`, {
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
