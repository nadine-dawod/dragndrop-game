import React, {useEffect, useRef} from "react";

const useDrag = (id) => {

    const isClicked = useRef(false);

    const coords = useRef({
      startX: 0,
      startY: 0,
      lastX: 0,
      lastY: 0,
    })
  
  
    // Use Effect start //
  useEffect(() => {

    const target = document.getElementById(id)
      if (!target) throw new Error ("Element with given id does not exist");

    const gameArea = target.parentElement;
     if (!gameArea) throw new Error ("Target element must have a parent");
  
      // Mouse event functions //
  
      const onMouseDown = (e, MouseEvent) => {
        isClicked.current = true;
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY; 
      }
  
      const onMouseUp = (e, MouseEvent) => { 
        isClicked.current = false;
        coords.current.lastX = target.offsetLeft;
        coords.current.lastY = target.offsetTop;
      }
  
      const onMouseMove = (e, MouseEvent) => {
        if (!isClicked.current) return;
  
          const nextX = e.clientX - coords.current.startX + coords.current.lastX;
          const nextY = e.clientY - coords.current.startY + coords.current.lastY; 
  
          target.style.top = `${nextY}px`;
          target.style.left = `${nextX}px`;
      }
  
  
  
      // Adding eventlisteners //
      target.addEventListener('mousedown', onMouseDown);
      target.addEventListener('mouseup', onMouseUp);
      gameArea.addEventListener('mousemove', onMouseMove);
      gameArea.addEventListener('mouseleave', onMouseUp);
  
  
      // Removing eventlisteners //
      const cleanUp = () => {
        target.removeEventListener('mousedown', onMouseDown);
        target.removeEventListener('mouseup', onMouseUp);
        gameArea.removeEventListener('mousemove', onMouseMove);
        gameArea.removeEventListener('mouseleave', onMouseUp);
      }
      return cleanUp;
    }, [id])

}; 

export default useDrag;