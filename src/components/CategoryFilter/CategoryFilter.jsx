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
    <div className="filters">
      <button
        className="filter-btn"
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
          className="filter-btn"
          key={category.slug}
          onClick={() =>
            dispatch({
              type: "SET_CATEGORY",
              payload: category.slug,
            })
          }
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
