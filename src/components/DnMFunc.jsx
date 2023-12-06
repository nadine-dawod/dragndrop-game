import React, { useState} from "react";
import { DndContext } from "@dnd-kit/core";

import Draggable from "./Draggable";
import Droppable from "./Droppable";

export const DnMFunc = () => {

  return (

    <DndContext>
      <Draggable />
      <Droppable />
    </DndContext>
  );


};

export default DnMFunc;