import { combineReducers } from "@reduxjs/toolkit";
import { ActionTypes } from "../../utils/ActionTypes";
import { authReducer } from "./authReducer";

const appReducer = combineReducers({
  auth: authReducer,
});

export const reducers = (state: any, action: any) => {
  if (action.type === ActionTypes.RESET) return appReducer(undefined, action);
  else return appReducer(state, action);
};
