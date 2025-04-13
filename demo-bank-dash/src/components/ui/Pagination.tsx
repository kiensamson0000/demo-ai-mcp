import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange?: (page: number) => void;
}

/**
 * Pagination Component
 *
 * Displays pagination controls and information about displayed items
 *
 * @param {number} currentPage - Current active page
 * @param {number} totalItems - Total number of items across all pages
 * @param {number} itemsPerPage - Number of items displayed per page
 * @param {function} onPageChange - Optional callback when page changes
 */
const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalItems = 78, // Default from the design
  itemsPerPage = 9, // Default from the design (showing 1-09)
  onPageChange,
}) => {
  // Calculate start and end item numbers
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  // Handle pagination clicks
  const handlePrevClick = () => {
    if (currentPage > 1 && onPageChange) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < Math.ceil(totalItems / itemsPerPage) && onPageChange) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <p className="pagination-info">
        Showing {start.toString().padStart(2, "0")}-
        {end.toString().padStart(2, "0")} of {totalItems}
      </p>
      <div className="pagination-controls">
        <button
          className={`pagination-button prev-button ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <span className="prev-icon">
            <FiChevronLeft />
          </span>
        </button>

        <div className="pagination-divider"></div>

        <button
          className={`pagination-button next-button ${
            currentPage >= Math.ceil(totalItems / itemsPerPage)
              ? "disabled"
              : ""
          }`}
          onClick={handleNextClick}
          disabled={currentPage >= Math.ceil(totalItems / itemsPerPage)}
          aria-label="Next page"
        >
          <span className="next-icon">
            <FiChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
