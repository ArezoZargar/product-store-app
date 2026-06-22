import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../../api/productsApi";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error loading product</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{data.title}</h1>

      <img
        src={data.thumbnail}
        alt={data.title}
        style={{ width: "300px" }}
      />

      <p>{data.description}</p>

      <h3>Price: ${data.price}</h3>
      <h4>Rating: {data.rating}</h4>
    </div>
  );
}