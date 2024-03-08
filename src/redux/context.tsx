import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../utils/ActionTypes";
import { getUser } from "../landingPage/pages/Auth/_request";
import { fetchUserInternships } from "../App/pages/UserInternships/_request";

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
  const user = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    dispatch({ type: ActionTypes.SET_LOADING, payload: true });
    const token = localStorage.getItem(TOKEN_KEY);

    if (token) {
      const login = async () => {
        await dispatch(getUser());
        dispatch({ type: ActionTypes.SET_TOKEN, payload: token });
        dispatch({ type: ActionTypes.IS_AUTH, payload: true });
        if (user) {
          dispatch({ type: ActionTypes.SET_LOADING, payload: false });
        }
      };
      login();
    }
  }, []);

  useEffect(() => {
    const userId = user?._id;
    if (user) {
      const login = async () => {
        await dispatch(fetchUserInternships(userId));
      };
      login();
    }
  }, [user]);

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
