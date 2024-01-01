import React from "react";
import { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { Elementsix } from "../components/Elements/Elementsix";


export const DnDsix = () => {
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
         <Elementsix/>
      </div>
  </div>
)};

export default DnDsix;