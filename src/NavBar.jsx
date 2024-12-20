import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">
            <img src="./src/assets/HealthCareDashboard/TestLogo.svg" alt="" />
          </span>
        </div>

        <div className="nav-items">
          {/* <NavItem icon="🏠" label="Overview" /> */}
          <NavItem
            icon="./src/assets/HealthCareDashboard/home.svg"
            label="Overview"
          />
          <NavItem
            icon="./src/assets/HealthCareDashboard/group.svg"
            label="Patients"
            active
          />
          <NavItem
            icon="./src/assets/HealthCareDashboard/calender.svg"
            label="Schedule"
          />
          <NavItem
            icon="./src/assets/HealthCareDashboard/chatbubble.svg"
            label="Message"
          />
          <NavItem
            icon="./src/assets/HealthCareDashboard/creditcard.svg"
            label="Transactions"
          />
        </div>
      </div>

      <div className="profile">
        <img
          src="./src/assets/HealthCareDashboard/seniorwomen.png"
          alt="Doctor profile"
          className="profile-img"
        />
        <div className="profile-info">
          <div className="profile-name">Dr. Jose Simmons</div>
          <div className="profile-role">General Practitioner</div>
        </div>
        <button className="dropdown-btn">▼</button>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, active = false }) => (
  <button className={`nav-item ${active ? "active" : ""}`}>
    <img src={icon} alt="" />
    <span>{label}</span>
  </button>
);

export default Navbar;
