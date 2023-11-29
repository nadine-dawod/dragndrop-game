import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { GamePage } from "../pages/GamePage";
import { ProfilePage } from "../pages/ProfilePage";
import { ErrorLogin } from "../components/ErrorLogin";

const routes = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<ErrorLogin />} />
    <Route path="/game/:userId" element={<GamePage />} />
    <Route path="/profile/:userId" element={<ProfilePage />} />
  </Routes>
);

export default routes;
