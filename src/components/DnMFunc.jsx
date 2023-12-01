
import { useEffect, useRef } from "react";
import "../components/DnMStyle.css";
import One from "../components/buildingBlocks/One.svg";


const DnMFunc = () => {


  // Initial value in each ref // 
  const gameAreaRef = useRef(null);
  const boxRef = useRef(null);
  const isClicked = useRef(false);
  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  })


  // Use Effect start //
useEffect(() => {
    if (!boxRef.current || !gameAreaRef.current) return;

    const box = boxRef.current;
    const gameArea = gameAreaRef.current;

    // Mouse event functions //

    const onMouseDown = (e, MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY; 
    }

    const onMouseUp = (e, MouseEvent) => { 
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    }

    const onMouseMove = (e, MouseEvent) => {
      if (!isClicked.current) return;

        const nextX = e.clientX - coords.current.startX + coords.current.lastX;
        const nextY = e.clientY - coords.current.startY + coords.current.lastY; 

        box.style.top = `${nextY}px`;
        box.style.left = `${nextX}px`;
    }



    // Adding eventlisteners //
    box.addEventListener('mousedown', onMouseDown);
    box.addEventListener('mouseup', onMouseUp);
    gameArea.addEventListener('mousemove', onMouseMove);
    gameArea.addEventListener('mouseleave', onMouseUp);


    // Removing eventlisteners //
    const cleanUp = () => {
      box.removeEventListener('mousedown', onMouseDown);
      box.removeEventListener('mouseup', onMouseUp);
      gameArea.removeEventListener('mousemove', onMouseMove);
      gameArea.removeEventListener('mouseleave', onMouseUp);
    }
    return cleanUp;
  }, [])


return (
    <main>
      <div ref={gameAreaRef} className="gameArea"> 
        <img ref={boxRef} src={One} className="box" />
      </div>
    </main>
  )
}

export default DnMFunc; 