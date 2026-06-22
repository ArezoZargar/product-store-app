import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const searchProducts = async (query) => {
  const res = await api.get(`/products/search?q=${query}`);
  return res.data.products;
};

export async function fetchProducts(limit = 10, skip = 0) {
  const res = await api.get(`/products?limit=${limit}&skip=${skip}`);
  return res.data;
}

export async function fetchProductById(id) {
  const res = await api.get(`/products/${id}`);
  return res.data;
}

export async function fetchCategories() {
  const res = await api.get("/products/categories");
  return res.data;
}

export async function fetchProductsByCategory(category, limit = 10, skip = 0) {
  const res = await api.get(
    `/products/category/${category}?limit=${limit}&skip=${skip}`,
  );
  return res.data;
}

export default api;
