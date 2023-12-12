import "./DropArea.css";
import { useDroppable } from "@dnd-kit/core";

const {setNodeRef} = useDroppable({id: 'droppable'})

export const DropArea = () => {
    return (
      <div className="droparea" ref={setNodeRef}>
      </div>
    );
  };