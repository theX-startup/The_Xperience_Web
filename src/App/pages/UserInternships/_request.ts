import { ThunkAction } from "redux-thunk";
import RestApi from "../../../services/RestApi";
import { ActionTypes } from "../../../utils/ActionTypes";

export const fetchUserInternships = (
  userId: any
): ThunkAction<void, any, any, any> => {
  return async (dispatch: any) => {
    try {
      let urlPath = `/userinternships/${userId}`;
      console.log(userId, "userId");
      const response = await RestApi.getCall(urlPath);
      dispatch({
        type: ActionTypes.SET_USER_INTERNSHIPS,
        payload: [...response],
      });
    } catch (error: any) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
    }
  };
};
