import React, {useState} from "react";
import "../components/DnMStyle.css";
import One from "../components/buildingBlocks/One.svg";
import DnMFunc from "../components/DnMFunc";


const GamePage = () => {

  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  };

  return (
    <div className="game-area">
        <DnMFunc onDragMove={handleDragMove}>
          <div style={{transform: `translateX(${translate.x}px) translateY(${translate.y}px)`}}>
            <img src={One} alt="Item 1" className="item"></img>
          </div>
        </DnMFunc>
    </div>


  );

};

export default GamePage; 