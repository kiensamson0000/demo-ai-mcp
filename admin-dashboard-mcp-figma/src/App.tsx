import React, { useState } from "react";
import "./App.css";
import "./assets/styles/dashboard.css";
import "./assets/styles/inbox.css";
import "./assets/styles/orderLists.css";
import "./assets/styles/pricing.css";
import "./assets/styles/calendar.css";
import "./assets/styles/todo.css";
import "./assets/styles/contact.css";
import "./assets/styles/invoice.css";

// Layout Components
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

// Pages
import ProductStock from "./pages/ProductStock";
import Dashboard from "./pages/Dashboard";
import ProductUI from "./pages/ProductUI";
import InboxPage from "./pages/InboxPage";
import OrderLists from "./pages/OrderLists";
import PricingPage from "./pages/PricingPage";
import Calendar from "./pages/Calendar";
import TodoPage from "./pages/TodoPage";
import ContactPage from "./pages/ContactPage";
import InvoicePage from "./pages/InvoicePage";
import ElementsUI from "./pages/ElementsUI";
import Table from "./pages/Table";
import TeamPage from "./pages/TeamPage";

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
          {activePath === "/pricing" && <PricingPage />}
          {activePath === "/calendar" && <Calendar />}
          {activePath === "/todo" && <TodoPage />}
          {activePath === "/contact" && <ContactPage />}
          {activePath === "/invoice" && <InvoicePage />}
          {activePath === "/ui-elements" && <ElementsUI />}
          {activePath === "/table" && <Table />}
          {activePath === "/team" && <TeamPage />}
        </div>
      </div>
    </div>
  );
};

export default App;
