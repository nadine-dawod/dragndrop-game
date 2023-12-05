import React from "react";
import { Elementone } from "../components/Elements/Elementone";
import { Elementtwo } from "../components/Elements/Elementtwo";
import { Elementthree } from "../components/Elements/Elementthree";
import { Elementfour } from "../components/Elements/Elementfour";
import { Elementfive } from "../components/Elements/Elementfive";
import { Elementsix } from "../components/Elements/Elementsix";
import { Elementseven } from "../components/Elements/Elementseven";
import { DropArea } from "../components/DropArea";
import Register from "../components/RegisterAccount";
import { Instructions } from "../components/Instructions";


export const GamePage = () => {
  return <div>
    <Elementone/>
    <Elementtwo/>
    <Elementthree/>
    <Elementfour/>
    <Elementfive/>
    <Elementsix/>
    <Elementseven/>
    <Instructions/>
    <DropArea/>
  </div>;
};




