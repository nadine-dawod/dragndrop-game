import { useState } from "react"; // uses the useState hook to add a variable to update the value.
import { useNavigate, useParams } from "react-router-dom"; //to allow users to access different components
import "./Login.css";
import axios from "axios";
import { useAuth } from "./AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // to store and display any error messages
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const { userId } = useParams();

  const checkUser = (users) => {
    // Function to validate the user
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);

    if (user && user.email === email && user.password === password) {
      return user;
    } else {
      navigate("/login");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the default behavior of a form when it is submitted.

    try {
      //checking if the login credentials are valid
      const response = await axios.get("http://localhost:6001/users");
      const user = checkUser(response.data);

      if (email === "" || password === "") {
        alert("All fields are required!");
        resetForm();
        return;
      } else if (user) {
        successMessage(user);
      } else {
        console.error(error);
        errorMessage("Invalid username or password. Please try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    // to do not repeat code
    setEmail("");
    setPassword("");
  };

  const successMessage = (user) => {
    dispatch({ type: "LOGIN", payload: { user } });
    alert(`Hi ${user.username}`);
    navigate(`/game/${user.id}`); //  access to the user's game page after login

    localStorage.setItem("user", JSON.stringify(user.id));
    localStorage.setItem("userName", JSON.stringify(user.username)); //I've put an extra line of code in here to catch the username/Saskia
    localStorage.setItem("userEmail", JSON.stringify(user.email)); //Same for the email adress
    resetForm();
  };

  const errorMessage = (message) => {
    alert("Invalid username or password. Please try again!");
    setError(message); //save error message

    resetForm();
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          <input
            value={email}
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            value={password}
            type="Password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
      <div className="Login-button-container">
        <button className="Login-button" onClick={handleSubmit}>
          <p className="btn-p">Log in</p>
        </button>
        <p className="Login-p">or</p>
        <button
          className="Login-button"
          onClick={() => navigate("/register-account")}
        >
          <p className="btn-p">Create Account</p>
        </button>
      </div>
    </>
  ); //onChange is used to listen for user input in a text input box., onFormSwitch to switch to other page
};
export default Login;
