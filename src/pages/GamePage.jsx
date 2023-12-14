import React from "react";
import { DropArea } from "../components/DropArea";
import Register from "../components/Register";
import { Instructions } from "../components/Instructions";
import { Elements } from "../components/Elements";
import { DnMFunc } from "../components/DnMFunc";
import { DnMFunc2 } from "../components/DnMFunc2"

export const GamePage = () => {
  return (
    <div style={{ marginTop: "25px" }}>

      <Instructions />    
      <DnMFunc />
      <DnMFunc2 />


    </div>
  );
};

export default GamePage;
