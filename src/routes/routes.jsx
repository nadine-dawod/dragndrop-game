import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import GamePage from "../pages/GamePage";
import { ProfilePage } from "../pages/ProfilePage";
import { ErrorLogin } from "../components/ErrorLogin";
import { AboutPage } from "../pages/AboutPage";
import Login from "../components/Login";
import Register from "../components/RegisterAccount";

const routes = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<ErrorLogin />} />
    <Route path="/game/:userId" element={<GamePage />} />
    <Route path="/profile/:userId" element={<ProfilePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/create-account" element={<Register />} />
  </Routes>
);

export default routes;
