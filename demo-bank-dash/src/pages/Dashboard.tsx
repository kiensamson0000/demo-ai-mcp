import React from "react";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiPackage,
  FiDollarSign,
  FiUsers,
  FiShoppingBag,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import appleWatch from "../assets/apple-watch.png";
import microsoftHeadset from "../assets/microsoft-headset.png";
import samsungA50 from "../assets/samsung-A50.png";
import beatsHeadphones from "../assets/microsoft-headset.png";
import salesAnalyticsSvg from "../assets/figma/sales-analytics.svg";
import revenueChartSvg from "../assets/figma/revenue-chart.svg";
import customerChartSvg from "../assets/figma/customer-chart.svg";

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

      {/* Revenue Chart */}
      <div className="bg-white rounded-[14px] shadow-md p-6 card-hover mt-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#202224]">Revenue</h2>
          <div className="border border-[#D5D5D5] rounded px-3 py-1 flex items-center text-sm text-[rgba(43,48,52,0.4)]">
            <span>October</span>
            <FiChevronDown className="ml-2" />
          </div>
        </div>

        <div className="flex items-center mb-4 space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#E3B9FF] mr-2"></div>
            <span className="text-[#282D32] font-bold">Profit</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#F9978A] mr-2"></div>
            <span className="text-[#282D32] font-bold">Sales</span>
          </div>
        </div>

        <div className="revenue-chart relative h-[250px]">
          {/* Revenue Chart SVG */}
          <img
            src={revenueChartSvg}
            alt="Revenue Chart"
            className="w-full h-full"
          />

          {/* Y-axis Labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-2 text-xs text-[rgba(43,48,52,0.4)] font-semibold">
            <span>60k</span>
            <span>55k</span>
            <span>50k</span>
            <span>45k</span>
            <span>40k</span>
          </div>

          {/* X-axis Labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-[rgba(43,48,52,0.4)] font-semibold">
            <span>20</span>
            <span>40</span>
            <span>60</span>
            <span>80</span>
            <span>100</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6 ">
        {/* Customers Card */}
        <div className="bg-white rounded-[14px] shadow-md p-6 card-hover">
          <h2 className="text-2xl font-bold text-[#202224] mb-6">Customers</h2>

          <div className="flex justify-center mb-6">
            <img
              src={customerChartSvg}
              alt="Customer Chart"
              className="w-40 h-40"
            />
          </div>

          <div className="flex justify-around">
            {/* New Customers */}
            <div className="relative">
              <h3 className="text-[28px] font-bold tracking-[1px] text-[#202224] mt-2">
                34,249
              </h3>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#4880FF] mr-2"></div>
                <span className="text-[#282D32] text-base font-semibold opacity-80">
                  New Customers
                </span>
              </div>
            </div>

            {/* Repeated Customers */}
            <div className="relative">
              <h3 className="text-[28px] font-bold tracking-[1px] text-center text-[#202224] mt-2">
                1,420
              </h3>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#C0D2F0] mr-2"></div>
                <span className="text-[#282D32] text-base font-semibold opacity-80">
                  Repeated
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Product Card */}
        <div className="bg-white rounded-[14px] shadow-md p-6 card-hover relative">
          <h2 className="text-2xl font-bold text-[#202224] mb-6">
            Featured Product
          </h2>

          <div className="flex justify-center mb-4">
            <img
              src={beatsHeadphones}
              alt="Beats Headphone"
              className="w-40 h-40 object-contain"
            />
          </div>

          <h3 className="text-lg font-bold text-[#282D32] text-center">
            Beats Headphone 2019
          </h3>
          <p className="text-[#4880FF] font-bold text-center opacity-70 mt-1 mb-6">
            $89.00
          </p>

          {/* Navigation Arrows */}
          <div className="absolute right-6 top-6 flex space-x-2">
            <button className="nav-arrow">
              <FiChevronLeft className="nav-arrow-icon" />
            </button>
            <button className="nav-arrow">
              <FiChevronRight className="nav-arrow-icon" />
            </button>
          </div>
        </div>

        {/* Sales Analytics Card */}
        <div className="bg-white rounded-[14px] shadow-md p-6 card-hover">
          <h2 className="text-2xl font-bold text-[#202224] mb-6">
            Sales Analytics
          </h2>

          <div className="h-[250px] relative mb-4">
            {/* Sales Analytics Chart SVG */}
            <img
              src={salesAnalyticsSvg}
              alt="Sales Analytics"
              className="w-full h-full"
            />

            {/* Y-axis Labels */}
            <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-xs text-[rgba(41,44,47,0.4)] font-semibold">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>
          </div>

          {/* X-axis Labels */}
          <div className="flex justify-between text-xs text-[rgba(41,44,47,0.4)] font-semibold px-6">
            <span>2015</span>
            <span>2016</span>
            <span>2017</span>
            <span>2018</span>
            <span>2019</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
