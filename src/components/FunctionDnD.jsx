import Items from "./Items";
import One from ".//buildingBlocks/One.svg";
import Two from ".//buildingBlocks/Two.svg";
import Three from ".//buildingBlocks/Three.svg";

const BuildingBlocks = [
    {
        id: 1,
        src: One,
    },
    {
        id: 2,
        url: Two,
    },
    {
        id: 3,
        url: Three,
    },
]

const FunctionDnD = () => {
    return (
        <>
        <div className='elementArea'> {BuildingBlocks.map((items) => {
            return <Items src={items.usrcrl} id={items.id} key={items.id} />;
        })}{""}
        </div>
        <div className='dropArea'></div>
        </>
    )
};

export default FunctionDnD;