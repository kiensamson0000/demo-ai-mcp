import React, { useState } from "react";
import {
  FiBell,
  FiSearch,
  FiChevronDown,
  FiMenu,
  FiLogOut,
  FiUser,
  FiSettings,
} from "react-icons/fi";
import englishIcon from "../../assets/icons/english-flag.svg";
import defaultAvatar from "../../assets/images/people/profile-pic.png";

interface NavbarProps {
  userName?: string;
  userAvatar?: string;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  userName = "User",
  userAvatar = defaultAvatar,
  onLogout,
}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Mock data - in a real app, these would be dynamic
  const notifications = 6;
  const userRole = "Admin";

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className="h-16 flex items-center justify-between px-8 py-4 border-b border-divider-color bg-white shadow-sm z-10">
      {/* Left area - Search */}
      <div className="flex items-center">
        <div className="hidden md:block">
          <FiMenu className="text-xl text-gray-600 mr-4 cursor-pointer" />
        </div>
        <div className="flex-1">
          <div className="relative w-[280px] md:w-[420px]">
            <input
              type="text"
              className="w-full h-10 pl-10 pr-4 rounded-[19px] bg-[#F5F7FB] text-sm text-primary-text outline-none focus:ring-1 focus:ring-primary focus:bg-white transition-all"
              placeholder="Search"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary/70" />
          </div>
        </div>
      </div>

      {/* Right area - User info and notifications */}
      <div className="flex items-center space-x-6">
        {/* Notification icons */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button className="text-primary-text p-2 rounded-full hover:bg-[#F5F7FB] transition-colors">
              <FiBell className="text-xl" />
            </button>
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-[#F93C65] text-white text-xs rounded-full">
                {notifications > 9 ? "9+" : notifications}
              </span>
            )}
          </div>
        </div>

        {/* Language Selector */}
        <div className="hidden md:flex items-center gap-2 cursor-pointer text-[#646464] text-sm font-semibold">
          <div className="flag w-5 h-5 overflow-hidden rounded">
            <img
              src={englishIcon}
              alt="english"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="language-text">English</span>
          <span className="flex items-center">
            <FiChevronDown />
          </span>
        </div>

        {/* User info */}
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleUserMenu}
          >
            <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
              <img
                src={userAvatar}
                alt={userName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to default avatar if image fails to load
                  (e.target as HTMLImageElement).src = defaultAvatar;
                }}
              />
            </div>
            <div className="hidden md:block">
              <p className="text-[#404040] font-semibold text-sm">{userName}</p>
              <p className="text-[#565656] text-xs">{userRole}</p>
            </div>
            <span className="flex items-center ml-2">
              <FiChevronDown className="text-[#5C5C5C]" />
            </span>
          </div>

          {/* User dropdown menu */}
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <FiUser className="inline mr-2" /> Profile
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <FiSettings className="inline mr-2" /> Settings
              </button>
              <div className="border-t border-gray-200 my-1"></div>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                <FiLogOut className="inline mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
