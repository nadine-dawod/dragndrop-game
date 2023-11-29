import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ErrorLogin } from "./components/ErrorLogin";
import { GamePage } from "./pages/GamePage";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Router>
        <Header />
        {routes}
        <GamePage />
        <Footer />
      </Router>
    </>
  );
}

export default App;
