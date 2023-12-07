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

    const {attribute, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
    });

    const {Two} = useDraggable({
        id: 'draggable'
    })

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
    <div>
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <Elementone />
        </div>

        <div ref={Two} style={style} {...listeners} {...attributes}>
            <Elementtwo />
        </div>
    </div>
    );
}

export default Draggable;