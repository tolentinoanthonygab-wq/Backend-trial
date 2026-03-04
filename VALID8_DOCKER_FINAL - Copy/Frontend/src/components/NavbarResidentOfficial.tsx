import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaClipboardCheck,
  FaRegListAlt,
  FaClipboard,
  FaBars,
  FaTimes,
  FaThList,
  FaUserCheck,
} from "react-icons/fa";
import logoValid8 from "../assets/images/logo-valid83_transparent.png";
import userprofile from "../assets/images/userprofile.png";
import "../css/NavbarResidentOfficial.css";

export const NavbarResidentOfficial = () => {
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
        <div className="residentofficial-hamburger" onClick={toggleSidebar}>
          <FaBars />
        </div>
      )}

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <div
        className={`residentofficial-sidebar ${sidebarOpen ? "open" : ""} ${isExpanded ? "expanded" : "collapsed"
          }`}
      >
        {/* Header with Logo, Title, and Close Button */}
        <div className="residentofficial-sidebar-header">
          <div className="header-content-wrapper">
            <img src={logoValid8} alt="Barangay Logo" className="sidebar-logo" />
            <h1 className="residentofficial-title">
              Resident
              <br />
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
        <nav className="residentofficial-nav">
          <ul className="residentofficial-nav-menu">
            {/* Menu Toggle Button */}
            <li className="menu-toggle-item">
              <button
                className="residentofficial-nav-link menu-toggle-btn"
                onClick={toggleExpand}
                title={isExpanded ? "Collapse menu" : "Expand menu"}
              >
                <FaThList className="nav-icon" />
                <span className="nav-text">Menu</span>
              </button>
            </li>

            <li>
              <NavLink
                to="/residentofficial_home"
                className={({ isActive }) =>
                  isActive ? "residentofficial-nav-link active" : "residentofficial-nav-link"
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
                to="/residentofficial_upcoming_events"
                className={({ isActive }) =>
                  isActive ? "residentofficial-nav-link active" : "residentofficial-nav-link"
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
                to="/residentofficial_events_attended"
                className={({ isActive }) =>
                  isActive ? "residentofficial-nav-link active" : "residentofficial-nav-link"
                }
                onClick={() => setSidebarOpen(false)}
                title="Events Attended"
              >
                <FaClipboardCheck className="nav-icon" />
                <span className="nav-text">Events Attended</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/residentofficial_events"
                className={({ isActive }) =>
                  isActive ? "residentofficial-nav-link active" : "residentofficial-nav-link"
                }
                onClick={() => setSidebarOpen(false)}
                title="Events"
              >
                <FaRegListAlt className="nav-icon" />
                <span className="nav-text">Events</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/residentofficial_records"
                className={({ isActive }) =>
                  isActive ? "residentofficial-nav-link active" : "residentofficial-nav-link"
                }
                onClick={() => setSidebarOpen(false)}
                title="Records"
              >
                <FaClipboard className="nav-icon" />
                <span className="nav-text">Records</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/residentofficial_manual_attendance"
                className={({ isActive }) =>
                  isActive ? "residentofficial-nav-link active" : "residentofficial-nav-link"
                }
                onClick={() => setSidebarOpen(false)}
                title="Manual Attendance"
              >
                <FaUserCheck className="nav-icon" />
                <span className="nav-text">Manual Attendance</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* User Profile Section */}
        <div className="residentofficial-sidebar-footer">
          <NavLink
            to="/studentssg_profile"
            className={({ isActive }) =>
              isActive ? "residentofficial-profile-link active" : "residentofficial-profile-link"
            }
            onClick={() => setSidebarOpen(false)}
            title="Profile"
          >
            <img
              src={userprofile}
              alt="user profile"
              className="residentofficial-profile-img"
            />
            <span className="profile-text">Profile</span>
          </NavLink>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`residentofficial-content ${sidebarOpen ? "shifted" : ""} ${isExpanded ? "content-expanded" : "content-collapsed"
          }`}
      ></div>
    </>
  );
};

export default NavbarResidentOfficial;
