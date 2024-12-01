import React from "react";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      {/* Title Bar */}
      <header className="title-bar">
        <div className="title-left">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/Layshala_Logo.png"}
            alt="Logo"
            className="logo"
          />
          <div className="foundation-name">
            <span className="layshala">Layshala</span>
            <span className="foundation">Lalit Kala Foundation</span>
          </div>
        </div>
        <div className="title-right">
          <span className="username">Username</span>
          <button className="logout-btn">Logout</button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="main-layout">
        {/* Sidebar */}
        <nav className="sidebar">
          <ul>
            <li>
              <a href="/login/admin/home">Home</a>
            </li>
            <li>
              <a href="/login/admin/login">Login</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#settings">Settings</a>
            </li>
          </ul>
        </nav>

        {/* Content Area */}
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
