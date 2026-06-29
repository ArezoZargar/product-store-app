import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "../api/productsApi";

export const useSearchProducts = (query) => {
  return useQuery({
    queryKey: ["search-products", query],
    queryFn: () => searchProducts(query),
    enabled: !!query,
  });
};
