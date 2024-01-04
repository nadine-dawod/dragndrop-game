import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../reducers/AuthProvider";
import profileFrame from "../Images/profileFrame.png";
import ProfileContent from "../Images/ProfileContent.png";
import "./Welcome.css";

export const ProfileDetails = () => {
  // const userName = JSON.parse(localStorage.getItem("userName")); //get username from local storage, without the quotes
  // const userEmail = JSON.parse(localStorage.getItem("userEmail")); //get user email from local storage, without the quotes
  const navigate = useNavigate();
  const { userId } = useParams();
  const { state } = useAuth();
  const { isAuthenticated, user } = state;
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

  return (
    <div className="container">
      <div className="left">
        <img className="profileFrame" src={profileFrame} />
        <div className="nameBlock">
          {users ? (
            users.map((userData) => (
              <div key={userData.id} className="nameBlock">
                <h1 className="DisplayName">{userData.username}</h1>
                <h1 className="DisplayName">{userData.email}</h1>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <button className="btn">Edit Profile</button>
      </div>
      <div className="right">
        <img className="ProfileContent" src={ProfileContent} />
      </div>
    </div>
  );
};
