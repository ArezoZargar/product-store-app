import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

import { notifySuccess } from "../../utils/notify";

export default function ProductCard({ product, view = "grid" }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
    notifySuccess("Product added to cart");
    navigate("/cart");
  };

  return (
    <div style={view === "list" ? styles.listCard : styles.card}>
      <img src={product.thumbnail} alt={product.title} style={styles.image} />

      <div style={styles.content}>
        <h3 style={styles.title}>{product.title}</h3>

        <p style={styles.price}>${product.price}</p>

        <p style={styles.description}>{product.description}</p>

        <div style={styles.actions}>
          <button
            style={styles.button}
            onClick={() => navigate(`/products/${product.id}`)}
          >
            View Details
          </button>

          <button style={styles.button} onClick={handleAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    width: "200px",
    textAlign: "center",
  },
  listCard: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "12px",
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  image: {
    width: "100%",
    maxWidth: "180px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: "14px",
    margin: "10px 0",
  },
  price: {
    fontWeight: "bold",
    color: "green",
  },
  description: {
    fontSize: "13px",
    color: "#555",
    marginBottom: "10px",
  },
  actions: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  button: {
    padding: "5px 10px",
    cursor: "pointer",
  },
};
