import { useNavigate } from "react-router-dom";
import "./Login.css";


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
      <button onClick={() => navigate("/login")}>Back to Login </button>
      <button onClick={() => navigate("/register")}>
        Create Account
      </button>
    </div>
  );
};

export default ErrorLogin;
