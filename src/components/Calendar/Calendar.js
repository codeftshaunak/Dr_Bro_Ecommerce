import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Calendar({ data }) {
    console.log(data);
    const [selectedDate, setSelectedDate] = useState("");
    const [numTickets, setNumTickets] = useState(1);
    const [availability, setAvailability] = useState({});
    const access_token = localStorage.getItem('access_token')
    const navigate = useNavigate();
    // const data = [
    //     { date: "2023-04-12", Maximum: 10, Availability: 5, uuid: 3232323 },
    //     { date: "2023-04-13", Maximum: 10, Availability: 8, uuid: 43564545 },
    // ];

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
            .post("http://13.234.77.93:8000/cart/something", {
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
            <h3>Select your travel date & ticket:</h3>
            <select value={selectedDate} onChange={handleDateSelection}>
                <option value="">Please select a date</option>
                {data?.map((dateData) => (
                    <option key={dateData.date} value={dateData.date}>
                        {dateData.date}
                    </option>
                ))}
            </select>
            <input
                type="number"
                min="1"
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
