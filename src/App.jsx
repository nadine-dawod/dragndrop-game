import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import  ErrorLogin  from "./components/ErrorLogin";
import { GamePage } from "./pages/GamePage";
import { ProfilePage } from "./pages/ProfilePage";
import Login from "./components/Login";
// import RegisterAccount?? 
// import { RegisterAccount } from "./components/RegisterAccount";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorLogin />} />
          <Route path="/game/:userId" element={<GamePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
