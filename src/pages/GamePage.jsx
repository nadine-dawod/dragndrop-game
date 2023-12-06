import React from "react";
import { DropArea } from "../components/DropArea";
import Register from "../components/Register";
import { Instructions } from "../components/Instructions";
import { Elements } from "../components/Elements";
import { DnMFunc } from "../components/DnMFunc";


export const GamePage = () => {
  return <div>
    <DnMFunc />
    <Instructions/>
    <DropArea/>
  </div>;
};

export default GamePage;



