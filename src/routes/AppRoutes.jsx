import { Routes, Route } from "react-router-dom";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import HomePage from "../pages/Home/HomePage";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import CartPage from "../pages/Cart/CartPage";
import OrderSuccessPage from "../pages/OrderSuccessPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/success" element={<OrderSuccessPage />} />
    </Routes>
  );
}