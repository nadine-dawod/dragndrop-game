import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GamePage } from "./pages/GamePage";
import { ProfilePage } from "./pages/ProfilePage";
import Login from "./components/Login";
import ErrorLogin  from "./components/ErrorLogin";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import routes from "./routes/routes";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>
        <Header />
        {routes}
          <Route path="/login" element={<Login />}/>
          <Route path="/errorlogin" element={<ErrorLogin />}/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
