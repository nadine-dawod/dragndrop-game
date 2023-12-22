import "./LogOutButton.css";


export const LogOutButton = () => {
  return (
    <div className="logOutButton" onClick={() => navigate("/login")}>
        <p>Log Out</p>
        
    </div>
    
  );
};


            //<button onClick={() => navigate("/login")}>Back to Login </button>
            