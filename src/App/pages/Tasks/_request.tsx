import { ThunkAction } from "redux-thunk";
import RestApi from "../../../services/RestApi";
import { ActionTypes } from "../../../utils/ActionTypes";
import { toast } from "react-toastify";

export const getTasks = (id: any): ThunkAction<void, any, any, any> => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.SET_TASK_LOADING,
      payload: true,
    })
    try {
      let urlPath = `/getweeks/${id}`;
      const res = await RestApi.getCall(urlPath);
      console.log(res);
      dispatch({
        type: ActionTypes.SET_TASKS,
        payload: res,
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
      toast.error("Error fetching tasks");
    }
  };
};

export const getIntroduction = (id: any): ThunkAction<void, any, any, any> => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.SET_INTRODUCTION_LOADING,
      payload: true,
    });
    try {
      let urlPath = `/getintroduction/${id}`;
      const res = await RestApi.getCall(urlPath);
      dispatch({
        type: ActionTypes.SET_INTRODUCTION,
        payload: res,
      });
      dispatch({
        type: ActionTypes.SET_INTRODUCTION_LOADING,
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_INTRODUCTION_LOADING,
        payload: false,
      });
      toast.error("Error fetching introduction");
    }
  };
}