import { Route, Routes } from "react-router-dom";
import GamePage from "../pages/GamePage";
import { ProfilePage } from "../pages/ProfilePage";
import { AboutPage } from "../pages/AboutPage";
import { LoginAccountPage } from "../pages/LoginAccountPage";
import { RegisterAccountPage } from "../pages/RegisterAccountPage";
import ErrorLogin from "../components/ErrorLogin";
import ProtectedRoute from "./protectedRoutes";
import { ProfileDetails } from "../components/profile/ProfileDetails";

const routes = (
  <Routes>
    <Route path="/" element={<LoginAccountPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/login" element={<LoginAccountPage />} />
    <Route path="/register-account" element={<RegisterAccountPage />} />
    {/* Private routes */}

    <Route
      path="/game/:userId"
      element={<ProtectedRoute element={<GamePage />} />}
    />
    <Route
      path="/profile/:userId"
      element={<ProtectedRoute element={<ProfilePage />} />}
    />
    {/* Error page */}
    <Route path="*" element={<ErrorLogin />} />
  </Routes>
);

export default routes;
