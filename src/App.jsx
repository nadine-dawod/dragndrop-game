import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ErrorLogin } from "./components/ErrorLogin";
import { GamePage } from "./pages/GamePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorLogin />} />
          <Route path="/game/:userId" element={<GamePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
