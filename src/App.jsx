import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GamePage } from "./pages/GamePage";
import { ProfilePage } from "./pages/ProfilePage";
import Login from "./components/Login";
import ErrorLogin  from "./components/ErrorLogin";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import routes from "./routes/routes";
// import RegisterAccount??
// import { RegisterAccount } from "./components/RegisterAccount";

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
