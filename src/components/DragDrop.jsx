import React from "react";
import { useState } from "react";

import One from "./buildingBlocks/One.svg";
import Two from "./buildingBlocks/Two.svg";
import Three from "./buildingBlocks/Three.svg"


export const DragDrop = () => {

    const [item, setItem] = useState([])
   
    // FUNCTIONS FOR DROP AREA //
    const handleDragOver = (e) => {
        e.preventDefault();
        console.log("draaagover")
    }

    const handleDrop = (e) => {
        e.dataTransfer.getData("image/svg");
        console.log("drrrrop")
        setItem([item])
    }

    // FUNCTION FOR DRAG ITEM //
    const handleDragStart = (e) => {
        e.dataTransfer.setData("image/svg", e.target.id);
        console.log("dragdragdraaaag")
    }
    

    return (
        <div className="game-area">
        
        {/* DRAWING DROP AREA */}
            <div 
                className="dropArea" 
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            > {item.map((item, index) => (
                <div className="droppedItems" key={index}>
                {item}
                </div>
            ))}
            </div>

            <div className="elementArea">

        {/* DRAWING DRAGGABLE ITEM */}
                

                <img 
                    src={One}
                    className="item" 
                    draggable="true"
                    onDragStart={handleDragStart}
                >
                </img>

                <img 
                    src={Two}
                    className="item" 
                    draggable="true"
                    onDragStart={handleDragStart}
                >
                </img>

                <img 
                    src={Three}
                    className="item" 
                    draggable="true"
                    onDragStart={handleDragStart}
                >
                </img>


                </div>

            </div>
    )
};