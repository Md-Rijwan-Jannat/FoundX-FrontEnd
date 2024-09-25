import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { CreatePost } from "../services/Post";

export const useCreatePostMutation = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (formData) => await CreatePost(formData),
    onSuccess: () => {
      toast.success("Post create successfully", { duration: 2000 });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
