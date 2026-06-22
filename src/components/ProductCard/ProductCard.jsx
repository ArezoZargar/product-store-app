import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

import { notifySuccess } from "../../utils/notify";
export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
    notifySuccess("Product added to cart 🛒");
    navigate("/cart");
  };
  return (
    <div style={styles.card}>
      <img src={product.thumbnail} alt={product.title} style={styles.image} />
     
      <h3 style={styles.title}>{product.title}</h3>

      <p style={styles.price}>${product.price}</p>

      <button
        style={styles.button}
        onClick={() => navigate(`/products/${product.id}`)}
      >
        View Details
      </button>
      <button onClick={handleAdd}>Add to Cart</button>
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
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    fontSize: "14px",
    margin: "10px 0",
  },
  price: {
    fontWeight: "bold",
    color: "green",
  },
  button: {
    marginTop: "10px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};
