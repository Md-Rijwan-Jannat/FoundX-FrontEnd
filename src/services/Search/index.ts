"use server";

import AxiosInstance from "@/src/lib/AxiosInstance/axiosInstance";

export const SearchItem = async (searchTerm: string) => {
  try {
    const fetchOptions = {
      cache: "no-store",
    };
    const { data } = await AxiosInstance.get(
      `search-items?searchTerm=${searchTerm}`,
      {
        fetchOptions,
      }
    );

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
