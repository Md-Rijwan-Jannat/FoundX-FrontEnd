import { TUser } from "./userTypes";

export type TPost = {
  _id: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  city: string;
  dateFound: string;
  status: string;
  isReported: boolean;
  reportCount: number;
  category: TCategory;
  user: TUser;
  questions: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TCategory = {
  _id: string;
  name: string;
  postCount: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TFormData = {
  data: {
    title: string;
    dateFound: string;
    location: string;
    city: string;
    category: string;
    description: string;
    questions: string[];
    user: string;
  };
  itemImages: File[];
};
