import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { BASE_URL } from "../../config";

function Calendar({ data }) {
    console.log(data);
    const [selectedDate, setSelectedDate] = useState("");
    const [numTickets, setNumTickets] = useState(1);
    const [availability, setAvailability] = useState({});
    const access_token = localStorage.getItem('access_token')
    const navigate = useNavigate();

    function handleDateSelection(event) {
        setSelectedDate(event.target.value);
        const dateData = data?.find((d) => d.date === event.target.value);
        if (dateData) {
            setAvailability({ ...availability, [event.target.value]: dateData.Availability });
        }
    }

    function handleNumTicketsChange(event) {
        const num = parseInt(event.target.value);
        setNumTickets(num > 0 ? Math.min(num, getMaxTickets()) : 1);
    }

    function getMaxTickets() {
        return availability[selectedDate] || 1;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const dateData = data?.find((d) => d.date === selectedDate);
        if (!dateData) {
            console.log("Invalid date");
            return;
        }
        const uuid = dateData.uuid;
        const numTicketsToSend = Math.min(numTickets, getMaxTickets());
        console.log(numTicketsToSend);
        axios
            .post(`${BASE_URL}/cart/something`, {
                tour_id: uuid,
                quantity: numTicketsToSend,
            }, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            })
            .then((response) => {
                navigate('/cart');
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        setAvailability({ ...availability, [selectedDate]: getMaxTickets() - numTicketsToSend });
    }

    return (
        <div>
            <h3 className="">Select your travel date & ticket:</h3>
            <br />
            <select value={selectedDate} onChange={handleDateSelection} className="text-2xl">
                <option value="" className="text-2xl">Please select a date</option>
                {data?.map((dateData) => (
                    <option key={dateData.date} value={dateData.date} className="text-2xl ml-2">
                        {dateData.date}
                    </option>
                ))}
            </select>
            
            <input
                type="number"
                min="1"
                className="text-2xl ml-2"
                max={getMaxTickets()}
                defaultValue={numTickets}
                onChange={handleNumTicketsChange}
            />
            <br />
            {access_token ? (
                <NavLink
                    to="/cart"
                    className="ml-5"
                    onClick={handleSubmit}
                >
                    <Button data={"Book Now"} />
                </NavLink>
            ) : (
                <NavLink to="/signin" className="ml-5">
                    <Button data={"ADD TO CART"} />
                </NavLink>
            )}
        </div>
    );
}

export default Calendar;
