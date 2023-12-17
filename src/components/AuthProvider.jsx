import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    user: null,
    isAuthenticated: false,
  };

  const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload.user,
          isAuthenticated: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
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
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
