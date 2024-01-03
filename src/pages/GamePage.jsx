import { Instructions } from "../components/Instructions";
import DnDthree from "../components/dragNDrop/DnDthree";
import DnDfour from "../components/dragNDrop/DnDfour";
import DnDfive from "../components/dragNDrop/DnDfive";
import DnDsix from "../components/dragNDrop/DnDsix";
import DnDseven from "../components/dragNDrop/DnDseven";
import DnDtwo from "../components/dragNDrop/DnDtwo";
import DnDone from "../components/dragNDrop/DnDone";

export const GamePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "baseline",
          marginLeft: "5rem",
          marginRight: "5rem",
          marginTop: "5rem",
        }}
      >
        <DnDone />
        <DnDtwo />
        <DnDthree />
        <DnDfour />
        <DnDfive />
        <DnDsix />
        <DnDseven />
      </div>
      <Instructions />
    </>
  );
};

export default GamePage;

/* I think this page can go, it's not used anymore, saskia*/
