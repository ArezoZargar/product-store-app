import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../../api/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

import { notifySuccess } from "../../utils/notify";
export default function ProductDetailsPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = data && cartItems?.some((item) => item.id === data.id);

  const handleCart = () => {
    if (!isInCart) {
      dispatch(
        addToCart({
          id: data.id,
          title: data.title,
          price: data.price,
          thumbnail: data.thumbnail,
        }),
      );

      notifySuccess("Added to cart 🛒");
    } else {
      window.location.href = "/checkout";
    }
  };
  if (isLoading) return <div className="loading-page">Loading...</div>;
  if (isError) return <h2>Error loading product</h2>;

  return (
    <div className="product-page">
      <div className="product-container">
        {/* IMAGE */}
        <div className="product-image-box">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="product-image"
          />
        </div>

        <div className="product-info">
          <h1>{data.title}</h1>

          <p className="description">{data.description}</p>

          <div className="price-box">
            <span className="price">${data.price}</span>
          </div>

          <div className="rating">⭐ {data.rating}</div>

          <button className="buy-btn" onClick={handleCart}>
            {isInCart ? "Checkout" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
