import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const ProfileDetails = () => {
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
      <h1>User List</h1>
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
    </div>
  );
};
