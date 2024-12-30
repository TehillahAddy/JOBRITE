import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaUser, FaEllipsisH } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <nav>
          <ul>
            <li><NavLink to="/home"><FaHome /> Home</NavLink></li>
            <li><NavLink to="/explore"><FaHashtag /> Explore</NavLink></li>
            <li><NavLink to="/notifications"><FaBell /> Notifications</NavLink></li>
            <li><NavLink to="/messages"><FaEnvelope /> Messages</NavLink></li>
            <li><NavLink to="/profile"><FaUser /> Profile</NavLink></li>
            <li><NavLink to="/more"><FaEllipsisH /> More</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="content">
          <h2>Main Content Area</h2>
          <p>This is where the main content like posts or tweets will appear.</p>
          {/* Add more content to make the area scrollable */}
          <p>Content block 1</p>
          <p>Content block 2</p>
          <p>Content block 3</p>
          <p>Content block 4</p>
          <p>Content block 5</p>
        </div>
      </div>
      <div className="right-sidebar">
        <h2>What's happening</h2>
        <ul>
          <li>Trending in Politics: Supreme Court</li>
          <li>Trending in Music: Vybz Kartel</li>
          <li>Trending in Sports: Detty December</li>
          <li>Pep Guardiola</li>
        </ul>
        <div className="premium">
          <h3>Subscribe to Premium</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
