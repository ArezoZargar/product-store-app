import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSettings } from "../../context/useSettings";

export default function Navbar() {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const { state, dispatch } = useSettings();

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={styles.nav}>
      <button onClick={() => navigate("/")}>Home</button>
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        🛍️ Shop
      </h2>

      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        {state.theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      <button onClick={() => dispatch({ type: "SET_GRID" })}>Grid</button>

      <button onClick={() => dispatch({ type: "SET_LIST" })}>List</button>
      <div style={styles.links}>
        <button onClick={() => navigate("/")}>Home</button>

        <div style={{ position: "relative", display: "inline-block" }}>
          
            <button onClick={() => navigate("/cart")}>🛒 Cart</button>
          {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
        </div>
        <button onClick={() => navigate("/checkout")}>Checkout</button>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    borderBottom: "1px solid #ddd",
    alignItems: "center",
  },
  links: {
    display: "flex",
    gap: "10px",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-10px",
    background: "red",
    color: "white",
    borderRadius: "50%",
    width: "18px",
    height: "18px",
    fontSize: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
};
