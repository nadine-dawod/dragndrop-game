import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FunctionDnD from './FunctionDnD';
const GameDnD = () => {



    return (
        <DndProvider backend={HTML5Backend}>

        <div className='game-area'>
        <FunctionDnD />
        </div>

        </DndProvider>
    )
}

export default GameDnD;