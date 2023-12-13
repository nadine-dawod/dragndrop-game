import React from "react";
import { DropArea } from "../components/DropArea";
import Register from "../components/Register";
import { Instructions } from "../components/Instructions";
import { Elements } from "../components/Elements";
import { DnMFunc } from "../components/DnMFunc";

export const GamePage = () => {
  return (
    <div style={{ marginTop: "25px" }}>

      <Instructions />    
      <DnMFunc />

    </div>
  );
};

export default GamePage;
