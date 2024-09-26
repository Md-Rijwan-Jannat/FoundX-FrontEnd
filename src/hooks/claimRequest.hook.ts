import { useMutation } from "@tanstack/react-query";
import {
  CreateClaimRequest,
  UpdateClaimantStatus,
} from "../services/ClaimRequest";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";

export const useCreateClaimRequestMutation = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADD_CLAIM_REQUEST"],
    mutationFn: async (claimRequestData) =>
      await CreateClaimRequest(claimRequestData),
    onSuccess: () => {
      toast.success("Claim request send successfully", { duration: 2000 });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateClaimantStatusMutation = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_CLAIMANT_REQUEST"],
    mutationFn: async (statusData) => await UpdateClaimantStatus(statusData),
    onSuccess: () => {
      toast.success("Claimant status and feedback send successfully", {
        duration: 2000,
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
