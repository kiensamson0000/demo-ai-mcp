import React from "react";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";

interface NavbarProps {
  profileImage: string;
  userName: string;
  userRole: string;
  notificationCount?: number;
}

/**
 * Navbar Component
 *
 * Top navigation bar with search, notifications, language selection, and profile information
 *
 * @param {string} profileImage - URL for the user's profile image
 * @param {string} userName - User's display name
 * @param {string} userRole - User's role (e.g., "Admin")
 * @param {number} notificationCount - Optional number of notifications to display
 */
const Navbar: React.FC<NavbarProps> = ({
  profileImage,
  userName,
  userRole,
  notificationCount = 0,
}) => {
  return (
    <nav className="navbar">
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="nav-search"
          aria-label="Search dashboard"
        />
        <span className="search-icon">
          <FiSearch />
        </span>
      </div>

      {/* Right Side Items */}
      <div className="nav-right">
        {/* Notification Bell */}
        <div className="notification">
          <span className="notification-icon">
            <FiBell />
          </span>
          {notificationCount > 0 && (
            <span className="badge">{notificationCount}</span>
          )}
        </div>

        {/* Language Selector */}
        <div className="language-selector">
          <div className="flag">UK</div>
          <span className="language-text">English</span>
          <span className="dropdown-arrow">
            <FiChevronDown />
          </span>
        </div>

        {/* User Profile */}
        <div className="profile-section">
          <img
            src={profileImage}
            alt={`${userName}'s profile`}
            className="profile-avatar"
          />
          <div className="profile-info">
            <p className="profile-name">{userName}</p>
            <p className="profile-role">{userRole}</p>
          </div>
          <span className="dropdown-arrow">
            <FiChevronDown />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
