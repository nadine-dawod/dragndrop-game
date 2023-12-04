import React from "react";
import { useNavigate } from "react-router-dom";

export const ErrorLogin = ({ message }) => {
  const navigate = useNavigate();

  const backToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <p>
        <span style={{ color: "red" }}>{message}</span>
      </p>
      <button onClick={() => navigate("/login")}>Back to Login </button>
      <button onClick={() => navigate("/register")}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default ErrorLogin;
