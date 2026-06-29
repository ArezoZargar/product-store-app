import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSettings } from "../../context/useSettings";
import { useState } from "react";
export default function Navbar() {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const { state, dispatch } = useSettings();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="navbar-left">
    <h2 className="logo">Product Shop</h2>
  </div>
      <div className="navbar-center">
        <div className="nav-links">
          <span className="nav-link" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="dot"></span>
          <span className="nav-link" onClick={() => navigate("/cart")}>
            🛒 Cart {cartCount > 0 && `(${cartCount})`}
          </span>
          <span className="dot"></span>
          <span className="nav-link" onClick={() => navigate("/checkout")}>
            Checkout
          </span>
        </div>
        <div className="divider"></div>
        <div className="nav-actions">
          <span
            className="nav-link"
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
          >
            {state.theme === "light" ? "Dark" : "Light"}
          </span>
          <span className="dot"></span>
          <span
            className="nav-link"
            onClick={() => dispatch({ type: "SET_GRID" })}
          >
            Grid View
          </span>
          <span className="dot"></span>
          <span
            className="nav-link"
            onClick={() => dispatch({ type: "SET_LIST" })}
          >
            List View
          </span>
        </div>
      </div>
      <div className="mobile-actions">
        <span
          className="mobile-icon"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          {state.theme === "light" ? "🌙" : "☀️"}
        </span>

        <span
          className="mobile-icon"
          onClick={() =>
            dispatch({
              type: state.view === "grid" ? "SET_LIST" : "SET_GRID",
            })
          }
        >
          {state.view === "grid" ? "⬜" : "📋"}
        </span>

        <span className="mobile-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </span>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <span
            className="mobile-link"
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
          >
            🏠 Home
          </span>

          <span
            className="mobile-link"
            onClick={() => {
              navigate("/cart");
              setMenuOpen(false);
            }}
          >
            🛒 Cart {cartCount > 0 && `(${cartCount})`}
          </span>

          <span
            className="mobile-link"
            onClick={() => {
              navigate("/checkout");
              setMenuOpen(false);
            }}
          >
            💳 Checkout
          </span>
        </div>
      )}
    </div>
  );
}
