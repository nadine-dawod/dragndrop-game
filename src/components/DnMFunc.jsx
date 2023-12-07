import React, {useState} from "react";
import { DndContext } from "@dnd-kit/core";

import Draggable from "./Draggable";
import Droppable from "./Droppable";


import { Elementone } from "./Elements/Elementone";
import { Elementtwo } from "./Elements/Elementtwo";

export const DnMFunc = () => {

  return (

    <DndContext>
      <Elementone />
      <Elementtwo />
      
{/*       <Draggable />
      <Droppable /> */}
    </DndContext>
  );


};

export default DnMFunc;