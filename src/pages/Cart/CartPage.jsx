import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

import { notifyError, notifyInfo, notifyWarning } from "../../utils/notify";

import Navbar from "../../components/Navbar/Navbar";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (items.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="cart-empty">
          <h1>🛒 Your cart is empty</h1>
          <p>Looks like you haven't added any products yet.</p>

          <button className="primary-btn" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-container">
        <div className="cart-items">
          <h1 className="cart-title">Your Cart</h1>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} />

              <div className="item-info">
                <h3>{item.title}</h3>
                <p>${item.price}</p>

                <div className="qty">
                  <button
                    onClick={() => {
                      dispatch(decreaseQty(item.id));
                      notifyInfo("Quantity decreased");
                    }}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => {
                      dispatch(increaseQty(item.id));
                      notifyInfo("Quantity increased");
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="item-right">
                <p className="subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => {
                    dispatch(removeFromCart(item.id));
                    notifyError("Product removed");
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-line">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
          <button
            className="clear-btn"
            onClick={() => {
              dispatch(clearCart());
              notifyWarning("Cart cleared");
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
