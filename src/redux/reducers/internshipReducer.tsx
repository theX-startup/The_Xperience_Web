import { ActionTypes } from "../../utils/ActionTypes";

const initialState = {
  internships: [],
  internshipsLoading: false,
  internship: {},
  internshipLoading: false,
  internshipError: "",
  userInternships: [],
  introduction: [],
  introductionLoading: false,
  tasks: {},
  taskLoading: false,
  task: {},
  addInternshipLoading: false,
  addInternshipError: "",
};

interface Action {
  type?: string;
  payload?: any;
}

export const internshipReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_INTERNSHIPS:
      return { ...state, internships: action.payload };
    case ActionTypes.SET_INTERNSHIP:
      return { ...state, internship: action.payload };
    case ActionTypes.SET_INTERNSHIP_LOADING:
      return { ...state, internshipLoading: action.payload };
    case ActionTypes.SET_INTERNSHIP_ERROR:
      return { ...state, internshipError: action.payload };
    case ActionTypes.SET_USER_INTERNSHIPS:
      return { ...state, userInternships: action.payload };
    case ActionTypes.SET_INTERNSHIPS_LOADING:
      return { ...state, internshipsLoading: action.payload };
    case ActionTypes.SET_TASKS:
      return { ...state, tasks: action.payload };
    case ActionTypes.SET_TASK:
      return { ...state, task: action.payload };
    case ActionTypes.SET_TASK_LOADING:
      return { ...state, taskLoading: action.payload };
    case ActionTypes.SET_INTRODUCTION:
      return { ...state, introduction: action.payload };
    case ActionTypes.SET_INTRODUCTION_LOADING:
      return { ...state, introductionLoading: action.payload };
      case ActionTypes.SET_ADD_INTERNSHIP_LOADING:
        return { ...state, addInternshipLoading: action.payload };
      case ActionTypes.SET_ADD_INTERNSHIP_ERROR:
        return { ...state, addInternshipError: action.payload}
    default:
      return state;
  }
};
