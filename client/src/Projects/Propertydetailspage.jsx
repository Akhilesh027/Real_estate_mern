import React from 'react';
import Sider from '../Dashboard/Sider';
import PropertyDetails from './PropertyDetails';

const PropertyDetailsPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Left */}
      <div className="w-64 bg-white shadow">
        <Sider />
      </div>

      {/* Property Details Right */}
      <div className="flex-1 overflow-auto">
        <PropertyDetails />
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
