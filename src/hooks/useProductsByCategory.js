import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategory } from "../api/productsApi";

export const useProductsByCategory = (category) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () => fetchProductsByCategory(category),
    enabled: !!category,
  });
};