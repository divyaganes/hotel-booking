// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const PaymentConfirmation = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const {
//     name,
//     contact,
//     bookingDate,
//     days,
//     location: userLocation,
//     paymentMethod,
//     roomName,
//     price,
//     totalPrice, // Get the total price
//   } = location.state || {};

//   const handleConfirmPayment = (e) => {
//     e.preventDefault();
//     // After confirming the booking, navigate to the payment page
//     navigate("/payment", {
//       state: {
//         name,
//         contact,
//         bookingDate,
//         days,
//         location: userLocation,
//         paymentMethod,
//         roomName,
//         price,
//         totalPrice,
//       },
//     });
//   };

//   return (
//     <div className="payment-confirmation">
//       <h2>Confirm Your Booking</h2>
//       <div>
//         <p><strong>Room Name:</strong> {roomName}</p>
//         <p><strong>Price (per day):</strong> ₹{price}</p>
//         <p><strong>Total Price:</strong> ₹{totalPrice}</p>
//         <p><strong>Booking Date:</strong> {bookingDate}</p>
//         <p><strong>Duration:</strong> {days} day(s)</p>
//         <p><strong>Location:</strong> {userLocation}</p>
//         <p><strong>Payment Method:</strong> {paymentMethod}</p>
//       </div>
//       <button onClick={handleConfirmPayment}>Proceed to Payment</button>
//     </div>
//   );
// };

// export default PaymentConfirmation;
