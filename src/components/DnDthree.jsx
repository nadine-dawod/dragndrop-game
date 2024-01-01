import React from "react";
import { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { Elementthree } from "../components/Elements/Elementthree";


export const DnDthree = () => {
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
         <Elementthree/>
      </div>
  </div>
)};

export default DnDthree;