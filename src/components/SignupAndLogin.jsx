

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import "./SignupAndLogin.css";

const SignupAndLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (username && password && email) {
      try {
        const response = await axios.post("http://localhost:5000/api/auth/signup", { username, email, password });
        alert(response.data); // Show the success message from the backend
        setIsLogin(true);
      } catch (error) {
        alert(error.response.data); // Show error message from the backend
      }
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { username, password });
      alert(response.data); // Show the success message from the backend
      navigate("/home"); // Navigate to the home page on successful login
    } catch (error) {
      alert(error.response.data); // Show error message from the backend
    }
  };

  return (
    <div
      className="auth-container"
      style={{ backgroundImage: 'url(/images/background-image.jpg)' }}
    >
      <h1 className="welcome-message">Welcome to Room</h1>
      {isLogin ? (
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{" "}
            <span onClick={() => setIsLogin(false)} className="toggle-link">
              Sign up
            </span>
          </p>
        </div>
      ) : (
        <div className="signup-form">
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignUp}>Sign Up</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => setIsLogin(true)} className="toggle-link">
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default SignupAndLogin;
