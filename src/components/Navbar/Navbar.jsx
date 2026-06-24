import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSettings } from "../../context/useSettings";

export default function Navbar() {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const { state, dispatch } = useSettings();

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
  <div className="navbar">
  <h2 className="logo" onClick={() => navigate("/")}>
    🛍️ Product Shop
  </h2>

  <div className="nav-links">
    <span className="nav-link" onClick={() => navigate("/")}>Home</span>

    <span className="nav-link" onClick={() => navigate("/cart")}>
      🛒 Cart {cartCount > 0 && `(${cartCount})`}
    </span>

    <span className="nav-link" onClick={() => navigate("/checkout")}>
      Checkout
    </span>
  </div>

  <div className="nav-actions">
    <span className="nav-link" onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
      {state.theme === "light" ? "Dark" : "Light"}
    </span>

    <span className="nav-link" onClick={() => dispatch({ type: "SET_GRID" })}>
      Grid
    </span>

    <span className="nav-link" onClick={() => dispatch({ type: "SET_LIST" })}>
      List
    </span>
  </div>
</div>
  );
}


