



import React from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";  // Import the BookingForm component
import './Home.css';

const rooms = [
  { id: 1, name: "Single Room-no:101", image: "/images/single-room.jpg", price: 1000 },
  { id: 2, name: "Single Room-no:102", image: "/images/single-room-2.jpg", price: 1000 },
  { id: 3, name: "Single Room-no:103", image: "/images/single-room-3.jpg", price: 1000 },
  { id: 4, name: "Double Room-no:201", image: "/images/double-room.jpg", price: 1500 },
  { id: 5, name: "Double Room-no:202", image: "/images/double-room-2.jpg", price: 1500 },
  { id: 6, name: "Double Room-no:203", image: "/images/double-room-3.jpg", price: 1500 },
  { id: 7, name: "Extra Room-no:301", image: "/images/extra-room.jpg", price: 2000 },
  { id: 8, name: "Extra Room-no:302", image: "/images/extra-room-2.jpg", price: 2000 },
  { id: 9, name: "Extra Room-no:303", image: "/images/extra-room-3.jpg", price: 2000 }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to the Hotel Room Booking System</h1>
      <div className="room-list">
        {rooms.map((room, index) => (
          <div
            key={room.id}
            className="room"
            style={{
              animationDelay: `${index * 0.3}s`, // Add delay for sequential appearance
            }}
          >
            <img src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>Price: ₹{room.price} per night</p>
            <button onClick={() => navigate(`/room-details/${room.id}`)}>
              Book Now
            </button>
            {/* Optionally display the BookingForm here for immediate booking */}
            {/* <BookingForm room={room} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
