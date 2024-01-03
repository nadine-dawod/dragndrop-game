import React from "react";
import "./Welcome.css";
import "../Button.css";
import profileFrame from "../Images/profileFrame.png";
import ProfileContent from "../Images/ProfileContent.png";

export const Welcome = ({}) => {
  const userName = JSON.parse(localStorage.getItem("userName")); //get username from local storage, without the quotes
  const userEmail = JSON.parse(localStorage.getItem("userEmail")); //get user email from local storage, without the quotes
  return (
    <div className="container">
      <div className="left">
        <img className="profileFrame" src={profileFrame} />
        <div className="nameBlock">
          <h1 className="DisplayName"> {userName}</h1>
          <h1 className="DisplayEmail"> {userEmail}</h1>
        </div>
        <button className="btn">Edit Profile</button>
      </div>
      <div className="right">
        <img className="ProfileContent" src={ProfileContent} />
      </div>
    </div>
  );
};
