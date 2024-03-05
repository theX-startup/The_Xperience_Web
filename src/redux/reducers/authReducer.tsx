import { ActionTypes } from "../../utils/ActionTypes";

const initialState = {
  user: {},
  token: "",
  isAuth: false,
  loading: true,
  signInLoading: false,
  signInError: "",
  signUpLoading: false,
  signUpError: "",
  userNameCheck: {
    loading: false,
    message : "",
  }
};

interface Action {
  type?: string;
  payload?: any;
}

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload };
    case ActionTypes.SET_SIGNIN_LOADING:
      return { ...state, signInLoading: action.payload };
    case ActionTypes.SET_SIGNIN_ERROR:
      return { ...state, signInError: action.payload };
    case ActionTypes.SET_SIGNUP_LOADING:
      return { ...state, signUpLoading: action.payload };
    case ActionTypes.SET_SIGNUP_ERROR:
      return { ...state, signUpError: action.payload };
    case ActionTypes.IS_AUTH:
      return { ...state, isAuth: action.payload };
    case ActionTypes.SET_TOKEN:
      return { ...state, token: action.payload };
    case ActionTypes.USERNAME_CHECK:
      return { ...state, userNameCheck: action.payload };
      case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
