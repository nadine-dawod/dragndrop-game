import React from "react";
import { useState } from "react";
import { createUseGesture, dragAction } from "@use-gesture/react";
import { Elementsix } from "../Elements/Elementsix";

export const DnDsix = ({ id }) => {
  const [elementPos, setElementPos] = useState({
    //get position saved in localStorage and save it in local state
    x: parseInt(localStorage.getItem(`position_${id}_x`), 10) || 0,
    y: parseInt(localStorage.getItem(`position_${id}_y`), 10) || 0,
  });

  const useGesture = createUseGesture([dragAction]);

  const bindElementPos = useGesture(
    {
      onDrag: ({ offset }) => {
        setElementPos({
          x: offset[0],
          y: offset[1],
        });
      },

      onDragEnd: ({ offset }) => {
        //save the position on dragEnd to localStorage
        localStorage.setItem(`position_${id}_x`, offset[0].toString());
        localStorage.setItem(`position_${id}_y`, offset[1].toString());
      },
    },
    //when you start dragging, start offset from the position saved in the local state
    { drag: { from: [elementPos.x, elementPos.y] } }
  );

  return (
    <div style={{ marginTop: "25px" }}>
      <div
        {...bindElementPos()}
        style={{
          position: "relative",
          top: elementPos.y,
          left: elementPos.x,
          touchAction: "none",
        }}
      >
        <Elementsix />
      </div>
    </div>
  );
};

export default DnDsix;
