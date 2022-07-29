import React, { useState } from "react";

// creating context
const AuthContext = React.createContext({});

// creating context provider
export function AuthContextProvider(props) {
  const initinalToken = localStorage.getItem("token");
  const [token, setToken] = useState(initinalToken);

  // checking if token is empty string or not
  const isLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
