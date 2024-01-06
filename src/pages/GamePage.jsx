import { Instructions } from "../components/Instructions";
import DnDthree from "../components/dragNDrop/DnDthree";
import DnDfour from "../components/dragNDrop/DnDfour";
import DnDfive from "../components/dragNDrop/DnDfive";
import DnDsix from "../components/dragNDrop/DnDsix";
import DnDseven from "../components/dragNDrop/DnDseven";
import DnDtwo from "../components/dragNDrop/DnDtwo";
import DnDone from "../components/dragNDrop/DnDone";
import { useState } from "react";

export const GamePage = () => {
  //function to reset the game and return the elements to their original positions
  const [resetStatus, setResetStatus] = useState(false);
  const handleReset = () => {
    // Get all localStorage keys
    const localStorageKeys = Object.keys(localStorage);

    // Filter out keys starting with "position_"
    const elementPositionKeys = localStorageKeys.filter((key) =>
      key.startsWith("position_")
    );

    // Remove element position from localStorage using the "position_" key
    elementPositionKeys.forEach((key) => localStorage.removeItem(key));

    // Trigger a re-render by toggling resetStatus
    setResetStatus(!resetStatus);
  };

  return (
    <>
      <div>
        <Instructions />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "baseline",
          marginLeft: "5rem",
          marginRight: "5rem",
          marginTop: "5rem",
        }}
      >
        {/* render elements passing props with unique ids and the reset status */}
        <DnDone id="element1" resetStatus={resetStatus} />
        <DnDtwo id="element2" resetStatus={resetStatus} />
        <DnDthree id="element3" resetStatus={resetStatus} />
        <DnDfour id="element4" resetStatus={resetStatus} />
        <DnDfive id="element5" resetStatus={resetStatus} />
        <DnDsix id="element6" resetStatus={resetStatus} />
        <DnDseven id="element7" resetStatus={resetStatus} />
      </div>
      <div
        className="playArea"
        style={{
          minHeight: "35rem",
          backgroundColor: "#edecec",
        }}
      ></div>
      <button onClick={handleReset}>Reset Game</button>
    </>
  );
};

export default GamePage;
