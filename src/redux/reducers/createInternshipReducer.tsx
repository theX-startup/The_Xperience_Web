import { ActionTypes } from "@/utils/ActionTypes";
import { createInternshipModel } from "../models";

const initailState: createInternshipModel = {
  values: {
    _id: "",
    WhatToGain: [],
    category: "",
    createdAt: "",
    description: "",
    duration: "",
    image: "",
    isPublished: false,
    minimumScore: 0,
    price: 0,
    purchases: [],
    skill: [],
    tasks: [
      {
        _id: "",
        description: "",
        instructions: "",
        internship: "",
        isCompleted: false,
        isFree: false,
        isPublished: false,
        muxData: [],
        position: 0,
        submissionType: "",
        minimumScore: 0,
        title: "",
        userProgress: [],
        videoUrl: "",
        what_you_will_do: [],
        what_you_will_learn: [],
        Grading_Criteria: [],
      },
    ],
    title: "",
    user: {
      _id: "",
      createdAt: "",
      description: "",
      email: "",
      fullname: "",
      picturePath: "",
      skills: [],
      updatedAt: "",
      username: "",
      __v: 0,
      country: "",
      paystack: {
        accountNumber: "",
        bussinessName: "",
        bank: "",
        percentageCharge: 0,
        subaccountId: "",
        userId: "",
      },
    },
  },
  categorys: [],
  selectedTask: {
    _id: "",
    description: "",
    instructions: "",
    internship: "",
    isCompleted: false,
    isFree: false,
    isPublished: false,
    muxData: [],
    position: 0,
    submissionType: "",
    title: "",
    userProgress: [],
    videoUrl: "",
    what_you_will_do: [],
    what_you_will_learn: [],
    Grading_Criteria: [],
    minimumScore: 0,
  },
  internshipCreateLoading: false,
  internshipUpdateLoading: false,
  internshipPageLoading: false,
  taskPageLoading: false,
  taskCraeteLoading: false,
  taskUpdateLoading: false,
};

export const createInternshipReducer = (state = initailState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_INTERNSHIP_CREATE_VALUE:
      return {
        ...state,
        values: action.payload,
      };
    case ActionTypes.SET_SELECTED_TASK_VALUE:
      return {
        ...state,
        selectedTask: action.payload,
      };
    case ActionTypes.SET_INTERNSHIP_CREATE_LOADING:
      return {
        ...state,
        internshipCreateLoading: action.payload,
      };
    case ActionTypes.SET_INTERNSHIP_UPDATE_LOADING:
      return {
        ...state,
        internshipUpdateLoading: action.payload,
      };
    case ActionTypes.SET_TASK_CREATE_LOADING:
      return {
        ...state,
        taskCraeteLoading: action.payload,
      };
    case ActionTypes.SET_TASK_UPDATE_LOADING:
      return {
        ...state,
        taskUpdateLoading: action.payload,
      };

    case "categories":
      return {
        ...state,
        categorys: action.payload,
      };
    default:
      return state;
  }
};
