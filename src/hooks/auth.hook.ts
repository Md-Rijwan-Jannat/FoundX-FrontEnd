"use client";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { loginUser, registerUser } from "../services/authService";
import { useMutation } from "@tanstack/react-query";

export const useUserRegistrationMutation = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTER"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("Your registration was successful", { duration: 2000 });
    },
    onError: () => {
      toast.error("Registration failed. Please try again.");
    },
  });
};

export const useUserLoginMutation = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTER"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("Login successful", { duration: 2000 });
    },
    onError: () => {
      toast.error("Login failed. Please try again.");
    },
  });
};
