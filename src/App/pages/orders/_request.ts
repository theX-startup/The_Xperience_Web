import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../../../utils/ActionTypes";
import RestApi from "../../../services/RestApi";

export const getOrders = (): ThunkAction<void, any, any, any> => {
    return async (dispatch: any) => {
      try {
        dispatch({
          type: ActionTypes.SET_ORDERS_LOADING,
          payload: true,
        });
        let urlPath = "/orders";
        let response = await RestApi.getCall(urlPath);
        if (response) {
          dispatch({
            type: ActionTypes.SET_ORDERS,
            payload: response,
          });
          dispatch({
            type: ActionTypes.SET_ORDERS_LOADING,
            payload: false,
          });
        }
      } catch (error: any) {
        dispatch({
          type: ActionTypes.SET_ORDERS_ERROR,
          payload: error.message,
        });
        dispatch({
          type: ActionTypes.SET_ORDERS_LOADING,
          payload: false,
        });
      }
    };
  };