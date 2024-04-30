import { TOKEN_KEY } from "@/redux/context";
import RestApi, { api } from "@/services/RestApi";
import { ActionTypes } from "@/utils/ActionTypes";
import { toast } from "react-toastify";
import { ThunkAction } from "redux-thunk";

export const createInternship =
  (data: any, navigation: any, toast: any): ThunkAction<void, any, any, any> =>
  async (dispatch) => {
    try {
      api.headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem(TOKEN_KEY),
      };
      dispatch({
        type: ActionTypes.SET_INTERNSHIP_CREATE_LOADING,
        payload: true,
      });
      let urlPath = "/internships/create";
      let response = await RestApi.postCall(urlPath, data);
      dispatch({
        type: ActionTypes.SET_INTERNSHIP_CREATE_VALUE,
        payload: response.data,
      });
      dispatch({
        type: ActionTypes.SET_INTERNSHIP_CREATE_LOADING,
        payload: false,
      });
      toast.success("Internship created successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      navigation(`/createInternship/step-2/${response.data._id}`);
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_INTERNSHIP_CREATE_LOADING,
        payload: false,
      });
      toast.error("Failed to create internship", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

export const updateInternship =
  (data: any, toast: any, id: any): ThunkAction<void, any, any, any> =>
  async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.SET_INTERNSHIP_UPDATE_LOADING,
        payload: true,
      });
      api.headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem(TOKEN_KEY),
      };
      let urlPath = `/internships/update/${id}`;
      let response = await RestApi.putCall(urlPath, data);

      dispatch({
        type: ActionTypes.SET_INTERNSHIP_CREATE_VALUE,
        payload: response.data,
      });
      dispatch({
        type: ActionTypes.SET_INTERNSHIP_UPDATE_LOADING,
        payload: true,
      });
      toast.success("Internship updated successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_INTERNSHIP_UPDATE_LOADING,
        payload: true,
      });
      toast.error("Failed to update internship", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

export const createTask =
  (
    data: any,
    toast: any,
    internshipId: string
  ): ThunkAction<void, any, any, any> =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ActionTypes.SET_TASK_CREATE_LOADING,
        payload: true,
      });
      api.headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem(TOKEN_KEY),
      };
      let urlPath = "/tasks/create/" + internshipId;
      await RestApi.postCall(urlPath, data).then((res) => {
        const updatedTasks = [
          ...getState().create.values.tasks,
          res.data.newTask,
        ];

        const updatedInternship = {
          ...getState().create.values,
          tasks: updatedTasks,
        };
        dispatch({
          type: ActionTypes.SET_INTERNSHIP_CREATE_VALUE,
          payload: updatedInternship,
        });
        dispatch({
          type: ActionTypes.SET_TASK_CREATE_LOADING,
          payload: false,
        });
        toast.success("Task created successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_TASK_CREATE_LOADING,
        payload: false,
      });
      toast.error("Failed to create task", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

export const getTask =
  (id: string, taskId: string): ThunkAction<void, any, any, any> =>
  async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.SET_TASK_PAGE_LOADING,
        payload: true,
      });
      api.headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem(TOKEN_KEY),
      };
      let urlPath = "/tasks/" + id + "/" + taskId;
      await RestApi.getCall(urlPath).then((response) => {
        dispatch({
          type: ActionTypes.SET_SELECTED_TASK_VALUE,
          payload: response.data.task,
        });
        dispatch({
          type: ActionTypes.SET_TASK_PAGE_LOADING,
          payload: false,
        });
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_TASK_PAGE_LOADING,
        payload: false,
      });
      toast.error("Network error, please reload", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

export const updateTask =
  (data: any, toast: any, taskId: string): ThunkAction<void, any, any, any> =>
  async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.SET_TASK_UPDATE_LOADING,
        payload: true,
      });
      api.headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem(TOKEN_KEY),
      };
      let urlPath = `/tasks/update/${taskId}`;
      await RestApi.putCall(urlPath, data).then((res) => {
        dispatch({
          type: ActionTypes.SET_SELECTED_TASK_VALUE,
          payload: res.data,
        });
        dispatch({
          type: ActionTypes.SET_TASK_UPDATE_LOADING,
          payload: false,
        });
        toast.success("Task updated successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_TASK_UPDATE_LOADING,
        payload: false,
      });
      toast.error("Failed to update Task", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };
