import { ThunkAction } from "redux-thunk";
import RestApi from "../../../services/RestApi";
import { toast } from "react-toastify";
import { ActionTypes } from "@/utils/ActionTypes";

export const addInternship = (body: {
  _id: string;
  internshipId: string;
}): ThunkAction<void, any, any, any> => {
  return async (dispatch: any) => {
    try {
      dispatch({
        type: ActionTypes.SET_ADD_INTERNSHIP_LOADING,
        payload: true,
      });
      let urlPath = `/addInternship`;
      const res = await RestApi.postCall(urlPath, body);
      if (res) {
        toast.success("Internship Added Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch({
          type: ActionTypes.SET_ADD_INTERNSHIP_LOADING,
          payload: false,
        });
      } else {
        toast.error("Error in adding Internship", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch({
          type: ActionTypes.SET_ADD_INTERNSHIP_LOADING,
          payload: false,
        });
        dispatch({
          type: ActionTypes.SET_ADD_INTERNSHIP_ERROR,
          payload: "An error occurred, please retry",
        });
      }
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SET_ADD_INTERNSHIP_LOADING,
        payload: false,
      });
      dispatch({
        type: ActionTypes.SET_ADD_INTERNSHIP_ERROR,
        payload: "An error occurred, please retry",
      });
    }
  };
};
