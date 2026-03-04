import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaClipboardCheck,
  FaBars,
  FaTimes,
  FaThList,
} from "react-icons/fa";
import logoValid8 from "../assets/images/logo-valid83_transparent.png";
import userprofile from "../assets/images/userprofile.png";
import "../css/NavbarResidentStyles.css";

export const NavbarResident = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Hamburger Icon - Only shows when sidebar is closed */}
      {!sidebarOpen && (
        <div className="resident-hamburger" onClick={toggleSidebar}>
          <FaBars />
        </div>
      )}

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <div
        className={`resident-sidebar ${sidebarOpen ? "open" : ""} ${isExpanded ? "expanded" : "collapsed"
          }`}
      >
        {/* Header with Logo, Title, and Close Button */}
        <div className="resident-sidebar-header">
          <div className="header-content-wrapper">
            <img src={logoValid8} alt="Barangay Logo" className="sidebar-logo" />
            <h1 className="resident-title">Resident</h1>
          </div>
          {sidebarOpen && (
            <button className="sidebar-close-btn" onClick={toggleSidebar}>
              <FaTimes />
            </button>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="resident-nav">
          <ul className="resident-nav-menu">
            {/* Menu Toggle Button */}
            <li className="menu-toggle-item">
              <button
                className="resident-nav-link menu-toggle-btn"
                onClick={toggleExpand}
                title={isExpanded ? "Collapse menu" : "Expand menu"}
              >
                <FaThList className="nav-icon" />
                <span className="nav-text">Menu</span>
              </button>
            </li>

            <li>
              <NavLink
                to="/resident_home"
                className={({ isActive }) =>
                  isActive ? "resident-nav-link active" : "resident-nav-link"
                }
                onClick={() => setSidebarOpen(false)}
                title="Home"
              >
                <FaHome className="nav-icon" />
                <span className="nav-text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resident_upcoming_events"
                className={({ isActive }) =>
                  isActive ? "resident-nav-link active" : "resident-nav-link"
                }
                onClick={() => setSidebarOpen(false)}
                title="Upcoming Events"
              >
                <FaCalendarAlt className="nav-icon" />
                <span className="nav-text">Upcoming Events</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resident_events_attended"
                className={({ isActive }) =>
                  isActive ? "resident-nav-link active" : "resident-nav-link"
                }
                onClick={() => setSidebarOpen(false)}
                title="Events Attended"
              >
                <FaClipboardCheck className="nav-icon" />
                <span className="nav-text">Events Attended</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* User Profile Section */}
        <div className="resident-sidebar-footer">
          <NavLink
            to="/resident_profile"
            className={({ isActive }) =>
              isActive ? "resident-profile-link active" : "resident-profile-link"
            }
            onClick={() => setSidebarOpen(false)}
            title="Profile"
          >
            <img
              src={userprofile}
              alt="user profile"
              className="resident-profile-img"
            />
            <span className="profile-text">Profile</span>
          </NavLink>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`resident-content ${sidebarOpen ? "shifted" : ""} ${isExpanded ? "content-expanded" : "content-collapsed"
          }`}
      ></div>
    </>
  );
};

export default NavbarResident;
