"use server";

import AxiosInstance from "@/src/lib/AxiosInstance/axiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const CreateClaimRequest = async (
  claimRequestData: FieldValues
): Promise<any> => {
  try {
    const { data } = await AxiosInstance.post(
      "/claim-request",
      claimRequestData
    );

    revalidateTag("claim-requests");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const GetAllClaimRequests = async () => {
  try {
    let fetchOptions = {};

    fetchOptions = {
      cache: "no-store",
      next: {
        tags: ["claim-request"],
      },
    };

    const { data } = await AxiosInstance.get("/claim-request", {
      fetchOptions,
    });

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const GetMyClaimRequests = async () => {
  try {
    const fetchOptions = {
      next: {
        tags: ["claim-request"],
      },
    };

    const { data } = await AxiosInstance.get(
      "/claim-request/my-claim-request",
      {
        fetchOptions,
      }
    );

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const UpdateClaimantStatus = async (
  claimantStatusData: FieldValues
): Promise<any> => {
  try {
    const { id, statusData } = claimantStatusData;
    const { data } = await AxiosInstance.put(
      `/claim-request/${id}`,
      statusData
    );

    revalidateTag("claim-requests");

    console.log(data);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
