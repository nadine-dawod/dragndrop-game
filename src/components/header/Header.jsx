import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import "./Header.css";
import ProfilePhoto from "../Images/ProfilePhoto.png";
import { useAuth } from "../AuthProvider";
import { useEffect, useState } from "react";
import axios from "axios";

export const Header = () => {
  const { state, dispatch } = useAuth();
  const { userId, isAuthenticated } = state;
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      axios
        .get("http://localhost:6001/users")
        .then((response) => {
          console.log("Response.data", response.data);
          const loggedInUser = response.data.find(
            (userData) => userData.id === parseInt(userId)
          );
          setUsers(loggedInUser ? [loggedInUser] : []);
        })
        .catch((error) => {
          console.error("Oops, there is a problem fetching data:", error);
        });
    }
  }, [isAuthenticated, userId]);

  const handleLogOut = () => {
    alert(`You are now logged out`);
    dispatch({ type: "LOGOUT" });
    navigate(`/`);
    console.log("log out");
    window.location.reload(); //refreshes the page to remove the username from header
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
          {users ? (
            users.map((userData) => (
              <div key={userData.id}>
                <p className="userName">{userData.username}</p>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </NavLink>
      </div>
    </div>
  );
};
