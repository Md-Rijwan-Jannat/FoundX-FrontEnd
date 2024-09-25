"use server";

import AxiosInstance from "@/src/lib/AxiosInstance/axiosInstance";
import { revalidateTag } from "next/cache";

export const CreatePost = async (formData: FormData): Promise<any> => {
  try {
    const { data } = await AxiosInstance.post("/items", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("posts");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const GetAllRecentPosts = async () => {
  try {
    const fetchOptions = {
      next: {
        tags: ["posts"],
      },
    };
    const { data } = await AxiosInstance.get(
      "/items?sortBy=-createdAt&limit=9",
      { fetchOptions }
    );

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const GetAllMyPosts = async () => {
  try {
    const fetchOptions = {
      next: {
        tags: ["posts"],
      },
    };
    const { data } = await AxiosInstance.get("/items/my-posts", {
      fetchOptions,
    });

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const GetSinglePost = async (id: string) => {
  try {
    const fetchOptions = {
      cache: "no-store",
    };
    const { data } = await AxiosInstance.get(`/items/${id}`, { fetchOptions });

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
