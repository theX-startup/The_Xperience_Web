export interface createInternshipModel {
  values: values;
  categorys: [];
}

export interface values {
  category: string;
  title: string;
  description: string;
  duration: string;
  image: string;
  isPublished: boolean;
  minimumScore: number;
  price: number;
  purchases: [];
  skill: [];
  tasks: tasks[];
  createdAt: string;
  user: user;
}

export interface tasks {
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
  what_you_will_do: [];
  what_you_will_learn: [];
  videoUrl: string;
}

export interface user {
  _id: string;
  fullname: string;
  username: string;
  email: string;
  description: string;
  picturePath: string;
  skills: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface muxData {}
export interface userProgress {}
