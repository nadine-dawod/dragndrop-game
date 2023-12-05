import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

export const ErrorLogin = ({ message }) => {
  const navigate = useNavigate();

  const backToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="error-container" >
      <p>
        <span style={{ color: "red" }}>{message}</span>
      </p>
      <button className="btn" onClick={() => navigate("/login")}>Back to Login </button>
      <button className="btn" onClick={() => navigate("/register")}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default ErrorLogin;
