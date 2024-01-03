import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../AuthProvider";

export const ProfileDetails = () => {
  const userName = JSON.parse(localStorage.getItem("userName")); //get username from local storage, without the quotes
  const userEmail = JSON.parse(localStorage.getItem("userEmail")); //get user email from local storage, without the quotes

  const { userId } = useParams();
  const { state } = useAuth();
  const { user } = state;
  const [users, setUsers] = useState(null);

  useEffect(() => {
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
  }, [userId]);

  return (
    <div>
      {users ? (
        <ul>
          {users.map((userData) => (
            <li key={userData.id}>
              <strong>Username:</strong> {userData.username}
              <br />
              <strong>Email:</strong> {userData.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

      <div className="container">
        <div className="left">
          <img className="profileFrame" src={profileFrame} />
          <div className="nameBlock">
            <h1 className="DisplayName"> {userName}</h1>
            <h1 className="DisplayEmail"> {userEmail}</h1>
          </div>
          <button className="btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};
