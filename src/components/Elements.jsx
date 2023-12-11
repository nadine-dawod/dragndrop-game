/* I dont think this is used? /Nadine */


import { Elementone } from "../components/Elements/Elementone";
import { Elementtwo } from "../components/Elements/Elementtwo";
import { Elementthree } from "../components/Elements/Elementthree";
import { Elementfour } from "../components/Elements/Elementfour";
import { Elementfive } from "../components/Elements/Elementfive";
import { Elementsix } from "../components/Elements/Elementsix";
import { Elementseven } from "../components/Elements/Elementseven";
import "./Elements.css";



export const Elements = () => {
    return (
      <div className="elements">
         <Elementone/>
         <Elementtwo/>
         <Elementthree/>
         <Elementfour/>
         <Elementfive/>
         <Elementsix/>
         <Elementseven/>
      </div>
    );
  };