export default function SearchBar({ query, setQuery }) {
  return (
    <div>
      <input
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}