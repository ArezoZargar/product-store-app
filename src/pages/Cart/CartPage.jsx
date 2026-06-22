import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

import { notifyError } from "../../utils/notify";
import { notifyInfo } from "../../utils/notify";
import { notifyWarning } from "../../utils/notify";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  const total = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

if (items.length === 0) {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>🛒 Your cart is empty</h1>

      <p>Looks like you haven't added any products yet.</p>

      <button
        onClick={() => navigate("/")}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Continue Shopping
      </button>
    </div>
  );

}

  return (
    <div>
      <h1>Cart</h1>

      <button
        onClick={() => {
          dispatch(clearCart());
          notifyWarning("Cart cleared");
        }}
      >
        Clear Cart
      </button>

      {items.map((item) => (
        <div key={item.id} style={{ margin: 10 }}>
          <img src={item.thumbnail} width="80" />

          <h3>{item.title}</h3>

          <p>Price: ${item.price}</p>

          <p>Qty: {item.quantity}</p>
          <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>

          <button
            onClick={() => {
              dispatch(decreaseQty(item.id));
              notifyInfo("Quantity decreased");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(increaseQty(item.id));
              notifyInfo("Quantity increased");
            }}
          >
            +
          </button>

          <button
            onClick={() => {
              dispatch(removeFromCart(item.id));
              notifyError("Product removed");
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}
