import React from "react";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiPackage,
  FiDollarSign,
  FiUsers,
  FiShoppingBag,
  FiChevronDown,
} from "react-icons/fi";
import appleWatch from "../assets/apple-watch.png";
import microsoftHeadset from "../assets/microsoft-headset.png";
import samsungA50 from "../assets/samsung-A50.png";

const Dashboard: React.FC = () => {
  return (
    <main className="px-8 py-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-[#202224] -tracking-[0.11px] mb-6">
        Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 stats-grid">
        {/* Total Users */}
        <div className="bg-white rounded-[14px] shadow-md p-6 relative overflow-hidden card-hover">
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#8280FF]/20 flex items-center justify-center">
            <FiUsers className="text-[#8280FF] text-xl" />
          </div>
          <p className="text-[#202224]/70 text-base font-semibold mb-2">
            Total User
          </p>
          <h2 className="text-[28px] font-bold tracking-wide text-[#202224]">
            40,689
          </h2>
          <div className="mt-4 flex items-center text-xs text-[#00B69B] font-semibold">
            <FiTrendingUp className="mr-1" />
            <span>8.5% Up from yesterday</span>
          </div>
        </div>

        {/* Total Order */}
        <div className="bg-white rounded-[14px] shadow-md p-6 relative overflow-hidden card-hover">
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#FEC53D]/20 flex items-center justify-center">
            <FiShoppingBag className="text-[#FEC53D] text-xl" />
          </div>
          <p className="text-[#202224]/70 text-base font-semibold mb-2">
            Total Order
          </p>
          <h2 className="text-[28px] font-bold tracking-wide text-[#202224]">
            10293
          </h2>
          <div className="mt-4 flex items-center text-xs text-[#00B69B] font-semibold">
            <FiTrendingUp className="mr-1" />
            <span>1.3% Up from past week</span>
          </div>
        </div>

        {/* Total Sales */}
        <div className="bg-white rounded-[14px] shadow-md p-6 relative overflow-hidden card-hover">
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#4AD991]/20 flex items-center justify-center">
            <FiDollarSign className="text-[#4AD991] text-xl" />
          </div>
          <p className="text-[#202224]/70 text-base font-semibold mb-2">
            Total Sales
          </p>
          <h2 className="text-[28px] font-bold tracking-wide text-[#202224]">
            $89,000
          </h2>
          <div className="mt-4 flex items-center text-xs text-[#F93C65] font-semibold">
            <FiTrendingDown className="mr-1" />
            <span>4.3% Down from yesterday</span>
          </div>
        </div>

        {/* Total Pending */}
        <div className="bg-white rounded-[14px] shadow-md p-6 relative overflow-hidden card-hover">
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#FF9066]/30 flex items-center justify-center">
            <FiPackage className="text-[#FF9066] text-xl" />
          </div>
          <p className="text-[#202224]/70 text-base font-semibold mb-2">
            Total Pending
          </p>
          <h2 className="text-[28px] font-bold tracking-wide text-[#202224]">
            2040
          </h2>
          <div className="mt-4 flex items-center text-xs text-[#00B69B] font-semibold">
            <FiTrendingUp className="mr-1" />
            <span>1.8% Up from yesterday</span>
          </div>
        </div>
      </div>

      {/* Sales Details Chart */}
      <div className="bg-white rounded-[14px] shadow-md p-6 card-hover">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#202224]">Sales Details</h2>
          <div className="border border-[#D5D5D5] rounded px-3 py-1 flex items-center text-sm text-[rgba(43,48,52,0.4)]">
            <span>October</span>
            <FiChevronDown className="ml-2" />
          </div>
        </div>

        {/* Placeholder for Chart - in a real app you would use a chart library */}
        <div className="h-[280px] bg-gradient-to-b from-[#4379EE]/10 to-white rounded-lg border border-[#EAEAEA] flex items-center justify-center relative">
          <div className="text-center">
            <span className="text-[#4880FF] font-bold bg-[#4880FF]/10 px-3 py-1 rounded-md absolute top-4 right-4">
              $64,366.77
            </span>
            <div className="w-full h-[180px] relative">
              {/* Chart line path representation */}
              <div className="w-full h-[1px] bg-[#EAEAEA] absolute top-1/4"></div>
              <div className="w-full h-[1px] bg-[#EAEAEA] absolute top-2/4"></div>
              <div className="w-full h-[1px] bg-[#EAEAEA] absolute top-3/4"></div>
              <div className="w-full h-[1px] bg-[#EAEAEA] absolute bottom-0"></div>
              <div className="w-full h-[1px] bg-[#EAEAEA] absolute top-0"></div>

              {/* Path representation */}
              <svg className="absolute inset-0 w-full h-full">
                <path
                  d="M 50,150 Q 100,50 150,100 T 250,80 T 350,120 T 450,70 T 550,90"
                  fill="none"
                  stroke="#4379EE"
                  strokeWidth="2"
                  className="sales-chart-line"
                />
              </svg>

              {/* Data points */}
              {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((pos) => (
                <div
                  key={pos}
                  className="absolute w-2 h-2 rounded-full bg-[#4379EE] border-2 border-white"
                  style={{
                    left: `${pos}%`,
                    bottom: `${40 + Math.sin(pos / 15) * 30}px`,
                  }}
                ></div>
              ))}
              <div
                className="absolute w-3 h-3 rounded-full bg-[#4880FF] border-2 border-white shadow-md"
                style={{ left: "50%", bottom: "70px" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Y-axis labels */}
        <div className="flex text-xs text-[rgba(43,48,52,0.4)] font-semibold justify-between mt-2">
          <span>0%</span>
          <span>20%</span>
          <span>40%</span>
          <span>60%</span>
          <span>80%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Deals Details Table */}
      <div className="bg-white rounded-[14px] shadow-md p-6 card-hover mt-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#202224]">Deals Details</h2>
          <div className="border border-[#D5D5D5] rounded px-3 py-1 flex items-center text-sm text-[rgba(43,48,52,0.4)]">
            <span>October</span>
            <FiChevronDown className="ml-2" />
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr] bg-[#F1F4F9] p-3 rounded-xl text-sm font-bold text-[#202224] mb-4">
          <div>Product Name</div>
          <div>Location</div>
          <div>Date - Time</div>
          <div>Piece</div>
          <div>Status</div>
        </div>

        {/* Table Rows */}
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr] items-center border-b border-gray-200 pb-3">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-2">
                <img
                  src={appleWatch}
                  alt="Apple Watch"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-[#202224]/80 font-semibold">
                Apple Watch
              </span>
            </div>
            <div className="text-sm text-[#202224]/80 font-semibold">
              Hanoi, Vietnam
            </div>
            <div className="text-sm text-[#202224]/80 font-semibold">
              11.03.2025 - 08:53 PM
            </div>
            <div className="text-sm text-[#202224]/80 font-semibold">423</div>
            <div>
              <span className="status-badge status-delivered">Delivered</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr] items-center border-b border-gray-200 pb-3">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-2">
                <img
                  src={microsoftHeadset}
                  alt="Microsoft Headset"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-[#202224]/80 font-semibold">
                Microsoft Headset
              </span>
            </div>
            <div className="text-sm text-[#202224]/80 font-semibold">
              Da Nang, Vietnam
            </div>
            <div className="text-sm text-[#202224]/80 font-semibold">
              11.03.2025 - 10:52 PM
            </div>
            <div className="text-sm text-[#202224]/80 font-semibold">231</div>
            <div>
              <span className="status-badge status-pending">Pending</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr] items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-2">
                <img
                  src={samsungA50}
                  alt="Samsung A50"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-[#202224]/80 font-semibold">
                Samsung A50
              </span>
            </div>
            <div className="text-sm text-[#202224]/80 font-semibold">
              HCM, Vietnam
            </div>
            <div className="text-sm text-[#202224]/80 font-semibold">
              02.02.2025 - 12:23 PM
            </div>
            <div className="text-sm text-[#202224]/80 font-semibold">111</div>
            <div>
              <span className="status-badge status-rejected">Rejected</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
