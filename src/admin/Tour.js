import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

export default function Tour() {
    const [product, setProduct] = useState([]);
    console.log(product);
    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");
        const requestOptions = {
            method: "GET",
            headers: { "Authorization": `Bearer ${accessToken}` }
        };

        fetch(`${BASE_URL}/admins/tours/travels/list`, requestOptions)
            .then(response => response.json())
            .then(data => setProduct(data.data))
            .catch(error => console.error(error));
    }, []); // add an empty dependency array here to run the effect only once

    return (
        product?.map((data) => {
            return <div key={data.id}>
                <Card className="w-96 m-4">
                    <br />
                    <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                            {data.product_name}                        </Typography>
                        <Typography>
                            {data.description}
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                        <Typography variant="small">Price:-{data.price}</Typography>
                        <Typography variant="small" color="gray" className="flex gap-1">
                            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                            Availiability:-{data.availiability}
                        </Typography>
                    </CardFooter>
                </Card>
            </div>
        })

    );
}
