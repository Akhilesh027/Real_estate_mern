// components/PropertyList.js
import React from 'react';
import properties from '../data/properties.json'; // ✅ Adjust path if needed

const PropertyList = ({ onSelect }) => {
  const user = JSON.parse(localStorage.getItem("user")) || { role: "Member" };

  // Show only 3 properties if the user is a Member
  const visibleProperties = user.role === "Member" ? properties.slice(0, 3) : properties;

  return (
    <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4 border-b">
        <h3 className="font-medium text-gray-900">Property Locations</h3>
        <div className="mt-2 relative">
          <input
            type="text"
            placeholder="Search properties..."
            className="pl-8 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {visibleProperties.map((property) => (
          <div
            key={property.id}
            className="property-marker-item p-3 border rounded-lg cursor-pointer hover:bg-blue-50"
            onClick={() => onSelect(property.lat, property.lng)}
          >
            <h4 className="font-medium text-gray-900">{property.title}</h4>
            <p className="text-sm text-gray-500">
              {property.status} | Collector: {property.collector}
            </p>
            <p className="text-xs text-blue-600 mt-1">
              <i className="fas fa-map-marker-alt mr-1"></i> Lat: {property.lat}, Lng: {property.lng}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
