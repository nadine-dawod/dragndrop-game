import { useDraggable } from "@dnd-kit/core";


export const Elementfour = () => {

    const {attribute, listeners, NrFour, transform} = useDraggable({
        id: 'Four',
      });
    
      const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
    <div ref={NrFour} style={style} {...attribute} {...listeners}>
        <svg id="Four" width="300" height="10" viewBox="0 0 300 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H300V10H0V0Z" fill="black"/>
        </svg>
    </div>
    );
  };