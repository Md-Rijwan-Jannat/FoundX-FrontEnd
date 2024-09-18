export type TUser = {
  _id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  mobileNumber: string;
  profilePhoto: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TRegistrationData = {
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
  profilePhoto: string;
};

export type TRole = "USER" | "ADMIN";
export type TDecodeUser = {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  profilePhoto: string;
  role: TRole;
  status: string;
  iat: number;
  exp: number;
};
