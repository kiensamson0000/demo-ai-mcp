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
      <div className="bg-white rounded-xl border border-[#B9B9B9]/30 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Filter By */}
          <div className="relative px-4 py-2 flex items-center">
            <p className="text-sm font-semibold text-[#202224]">Filter By</p>
          </div>

          {/* Date */}
          <div className="relative px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-[#202224]">Date</p>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <FiChevronDown className="text-[#202224]" />
            </div>
          </div>

          {/* Order Status */}
          <div className="relative px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-[#202224]">Order Status</p>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <FiChevronDown className="text-[#202224]" />
            </div>
          </div>

          {/* Order Type */}
          <div className="relative px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-[#202224]">Order Type</p>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <FiChevronDown className="text-[#202224]" />
            </div>
          </div>

          {/* Reset Filter */}
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center px-4 py-2 text-[#4379EE] hover:bg-[#4379EE]/5 rounded-lg transition-colors">
              <FiRefreshCw className="mr-2" />
              Reset Filter
            </button>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white border border-[#B9B9B9]/30 rounded-[14px] mb-6 overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#FCFDFD] border-b border-[#D5D5D5]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#202224]/90">
                ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#202224]/90">
                NAME
              </th>
              <th
                colSpan={2}
                className="px-6 py-4 text-left text-sm font-semibold text-[#202224]/90"
              >
                ADDRESS
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#202224]/90">
                DATE
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#202224]/90">
                TYPE
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#202224]/90">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#979797]/60">
            {/* Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                00001
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Christine Brooks
              </td>
              <td
                colSpan={2}
                className="px-6 py-4 text-sm font-semibold text-[#202224]/90"
              >
                089 Kutch Green Apt. 448
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                04 Sep 2019
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Electric
              </td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded bg-[rgba(0,182,155,0.2)] text-[#00b69b]">
                  Completed
                </span>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                00002
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Rosie Pearson
              </td>
              <td
                colSpan={2}
                className="px-6 py-4 text-sm font-semibold text-[#202224]/90"
              >
                979 Immanuel Ferry Suite 526
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                28 May 2019
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Book
              </td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded bg-[rgba(98,38,239,0.2)] text-[#6226ef]">
                  Processing
                </span>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                00003
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Darrell Caldwell
              </td>
              <td
                colSpan={2}
                className="px-6 py-4 text-sm font-semibold text-[#202224]/90"
              >
                8587 Frida Ports
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                23 Nov 2019
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Medicine
              </td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded bg-[rgba(239,56,38,0.2)] text-[#ef3826]">
                  Rejected
                </span>
              </td>
            </tr>

            {/* Row 4 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                00004
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Gilbert Johnston
              </td>
              <td
                colSpan={2}
                className="px-6 py-4 text-sm font-semibold text-[#202224]/90"
              >
                768 Destiny Lake Suite 600
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                05 Feb 2019
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Mobile
              </td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded bg-[rgba(0,182,155,0.2)] text-[#00b69b]">
                  Completed
                </span>
              </td>
            </tr>

            {/* Row 5 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                00005
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Alan Cain
              </td>
              <td
                colSpan={2}
                className="px-6 py-4 text-sm font-semibold text-[#202224]/90"
              >
                042 Mylene Throughway
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                29 Jul 2019
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Watch
              </td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded bg-[rgba(98,38,239,0.2)] text-[#6226ef]">
                  Processing
                </span>
              </td>
            </tr>

            {/* Row 6 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                00006
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Alfred Murray
              </td>
              <td
                colSpan={2}
                className="px-6 py-4 text-sm font-semibold text-[#202224]/90"
              >
                543 Weimann Mountain
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                15 Aug 2019
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Medicine
              </td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded bg-[rgba(0,182,155,0.2)] text-[#00b69b]">
                  Completed
                </span>
              </td>
            </tr>

            {/* Row 7 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                00007
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Maggie Sullivan
              </td>
              <td
                colSpan={2}
                className="px-6 py-4 text-sm font-semibold text-[#202224]/90"
              >
                New Scottieberg
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                21 Dec 2019
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Watch
              </td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded bg-[rgba(98,38,239,0.2)] text-[#6226ef]">
                  Processing
                </span>
              </td>
            </tr>

            {/* Row 8 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                00008
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Rosie Todd
              </td>
              <td
                colSpan={2}
                className="px-6 py-4 text-sm font-semibold text-[#202224]/90"
              >
                New Jon
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                30 Apr 2019
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Medicine
              </td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded bg-[rgba(255,152,0,0.2)] text-[#ff9800]">
                  On Hold
                </span>
              </td>
            </tr>

            {/* Row 9 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                00009
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Dollie Hines
              </td>
              <td
                colSpan={2}
                className="px-6 py-4 text-sm font-semibold text-[#202224]/90"
              >
                124 Lyla Forge Suite 975
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                09 Jan 2019
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-[#202224]/90">
                Book
              </td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded bg-[rgba(30,136,229,0.2)] text-[#1e88e5]">
                  In Transit
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-[#202224]/60">Showing 1-09 of 78</div>
        <div className="flex items-center bg-[#FAFBFD] border border-[#D5D5D5] rounded-lg">
          <button className="px-3 py-2 text-[#202224]/60 hover:text-[#4880ff] transition-colors">
            <FiChevronLeft />
          </button>
          <div className="h-5 w-px bg-[#979797] opacity-70"></div>
          <button className="px-3 py-2 text-[#202224]/90 hover:text-[#4880ff] transition-colors">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default OrderLists;
