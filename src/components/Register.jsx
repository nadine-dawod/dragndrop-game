// ==== REGISTER ACCOUNT ====
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import "./Register.css";
// +++++ Added const navigate on this page after seeing the Login tutorial.
// Imported useNavigate to RegisterAccount
// Also imported RegisterAccount and added Route to app.jsx.

const Register = () => { // Three states - one for each input field 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkEmail = (users) => { // check if the email is unique
    const user = users.find((user) => user.email === email);
    if (user) return user;
  };

  const handleSubmit = async () => { // Assign this to button
   /*  const user = await axios
      .get("/users")
      .then((res) => checkEmail(res.data, email));

    
    if (user) { // if email already exists
      alert("User already exists!");
    } else {  // else save this new user - by making a post-request
      const user = { username, email, password };
      axios.post("/users", user).then(alert("User created!"));
      navigate("../ProfilePage");
    } */
    const user = { username, email, password };
    axios
        .post("http://localhost:6001/users", user)
        .then(alert("User created!"));

      setUser({
        name: "",
        email: "",
        password: "",
      });
  };

 
  return (
    <div className="container">
      <form className="form-container">
        <h1>Register User</h1>
        <label>
          <input
            type="text"
            placeholder="Name"
            value={username}  // added value to each state
            onChange={(e) => setUsername(e.target.value)} // added onChange to each state to be able to update the state (from input field)
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label> 
        <button className="btn" type="submit" onClick={handleSubmit}>
          <p>Register Account</p>
        </button> 
      </form>
    </div>
  );
};

export default Register;
