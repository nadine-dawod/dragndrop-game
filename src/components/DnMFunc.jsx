import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { Elementone } from "./Elements/Elementone";
import { Elementtwo } from "./Elements/Elementtwo";
import { Elementthree } from "./Elements/Elementthree";
import { Elementfour } from "./Elements/Elementfour";
import { Elementfive } from "./Elements/Elementfive";
import { Elementsix } from "./Elements/Elementsix";
import { Elementseven } from "./Elements/Elementseven";
import { Draggable } from "./Draggable";
import { DropArea } from "./DropArea";

export const DnMFunc = () => {
  const containers = ["A"];
  const [parent, setParent] = useState(null);

  const draggableMarkup = (
    <Draggable id="draggable">
      <Elementone />
    </Draggable>
  );

  function handleDragEnd(event) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {containers.map((id) => (
          <DropArea key={id} id={id}>
            {parent === id ? draggableMarkup : "Drop here"}
          </DropArea>
        ))}
      </div>
    </DndContext>
  );
};

export default DnMFunc;
