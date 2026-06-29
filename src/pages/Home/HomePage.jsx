import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductsByCategory } from "../../api/productsApi";
import ProductList from "../../components/ProductList/ProductList";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSettings } from "../../context/useSettings";
import ProductSkeleton from "../../components/Skeleton/ProductSkeleton";
import Navbar from "../../components/Navbar/Navbar";
export default function HomePage() {
  const [page, setPage] = useState(0);
  const { state } = useSettings();
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
      <div className="skeleton-grid">
        {Array.from({ length: 8 }).map((_, i) => (
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
    <div className="home">
      <div className="hero">
        <Navbar />
        <div className="hero-overlay">
          <h1>Discover Amazing Products</h1>
          <SearchBar query={query} setQuery={setQuery} />
          <CategoryFilter
            onChange={(newCategory) => {
              setCategory(newCategory);
              setPage(0);
            }}
          />
        </div>
      </div>

      <div className="products-grid">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)
        ) : filteredProducts.length > 0 ? (
          <ProductList
            products={filteredProducts}
            isLoading={isLoading}
            view={state.view}
          />
        ) : (
          <div className="empty">
            <h2>No products found</h2>
            <p>Try adjusting your search or filters.</p>
          </div>
        )}
      </div>

      {!isLoading && filteredProducts.length > 0 && (
        <div className="pagination">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
          >
            Previous
          </button>

          <span>Page {page + 1}</span>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={products.length < limit}
          >
            Next
          </button>
        </div>
      )}

      {isFetching && <div className="loading-bar">Loading page...</div>}
    </div>
  );
}
