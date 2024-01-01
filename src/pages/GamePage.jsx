import { Instructions } from "../components/Instructions";
import DnDthree from "../components/DnDthree";
import DnDfour from "../components/DnDfour";
import DnDfive from "../components/DnDfive";
import DnDsix from "../components/DnDsix";
import DnDseven from "../components/DnDseven";
import DnDtwo from "../components/DnDtwo";
import DnDone from "../components/DnDone";

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
