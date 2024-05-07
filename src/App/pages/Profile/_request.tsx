import RestApi from "@/services/RestApi";
import { ActionTypes } from "@/utils/ActionTypes";
import { toast } from "react-toastify";
import { ThunkAction } from "redux-thunk";

export const updateProfile = (
  formdata: any
): ThunkAction<void, any, any, any> => {
  return async (dispatch) => {
    try {
      let urlPath = "/auth/updateUserData";
      let response = await RestApi.putCall(urlPath, formdata);

      dispatch({
        type: ActionTypes.SET_USER,
        payload: { ...response.data.user },
      });
      toast.success("Successfully uploaded profile picture");
    } catch (error: any) {
      toast.error("Error Updating Profile Picture");
    }
  };
};
