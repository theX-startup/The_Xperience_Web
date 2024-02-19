import { ThunkAction } from "redux-thunk";
import RestApi from "../../../services/RestApi";
import { ActionTypes } from "../../../utils/ActionTypes";

export const getInternships = (): ThunkAction<void, any, any, any> => {
  return async (dispatch: any) => {
    try {
      dispatch({
        type: ActionTypes.SET_INTERNSHIPS_LOADING,
        payload: true,
      });
      let urlPath = "/internships";
      let response = await RestApi.getCall(urlPath);
      if (response) {
        dispatch({
          type: ActionTypes.SET_INTERNSHIPS,
          payload: response.internships,
        });
        dispatch({
          type: ActionTypes.SET_INTERNSHIP_LOADING,
          payload: false,
        });
      }
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SET_INTERNSHIP_ERROR,
        payload: error.message,
      });
      dispatch({
        type: ActionTypes.SET_INTERNSHIPS_LOADING,
        payload: false,
      });
    }
  };
};

export const fetchInternshipDetails = (id: string): ThunkAction<void, any, any, any> => {
  return async (dispatch: any) => {
    try {
      dispatch({
        type: ActionTypes.SET_INTERNSHIP_LOADING,
        payload: true,
      });
      let urlPath = `/internships/details/${id}`;
      let response = await RestApi.getCall(urlPath);
      if (response) {
        console.log(response);
        dispatch({
          type: ActionTypes.SET_INTERNSHIP,
          payload: response,
        });
        dispatch({
          type: ActionTypes.SET_INTERNSHIP_LOADING,
          payload: false,
        });
      }
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SET_INTERNSHIP_ERROR,
        payload: error.message,
      });
      dispatch({
        type: ActionTypes.SET_INTERNSHIP_LOADING,
        payload: false,
      });
    }
  };
};