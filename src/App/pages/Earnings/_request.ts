import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../../../utils/ActionTypes";
import RestApi from "../../../services/RestApi";

export const getEarnings = (): ThunkAction<void, any, any, any> => {
    return async (dispatch: any) => {
      try {
        dispatch({
          type: ActionTypes.SET_EARNINGS_LOADING,
          payload: true,
        });
        let urlPath = "/earnings";
        let response = await RestApi.getCall(urlPath);
        if (response) {
          dispatch({
            type: ActionTypes.SET_EARNINGS,
            payload: response.earnings,
          });
          dispatch({
            type: ActionTypes.SET_EARNINGS_LOADING,
            payload: false,
          });
        }
      } catch (error: any) {
        dispatch({
          type: ActionTypes.SET_EARNING_ERROR,
          payload: error.message,
        });
        dispatch({
          type: ActionTypes.SET_EARNINGS_LOADING,
          payload: false,
        });
      }
    };
  };