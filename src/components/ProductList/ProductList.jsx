import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../Skeleton/ProductSkeleton";

export default function ProductList({ products, isLoading, view = "grid" }) {
  return (
    <div className={view === "list" ? styles.list : styles.grid}>
      {isLoading
        ? Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        : products.map((product) => (
            <ProductCard key={product.id} product={product} view={view} />
          ))}
    </div>
  );
}

const styles = {
  grid: "product-grid",
  list: "product-list",
};
