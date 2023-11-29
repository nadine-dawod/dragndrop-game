/* import {useDrag} from 'react-dnd';

const Items = ({id, src}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "blocks",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))
    return (
    <img 
        src={src}
    />
        )

}

export default Items; */