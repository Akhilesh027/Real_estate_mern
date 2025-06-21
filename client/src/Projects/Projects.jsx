import React from 'react';
import Sider from '../Dashboard/Sider';
import AllProperties from './AllProperties';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  return (
    <div className="projects-container">
      {/* Sidebar (left) */}
      <div className="sidebar-container">
        <Sider />
      </div>

      {/* Main Content (right) */}
      <div className="content-container">
        <AllProperties />
      </div>
    </div>
  );
};

export default Projects;
