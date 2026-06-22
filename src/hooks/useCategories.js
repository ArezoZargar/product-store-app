import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/productsApi";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};