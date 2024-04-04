import RestApi from "@/services/RestApi";
import { ThunkAction } from "redux-thunk";

export const createInternship =
  (data: any, navigation: any, toast: any): ThunkAction<void, any, any, any> =>
  async (dispatch) => {
    try {
      let urlPath = "/internships/create";
      let response = await RestApi.postCall(urlPath, data);
      console.log(response);

      dispatch({
        type: "CREATE_INTERNSHIP",
        payload: response,
      });
      toast.success("Internship created successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      navigation(`/createInternship/step-2/${response._id}`);
    } catch (error) {
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
      let urlPath = `/internships/update/${id}`;
      let response = await RestApi.putCall(urlPath, data);
      console.log(response);
      if (response) {
        dispatch({
          type: "CREATE_INTERNSHIP",
          payload: response,
        });
        toast.success("Internship updated successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      }
    } catch (error) {
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
  async (dispatch) => {
    try {
      let urlPath = "/tasks/create/" + internshipId;
      await RestApi.postCall(urlPath, data).then((res) => {
        dispatch({
          type: "CREATE_TASK",
          payload: res.newTask,
        });
        toast.success("Task created successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      });
    } catch (error) {
      toast.error("Failed to create task", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

export const getTask =
  (id: string): ThunkAction<void, any, any, any> =>
  async (dispatch) => {
    try {
      let urlPath = "/tasks/" + id;
      await RestApi.getCall(urlPath).then((response) => {
        dispatch({
          type: "GET_TASK",
          payload: response,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateTask =
  (data: any, toast: any, taskId: string): ThunkAction<void, any, any, any> =>
  async (dispatch) => {
    try {
      let urlPath = `/tasks/update/${taskId}`;
      await RestApi.putCall(urlPath, data).then((res) => {
        dispatch({
          type: "CREATE_TASK",
          payload: res,
        });
        toast.success("Task updated successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      });
    } catch (error) {
      toast.error("Failed to update Task", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };
