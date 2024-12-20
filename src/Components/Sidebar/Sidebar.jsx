import React, { useState, useEffect } from "react";
import vasitumLogo from "../../assets/Vasitum Logo.png";
import vasitumLogoSmall from "../../assets/Vasitum Logo small.png";
import ic_calendar from "../../assets/ic_calendar.png";
import ic_dashboard from "../../assets/ic_dashboard.png";
import ic_department from "../../assets/ic_department.png";
import ic_employee from "../../assets/ic_employee.png";
import ic_recruitment from "../../assets/ic_recruitment.png";
import ic_settings from "../../assets/ic_settings.png";
import ic_support from "../../assets/ic_support.png";
import "./style.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 834);

  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth > 834);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="ham">
        {!isExpanded && (
          <div className="hamburger" onClick={toggleSidebar}>
            <RxHamburgerMenu />
          </div>
        )}
        {isExpanded && (
          <div className="hamburger cross" onClick={toggleSidebar}>
            <RxCross2 />
          </div>
        )}
      </div>

      <div className="logo">
        {isExpanded ? (
          <img src={vasitumLogo} alt="Vasitum Logo" className="large-logo" />
        ) : (
          <img
            src={vasitumLogoSmall}
            alt="Vasitum Logo small"
            className="small-logo"
          />
        )}
      </div>
      <div className="mainMenu">
        <p className="textBox">MAIN MENU</p>
        <ul>
          <li>
            <img src={ic_dashboard} alt="Dashboard" />
            {isExpanded && <p>Dashboard</p>}
          </li>
          <li>
            <img src={ic_recruitment} alt="Recruitment" />
            {isExpanded && <p>Recruitment</p>}
          </li>
          <li>
            <img src={ic_calendar} alt="Schedule" />
            {isExpanded && <p>Schedule</p>}
          </li>
          <li>
            <img src={ic_employee} alt="Employee" />
            {isExpanded && <p>Employee</p>}
          </li>
          <li>
            <img src={ic_department} alt="Department" />
            {isExpanded && <p>Department</p>}
          </li>
        </ul>
      </div>
      <div className="other">
        <p className="textBox">OTHER</p>
        <ul>
          <li>
            <img src={ic_support} alt="Support" />
            {isExpanded && <p>Support</p>}
          </li>
          <li>
            <img src={ic_settings} alt="Settings" />
            {isExpanded && <p>Settings</p>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
