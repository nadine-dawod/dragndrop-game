import React, { useEffect, useRef } from "react";
import { Navigate, Route, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../reducers/AuthProvider";

const ProtectedRoute = ({ element, ...rest }) => {
  const { state } = useAuth();
  const navigate = useNavigate();
  const { userId } = useParams();
  const alertShownRef = useRef(false);

  useEffect(() => {
    if (!state.isAuthenticated || userId === undefined) {
      // Show an alert only if it hasn't been shown before and userId is defined
      if (!alertShownRef.current && userId !== undefined) {
        alert("You need to login to access this page");
        alertShownRef.current = true;
      }

      // Redirect to login page
      navigate("/login", { replace: true });
    }
  }, [state.isAuthenticated, userId, navigate]);

  return state.isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
