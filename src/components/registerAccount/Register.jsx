// ==== REGISTER ACCOUNT / CREATE ACCOUNT ====
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

  

const Register = () => {  
  // State variables to hold the form info
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();  
  // Hook to navigate to different pages


  const handleSubmit = async (e) => {   
    // Function to handle form submission. Assign this function to button onClick
    e.preventDefault();

        if (password1 === password2) {  
          // Check if passwords match
        
          try { 
            // Grab existing users from the server
          const response = await axios.get("http://localhost:6001/users"); 
            const users = response.data     
            // List of users (json) = response.data
            const user = users.find((user) => user.email === email | user.username === username); 
            // Check if email and/or username already exists 
            
          if (user) {       
            // If there is a matching user, alert..
            alert("Username or email already exists. Please try again!");
          } else {          
            // Or else create newUser and display success alert..
            const newUser = { username, email, password: password1 };
              axios.post("http://localhost:6001/users", newUser)  
              .then(() => alert("User created! Login to play!"));                
              navigate("/");  
              // Navigate to the Landing/Login-page after successful registration
          } 
          }
          catch (error) {  
            // Handle possible errors during the API request - message + error placeholder
            console.error("Oops, something went wrong:", error);
          }
        }
        else {   
          // Or if passwords don't match, alert..
          alert ("Passwords did not match. Please try again.");
        }
  };
 
  return (  
    // Form with input fields for username, email, password, confirm password, and button to submitt form
    <div className="container">
      <form className="form-container">
        <label>  
          <input
            type="text"
            placeholder="Username"
            value={username}  
            onChange={(e) => setUsername(e.target.value)}  
            // onChange added to each state to be able to update the state (from input field)
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
        <button className="btn" type="submit" onClick={handleSubmit}>Create Account</button> 
      </form>
    </div>
  );
};

export default Register;
