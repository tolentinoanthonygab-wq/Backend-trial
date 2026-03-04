import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaRegListAlt,
  FaUserCheck,
  FaClipboard,
  FaBars,
  FaTimes,
  FaThList,
} from "react-icons/fa";
import logoValid8 from "../assets/images/logo-valid83_transparent.png";
import userprofile from "../assets/images/userprofile.png";
import "../css/NavbarOfficial.css";

export const NavbarOfficial = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const navLinks = [
    { path: "/ssg_home", icon: <FaHome />, text: "Home" },
    { path: "/ssg_events", icon: <FaRegListAlt />, text: "Events" },
    { path: "/ssg_records", icon: <FaClipboard />, text: "Records" },
    {
      path: "/ssg_manual_attendance",
      icon: <FaUserCheck />,
      text: "Manual Attendance",
    },
  ];

  return (
    <>
      {/* Hamburger Icon - Only shows when sidebar is closed */}
      {!sidebarOpen && (
        <div className="official-hamburger" onClick={toggleSidebar}>
          <FaBars />
        </div>
      )}

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <div
        className={`official-sidebar ${sidebarOpen ? "open" : ""} ${isExpanded ? "expanded" : "collapsed"
          }`}
      >
        {/* Header with Logo, Title, and Close Button */}
        <div className="official-sidebar-header">
          <div className="header-content-wrapper">
            <img src={logoValid8} alt="Barangay Logo" className="sidebar-logo" />
            <h1 className="official-title">
              Official
            </h1>
          </div>
          {sidebarOpen && (
            <button className="sidebar-close-btn" onClick={toggleSidebar}>
              <FaTimes />
            </button>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="official-nav">
          <ul className="official-nav-menu">
            {/* Menu Toggle Button */}
            <li className="menu-toggle-item">
              <button
                className="official-nav-link menu-toggle-btn"
                onClick={toggleExpand}
                title={isExpanded ? "Collapse menu" : "Expand menu"}
              >
                <FaThList className="nav-icon" />
                <span className="nav-text">Menu</span>
              </button>
            </li>

            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "official-nav-link active" : "official-nav-link"
                  }
                  onClick={() => setSidebarOpen(false)}
                  title={item.text}
                >
                  <div className="nav-icon">{item.icon}</div>
                  <span className="nav-text">{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile Section */}
        <div className="official-sidebar-footer">
          <NavLink
            to="/ssg_profile"
            className={({ isActive }) =>
              isActive ? "official-profile-link active" : "official-profile-link"
            }
            onClick={() => setSidebarOpen(false)}
            title="Profile"
          >
            <img
              src={userprofile}
              alt="user profile"
              className="official-profile-img"
            />
            <span className="profile-text">Profile</span>
          </NavLink>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`official-content ${sidebarOpen ? "shifted" : ""} ${isExpanded ? "content-expanded" : "content-collapsed"
          }`}
      ></div>
    </>
  );
};

export default NavbarOfficial;
