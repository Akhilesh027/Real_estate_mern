import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Dashboard.css'
import UserSection from '../components/User';
const Sider = () => {
    const location = useLocation();
  return (
    <div>
       <div className="sidebar">
        <div>
          <h2>Portfolio</h2>
         <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Dashboard</Link>
<Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
<Link to="/maps" className={`nav-link ${location.pathname === '/maps' ? 'active' : ''}`}>Maps</Link>
<Link to="/reports" className={`nav-link ${location.pathname === '/reports' ? 'active' : ''}`}>Reports</Link>
<Link to="/settings" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}>Settings</Link>

        </div>
        <UserSection />

      </div>

    </div>
  )
}

export default Sider
