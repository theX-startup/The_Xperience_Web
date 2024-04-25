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
        title: "",
        userProgress: [],
        videoUrl: "",
        what_you_will_do: [],
        what_you_will_learn: [],
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
    },
  },
  categorys: [],
};

export const createInternshipReducer = (state = initailState, action: any) => {
  switch (action.type) {
    case "CREATE_INTERNSHIP":
      return {
        ...state,
        values: action.payload,
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
