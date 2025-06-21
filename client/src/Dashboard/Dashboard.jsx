import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import ProjectPieChart from './ProjectPieChart';
import { useLocation } from 'react-router-dom';
import Sider from './Sider';
import Updates from '../Updates/Updates';
import properties from '../data/properties.json';

const Dashboard = () => {
  const location = useLocation();
  const [projectData, setProjectData] = useState({
    total: 0,
    active: 0,
    pending: 0,
    completed: 0,
  });

  useEffect(() => {
    const total = properties.length;
    const active = properties.filter((p) => p.status === 'Active').length;
    const pending = properties.filter((p) => p.status === 'Pending').length;
    const completed = properties.filter((p) => p.status === 'Completed').length;

    setProjectData({ total, active, pending, completed });
  }, []);

  return (
    <div className="dashboard-container">
      <Sider />
      <div className="main-content">
        <div className="header">
          <h1>Dashboard</h1>
          <div className="search">🔴 Search...</div>
        </div>

        {/* Static Achievement Card */}
        <div className="card achievement-card">
          <div className="card-header">
            <h3>Our Achievements</h3>
            <div className="icon-circle">🏠</div>
          </div>
          <div>
            <h4>Dhulapally Site</h4>
            <small>Client: Venga Realtors</small>
            <div className="status-badges">
              <span className="badge completed">Completed</span>
              <span className="badge sold">Sold</span>
              <span className="badge registered">Registered</span>
            </div>
            <p>
              Successfully registered and sold the Dhulapally Site to Venga Realtors. The property was
              developed with premium amenities and strategic location advantages that attracted high-value
              buyers. All legal documentation and compliance requirements were fulfilled ahead of schedule.
            </p>
            <p className="success">✔ Closed above market value</p>
          </div>
        </div>

        {/* Metrics Section - Dynamic from JSON */}
        <div className="grid">
          <div className="metric">
            <span>Total Projects</span>
            <h2>{projectData.total}</h2>
            <p className="increase">⬆ 12% increase</p>
          </div>
          <div className="metric">
            <span>Active Projects</span>
            <h2>{projectData.active}</h2>
            <p className="increase">⬆ 8% increase</p>
          </div>
          <div className="metric">
            <span>Pending Projects</span>
            <h2>{projectData.pending}</h2>
            <p className="decrease">⬇ 3% decrease</p>
          </div>
          <div className="metric">
            <span>Completed Projects</span>
            <h2>{projectData.completed}</h2>
            <p className="increase">⬆ 5% increase</p>
          </div>
        </div>

        {/* Chart + Updates */}
        <div className="bottom-section flex flex-wrap gap-4">
  <div className="chart-container w-full md:w-1/2">
    <h3>Project Status</h3>
    <ProjectPieChart
      active={projectData.active}
      pending={projectData.pending}
      completed={projectData.completed}
    />
  </div>

  <div className="updates-container w-full md:w-1/2">
    <Updates />
  </div>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
