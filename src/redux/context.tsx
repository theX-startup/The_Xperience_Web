import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../utils/ActionTypes";
import { getUser } from "../landingPage/pages/Auth/_request";
import {
  fetchDashboardData,
  getInternships,
} from "../App/pages/dashboard/_request";
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
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      dispatch(getUser());
      dispatch({ type: ActionTypes.SET_TOKEN, payload: token });
      dispatch({ type: ActionTypes.IS_AUTH, payload: true });
    } else {
      dispatch({ type: ActionTypes.IS_AUTH, payload: false });
    }
  }, []);

  useEffect(() => {
    const userId = user?._id;
    dispatch({ type: ActionTypes.SET_LOADING, payload: true });
    if (user) {
      const login = async () => {
        await dispatch(fetchUserInternships(userId));
        if (user.position === "pro") {
          await dispatch(fetchDashboardData());
        } else {
          await dispatch(getInternships());
        }
        dispatch({ type: ActionTypes.SET_LOADING, payload: false });
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
