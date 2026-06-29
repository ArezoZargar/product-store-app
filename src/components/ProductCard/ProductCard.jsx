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
    <div
      className={view === "list" ? "product-card list-card" : "product-card"}
    >
      <img
        className="product-image"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>

        <p className="product-price">${product.price}</p>

        <p className="product-description">{product.description}</p>

        <div className="product-actions">
          <button
            className="product-btn"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            View Details
          </button>

          <button className="product-btn" onClick={handleAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
