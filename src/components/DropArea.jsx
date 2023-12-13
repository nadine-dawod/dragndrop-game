import "./DropArea.css";
import { useDroppable } from "@dnd-kit/core";

export const DropArea = ({ children, id }) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div className="dropArea" ref={setNodeRef}>
      {children}
    </div>
  );
};
