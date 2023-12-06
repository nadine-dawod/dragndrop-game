import React from "react";
import { DropArea } from "../components/DropArea";
import Register from "../components/RegisterAccount";
import { Instructions } from "../components/Instructions";
import { Elements } from "../components/Elements";


export const GamePage = () => {
  return <div>
    <Elements/>
    <Instructions/>
    <DropArea/>
  </div>;
};




