import GamePage from "./GamePage";

import { Instructions } from "../components/Instructions";
import DnDthree from "../components/DnDthree";
import DnDfour from "../components/DnDfour";
import DnDfive from "../components/DnDfive";
import DnDsix from "../components/DnDsix";
import DnDseven from "../components/DnDseven";
import DnDtwo from "../components/DnDtwo";
import DnDone from "../components/DnDone";

export const HomePage = () => {
  return (
    <div>
      <h2>Hello and welcome to our game!</h2>
      <p>Login or create an account to play.</p>
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
    </div>
  );
};
export default HomePage;
