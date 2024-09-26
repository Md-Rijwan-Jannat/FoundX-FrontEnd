import { TPost } from "./postTypes";
import { TUser } from "./userTypes";

export type TClaimRequest = {
  _id: string;
  item: TPost;
  claimant: TUser;
  status: string;
  description: string;
  answers: TAnswer[];
  feedback: any;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TAnswer = {
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
};
