import { ThunkAction } from "redux-thunk";
import RestApi from "../../../services/RestApi";
import { toast } from "react-toastify";

export const addInternship = (body: {
  _id: string;
  internshipId: string;
}): ThunkAction<void, any, any, any> => {
  return async (dispatch: any) => {
    try {
      // dispatch({
      //   type: "SET_LOADING",
      //   payload: true,
      // });
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
      }
    } catch (error: any) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };
};
