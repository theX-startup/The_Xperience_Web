import React, { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../utils/ActionTypes";

const TOKEN_KEY = "TheX_User_Token";
interface AuthState {
  onLogout: () => void;
}
const AuthContext = createContext({} as AuthState);

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const children = props.children;
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      dispatch({ type: ActionTypes.SET_TOKEN, payload: token });
      dispatch({ type: ActionTypes.IS_AUTH, payload: true });
    } else {
      dispatch({ type: ActionTypes.IS_AUTH, payload: false });
    }
  }, []);

  const register = () => {};
  const login = () => {};
  const logout = () => {};

  const value = {
    onLogout: logout,
    onLogin: login,
    onRegister: register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
