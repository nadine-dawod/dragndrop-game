import { useEffect, useRef } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../reducers/AuthProvider";

const ProtectedRoute = ({ element }) => {
  const { state } = useAuth();
  const navigate = useNavigate();
  //access the userId from the URL parameters
  const { userId } = useParams();
  //create variable to keep track of whether the alert has been shown or not
  const alertShownRef = useRef(false);

  //useEffect ti handle redirection and alert when user has not logged in and tries to access a private route
  useEffect(() => {
    //check is the user is not authenticated or if userId is undefined
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

  //If logged in the show the element/page, otherwise redirect to login
  return state.isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
