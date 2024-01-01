import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import GamePage from "../pages/GamePage";
import { ProfilePage } from "../pages/ProfilePage";
import { AboutPage } from "../pages/AboutPage";
import { LoginAccountPage } from "../pages/LoginAccountPage";
import { RegisterAccountPage } from "../pages/RegisterAccountPage";
import ErrorLogin from "../components/ErrorLogin";
import Login from "../components/Login";

const routes = (
  <Routes>
    <Route path="/" element={<LoginAccountPage />} />
    <Route path="/game/:userId" element={<GamePage />} />
    <Route path="/profile/:userId" element={<ProfilePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/login" element={<LoginAccountPage />} />
    <Route path="/register-account" element={<RegisterAccountPage />} />
    <Route path="*" element={<ErrorLogin />} />
  </Routes>
);

export default routes;
