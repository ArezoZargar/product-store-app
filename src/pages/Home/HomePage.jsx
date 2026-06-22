import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductsByCategory } from "../../api/productsApi";

import ProductList from "../../components/ProductList/ProductList";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSettings } from "../../context/SettingsContext";
import ProductSkeleton from "../../components/Skeleton/ProductSkeleton";

export default function HomePage() {
  const [page, setPage] = useState(0);
  const { state, dispatch } = useSettings();
  const category = state.category;
  const limit = 10;
  const [query, setQuery] = useState("");
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["products", page, category],
    queryFn: () => {
      if (category) {
        return fetchProductsByCategory(category, limit, page * limit);
      }
      return fetchProducts(limit, page * limit);
    },
    keepPreviousData: true,
  });

  if (isLoading) {
    return (
      <div className="products-grid">
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) return <h2>Error loading products</h2>;

  const products = data?.products || [];
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <h1>Products</h1>

      {/* Category Filter */}
      <CategoryFilter />

      {/* Products */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => dispatch({ type: "SET_GRID" })}>
          Grid View
        </button>

        <button
          onClick={() => dispatch({ type: "SET_LIST" })}
          style={{ marginLeft: "10px" }}
        >
          List View
        </button>
      </div>
      <div
        className={state.view === "grid" ? "products-grid" : "products-list"}
      >
        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} isLoading={isLoading} />
        ) : (
          <div
            style={{
              width: "100%",
              textAlign: "center",
              padding: "50px 0",
            }}
          >
            <h2>No products found</h2>

            <p style={{ color: "gray" }}>
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
          >
            Previous
          </button>

          <span style={{ margin: "0 10px" }}>Page {page + 1}</span>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={products.length < limit}
          >
            Next
          </button>
        </div>
      )}
      {isFetching && <p>Loading new page...</p>}
    </div>
  );
}
