import React from 'react';
import './PropertyTable.css';
import { Link } from 'react-router-dom';

const PropertyTable = ({ properties }) => {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      alert(`Property ${id} would be deleted in a real app`);
    }
  };

  return (
    <div className="property-table-container">
      <div className="table-scroll">
        <table className="property-table">
          <thead className="table-header">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Created At</th>
              <th>RDO Contact</th>
              <th>Collector</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((prop) => (
              <tr key={prop.id} className="table-row">
                <td><input type="checkbox" /></td>
                <td>{prop.title}</td>
                <td>{prop.date}</td>
                <td>{prop.rdoContact}</td>
                <td>{prop.collector}</td>
                <td>
                  <span className={`status-badge ${prop.status === 'Active' ? 'status-active' : 'status-pending'}`}>
                    {prop.status}
                  </span>
                </td>
                <td className="action-buttons">
                  <Link to={`/property/${prop.id}`} className="view-link">View</Link>
                  <Link to={`/add-property`} className="edit-link">Edit</Link>
                  <button onClick={() => handleDelete(prop.id)} className="delete-link">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyTable;
