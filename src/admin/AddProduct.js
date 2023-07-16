import React, { useState } from "react";
import { BASE_URL } from '../config';

import { Button, Dialog, Card, CardHeader, CardBody, CardFooter, Typography, Input, Checkbox, FileInput } from "@material-tailwind/react";
import axios from 'axios';
import { json } from "react-router-dom";
export default function AddProduct() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const access_token = localStorage.getItem("access_token");
    console.log(access_token);
    const API_URL = `${BASE_URL}/admins/ecommerce/products/new`;

    const [productData, setProductData] = useState({
        product_name: '',
        description: '',
        availiability: '',
        price: '',
        thumbnail: null,
        // discount: '',
        category: null,
        top_deal: false,
        // flash_sales: false,
        // tax: '',
        // published: true,
    });

    // const productInputs = (event) => {
    //     const { name, value } = event.target;
    //     setProductData({ ...productData, [name]: value });
    // };

    // const productChecked = (event) => {
    //     const { name, checked } = event.target;
    //     setProductData((prevState) => ({
    //         ...prevState,
    //         [name]: checked ? true : false, // update value to true when checked
    //     }));
    // };


    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setProductData({ ...productData, thumbnail: file });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("product_name", productData.product_name);
        formData.append("description", productData.description);
        formData.append("price", productData.price);
        formData.append("availiability", productData.availiability);
        // formData.append("discount", productData.discount);
        formData.append("category", productData.category);
        formData.append("top_deal", productData.top_deal);
        // formData.append("flash_sales", productData.flash_sales);
        formData.append("thumbnail", productData.thumbnail);
        // formData.append("tax", productData.tax);
        // formData.append("published", productData.published);
        console.log(formData)

        try {
            const response = await axios.post(`http://43.205.229.191:8000/admins/ecommerce/products/new`, formData, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Product added successfully", response.data);
            setOpen(false);
        } catch (error) {
            console.error("Failed to add product", error);
        }
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen} className="text-xl">Add New Product</Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full" style={{ width: "320px" }}>
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Add A New Product
                        </Typography>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardBody className="flex flex-col gap-4">
                            <h5>Required Details</h5>

                            <Input label="Product Name" size="lg" name="product_name" onChange={(e) => {
                                setProductData((prev) => ({
                                    ...prev,
                                    product_name: e.target.value
                                }));
                            }}
                                value={productData.product_name} required
                                style={{ fontSize: "12px", textTransform: "none" }}
                            />


                            <Input label="Description" size="lg" name="description" onChange={(e) => {
                                setProductData((prev) => ({
                                    ...prev,
                                    description: e.target.value
                                }));
                            }}
                                value={productData.description} required
                                style={{ fontSize: "12px", textTransform: "none" }}
                            />


                            <Input label="availiability" size="lg" name="availiability"
                                onChange={(e) => {
                                    setProductData((prev) => ({
                                        ...prev,
                                        availiability: e.target.value
                                    }));
                                }}
                                type="number"
                                value={productData.availiability}
                                required
                                style={{ fontSize: "12px", textTransform: "none" }}
                            />


                            <Input label="Product Category" size="lg" name="category"
                                onChange={(e) => {
                                    setProductData((prev) => ({
                                        ...prev,
                                        category: e.target.value
                                    }));
                                }}
                                type="number"
                                value={productData.category}
                                required
                                style={{ fontSize: "12px", textTransform: "none" }}
                            />


                            <Input label="Price" size="lg" name="price"
                                onChange={(e) => {
                                    setProductData((prev) => ({
                                        ...prev,
                                        price: e.target.value
                                    }));
                                }}
                                type="number"
                                value={productData.price}
                                required
                                style={{ fontSize: "12px", textTransform: "none" }}
                            />


                            <label htmlFor="file-input">
                                Add your product image
                                <Input
                                    id="file-input"
                                    type="file"
                                    accept=".jpg,.jpeg,.png"
                                    onChange={handleImageUpload}
                                    style={{ paddingBottom: "2rem" }}
                                />
                            </label>


                            <h5>Optional Details</h5>
                            <Input label="Discount" size="lg" name="discount"
                                onChange={(e) => {
                                    setProductData((prev) => ({
                                        ...prev,
                                        discount: e.target.value
                                    }));
                                }}
                                type="number"
                                value={productData.discount}
                                required
                                style={{ fontSize: "12px", textTransform: "none" }}
                            />



                            {/* <Input label="Tax" size="lg" name="tax"
                                type="number"
                                onChange={(e) => {
                                    setProductData((prev) => ({
                                        ...prev,
                                        tax: e.target.value
                                    }))
                                }}
                                value={productData.tax}
                                style={{ fontSize: "12px", textTransform: "none" }}
                            /> */}


                            <div>
                                {/* <Checkbox
                                color="indigo"
                                id="ripple-on"
                                label="Top Deal"
                                style={{ padding: 0, width: "15px", height: "15px" }}
                                name="top_deal"
                                onClick={productInputs}
                                checked={productInputs.top_deal}
                            />
                            <Checkbox
                                color="purple"
                                id="ripple-off"
                                label="Flash Sales"
                                style={{ padding: 0, width: "15px", height: "15px" }}
                                name="flash_sales"
                                onClick={productInputs}
                                checked={productInputs.flash_sales}
                            /> */}
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button variant="gradient" type="submit" fullWidth>
                                Add The Product
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </Dialog>
        </React.Fragment >
    );
}