



// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import "./SuccessPage.css";

// const SuccessPage = () => {
//   const location = useLocation();
//   const {
//     name,
//     contact,
//     bookingDate,
//     days,
//     location: userLocation,
//     paymentMethod,
//     roomName,
//     price,
//   } = location.state || {};

//   // Send booking details to backend
//   useEffect(() => {
//     if (name && contact) {
//       axios
//         .post("http://localhost:5000/api/bookings", {
//           name,
//           contact,
//           bookingDate,
//           days,
//           userLocation,
//           paymentMethod,
//           roomName,
//           price,
//         })
//         .then((response) => {
//           console.log("Booking stored:", response.data);
//         })
//         .catch((error) => {
//           console.error("Error storing booking:", error);
//         });
//     }
//   }, [name, contact, bookingDate, days, userLocation, paymentMethod, roomName, price]);

//   return (
//     <div className="success-page">
//       <h2>Booking Successful!</h2>
//       <p>Thank you, {name}! Your booking has been confirmed.</p>
//       <div>
//         <h3>Booking Details:</h3>
//         <p><strong>Room Name:</strong> {roomName}</p>
//         <p><strong>Price:</strong> ₹{price}</p>
//         <p><strong>Contact:</strong> {contact}</p>
//         <p><strong>Booking Date:</strong> {bookingDate}</p>
//         <p><strong>Duration:</strong> {days} day(s)</p>
//         <p><strong>Location:</strong> {userLocation}</p>
//         <p><strong>Payment Method:</strong> {paymentMethod}</p>
//       </div>
//       <button onClick={() => window.location.href = "/home"}>Go to Home</button>
//     </div>
//   );
// };

// export default SuccessPage;





// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import "./SuccessPage.css";

// const SuccessPage = () => {
//   const location = useLocation();
//   const {
//     name,
//     contact,
//     bookingDate,
//     days,
//     location: userLocation,
//     paymentMethod,
//     roomName,
//     price,
//   } = location.state || {}; // Make sure you're getting the booking data here

//   // Send booking details to backend
//   useEffect(() => {
//     if (name && contact) {
//       axios
//         .post("http://localhost:5000/api/bookings", {
//           name,
//           contact,
//           bookingDate,
//           days,
//           userLocation,
//           paymentMethod,
//           roomName,
//           price,
//         })
//         .then((response) => {
//           console.log("Booking stored:", response.data);
//         })
//         .catch((error) => {
//           console.error("Error storing booking:", error);
//         });
//     }
//   }, [name, contact, bookingDate, days, userLocation, paymentMethod, roomName, price]);

//   return (
//     <div className="success-page">
//       <h2>Booking Successful!</h2>
//       <p>Thank you, {name}! Your booking has been confirmed.</p>
//       <div>
//         <h3>Booking Details:</h3>
//         <p><strong>Room Name:</strong> {roomName}</p>
//         <p><strong>Price:</strong> ₹{price}</p>
//         <p><strong>Contact:</strong> {contact}</p>
//         <p><strong>Booking Date:</strong> {bookingDate}</p>
//         <p><strong>Duration:</strong> {days} day(s)</p>
//         <p><strong>Location:</strong> {userLocation}</p>
//         <p><strong>Payment Method:</strong> {paymentMethod}</p>
//       </div>
//       <button onClick={() => window.location.href = "/home"}>Go to Home</button>
//     </div>
//   );
// };

// export default SuccessPage;


import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./SuccessPage.css";

const SuccessPage = () => {
  const location = useLocation();
  const {
    name,
    contact,
    bookingDate,
    days,
    location: userLocation,
    paymentMethod,
    roomName,
    price,
  } = location.state || {}; // Ensure booking data is passed from the previous page

  // Send booking details to the backend once the component mounts
  useEffect(() => {
    if (name && contact) {
      axios
        .post("http://localhost:5000/api/bookings", {
          name,
          contact,
          bookingDate,
          days,
          userLocation,
          paymentMethod,
          roomName,
          price,
        })
        .then((response) => {
          console.log("Booking stored:", response.data);
        })
        .catch((error) => {
          console.error("Error storing booking:", error);
        });
    }
  }, [name, contact, bookingDate, days, userLocation, paymentMethod, roomName, price]);

  return (
    <div className="success-page">
      <h2>Booking Successful!</h2>
      <p>Thank you, {name}! Your booking has been confirmed.</p>
      <div>
        <h3>Booking Details:</h3>
        <p><strong>Room Name:</strong> {roomName}</p>
        <p><strong>Price:</strong> ₹{price}</p>
        <p><strong>Contact:</strong> {contact}</p>
        <p><strong>Booking Date:</strong> {bookingDate}</p>
        <p><strong>Duration:</strong> {days} day(s)</p>
        <p><strong>Location:</strong> {userLocation}</p>
        <p><strong>Payment Method:</strong> {paymentMethod}</p>
      </div>
      <button onClick={() => window.location.href = "/home"}>Go to Home</button>
    </div>
  );
};

export default SuccessPage;
