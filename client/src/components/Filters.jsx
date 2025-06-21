import React from 'react';
import './Filters.css';
import { Link } from 'react-router-dom';

const Filters = ({ onStatusChange, onCollectorChange }) => {
  return (
    <div className="filters-container">
      <select className="filter-select" onChange={(e) => onStatusChange(e.target.value)}>
        <option value="">Filter by Status</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <select className="filter-select" onChange={(e) => onCollectorChange(e.target.value)}>
        <option value="">Filter by Collector</option>
        <option value="Sir. M.N. Harinadraprasad">Sir. M.N. Harinadraprasad</option>
        <option value="Valluri Kranthi">Valluri Kranthi</option>
        <option value="Narayan Reddy">Narayan Reddy</option>
        <option value="A. Veerender Rao">A. Veerender Rao</option>
      </select>
      <Link to="/add-property" className="add-button">
        <i className="fas fa-plus"></i>
        <span>Add New</span>
      </Link>
    </div>
  );
};

export default Filters;
