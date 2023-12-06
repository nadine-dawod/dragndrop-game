import React from "react";
import { useDraggable } from "@dnd-kit/core";

import { Elementone } from "../components/Elements/Elementone";
import { Elementtwo } from "../components/Elements/Elementtwo";
import { Elementthree } from "../components/Elements/Elementthree";
import { Elementfour } from "../components/Elements/Elementfour";
import { Elementfive } from "../components/Elements/Elementfive";
import { Elementsix } from "../components/Elements/Elementsix";
import { Elementseven } from "../components/Elements/Elementseven";

export const Draggable = (props) => {

    const {attributes, listeners, setNodeRef,  transform} = useDraggable({
        id: 'draggable',
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </div>
    );
}

export default Draggable;