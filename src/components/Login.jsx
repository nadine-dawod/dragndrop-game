import React, { useState} from "react"; // uses the useState hook to add a variable to update the value.
import { useNavigate } from "react-router-dom"; //to allow users to access different components
import  ErrorLogin  from "./ErrorLogin";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");  // to store and display any error messages
    const navigate = useNavigate();

    const handleSubmit = (event) => {   
        event.preventDefault(); // prevent the default behavior of a form when it is submitted.
    
        const validUsername = "Eva"; 
        const validPassword = "9432";

        if (username === validUsername && password === validPassword ){ //to ckeck if the username and password are match
            successMessage(); // Login sucessed, set an hello message
        }else{
            errorMessage("Invalid username or password. Please try again!" ) // Login failed, set an error message
        }
    };
    
    const successMessage = () => {
        alert(`Hi ${username}` );
        navigate(`/game/${username}`); //  access to the user's game page after login
    };

    const errorMessage = (message) => {
        setError(message) //save error message
    };

    return( 
        <> 
            {error && <ErrorLogin message={error} />}
            <form onSubmit={(handleSubmit)}> 
                <label htmlFor="userName">UserName</label>
                <input value={username}  type="text" placeholder="UserName" id="userName" name="userName" onChange={(e) => setUsername(e.target.value)} /> 
                <label htmlFor="password">password</label> 
                <input value={password} type="password" placeholder="****" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <button>Log In</button>
            </form>
            <button onClick={() => navigate("/register")}>Don't have an account? Register here.</button>
        </>
    ); //onChange is used to listen for user input in a text input box., onFormSwitch to switch to other page
};

export default Login;