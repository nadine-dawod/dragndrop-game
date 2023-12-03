import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ErrorLogin from "./components/ErrorLogin";
import { GamePage } from "./pages/GamePage";
import { ProfilePage } from "./pages/ProfilePage";
import Login from "./components/Login";
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
