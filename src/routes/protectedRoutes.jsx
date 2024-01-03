import React, { useEffect, useRef } from "react";
import { Navigate, Route, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";

const ProtectedRoute = ({ element, ...rest }) => {
  const { state } = useAuth();
  const navigate = useNavigate();
  const { userId } = useParams();
  const alertShownRef = useRef(false);

  useEffect(() => {
    if (!state.isAuthenticated || !userId) {
      if (!alertShownRef.current) {
        alert("You need to login to access this page");
        alertShownRef.current = true;
      }
      // Redirect to login page if not authenticated or userId is undefined
      navigate("/login", { replace: true });
    }
  }, [state.isAuthenticated, userId, navigate]);

  return state.isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
