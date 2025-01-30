



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookingForm = ({ room }) => {
  const [name, setName] = useState("");  
  const [contact, setContact] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [days, setDays] = useState(1);
  const [location, setLocation] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const navigate = useNavigate();

  // Handle booking form submission
  const handleBooking = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (name && contact && bookingDate && days && location && paymentMethod) {
      const bookingData = {
        name,
        contact,
        bookingDate,
        days,
        location,
        paymentMethod,
        roomName: room.name,
        price: room.price,
      };

      console.log("Sending booking data:", bookingData);

      try {
        const response = await axios.post("http://localhost:5000/api/bookings/book", bookingData);
        console.log("Booking stored:", response.data);
        navigate("/payment", {
          state: bookingData, // Pass the booking data to the payment page
        });
      } catch (error) {
        console.error("Error storing booking:", error);
        alert("There was an error storing your booking.");
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="booking-form">
      <h2>Book {room.name}</h2>
      <form onSubmit={handleBooking}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </label>
        <label>
          Booking Date:
          <input
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
          />
        </label>
        <label>
          Duration (Days):
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            min="1"
            required
          />
        </label>
        <label>
          Where are you from:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <label>
          Payment Method:
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="UPI">UPI</option>
            <option value="Cash">Cash</option>
          </select>
        </label>
        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default BookingForm;
