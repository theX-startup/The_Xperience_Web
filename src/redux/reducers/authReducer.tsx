import { ActionTypes } from "../../utils/ActionTypes";

const initialState = {
  username: "",
  email: "",
  fullname: "",
  token: "",
  signInLoading: false,
  signInError: "",
  signUpLoading: false,
  signUpError: "",
};

interface Action {
  type?: string;
  payload?: any;
}

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_USERNAME:
      return { ...state, username: action.payload };
    case ActionTypes.SET_FULLNAME:
      return { ...state, fullname: action.payload };
    case ActionTypes.SET_EMAIL:
      return { ...state, email: action.payload };
    case ActionTypes.SET_SIGNIN_LOADING:
      return { ...state, signInLoading: action.payload };
    case ActionTypes.SET_SIGNIN_ERROR:
      return { ...state, signInError: action.payload };
    case ActionTypes.SET_SIGNUP_LOADING:
      return { ...state, signUpLoading: action.payload };
    case ActionTypes.SET_SIGNUP_ERROR:
      return { ...state, signUpError: action.payload };
    default:
      return state;
  }
};
