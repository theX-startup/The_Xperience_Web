import { ActionTypes } from "../../utils/ActionTypes";

const initialState = {
  dashboardInfo: {},
  dashboardLoading: false,
  dashboardInfoError: null,
  Earnings: {},
  earningsError: null,
  earningsLoading: false,
  Analytics: {},
  analyticsError: null,
  analyticsLoading: false,
  ProInternships: {},
  proInternshipsError: null,
  proInternshipsLoading: false,
  Orders: [],
  ordersError: null,
  ordersLoading: false,
};

interface Action {
  type?: string;
  payload?: any;
}

export const ProfessionalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_DASHBOARD_INFO:
      return {
        ...state,
        dashboardInfo: action.payload,
        dashboardInfoError: null,
      };
    case ActionTypes.SET_DASHBOARD_INFO_ERROR:
      return {
        ...state,
        dashboardInfo: {},
        dashboardInfoError: action.payload,
      };
    case ActionTypes.SET_EARNINGS:
      return {
        ...state,
        Earnings: action.payload,
      };
    case ActionTypes.SET_ANALYTICS:
      return {
        ...state,
        Analytics: action.payload,
      };
    case ActionTypes.SET_PRO_INTERNSHIP:
      return {
        ...state,
        ProInternships : action.payload,
      };
    case ActionTypes.SET_ORDERS:
      return {
        ...state,
        Orders: action.payload,
      };
    case ActionTypes.SET_DASHBOARD_LOADING:
      return {
        ...state,
        dashboardLoading: action.payload,
      };
    case ActionTypes.SET_EARNINGS_LOADING:
      return {
        ...state,
        earningsLoading: action.payload,
      };
    case ActionTypes.SET_ANALYTICS_LOADING:
      return {
        ...state,
        analyticsLoading: action.payload,
      };
    case ActionTypes.SET_PRO_INTERNSHIP_LOADING:
      return {
        ...state,
        proInternshipsLoading: action.payload,
      };
    case ActionTypes.SET_ORDERS_LOADING:
      return {
        ...state,
        ordersLoading: action.payload,
      };
    case ActionTypes.SET_EARNING_ERROR:
      return {
        ...state,
        earningsError: action.payload,
      };
    case ActionTypes.SET_ANALYTICS_ERROR:
      return {
        ...state,
        analyticsError: action.payload,
      };
    case ActionTypes.SET_PRO_INTERNSHIP_ERROR:
      return {
        ...state,
        proInternshipsError: action.payload,
      };
    case ActionTypes.SET_ORDERS_ERROR:
      return {
        ...state,
        ordersError: action.payload,
      };
    default:
      return state;
  }
};
