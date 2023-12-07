
import { useDraggable } from "@dnd-kit/core";


export const Elementone = () => {

    const {attribute, listeners, NrOne, transform} = useDraggable({
        id: 'One',
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
    <div ref={NrOne} style={style} {...attribute} {...listeners}> 
        <svg id="One" width="100" height="140" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M100 0H0V140H100V0ZM24.9999 43.9998L25 44.0695V140H75V43.9995H74.9999C74.9997 30.7448 63.8069 19.9998 49.9999 19.9998C36.1927 19.9998 24.9999 30.7449 24.9999 43.9998Z" fill="#EACFC4"/>
        </svg>       
    </div>     
    );
  };