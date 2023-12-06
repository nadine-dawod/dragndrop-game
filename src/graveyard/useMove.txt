import { useEffect, useRef } from "react";


const useMove = (id) => {

    const clicked = useRef(false);

    const position = useRef ({
        startX: 0,
        startY: 0,
        stopX: 0,
        stopY: 0,
    });
    
    useEffect (() => {

        const dragItem = document.getElementbyId(["One", "Two", "Three"]);
        const dropArea = document.getElementById("gameArea");

// DRAG ITEM FUNCTION //
  
        const onMouseClick = (e) => {
            if (clicked.current = true) {
                position.current.startX = clientX;
                position.current.startY = clientY;
            }
        };

        const onMouseRelease = (e) => {
            if (clicked.current = false) {
                position.current.stopX = offsetX;
                position.current.stopY = offsetY;
            }
        };

// GAME AREA  FUNCTIONS//

        const onMouseMove = (e) => {
            if (clicked.current) {
                const nextX = e.clientX - position.current.startX + position.current.stopX;
                const nextY = e.clientY - position.current.startY + position.current.stopY;

                dragItem.style.top = `${nextY}px`;
                dragItem.style.top = `${nextX}px`;
            }
        }

// ADD EVENT LISTENERS // 

        dragItem.addEventListener('mousedown', onMouseClick);
        dragItem.addEventListener('mouseup', onMouseRelease);

        dropArea.addEventListener('mousemove', onMouseMove);
        dropArea.addEventListener('mouseleave', onMouseRelease);

// REMOVING EVENT LISTENERS // 
        const cleanUp = () => {
            dragItem.removeEventListener('mousedown', onMouseClick);
            dragItem.removeEventListener('mouseup', onMouseRelease);  

            dropArea.removeEventListener('mousemove', onMouseMove);
            dropArea.removeEventListener('mouseleave', onMouseRelease);
        };

    return cleanUp;
    }, [id])
};

export default useMove;