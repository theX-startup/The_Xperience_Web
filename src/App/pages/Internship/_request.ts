import { TOKEN_KEY } from "@/redux/context";
import RestApi, { api } from "@/services/RestApi";
import { ActionTypes } from "@/utils/ActionTypes";
import { ThunkAction } from "redux-thunk";

export const fetchInternship = (
  id: string
): ThunkAction<void, any, any, any> => {
  return async (dispatch: any) => {
    try {
      api.headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem(TOKEN_KEY),
      };
      dispatch({
        type: ActionTypes.SET_INTERNSHIP_LOADING,
        payload: true,
      });
      let urlPath = `/internships/${id}`;
      let response = await RestApi.getCall(urlPath);

      dispatch({
        type: ActionTypes.SET_INTERNSHIP,
        payload: response.data,
      });
      dispatch({
        type: ActionTypes.SET_INTERNSHIP_LOADING,
        payload: false,
      });
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

export const getTask = (
  taskId: string,
  internshipId: string
): ThunkAction<void, any, any, any> => {
  return async (dispatch: any) => {
    try {
      api.headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem(TOKEN_KEY),
      };
      dispatch({
        type: ActionTypes.SET_TASK_LOADING,
        payload: true,
      });
      let urlPath = `/tasks/${internshipId}/${taskId}`;
      let response = await RestApi.getCall(urlPath);

      dispatch({
        type: ActionTypes.SET_TASK,
        payload: response.data,
      });
      dispatch({
        type: ActionTypes.SET_TASK_LOADING,
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_TASK_LOADING,
        payload: false,
      });
    }
  };
};
