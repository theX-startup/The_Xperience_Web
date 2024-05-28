export interface createInternshipModel {
  values: internship;
  categorys: [];
  selectedTask: task;
  internshipCreateLoading: boolean;
  taskCraeteLoading: boolean;
  internshipUpdateLoading: boolean;
  taskUpdateLoading: boolean;
  internshipPageLoading: boolean;
  taskPageLoading: boolean;
}

export interface internship {
  category: string;
  WhatToGain: [];
  title: string;
  description: string;
  duration: string;
  image: string;
  isPublished: boolean;
  minimumScore: number;
  price: number;
  purchases: [];
  skill: [];
  tasks: task[];
  createdAt: string;
  user: user;
  _id: string;
}

export interface task {
  title: string;
  description: string;
  isCompleted: boolean;
  instructions: string;
  internship: string;
  isFree: boolean;
  isPublished: boolean;
  muxData: muxData;
  position: number;
  submissionType: string;
  userProgress: userProgress;
  what_you_will_do: {
    title: string;
    content: [];
  }[];
  what_you_will_learn: [];
  Grading_Criteria: [];
  videoUrl: string;
  _id: string;
  minimumScore: number;
}

export interface user {
  _id: string;
  fullname: string;
  username: string;
  email: string;
  description: string;
  picturePath: string;
  country: string;
  skills: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
  paystack: paystack;
}

export interface paystack {
  userId: string;
  subaccountId: string;
  bussinessName: string;
  accountNumber: string;
  bank: string;
  percentageCharge: number;
}

export interface muxData {}
export interface userProgress {}
