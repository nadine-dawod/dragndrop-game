//I just realized the component might be not necessary, but I will keep it for a while

import { useNavigate } from "react-router-dom";
import "./Login.css";

const ErrorLogin = () => {
  // //funcrion to handle the error login
  // const navigate = useNavigate();

  // const backToLogin = () => {
  //   //I doubt whether the code in lines 8 to 14 is necessary
  //   navigate("/login");
  // };

  // const goToRegister = () => {
  //   navigate("/register");
  // };

  return (
    //to let users return to the login or register page.
    <div className="error-container">
      <p>
        <span style={{ color: "red" }}>Path not found.</span>
      </p>
      <button onClick={() => navigate("/login")}>Back to Login </button>
      <button onClick={() => navigate("/register-account")}>Create Account</button>
    </div>
  );
};

export default ErrorLogin;
