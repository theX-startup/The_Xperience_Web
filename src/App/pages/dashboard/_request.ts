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
          type: ActionTypes.SET_INTERNSHIPS_LOADING,
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

export const fetchInternshipDetails = (
  id: string
): ThunkAction<void, any, any, any> => {
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

export const fetchDashboardData = (): ThunkAction<void, any, any, any> => {
  return async (dispatch: any) => {
    try {
      let urlPath = "/info";
      let response = await RestApi.getCall(urlPath);
      if (response) {
        dispatch({
          type: "GET_DASHBOARD_INFO",
          payload: response,
        });
      }
    } catch (error: any) {
      dispatch({
        type: "GET_DASHBOARD_INFO_ERROR",
        payload: error.message,
      });
    }
  };
};

export const addImpression = (body : any): ThunkAction<void, any, any, any> => {
  return async () => {
    try {
      let urlPath = "/add/impression";
      await RestApi.postCall(urlPath, body);
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const addClick = (body: any): ThunkAction<void, any, any, any> => {
  return async () => {
    try {
      let urlPath = "/add/click";
      await RestApi.postCall(urlPath, body);
    } catch (error: any) {
      console.log(error);
    }
  };
};
