import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../Skeleton/ProductSkeleton";

export default function ProductList({ products, isLoading }) {
 return (
    <div style={styles.grid}>
      {isLoading
        ? Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
};