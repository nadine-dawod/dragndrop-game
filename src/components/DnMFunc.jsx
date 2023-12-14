import { DndContext } from "@dnd-kit/core";

import { useState } from "react";
import { Elementone } from "./Elements/Elementone";
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
      {containers.map((id) => (
        <DropArea key={id} id={id}>
          {parent === id ? draggableMarkup : null}
        </DropArea>
      ))}
    </DndContext>
  );
};

export default DnMFunc;
