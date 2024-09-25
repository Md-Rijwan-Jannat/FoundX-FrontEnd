import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/Category";

export const useGetCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getCategories(),
  });
};
