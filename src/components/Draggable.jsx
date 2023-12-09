import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";


export const Draggable = (props) => {

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>

    </div>
    );
}

export default Draggable;