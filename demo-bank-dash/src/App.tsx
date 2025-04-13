import React, { useState } from "react";
// import "./App.css";

// Layout Components
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

// Pages
import ProductStock from "./pages/ProductStock";

// Import profile image
// import profilePic from "./assets/profile-pic.png";

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
    <div className="flex min-h-screen bg-[#f5f6fa]">
      <Sidebar
        logoText="DashStack"
        activePath={activePath}
        onNavItemClick={handleNavigation}
      />

      <div className="flex-1 flex flex-col ml-[260px]">
        <Navbar />
        <div className="mt-header pt-4">
          <ProductStock />
        </div>
      </div>
    </div>
  );
};

export default App;
