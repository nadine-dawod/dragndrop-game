import React from "react";
import { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { Elementfour } from "../components/Elements/Elementfour";


export const DnDfour = () => {
  const [elementPos, setElementPos] = useState({ x: 0, y: 0});
  const bindElementPos= useDrag((params) => {
setElementPos({
x:params.offset[0],
y:params.offset[1],
  });
});
  return ( 
  <div style={{marginTop: "25px"}}>
    <div {...bindElementPos()} style={{
        position: 'relative',
        top: elementPos.y,
        left: elementPos.x,
        touchAction: 'none',
      }}>
         <Elementfour/>
      </div>
  </div>
)};

export default DnDfour;