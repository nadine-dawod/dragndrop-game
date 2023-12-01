
import React from "react";
import "../components/DnMStyle.css";
import One from "./buildingBlocks/One";
import Two from "./buildingBlocks/Two";
import Three from "./buildingBlocks/Three";

const DnMFunc = () => {

return (
    <main>
      <div className="gameArea"> 

      <One />
      <Two />
      <Three />

      </div>
    </main>
  );
}

export default DnMFunc; 