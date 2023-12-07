import { useDraggable } from "@dnd-kit/core";


export const Elementfive = () => {

    const {attribute, listeners, NrFive, transform} = useDraggable({
        id: 'Five',
      });

      const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div ref={NrFive} style={style} {...attribute} {...listeners}>
            <svg id="Five" width="36" height="75" viewBox="0 0 36 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0L35.3205 75H0.679443L18 0Z" fill="#9CE5CA"/>
            </svg>
        </div>
    );
  };