import { useEffect, useState } from "react";
import { fetchCategories } from "../../api/productsApi";
import { useSettings } from "../../context/useSettings";
export default function CategoryFilter() {
  const { dispatch } = useSettings();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.log("Category error:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <button
        onClick={() =>
          dispatch({
            type: "SET_CATEGORY",
            payload: "",
          })
        }
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() =>
            dispatch({
              type: "SET_CATEGORY",
              payload: category.slug,
            })
          }
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
