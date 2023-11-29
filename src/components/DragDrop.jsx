import React from "react";
import "./DnDStyle.css";

import One from "./buildingBlocks/One.svg";
import Two from "./buildingBlocks/Two.svg";
import Three from "./buildingBlocks/Three.svg"


export const DragDrop = () => {
   
    // FUNCTIONS FOR DROP AREA //
    const handleDragOver = (e) => {
        e.preventDefault();
        console.log("OnDragOver")
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData({buildingBlocks});
        console.log("OnDrop")

    }

    // FUNCTION FOR DRAG ITEM //
    const handleDragStart = (e) => {
        e.dataTransfer.setData({buildingBlocks}, e.target.id);
        console.log("OnDragStart")
    }
    
    return (
        <div className="game-area">
        
        {/* DRAWING DROP AREA */}
            <div 
                className="dropArea" 
                onDragOver={handleDragOver}
                onDrop={handleDrop}>
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