import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface ProductSearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

/**
 * ProductSearch Component
 *
 * Search input field for filtering products
 *
 * @param {function} onSearch - Optional callback when search query changes
 * @param {string} placeholder - Optional placeholder text for the input field
 */
const ProductSearch: React.FC<ProductSearchProps> = ({
  onSearch,
  placeholder = "Search product name",
}) => {
  const [query, setQuery] = useState("");

  // Handle search input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="product-search">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        aria-label="Search products"
      />
      <span className="search-icon">
        <FiSearch />
      </span>
    </div>
  );
};

export default ProductSearch;
