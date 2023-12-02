
// ==== REGISTER ACCOUNT ====
import { useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
// +++++ Added const navigate on this page after seeing the Login tutorial.
// Imported useNavigate to RegisterAccount
// Also imported RegisterAccount and added Route to app.jsx.      


const Register = () => {
    // Three states - one for each input field
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // check if the email is unique
    const checkEmail = (users) => {
        const user = users.find((user) => user.email === email);
        if (user) return user;
    };

    // Assign this to button
    const handleSubmit = async () => {
        const user = await axios
        .get("/users")
        .then((res) => checkEmail(res.data, email));

        // if email already exists
        // else save this new user - by making a post-request
        if(user) {
            alert("User already exists!")
        } else {
            const user = {username, email, password};
            axios.post("/users", user).then(alert("User created!"));
            navigate("../ProfilePage");
        }
    };  

    // added value to each state
    // added onChange to be able to update the state (from input field)
    // Also, added a handleSubmit to the button.
    return (
        <div className="container">
            <Card>
                <form className="form-container">
                    <h1>Register User</h1>
                    <label>
                        <input 
                            type="text" 
                            placeholder="Name"                             
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
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
            </Card>
        </div>
    );
};

export default Register;



// ==== My train of thought bellow (befor starting to code) ====

// This will be the Create Account page.
// It will include:
// - a picture to the left
// - a logo on the top/center

// ==== FUNCTION TO CREATE ACCOUNT ====

// HELENA: 
// Spara personen ngnstans - json server.
// -- Specifika sätt för register samt login. (Group project resourses)
// -- Koden ska finnas på github - sundsgården (all source code).
// Registrera funktionen.
// Funkar Login?

// Store "create acount" data in an object.
// The stored account data should be able to be displayed on the Profile page.

// - you should be able to choose one out of two game-plan options - free or pro. 
// 1. make 2 checkboxes together with some text.
// 2. create a variable that will store the choice of which checkbox was selected.
// 3. if/else statement to navigate to pro or free version ((extra feature))

// ---- THE LOGIN feature ---- 
// - three fields to fill in create account info: Username, Email, password
// - all three fields should be stored in ONE user-object. 
// 1. Create a field for USERNAME.
// 2. Create a variable? to store the info connected to this userinfo. 
// 3. Error message: How to tell the username is available?
//   
// 1. create a field for EMAIL
// 2. store this info in the same object as the username.
// 3. Error message: requier an @ = valid email? Is there a standard code snippet for this? 
// 
// 1. create a field for PASSWORD
// 2. store the PW in the same object as the username and email.
// 3. Error message: requirements? No requirements.
