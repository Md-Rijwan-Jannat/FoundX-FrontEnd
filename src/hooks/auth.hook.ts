import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import {
  loginUser as LoginUser,
  registerUser as RegisterUser,
} from "../services/Auth";
import { useMutation } from "@tanstack/react-query";

export const useUserRegistrationMutation = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTER"],
    mutationFn: async (userData) => await RegisterUser(userData),
    onSuccess: () => {
      toast.success("Your registration was successful", { duration: 2000 });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLoginMutation = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTER"],
    mutationFn: async (userData) => await LoginUser(userData),
    onSuccess: () => {
      toast.success("Login successful", { duration: 2000 });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
