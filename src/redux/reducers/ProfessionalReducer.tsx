const initialState = {
  dashboardInfo: {},
  dashboardInfoError: null,
  Earnings: {},
  Analytics: {},
  ProIOnternship: {},
  Orders: {},
};

interface Action {
  type?: string;
  payload?: any;
}

export const ProfessionalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "GET_DASHBOARD_INFO":
      return {
        ...state,
        dashboardInfo: action.payload,
        dashboardInfoError: null,
      };
    case "GET_DASHBOARD_INFO_ERROR":
      return {
        ...state,
        dashboardInfo: {},
        dashboardInfoError: action.payload,
      };
    case "GET_EARNINGS":
      return {
        ...state,
        Earnings: action.payload,
      };
    case "GET_ANALYTICS":
      return {
        ...state,
        Analytics: action.payload,
      };
    case "GET_PRO_INTERNSHIP":
      return {
        ...state,
        ProIOnternship: action.payload,
      };
    case "GET_ORDERS":
      return {
        ...state,
        Orders: action.payload,
      };
    default:
      return state;
  }
};
