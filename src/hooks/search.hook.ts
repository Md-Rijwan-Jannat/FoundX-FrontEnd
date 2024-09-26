import { toast } from "sonner";
import { SearchItem } from "../services/Search";
import { useMutation } from "@tanstack/react-query";

export const useSearchItemsMutation = () => {
  return useMutation({
    mutationKey: ["SEARCH_ITEMS"],
    mutationFn: async (searchTerm: string) => await SearchItem(searchTerm),

    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};
