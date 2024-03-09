import React, { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../utils/ActionTypes";
import { getUser } from "../landingPage/pages/Auth/_request";

export const TOKEN_KEY = "TheX_User_Token";
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
  const dispatch = useDispatch<any>();
  // const user = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token) {
      const login = async () => {
        await dispatch(getUser());
        dispatch({ type: ActionTypes.SET_TOKEN, payload: token });
      };
      login();
    }
  }, []);

  // const register = () => {};
  // const login = () => {};
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = "/";
  };

  const value: AuthState = {
    onLogout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
