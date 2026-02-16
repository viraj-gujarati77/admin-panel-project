import React, { useState } from "react";
import axios from "axios";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate(); // Get the navigate function
  const [action, setAction] = useState("Login");
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    // Standard way to update state for multiple inputs
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDATION: Ensure required fields aren't empty before sending
    if (
      !value.email ||
      !value.password ||
      (action === "Sign Up" && !value.name)
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const endpoint = action === "Login" ? "/login" : "/register";
      // We send 'value' directly as the request body
      const response = await axios.post(
        `http://localhost:5000${endpoint}`,
        value,
      );

      console.log("Server Response:", response.data);
      // alert(action === "Login" ? "Login Successful" : "Account Created");

      navigate("/Home");

      // Clear form after success
      setValue({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("Submission Error:", error.response?.data || error.message);
      alert("Error: Check console for details");
    }

    // Login Redirect
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <form className="inputs" onSubmit={handleSubmit}>
        {action === "Login" ? null : (
          <div className="input">
            <input
              type="text"
              name="name" // Crucial for handlechange
              placeholder="Name"
              onChange={handlechange}
              value={value.name}
              required={action === "Sign Up"}
            />
          </div>
        )}

        <div className="input">
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            onChange={handlechange}
            value={value.email}
            required
          />
        </div>
        <div className="input">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlechange}
            value={value.password}
            required
          />
        </div>

        {action === "Login" && (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}

        <div className="submit-container">
          <button
            type={action === "Sign Up" ? "submit" : "button"}
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => action === "Login" && setAction("Sign Up")}
          >
            Sign Up
          </button>

          <button
            type={action === "Login" ? "submit" : "button"}
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => action === "Sign Up" && setAction("Login")}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
