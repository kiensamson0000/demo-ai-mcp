import React from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiRefreshCw,
  FiChevronDown,
} from "react-icons/fi";

const OrderLists: React.FC = () => {
  return (
    <main className="px-8 py-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-[#202224] -tracking-[0.11px] mb-6">
        Order Lists
      </h1>

      {/* Filter Bar */}
      <div className="filter-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Filter By */}
          <div className="filter-item">
            <p className="filter-label">Filter By</p>
          </div>

          {/* Date */}
          <div className="filter-item">
            <p className="filter-label">Date</p>
            <div className="absolute right-0 top-0">
              <FiChevronDown className="text-black" />
            </div>
          </div>

          {/* Order Status */}
          <div className="filter-item">
            <p className="filter-label">Order Status</p>
            <div className="absolute right-0 top-0">
              <FiChevronDown className="text-black" />
            </div>
          </div>

          {/* Order Type */}
          <div className="filter-item">
            <p className="filter-label">Order Type</p>
            <div className="absolute right-0 top-0">
              <FiChevronDown className="text-black" />
            </div>
          </div>

          {/* Reset Filter */}
          <div className="flex items-center justify-center">
            <button className="reset-button">
              <FiRefreshCw className="mr-2" />
              Reset Filter
            </button>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white border border-[#B9B9B9]/30 rounded-[14px] mb-6 overflow-hidden">
        <table className="order-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th colSpan={2}>ADDRESS</th>
              <th>DATE</th>
              <th>TYPE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>00001</td>
              <td>Christine Brooks</td>
              <td colSpan={2}>089 Kutch Green Apt. 448</td>
              <td>04 Sep 2019</td>
              <td>Electric</td>
              <td>
                <span className="status-label status-completed">Completed</span>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>00002</td>
              <td>Rosie Pearson</td>
              <td colSpan={2}>979 Immanuel Ferry Suite 526</td>
              <td>28 May 2019</td>
              <td>Book</td>
              <td>
                <span className="status-label status-processing">
                  Processing
                </span>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td>00003</td>
              <td>Darrell Caldwell</td>
              <td colSpan={2}>8587 Frida Ports</td>
              <td>23 Nov 2019</td>
              <td>Medicine</td>
              <td>
                <span className="status-label status-rejected">Rejected</span>
              </td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td>00004</td>
              <td>Gilbert Johnston</td>
              <td colSpan={2}>768 Destiny Lake Suite 600</td>
              <td>05 Feb 2019</td>
              <td>Mobile</td>
              <td>
                <span className="status-label status-completed">Completed</span>
              </td>
            </tr>

            {/* Row 5 */}
            <tr>
              <td>00005</td>
              <td>Alan Cain</td>
              <td colSpan={2}>042 Mylene Throughway</td>
              <td>29 Jul 2019</td>
              <td>Watch</td>
              <td>
                <span className="status-label status-processing">
                  Processing
                </span>
              </td>
            </tr>

            {/* Row 6 */}
            <tr>
              <td>00006</td>
              <td>Alfred Murray</td>
              <td colSpan={2}>543 Weimann Mountain</td>
              <td>15 Aug 2019</td>
              <td>Medicine</td>
              <td>
                <span className="status-label status-completed">Completed</span>
              </td>
            </tr>

            {/* Row 7 */}
            <tr>
              <td>00007</td>
              <td>Maggie Sullivan</td>
              <td colSpan={2}>New Scottieberg</td>
              <td>21 Dec 2019</td>
              <td>Watch</td>
              <td>
                <span className="status-label status-processing">
                  Processing
                </span>
              </td>
            </tr>

            {/* Row 8 */}
            <tr>
              <td>00008</td>
              <td>Rosie Todd</td>
              <td colSpan={2}>New Jon</td>
              <td>30 Apr 2019</td>
              <td>Medicine</td>
              <td>
                <span className="status-label status-onhold">On Hold</span>
              </td>
            </tr>

            {/* Row 9 */}
            <tr>
              <td>00009</td>
              <td>Dollie Hines</td>
              <td colSpan={2}>124 Lyla Forge Suite 975</td>
              <td>09 Jan 2019</td>
              <td>Book</td>
              <td>
                <span className="status-label status-intransit">
                  In Transit
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <div className="pagination-info">Showing 1-09 of 78</div>
        <div className="pagination-controls">
          <button className="pagination-button text-[#202224]/60">
            <FiChevronLeft />
          </button>
          <div className="pagination-divider"></div>
          <button className="pagination-button text-[#202224]/90">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default OrderLists;
