import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import "./Header.css";
import ProfilePhoto from "../Images/ProfilePhoto.png";
import { useAuth } from "../AuthProvider";

export const Header = () => {
  const { state, dispatch } = useAuth();
  const { userId } = state;
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("userName")); //get username from local storage, without the quotes
  console.log(userName); //check if it works

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    alert(`Hi ${userName}, you are now logged out`);
    navigate(`/`); //  access to the user's game page after login
    console.log("log out");
    localStorage.removeItem("user");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
  };

  return (
    <div className="header">
      <div>
        <NavLink to="/">
          <h1 className="logo">IMAGINARIUM</h1>
        </NavLink>
      </div>
      <div className="navBar">
        <NavLink to={`/game/${userId}`}>Play</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/" onClick={handleLogOut}>
          Log Out
        </NavLink>
        {/* Add function to log out */}
        <NavLink to={`/profile/${userId}`}>
          <img src={ProfilePhoto} alt="Profile Picture" />
          <p className="userName">{userName}</p>
        </NavLink>
      </div>
    </div>
  );
};
