


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupAndLogin from "./components/SignupAndLogin";
import Home from "./components/Home";
import RoomDetails from "./components/RoomDetails";
import SuccessPage from "./components/SuccessPage";
import PaymentPage from "./components/PaymentPage";
import BookingForm from "./components/BookingForm"; // Import BookingForm component

function ProtectedRoute({ element: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupAndLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/room-details/:roomId" element={<RoomDetails />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/book-room/:roomId" element={<BookingForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
