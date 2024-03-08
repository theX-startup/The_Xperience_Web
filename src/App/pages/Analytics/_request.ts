import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../../../utils/ActionTypes";
import RestApi from "../../../services/RestApi";

export const getAnalytics =
  (): ThunkAction<void, any, any, any> => async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.SET_ANALYTICS_LOADING,
        payload: true,
      });

      let urlPath = "/analytics";
      let response = await RestApi.getCall(urlPath);
      if (response) {
        dispatch({
          type: ActionTypes.SET_ANALYTICS,
          payload: response,
        });
        dispatch({
          type: ActionTypes.SET_ANALYTICS_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ANALYTICS_ERROR,
          payload: "Error fetching analytics",
        });
        dispatch({
          type: ActionTypes.SET_ANALYTICS_LOADING,
          payload: false,
        });
      }
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SET_ANALYTICS_ERROR,
        payload: error.message,
      });
      dispatch({
        type: ActionTypes.SET_ANALYTICS_LOADING,
        payload: false,
      });
    }
  };

