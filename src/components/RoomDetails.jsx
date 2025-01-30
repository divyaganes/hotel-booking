

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";  // Correct import of BookingForm
import './RoomDetails.css';  // Make sure to import the CSS file

// Updated room data array with 12 rooms
const rooms = [
  // Single Rooms
  { id: 1, name: "Single Room : Room no-101", image: "/images/single-room.jpg", price: 1000, roomNumber: 101 },
  { id: 2, name: "Single Room : Room no-102", image: "/images/single-room-2.jpg", price: 1000, roomNumber: 102 },
  { id: 3, name: "Single Room : Room no-103", image: "/images/single-room-3.jpg", price: 1000, roomNumber: 103 },

  // Double Rooms
  { id: 4, name: "Double Room : Room no-201", image: "/images/double-room.jpg", price: 1500, roomNumber: 201 },
  { id: 5, name: "Double Room : Room no-202", image: "/images/double-room-2.jpg", price: 1500, roomNumber: 202 },
  { id: 6, name: "Double Room : Room no-203", image: "/images/double-room-3.jpg", price: 1500, roomNumber: 203 },

  // Extra Rooms
  { id: 7, name: "Extra Room : Room no-301", image: "/images/extra-room.jpg", price: 2000, roomNumber: 301 },
  { id: 8, name: "Extra Room : Room no-302", image: "/images/extra-room-2.jpg", price: 2000, roomNumber: 302 },
  { id: 9, name: "Extra Room : Room no-303", image: "/images/extra-room-3.jpg", price: 2000, roomNumber: 303 },

  // Additional rooms
  { id: 10, name: "Single Room 4", image: "/images/single-room-4.jpg", price: 1000, roomNumber: 104 },
  { id: 11, name: "Double Room 4", image: "/images/double-room-4.jpg", price: 1500, roomNumber: 204 },
  { id: 12, name: "Extra Room 4", image: "/images/extra-room-4.jpg", price: 2000, roomNumber: 304 }
];

const RoomDetails = () => {
  const { roomId } = useParams(); // Grab roomId from URL params
  const navigate = useNavigate(); // Navigation function for redirection

  // Find room by matching the roomId with the room array
  const room = rooms.find((room) => room.id === parseInt(roomId));

  // If room is not found, display an error message
  if (!room) {
    return (
      <div className="error-message">
        <h2>Room not found!</h2>
        <p>Sorry, the room you are looking for does not exist.</p>
        <button onClick={() => navigate("/home")}>Go back to Rooms</button>
      </div>
    );
  }

  return (
    <div className="room-details">
      <h1>{room.name}</h1>
      <img src={room.image} alt={room.name} className="room-image" />
      <p>Price: ₹{room.price} per night</p>
      <p>Room Number: {room.roomNumber}</p> {/* Display the room number */}
      <BookingForm room={room} /> {/* Pass room data to the BookingForm */}
    </div>
  );
};

export default RoomDetails;