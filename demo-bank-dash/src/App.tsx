import React, { useState } from "react";
import "./App.css";

// Layout Components
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

// Pages
import ProductStock from "./pages/ProductStock";

// Import profile image
import profilePic from "./assets/profile-pic.png";

/**
 * Main App Component
 *
 * This is the root component that sets up the application layout
 * and handles global state and navigation
 */
const App: React.FC = () => {
  // Current active path for navigation
  const [activePath, setActivePath] = useState("/product-stock");

  // Handle navigation item clicks
  const handleNavigation = (path: string) => {
    // In a real app with routing, you would use a router to navigate
    // For this demo, we'll just update the active path
    setActivePath(path);

    // If "logout" is clicked, we could handle logout logic here
    if (path === "/logout") {
      console.log("User logged out");
      // In a real app: authService.logout();
    }
  };

  return (
    <div className="app">
      {/* Sidebar Navigation */}
      <Sidebar
        logoText="DashStack"
        activePath={activePath}
        onNavItemClick={handleNavigation}
      />

      {/* Main Content Area */}
      <div className="content">
        {/* Top Navigation Bar */}
        <Navbar
          profileImage={profilePic}
          userName="Moni Roy"
          userRole="Admin"
          notificationCount={6}
        />

        {/* Page Content - In a real app with routing, 
            this would conditionally render different pages based on route */}
        <ProductStock />
      </div>
    </div>
  );
};

export default App;
