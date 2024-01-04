import React from "react";
import { useState } from "react";
import { useDrag } from "@use-gesture/react";
import { Elementsix } from "../Elements/Elementsix";

export const DnDsix = ({ id }) => {
  const [elementPos, setElementPos] = useState({
    x: parseInt(localStorage.getItem(`position_${id}_x`), 10) || 0,
    y: parseInt(localStorage.getItem(`position_${id}_y`), 10) || 0,
  });

  const handleDragEnd = () => {
    localStorage.setItem(`position_${id}_x`, elementPos.x.toString());
    localStorage.setItem(`position_${id}_y`, elementPos.y.toString());
  };

  const bindElementPos = useDrag(
    ({ offset, down }) => {
      setElementPos({
        x: offset[0],
        y: offset[1],
      });

      if (!down) {
        handleDragEnd();
      }
    },
    { onDragEnd: handleDragEnd }
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
