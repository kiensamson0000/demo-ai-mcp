import React, { useState } from "react";
import "./App.css";
import "./styles/dashboard.css";
import "./styles/inbox.css";
import "./styles/orderLists.css";

// Layout Components
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

// Pages
import ProductStock from "./pages/ProductStock";
import Dashboard from "./pages/Dashboard";
import ProductUI from "./pages/ProductUI";
import InboxPage from "./pages/InboxPage";
import OrderLists from "./pages/OrderLists";

// Import profile image
// import profilePic from "./assets/profile-pic.png";

/**
 * Main App Component
 *
 * This is the root component that sets up the application layout
 * and handles global state and navigation
 */
const App: React.FC = () => {
  // State to track active path for navigation
  const [activePath, setActivePath] = useState("/dashboard");

  // Handle navigation
  const handleNavigation = (path: string) => {
    setActivePath(path);
    // Handle logout logic if needed
    if (path === "/logout") {
      // Logout logic here
      console.log("Logging out...");
    }
  };

  return (
    <div className="App flex h-screen bg-[#f5f6fa]">
      {/* Sidebar */}
      <Sidebar
        logoText="DashStack"
        activePath={activePath}
        onNavigate={handleNavigation}
      />

      <div className="flex-1 flex flex-col overflow-hidden ml-[260px]">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {activePath === "/dashboard" && <Dashboard />}
          {activePath === "/product-stock" && <ProductStock />}
          {activePath === "/products" && <ProductUI />}
          {activePath === "/inbox" && <InboxPage />}
          {activePath === "/order-lists" && <OrderLists />}
        </div>
      </div>
    </div>
  );
};

export default App;
