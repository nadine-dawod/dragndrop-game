// ==== REGISTER ACCOUNT ====
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import "./Register.css";

//  TODO:
//  1. does the register function work with t he login function? I THINK SO, BUT CHECK AGAIN AFTER MERGE
//  2. Add correct navigation iin register code.
  

const Register = () => { 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {   // Assign this function to button onClick
    e.preventDefault();

        if (password1 === password2) {
        
          try {
          const response = await axios.get("http://localhost:6001/users"); 
            const users = response.data     //list of users (json) = response.data
            const user = users.find((user) => user.email === email | user.username === username); // check if email and/or username already exists
            
          if (user) {       // if - there is a matching user alert
            alert("Username or email already exists. Please try again!");
          } else {          // else - create newUser
            console.log("i else satsen")
            const newUser = { username, email, password: password1 };
              axios.post("http://localhost:6001/users", newUser)  
              .then(() => alert("User created!"));                
              navigate("/"); // ==== ADD CORRECT ROUTE HERE ===  
          } 

          }
          catch (error) {
            console.log(error);
          }
        }
        else { 
          alert ("Passwords did not match. Please try again.");
        }
  }
 
  return (
    <div className="container">
      <form className="form-container">
        <h1>Register User</h1>
        <label>
          <input
            type="text"
            placeholder="Username"
            value={username}  
            onChange={(e) => setUsername(e.target.value)} // onChange to each state to be able to update the state (from input field)
            required
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password1}
            required
            onChange={(e) => setPassword1(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={password2}
            required
            onChange={(e) => setPassword2(e.target.value)}
          />
        </label>
        <button className="btn" type="submit" onClick={handleSubmit}>
          <p>Register Account</p>
        </button> 
      </form>
    </div>
  )
};

export default Register;
