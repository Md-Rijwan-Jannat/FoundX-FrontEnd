"use server";

import AxiosInstance from "@/src/lib/AxiosInstance/axiosInstance";

export const getCategories = async () => {
  try {
    const { data } = await AxiosInstance.get(
      "/item-categories?limit=10000&&sortBy=name"
    );

    return data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
