import React, { useState } from "react";
import ProductTable from "../components/product/ProductTable";
import Pagination from "../components/ui/Pagination";
import { productData } from "../data/products";
import { Product } from "../types";

const Table: React.FC = () => {
  // State for products and pagination
  const [products, setProducts] = useState<Product[]>(productData);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(productData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Changed to 6 to match Figma design

  // Handle product edit
  const handleEdit = (id: number) => {
    console.log(`Editing product with ID: ${id}`);
    // In a real application, you would open an edit modal or navigate to an edit page
  };

  // Handle product delete
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    }
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Get current page products
  const getCurrentPageProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  return (
    <main className="px-8 py-6">
      {/* Order List Section */}
      <div className="order-list-container">
        {/* Header Row */}
        <div className="order-header">
          <h3>ID</h3>
          <h3>NAME</h3>
          <h3>ADDRESS</h3>
          <h3>DATE</h3>
          <h3>TYPE</h3>
          <h3>STATUS</h3>
        </div>

        {/* Order Rows */}
        <div className="order-row">
          <span>00001</span>
          <span>Christine Brooks</span>
          <span>089 Kutch Green Apt. 448</span>
          <span>14 Feb 2019</span>
          <span>Electric</span>
          <span>
            <div className="status-label status-completed">Completed</div>
          </span>
        </div>

        <div className="order-row">
          <span>00002</span>
          <span>Rosie Pearson</span>
          <span>979 Immanuel Ferry Suite 526</span>
          <span>14 Feb 2019</span>
          <span>Book</span>
          <span>
            <div className="status-label status-processing">Processing</div>
          </span>
        </div>

        <div className="order-row">
          <span>00003</span>
          <span>Darrell Caldwell</span>
          <span>8587 Frida Ports</span>
          <span>14 Feb 2019</span>
          <span>Medicine</span>
          <span>
            <div className="status-label status-rejected">Rejected</div>
          </span>
        </div>

        <div className="order-row">
          <span>00004</span>
          <span>Gilbert Johnston</span>
          <span>768 Destiny Lake Suite 600</span>
          <span>14 Feb 2019</span>
          <span>Mobile</span>
          <span>
            <div className="status-label status-completed">Completed</div>
          </span>
        </div>

        <div className="order-row">
          <span>00005</span>
          <span>Alan Cain</span>
          <span>042 Mylene Throughway</span>
          <span>14 Feb 2019</span>
          <span>Watch</span>
          <span>
            <div className="status-label status-processing">Processing</div>
          </span>
        </div>

        <div className="order-row">
          <span>00006</span>
          <span>Alfred Murray</span>
          <span>543 Weimann Mountain</span>
          <span>14 Feb 2019</span>
          <span>Medicine</span>
          <span>
            <div className="status-label status-completed">Completed</div>
          </span>
        </div>
      </div>

      {/* Product Table Section */}
      <div className="mt-8">
        {/* Product Table */}
        <ProductTable
          products={getCurrentPageProducts()}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalItems={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default Table;
