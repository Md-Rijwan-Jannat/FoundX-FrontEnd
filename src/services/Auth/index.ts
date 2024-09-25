"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

import AxiosInstance from "@/src/lib/AxiosInstance/axiosInstance";
import { signOut } from "next-auth/react";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await AxiosInstance.post("/auth/register", userData);

    if (data.success) {
      cookies().set("accessToken", data.data.accessToken);
      cookies().set("refreshToken", data.data.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await AxiosInstance.post("/auth/login", userData);

    if (data.success) {
      cookies().set("accessToken", data.data.accessToken);
      cookies().set("refreshToken", data.data.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logout = async () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const currentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decodedUser = null;

  if (accessToken) {
    decodedUser = jwtDecode(accessToken);
  }

  return decodedUser;
};
