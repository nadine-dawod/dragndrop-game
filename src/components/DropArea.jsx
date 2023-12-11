import "./DropArea.css";
import { useDroppable } from "@dnd-kit/core";

export const DropArea = () => {
  const { setNodeRef } = useDroppable({
    id: "droppable",
  });

  return <div className="dropArea" ref={setNodeRef}></div>;
};
