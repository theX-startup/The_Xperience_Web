import { combineReducers } from "@reduxjs/toolkit";
import { ActionTypes } from "../../utils/ActionTypes";
import { authReducer } from "./authReducer";
import { internshipReducer } from "./internshipReducer";
import { layoutReducer } from "./layoutReducer";
import { ProfessionalReducer } from "./ProfessionalReducer";

const appReducer = combineReducers({
  auth: authReducer,
  internships: internshipReducer,
  layout: layoutReducer,
  professional: ProfessionalReducer,
});

export const reducers = (state: any, action: any) => {
  if (action.type === ActionTypes.RESET) return appReducer(undefined, action);
  else return appReducer(state, action);
};
