import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    user: null,
    //attempt to retrieve the userId from the localStorage and if it can´t find it, set it to null
    userId: localStorage.getItem("userId") || null,
    //If the userId is retrieved from the localStorage, set isAuthenticated to true, otherwise set it to false
    isAuthenticated: localStorage.getItem("userId") ? true : false,
  };

  const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        //saves the userId to the localStorage when login in
        localStorage.setItem("userId", action.payload.user.id);
        return {
          ...state,
          user: action.payload.user,
          userId: action.payload.user.id,
          username: action.payload.user.username,
          isAuthenticated: true,
        };
      case "LOGOUT":
        //cleans up the userId from the localStorage on logout
        localStorage.removeItem("userId");
        return {
          ...state,
          user: null,
          userId: null,
          username: null,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
