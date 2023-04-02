import React, { useState } from "react";

function TravelBooking() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");

  const availableDates = ["2023-04-01", "2023-04-02", "2023-04-03"];

  function handleDateSelection(event) {
    setSelectedDate(event.target.value);
  }

  function handleSeatSelection(event) {
    setSelectedSeat(event.target.value);
  }

  return (
    <div>
      <h3>Select your date:</h3>
      <select value={selectedDate} onChange={handleDateSelection}>
        <option value="">Please select a date</option>
        {availableDates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    
      <h3>Your selection:</h3>
      <p>Travel date: {selectedDate}</p>
    </div>
  );
}

export default TravelBooking;
