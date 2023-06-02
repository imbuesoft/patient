import React from 'react';
import './sidebar.css';

const Sidebar=()=> {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
      
          <span className="logo-text">Collapsible</span>
        
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <button className="sidebar-menu-button collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              Home
            </button>
            <div className="collapse show" id="home-collapse">
              <ul className="sub-menu">
                <li><a href="#" className="sub-menu-link">Overview</a></li>
                <li><a href="#" className="sub-menu-link">Updates</a></li>
                <li><a href="#" className="sub-menu-link">Reports</a></li>
              </ul>
            </div>
          </li>
          <li className="sidebar-menu-item">
            <button className="sidebar-menu-button collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
              Dashboard
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="sub-menu">
                <li><a href="#" className="sub-menu-link">Overview</a></li>
                <li><a href="#" className="sub-menu-link">Weekly</a></li>
                <li><a href="#" className="sub-menu-link">Monthly</a></li>
                <li><a href="#" className="sub-menu-link">Annually</a></li>
              </ul>
            </div>
          </li>
          <li className="sidebar-menu-item">
            <button className="sidebar-menu-button collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
              Orders
            </button>
            <div className="collapse" id="orders-collapse">
              <ul className="sub-menu">
                <li><a href="#" className="sub-menu-link">New</a></li>
                <li><a href="#" className="sub-menu-link">Processed</a></li>
                <li><a href="#" className="sub-menu-link">Shipped</a></li>
                <li><a href="#" className="sub-menu-link">Returned</a></li>
              </ul>
            </div>
          </li>
          <li className="sidebar-divider"></li>
          <li className="sidebar-menu-item">
            <button className="sidebar-menu-button collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
              Account
            </button>
            <div className="collapse" id="account-collapse">
              <ul className="sub-menu">
                <li><a href="#" className="sub-menu-link-dark">New...</a></li>
                <li><a href="#" className="sub-menu-link-dark">Profile</a></li>
                <li><a href="#" className="sub-menu-link-dark">Settings</a></li>
                <li><a href="#" className="sub-menu-link-dark">Sign out</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
