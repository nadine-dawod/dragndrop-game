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
        <DnDone id="element1" />
        <DnDtwo id="element2" />
        <DnDthree id="element3" />
        <DnDfour id="element4" />
        <DnDfive id="element5" />
        <DnDsix id="element6" />
        <DnDseven id="element7" />
      </div>
      <Instructions />
      <div
        className="playArea"
        style={{
          minHeight: "35rem",
          backgroundColor: "#edecec",
        }}
      ></div>
    </>
  );
};

export default GamePage;
