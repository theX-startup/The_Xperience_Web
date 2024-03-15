import RestApi from "@/services/RestApi";
import { ThunkAction } from "redux-thunk";

export const createInternship =
  (data: any, navigation: any, toast: any): ThunkAction<void, any, any, any> =>
  async (dispatch) => {
    try {
      let urlPath = "/internships/create";
      let response = await RestApi.postCall(urlPath, data);
      console.log(response);
      if (response) {
        dispatch({
          type: "CREATE_INTERNSHIP",
          title: response.title,
          description: response.description,
          image: response.image,
          price: response.price,
          category: response.category,
        });
        toast.success("Internship created successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        navigation(`/createInternship/step-2/${response._id}`);
      }
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
