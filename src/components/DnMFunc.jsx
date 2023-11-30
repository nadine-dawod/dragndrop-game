import React, { useState } from "react";

const DnMFunc = (props) => {
  const { onPointerDown, onPointerUp, onPointerMove, children } = props;

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});

  const handlePointerDown = (e) => {
    setIsDragging(true);
    onPointerDown(e);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    onPointerUp(e);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
        setPosition({
            x: position.x + e.movementX,
            y: position.y + e.movementY,
        })
      onPointerMove(e);
    }
  };

  return (
    <div
        style={{position: "relative"}}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      {React.cloneElement(children, {
        style: {
            ...children.props.style,
            position: "absolut",
            left: position.x,
            top: position.y,
            cursor: isDragging ? "grabbing" : "grab",
        },
      })}
    </div>
  );
};

DnMFunc.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onPointerMove: () => {},
};

export default DnMFunc;