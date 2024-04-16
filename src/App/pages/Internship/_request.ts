import RestApi from "@/services/RestApi";
import { ActionTypes } from "@/utils/ActionTypes";
import { ThunkAction } from "redux-thunk";

export const fetchInternship = (
    id: string
  ): ThunkAction<void, any, any, any> => {
    return async (dispatch: any) => {
      try {
        dispatch({
          type: ActionTypes.SET_INTERNSHIP_LOADING,
          payload: true,
        });
        let urlPath = `/internships/${id}`;
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