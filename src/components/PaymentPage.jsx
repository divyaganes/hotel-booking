
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./paymentPage.css"
const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    name,
    contact,
    bookingDate,
    days,
    location: userLocation,
    paymentMethod,
    roomName,
    price,
  } = location.state || {};

  
  const paymentAmount = price * days;

  
  if (!roomName || !price || !days) {
    navigate("/home"); 
    return <div>Loading...</div>;
  }

  const [paymentDetails, setPaymentDetails] = useState(""); 

  const handlePayment = (e) => {
    e.preventDefault();
    if (paymentDetails) {
      
      navigate("/success", {
        state: {
          name,
          roomName,
          bookingDate,
          days,
          userLocation,
          paymentMethod,
          amountPaid: paymentAmount,
          status: "Payment Successful",
        },
      });
    } else {
      alert("Please enter payment details.");
    }
  };

  return (
    <div className="payment-page">
      <h2>Payment for {roomName}</h2>
      <p><strong>Amount:</strong> ₹{paymentAmount}</p>
      <form onSubmit={handlePayment}>
        <label>
          Enter Payment Details:
          <input
            type="text"
            value={paymentDetails}
            onChange={(e) => setPaymentDetails(e.target.value)}
            placeholder="Enter your payment info"
            required
          />
        </label>
        <button type="submit">Confirm Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;





