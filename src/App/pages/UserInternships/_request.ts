import { ThunkAction } from "redux-thunk";
import RestApi from "../../../services/RestApi";
import { ActionTypes } from "../../../utils/ActionTypes";

export const fetchUserInternships = (

): ThunkAction<void, any, any, any> => {
  return async (dispatch: any) => {
    try {
      let urlPath = `/userinternships`;
      const response = await RestApi.getCall(urlPath);
      dispatch({
        type: ActionTypes.SET_USER_INTERNSHIPS,
        payload: [response.data],
      });
    } catch (error: any) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
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

      let urlPath = "/proInternshipInfo";
      let response = await RestApi.getCall(urlPath);
      if (response) {
        dispatch({
          type: ActionTypes.SET_PRO_INTERNSHIP,
          payload: response.data,
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
