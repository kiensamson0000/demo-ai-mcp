import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useAuth } from "../../contexts/AuthContext";

/**
 * DashboardLayout provides the main layout structure for all authenticated pages
 * It includes the Sidebar, Navbar and main content area
 */
const DashboardLayout: React.FC = () => {
  const { user, logout } = useAuth();

  // Handle logout
  const handleLogout = () => {
    logout();
  };

  // Get user's name or default
  const userName = user?.name || "User";
  const userAvatar = user?.avatar || "";

  return (
    <div className="flex h-screen bg-[#f5f6fa]">
      {/* Sidebar */}
      <Sidebar logoText1="Dash" logoText2="Stack" onLogout={handleLogout} />

      <div className="flex-1 flex flex-col overflow-hidden ml-[260px]">
        {/* Navbar */}
        <Navbar
          userName={userName}
          userAvatar={userAvatar}
          onLogout={handleLogout}
        />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
