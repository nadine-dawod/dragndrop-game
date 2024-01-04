import { useEffect, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { Elementone } from "../Elements/Elementone";

export const DnDone = ({ id }) => {
  const [elementPos, setElementPos] = useState({
    x: parseInt(localStorage.getItem(`position_${id}_x`), 10) || 0,
    y: parseInt(localStorage.getItem(`position_${id}_y`), 10) || 0,
  });
  console.log("elementPos", elementPos);
  const handleDragEnd = () => {
    localStorage.setItem(`position_${id}_x`, elementPos.x.toString());
    localStorage.setItem(`position_${id}_y`, elementPos.y.toString());
  };

  const bindElementPos = useDrag(
    ({ offset, down }) => {
      console.log("offset", offset, "down", down);
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
          position: "absolute",
          top: elementPos.y,
          left: elementPos.x,
          touchAction: "none",
        }}
      >
        <Elementone id={id} />
      </div>
    </div>
  );
};

export default DnDone;
