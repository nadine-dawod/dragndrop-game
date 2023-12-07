import { useDraggable } from "@dnd-kit/core";


export const Elementthree = () => {

    const {attribute, listeners, NrThree, transform} = useDraggable({
        id: 'Three',
      });

      const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
    <div ref={NrThree} style={style} {...attribute} {...listeners}>
        <svg id="Three" width="25" height="140" viewBox="0 0 25 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H24.9999V8.55553H0V0ZM0 140V131.444H24.9999V140H0ZM22.7275 8.55591H20.4541V131.444H22.7275V8.55591ZM15.9087 8.55591H18.1814V131.444H15.9087V8.55591ZM13.6359 8.55591H11.3636V131.444H13.6359V8.55591ZM6.81814 8.55591H9.09084V131.444H6.81814V8.55591ZM4.54542 8.55591H2.27303V131.444H4.54542V8.55591Z" fill="white"/>
        </svg>        
    </div>     
    );
  };