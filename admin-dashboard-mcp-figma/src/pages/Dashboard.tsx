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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartOptions,
  ChartData,
  TooltipItem,
  ScriptableContext,
  Plugin,
  BarElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import appleWatch from "../assets/images/products/apple-watch.png";
import microsoftHeadset from "../assets/images/products/microsoft-headset.png";
import samsungA50 from "../assets/images/products/samsung-A50.png";
import customerChartSvg from "../assets/icons/customer-chart.svg";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// Define chart types
type SalesChartData = ChartData<"line">;
type SalesChartOptions = ChartOptions<"line">;

const labels = [
  "5000",
  "10000",
  "15000",
  "20000",
  "25000",
  "30000",
  "35000",
  "40000",
  "45000",
  "50000",
  "55000",
  "60000",
];
const salesData = [25, 30, 30, 32, 55, 40, 88, 40, 65, 45, 55, 30];
const profitData = [30, 70, 40, 30, 50, 50, 45, 55, 40, 35, 90, 60];

// Sample data matching the chart in the image
const years = [
  "2015",
  "2015.5",
  "2016",
  "2016.5",
  "2017",
  "2017.5",
  "2018",
  "2018.5",
  "2019",
  "2019.5",
];
const blueLineData = [25, 42, 55, 68, 70, 55, 45, 50, 60, 75, 85, 95];
const greenLineData = [0, 25, 42, 55, 58, 42, 30, 25, 35, 48, 62, 85];

// Add a custom plugin for the top sales indicator
const topSalesPlugin: Plugin<"line"> = {
  id: "topSales",
  afterDraw: (chart) => {
    const { ctx, scales } = chart;
    const dataset = chart.data.datasets[0];
    if (!dataset || !dataset.data) return;

    const data = dataset.data as number[];
    const maxValue = Math.max(...data);
    const maxIndex = data.indexOf(maxValue);

    // Check if we have valid data
    if (maxIndex === -1) return;

    const xScale = scales.x;
    const yScale = scales.y;
    if (!xScale || !yScale) return;

    const x = xScale.getPixelForValue(maxIndex);
    const y = yScale.getPixelForValue(maxValue);

    // Draw a larger point at the max value
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, 2 * Math.PI);
    ctx.fillStyle = "#4880FF";
    ctx.fill();
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  },
};

const Dashboard: React.FC = () => {
  // State for selected month
  const [selectedMonth, setSelectedMonth] = React.useState<string>("October");

  // State for Revenue chart month
  const [revenueMonth, setRevenueMonth] = React.useState<string>("October");

  // Monthly sales data
  const monthlySalesData: Record<
    string,
    { values: number[]; quantities: number[] }
  > = {
    January: {
      values: [15, 28, 80, 48, 55, 90, 50, 78, 84, 90, 94, 98],
      quantities: [
        5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
        55000, 60000,
      ],
    },
    February: {
      values: [10, 24, 65, 45, 80, 60, 45, 75, 95, 88, 55, 96],
      quantities: [
        5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
        55000, 60000,
      ],
    },
    March: {
      values: [18, 30, 55, 80, 65, 95, 35, 25, 89, 97, 75, 65],
      quantities: [
        5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
        55000, 60000,
      ],
    },
    April: {
      values: [12, 25, 85, 90, 95, 25, 30, 55, 95, 65, 98, 85],
      quantities: [
        5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
        55000, 60000,
      ],
    },
    May: {
      values: [20, 32, 42, 52, 60, 68, 75, 82, 88, 93, 96, 99],
      quantities: [
        5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
        55000, 60000,
      ],
    },
    June: {
      values: [14, 26, 36, 46, 54, 63, 70, 78, 85, 90, 94, 98],
      quantities: [
        5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
        55000, 60000,
      ],
    },
    July: {
      values: [22, 34, 44, 54, 62, 70, 78, 85, 90, 94, 97, 100],
      quantities: [
        5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
        55000, 60000,
      ],
    },
    August: {
      values: [16, 28, 38, 48, 56, 65, 72, 80, 86, 91, 95, 98],
      quantities: [
        5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
        55000, 60000,
      ],
    },
    September: {
      values: [25, 38, 48, 58, 66, 74, 81, 87, 92, 95, 98, 100],
      quantities: [
        5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
        55000, 60000,
      ],
    },
    October: {
      values: [35, 65, 85, 55, 90, 85, 55, 95, 55, 75, 95, 100],
      quantities: [
        5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
        55000, 60000,
      ],
    },
    November: {
      values: [18, 30, 40, 50, 58, 66, 74, 81, 87, 92, 95, 98],
      quantities: [
        5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
        55000, 60000,
      ],
    },
    December: {
      values: [22, 35, 45, 55, 64, 72, 80, 86, 91, 95, 98, 100],
      quantities: [
        5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
        55000, 60000,
      ],
    },
  };

  // Current month's data
  const currentMonthData = monthlySalesData[selectedMonth];

  // Chart data configuration
  const salesChartData: SalesChartData = {
    labels: currentMonthData.quantities.map((q) => `${q}`),
    datasets: [
      {
        label: "Sales %",
        data: currentMonthData.values,
        borderColor: "#4379EE",
        borderWidth: 1.5,
        pointBackgroundColor: "#4379EE",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
        fill: true,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, "rgba(67, 121, 238, 0.16)");
          gradient.addColorStop(1, "rgba(255, 255, 255, 0.18)");
          return gradient;
        },
      },
    ],
  };

  // Chart options configuration
  const salesChartOptions: SalesChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#5E77FF",
        titleFont: {
          family: "Nunito Sans",
          size: 12,
          weight: "bold",
        },
        bodyFont: {
          family: "Nunito Sans",
          size: 12,
          weight: "bold",
        },
        padding: 10,
        displayColors: false,
        callbacks: {
          title: function (tooltipItems) {
            return `Sales: ${tooltipItems[0].label}`;
          },
          label: function (context: TooltipItem<"line">) {
            return `${context.parsed.y}%`;
          },
        },
        // Add custom tooltip styling
        titleMarginBottom: 6,
        cornerRadius: 4,
        caretSize: 6,
      },
    },
    animation: {
      duration: 2000,
      easing: "easeOutQuart",
      delay: (context) => {
        return context.dataIndex * 100;
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "rgba(43, 48, 52, 0.4)",
          font: {
            family: "Nunito Sans",
            size: 12,
            weight: "bold",
          },
          callback: function (value, index) {
            // Show fewer labels to avoid crowding
            return index % 2 === 0 ? currentMonthData.quantities[index] : "";
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        position: "left",
        grid: {
          color: "#EAEAEA",
          lineWidth: 1,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "rgba(43, 48, 52, 0.4)",
          font: {
            family: "Nunito Sans",
            size: 12,
            weight: "bold",
          },
          callback: function (value) {
            if (typeof value === "number") {
              return `${value}%`;
            }
            return value;
          },
          padding: 10,
        },
        min: 0,
        max: 100,
      },
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      },
    },
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    elements: {
      point: {
        hitRadius: 10,
      },
    },
  };

  // Revenue chart data
  const revenueData = {
    labels,
    datasets: [
      {
        label: "Profit",
        data: profitData,
        borderWidth: 1.5,
        borderColor: "#A370F7",
        backgroundColor: function (context: ScriptableContext<"line">) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(193, 154, 254, 0.8)");
          gradient.addColorStop(1, "rgba(193, 154, 254, 0.1)");
          return gradient;
        },
        fill: true,
      },
      {
        label: "Sales",
        data: salesData,
        borderWidth: 1.5,
        borderColor: "#FF7A5C",
        backgroundColor: function (context: ScriptableContext<"line">) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(255, 159, 138, 0.8)");
          gradient.addColorStop(1, "rgba(255, 159, 138, 0.1)");
          return gradient;
        },
        fill: true,
      },
    ],
  };

  // Revenue chart options
  const revenueOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          color: "#9CA3AF",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "#f0f0f0",
        },
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9CA3AF",
          font: {
            size: 12,
          },
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // We'll create our own legend
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#4B5563",
        bodyColor: "#4B5563",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 4,
        displayColors: true,
        boxPadding: 4,
        callbacks: {
          labelColor: function (context) {
            const colors = ["#FF7A5C", "#A370F7"];
            return {
              backgroundColor: colors[context.datasetIndex],
              borderColor: colors[context.datasetIndex],
            };
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Makes the line curved
      },
      point: {
        radius: 0, // Hide points
        hoverRadius: 6, // Show on hover
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  // Sales Analytics data
  const salesAnalyticsData = {
    labels: years,
    datasets: [
      {
        label: "Data 1",
        data: blueLineData,
        borderColor: "#3B82F6", // Blue line
        backgroundColor: "transparent",
        tension: 0.4, // Curve smoothness
        pointRadius: 4,
        pointBackgroundColor: "#3B82F6",
        pointBorderColor: "white",
        pointBorderWidth: 2,
      },
      {
        label: "Data 2",
        data: greenLineData,
        borderColor: "#10B981", // Green line
        backgroundColor: "transparent",
        tension: 0.4, // Curve smoothness
        pointRadius: 4,
        pointBackgroundColor: "#10B981",
        pointBorderColor: "white",
        pointBorderWidth: 2,
      },
    ],
  };

  // Sales Analytics options
  const salesAnalyticsOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
          color: "#9CA3AF",
          font: {
            size: 12,
          },
          padding: 10,
        },
        grid: {
          color: "#F3F4F6",
        },
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9CA3AF",
          font: {
            size: 12,
          },
          maxRotation: 0,
          padding: 10,
          callback: function (val: string | number) {
            // Only display full years, not half years
            const label = this.getLabelForValue(Number(val));
            return label.includes(".5") ? "" : label;
          },
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#1F2937",
        bodyColor: "#4B5563",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 6,
        displayColors: true,
        boxPadding: 6,
        callbacks: {
          title: function (tooltipItems) {
            return tooltipItems[0].label.includes(".5")
              ? `Mid ${Math.floor(parseFloat(tooltipItems[0].label))}`
              : tooltipItems[0].label;
          },
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  };

  // Handle month selection
  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
  };

  // List of all months for dropdown
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <main className="px-8 py-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-[#202224] -tracking-[0.11px] mb-6">
        Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 stats-grid">
        {/* Total Users */}
        <div className="bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] p-6 relative overflow-hidden card-hover">
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
        <div className="bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] p-6 relative overflow-hidden card-hover">
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
        <div className="bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] p-6 relative overflow-hidden card-hover">
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
        <div className="bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] p-6 relative overflow-hidden card-hover">
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
      <div className="bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] p-6 card-hover">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#202224]">Sales Details</h2>
          <div className="relative">
            <div
              className="border border-[#D5D5D5] rounded px-3 py-1 flex items-center text-sm text-[rgba(43,48,52,0.4)] cursor-pointer"
              onClick={() =>
                document
                  .getElementById("monthDropdown")
                  ?.classList.toggle("hidden")
              }
            >
              <span>{selectedMonth}</span>
              <FiChevronDown className="ml-2" />
            </div>
            <div
              id="monthDropdown"
              className="absolute right-0 mt-1 bg-white border border-[#D5D5D5] rounded shadow-md z-10 hidden"
            >
              {months.map((month) => (
                <div
                  key={month}
                  className="px-4 py-2 hover:bg-[#F5F6FA] text-sm cursor-pointer text-[rgba(43,48,52,0.8)]"
                  onClick={() => {
                    handleMonthChange(month);
                    document
                      .getElementById("monthDropdown")
                      ?.classList.add("hidden");
                  }}
                >
                  {month}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chart Implementation */}
        <div className="h-[300px] relative">
          <Line
            data={salesChartData}
            options={salesChartOptions}
            plugins={[topSalesPlugin]}
            className="chart-animation"
          />
        </div>
      </div>

      {/* Deals Details Table */}
      <div className="bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] p-6 card-hover mt-6">
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
      <div className="bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] p-6 card-hover mt-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#202224]">Revenue</h2>
          <div className="relative">
            <div
              className="border border-[#D5D5D5] rounded px-3 py-1 flex items-center text-sm text-[rgba(43,48,52,0.4)] cursor-pointer"
              onClick={() =>
                document
                  .getElementById("revenueMonthDropdown")
                  ?.classList.toggle("hidden")
              }
            >
              <span>{revenueMonth}</span>
              <FiChevronDown className="ml-2" />
            </div>
            <div
              id="revenueMonthDropdown"
              className="absolute right-0 mt-1 bg-white border border-[#D5D5D5] rounded shadow-md z-10 hidden"
            >
              {months.map((month) => (
                <div
                  key={month}
                  className="px-4 py-2 hover:bg-[#F5F6FA] text-sm cursor-pointer text-[rgba(43,48,52,0.8)]"
                  onClick={() => {
                    setRevenueMonth(month);
                    document
                      .getElementById("revenueMonthDropdown")
                      ?.classList.add("hidden");
                  }}
                >
                  {month}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[250px] relative">
          <Line
            data={revenueData}
            options={revenueOptions}
            className="chart-animation"
          />
        </div>

        <div className="flex justify-center mb-4 mt-8 space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#E3B9FF] mr-2"></div>
            <span className="text-[#282D32] font-bold">Profit</span>
          </div>
          <div className="flex items-center pl-8">
            <div className="w-3 h-3 rounded-full bg-[#F9978A] mr-2"></div>
            <span className="text-[#282D32] font-bold">Sales</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
        {/* Customers Card */}
        <div className="bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] p-6 card-hover">
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
        <div className="bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] p-6 card-hover relative">
          <h2 className="text-2xl font-bold text-[#202224] mb-6">
            Featured Product
          </h2>

          <div className="flex justify-center mb-4">
            <img
              src={microsoftHeadset}
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
            <button className="w-8 h-8 rounded-full bg-[#E2EAF8]/40 flex items-center justify-center">
              <FiChevronLeft className="text-[#626262]" />
            </button>
            <button className="w-8 h-8 rounded-full bg-[#E2EAF8]/40 flex items-center justify-center">
              <FiChevronRight className="text-[#626262]" />
            </button>
          </div>
        </div>

        {/* Sales Analytics Card */}
        <div className="bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] p-6 card-hover">
          <h2 className="text-2xl font-bold text-[#202224] mb-6">
            Sales Analytics
          </h2>

          <div className="h-[250px] relative">
            <Line
              data={salesAnalyticsData}
              options={salesAnalyticsOptions}
              className="chart-animation"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
