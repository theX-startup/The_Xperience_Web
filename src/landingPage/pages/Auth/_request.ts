import { ThunkAction } from "redux-thunk";
import RestApi from "../../../services/RestApi";
import { ActionTypes } from "../../../utils/ActionTypes";
import { TOKEN_KEY } from "../../../redux/context";

export const login = (
  formdata: any,
  navigation: any
): ThunkAction<void, any, any, any> => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SET_SIGNIN_LOADING,
      payload: true,
    });
    try {
      let urlPath = "/auth/login";
      let response = await RestApi.postCall(urlPath, formdata);
      if (response) {
        dispatch({
          type: ActionTypes.SET_USER,
          payload: { ...response.user },
        });
        localStorage.setItem(TOKEN_KEY, response.token);
        localStorage.setItem("newUser", "false");
        dispatch({
          type: ActionTypes.SET_TOKEN,
          payload: response.token,
        });
        dispatch({
          type: ActionTypes.IS_AUTH,
          payload: true,
        });
        dispatch({
          type: ActionTypes.SET_SIGNIN_LOADING,
          payload: false,
        });
        navigation("../../");
      }
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SET_SIGNIN_ERROR,
        payload: error.message,
      });
      dispatch({
        type: ActionTypes.SET_SIGNIN_LOADING,
        payload: false,
      });
    }
  };
};

export const register = (
  formdata: any,
  navigate: any
): ThunkAction<void, any, any, any> => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SET_SIGNUP_LOADING,
      payload: true,
    });
    try {
      let urlPath = "/auth/register";
      let response = await RestApi.postCall(urlPath, formdata);
      if (response) {
        dispatch({
          type: ActionTypes.SET_USER,
          payload: { ...response.user },
        });
        localStorage.setItem(TOKEN_KEY, response.token);
        localStorage.setItem("newUser", "true");
        dispatch({
          type: ActionTypes.SET_TOKEN,
          payload: response.token,
        });
        dispatch({
          type: ActionTypes.IS_AUTH,
          payload: true,
        });
        dispatch({
          type: ActionTypes.SET_SIGNUP_LOADING,
          payload: false,
        });
        navigate("../");
      }
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SET_SIGNUP_ERROR,
        payload: error.message,
      });
    }
  };
};

export const getUser = (): ThunkAction<void, any, any, any> => {
  return async (dispatch) => {
    try {
      let urlPath = "/auth/getUserData";
      let response = await RestApi.getCall(urlPath);
      if (response) {
        dispatch({
          type: ActionTypes.SET_USER,
          payload: { ...response },
        });
      } else {
        localStorage.removeItem(TOKEN_KEY);
        dispatch({
          type: ActionTypes.IS_AUTH,
          payload: false,
        });
      }
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const checkUsername = (
  username: string
): ThunkAction<void, any, any, any> => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.USERNAME_CHECK,
        payload: {
          loading: true,
          message: "",
        },
      });
      let urlPath = "/auth/checkUsername";
      let response = await RestApi.postCall(urlPath, { username });
      if (response) {
        dispatch({
          type: ActionTypes.USERNAME_CHECK,
          payload: {
            loading: false,
            message: response.message,
          },
        });
      }
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const createPaystackCustomer = (
  formdata: any
): ThunkAction<void, any, any, any> => {
  return async (dispatch) => {
    try {
      let urlPath = "/CreateCustomer";
      let response = await RestApi.postCall(urlPath, formdata);
      if (response) {
        dispatch({
          type: ActionTypes.SET_USER,
          payload: { ...response },
        });
      }
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const addPhone = (
  formdata: any,
  navigate: any
): ThunkAction<void, any, any, any> => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SET_SIGNUP_LOADING,
      payload: true,
    });
    try {
      let urlPath = "/auth/addPhone";
      let response = await RestApi.putCall(urlPath, formdata);
      if (response) {
        dispatch({
          type: ActionTypes.SET_USER,
          payload: { ...response.user },
        });
        dispatch({
          type: ActionTypes.SET_SIGNUP_LOADING,
          payload: false,
        });
        navigate("../");
      }
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SET_SIGNUP_ERROR,
        payload: error.message,
      });
    }
  };
};

export const updateProfile = (
  formdata: any,
  navigate: any
): ThunkAction<void, any, any, any> => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SET_SIGNUP_LOADING,
      payload: true,
    });
    try {
      let urlPath = "/auth/updateUserData";
      let response = await RestApi.putCall(urlPath, formdata);
      if (response) {
        dispatch({
          type: ActionTypes.SET_USER,
          payload: { ...response.user },
        });
        dispatch({
          type: ActionTypes.SET_SIGNUP_LOADING,
          payload: false,
        });
        navigate("../");
      }
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SET_SIGNUP_ERROR,
        payload: error.message,
      });
    }
  };
};
