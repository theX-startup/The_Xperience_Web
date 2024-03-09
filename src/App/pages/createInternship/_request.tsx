import RestApi from "@/services/RestApi";
import { ThunkAction } from "redux-thunk";

export const createInternship =
  (data: any, navigation: any, toast: any): ThunkAction<void, any, any, any> =>
  async () => {
    try {
      let urlPath = "/internships/create";
      let response = await RestApi.postCall(urlPath, data);
      console.log(response);
      if (response) {
        console.log(response);
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
