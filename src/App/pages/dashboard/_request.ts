import { ThunkAction } from "redux-thunk";
import RestApi, { api } from "../../../services/RestApi";
import { ActionTypes } from "../../../utils/ActionTypes";
import { TOKEN_KEY } from "@/redux/context";

export const getInternships = (
  title?: string,
  categoryId?: string
): ThunkAction<void, any, any, any> => {
  return async (dispatch: any) => {
    try {
      api.headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem(TOKEN_KEY),
      };
      dispatch({
        type: ActionTypes.SET_INTERNSHIPS_LOADING,
        payload: true,
      });
      let urlPath = `/internships?title=${title}&categoryId=${categoryId}`;
      let response = await RestApi.getCall(urlPath);

      dispatch({
        type: ActionTypes.SET_INTERNSHIPS,
        payload: response.data.internshipsWithProgress,
      });
      dispatch({
        type: ActionTypes.SET_INTERNSHIPS_LOADING,
        payload: false,
      });
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
      dispatch({
        type: ActionTypes.SET_DASHBOARD_LOADING,
        payload: true,
      });
      let urlPath = "/info";
      let response = await RestApi.getCall(urlPath);
      if (response) {
        dispatch({
          type: ActionTypes.SET_DASHBOARD_INFO,
          payload: response,
        });
        dispatch({
          type: ActionTypes.SET_DASHBOARD_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: ActionTypes.SET_DASHBOARD_INFO_ERROR,
          payload: "Error fetching dashboard data",
        });
      }
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SET_DASHBOARD_INFO_ERROR,
        payload: error.message,
      });
    }
  };
};

export const addImpression = (body: any): ThunkAction<void, any, any, any> => {
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
      api.headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem(TOKEN_KEY),
      };
      let urlPath = "/add/click";
      await RestApi.postCall(urlPath, body);
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const getProInternships =
  (): ThunkAction<void, any, any, any> => async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.SET_PRO_INTERNSHIP_LOADING,
        payload: true,
      });
      api.headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem(TOKEN_KEY),
      };

      let urlPath = "/proInternshipInfo";
      let response = await RestApi.getCall(urlPath);
      if (response) {
        dispatch({
          type: ActionTypes.SET_PRO_INTERNSHIP,
          payload: response,
        });
        dispatch({
          type: ActionTypes.SET_PRO_INTERNSHIP_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: ActionTypes.SET_PRO_INTERNSHIP_ERROR,
          payload: "Error fetching internships",
        });
        dispatch({
          type: ActionTypes.SET_PRO_INTERNSHIP_LOADING,
          payload: false,
        });
      }
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SET_PRO_INTERNSHIP_ERROR,
        payload: error.message,
      });
      dispatch({
        type: ActionTypes.SET_PRO_INTERNSHIP_LOADING,
        payload: false,
      });
    }
  };
