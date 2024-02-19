import { ActionTypes } from "../../utils/ActionTypes";

const initialState = {
  internships: [],
  internshipsLoading: false,
  internship: {},
  internshipLoading: false,
  internshipError: "",
  internshipCreateLoading: false,
  internshipCreateError: "",
  internshipUpdateLoading: false,
  internshipUpdateError: "",
  internshipDeleteLoading: false,
  internshipDeleteError: "",
  userInternships: [],
  categories: [
    "Software Development",
    "Data Science",
    "Business Development",
    "Marketing",
    "Human Resources",
    "Finance",
    "Operations",
    "Design",
    "Product Management",
    "Customer Success",
    "Other",
  ],
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
    case ActionTypes.SET_INTERNSHIP_CREATE_LOADING:
      return { ...state, internshipCreateLoading: action.payload };
    case ActionTypes.SET_INTERNSHIP_CREATE_ERROR:
      return { ...state, internshipCreateError: action.payload };
    case ActionTypes.SET_INTERNSHIP_UPDATE_LOADING:
      return { ...state, internshipUpdateLoading: action.payload };
    case ActionTypes.SET_INTERNSHIP_UPDATE_ERROR:
      return { ...state, internshipUpdateError: action.payload };
    case ActionTypes.SET_INTERNSHIP_DELETE_LOADING:
      return { ...state, internshipDeleteLoading: action.payload };
    case ActionTypes.SET_INTERNSHIP_DELETE_ERROR:
      return { ...state, internshipDeleteError: action.payload };
    case ActionTypes.SET_USER_INTERNSHIPS:
      return { ...state, userInternships: action.payload };
      case ActionTypes.SET_INTERNSHIPS_LOADING:
        return { ...state, internshipsLoading: action.payload };
    default:
      return state;
  }
};
