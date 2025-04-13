import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Product } from "../../types";
import ColorCircle from "../ui/ColorCircle";

interface ProductTableProps {
  products: Product[];
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

/**
 * ProductTable Component
 *
 * Displays product data in a responsive table layout
 *
 * @param {Product[]} products - Array of product objects to display
 * @param {function} onEdit - Optional callback when edit button is clicked
 * @param {function} onDelete - Optional callback when delete button is clicked
 */
const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onEdit,
  onDelete,
}) => {
  // Handle edit button click
  const handleEdit = (id: number) => {
    if (onEdit) {
      onEdit(id);
    }
  };

  // Handle delete button click
  const handleDelete = (id: number) => {
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <div className="product-table-container">
      {/* Table Header */}
      <div className="table-header-row">
        <div className="table-header-cell image-header">Image</div>
        <div className="table-header-cell name-header">Product Name</div>
        <div className="table-header-cell category-header">Category</div>
        <div className="table-header-cell price-header">Price</div>
        <div className="table-header-cell quantity-header">Piece</div>
        <div className="table-header-cell colors-header">Available Color</div>
        <div className="table-header-cell actions-header">Action</div>
      </div>

      {/* Table Rows */}
      {products.map((product) => (
        <div key={product.id} className="table-data-row">
          {/* Product Image */}
          <div className="table-cell image-cell">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                loading="lazy" // Lazy load images for better performance
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="table-cell name-cell">{product.name}</div>
          <div className="table-cell category-cell">{product.category}</div>
          <div className="table-cell price-cell">{product.price}</div>
          <div className="table-cell quantity-cell">{product.quantity}</div>

          {/* Color Options */}
          <div className="table-cell colors-cell">
            <div className="color-options">
              {product.colors.map((color, index) => (
                <ColorCircle key={index} color={color} />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="table-cell actions-cell">
            <button
              className="action-button edit-button"
              onClick={() => handleEdit(product.id)}
              aria-label={`Edit ${product.name}`}
            >
              <span className="edit-icon">
                <FiEdit2 />
              </span>
            </button>
            <div className="action-divider"></div>
            <button
              className="action-button delete-button"
              onClick={() => handleDelete(product.id)}
              aria-label={`Delete ${product.name}`}
            >
              <span className="delete-icon">
                <FiTrash2 />
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
