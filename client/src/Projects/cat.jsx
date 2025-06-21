import React from 'react';
import { useParams } from 'react-router-dom';
import Sider from '../Dashboard/Sider';
import propertyData from '../data/properties.json';
import { Link } from 'react-router-dom';

const Cat = () => {
  const { id } = useParams();
  const property = propertyData.find((prop) => prop.id === parseInt(id));

  if (!property) {
    return (
      <div className="flex">
        <div className="w-1/5 bg-gray-100">
          <Sider />
        </div>
        <div className="w-4/5 p-8 bg-gray-50">
          <h2 className="text-xl font-semibold text-red-600">Property not found.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-100">
        <Sider />
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-8 bg-gray-50">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Property Details</h2>
          <nav className="flex text-sm text-gray-500 space-x-2">
            <a href="/properties" className="text-blue-600 hover:text-blue-800">All Properties</a>
            <span>/</span>
            <span>{property.title}</span>
          </nav>
        </div>

        {/* Property Phase Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phase 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title} - Phase 1 (50 Acres)</h3>
            <p className="text-sm text-gray-600 mb-2">Created: {property.date}</p>
            <p className="text-sm text-gray-600 mb-2">RDO Contact: {property.rdoContact}</p>
            <p className="text-sm text-gray-600 mb-2">Collector: {property.collector}</p>
            <p className="text-sm text-gray-600 mb-4">
              Status: <span className="text-green-600">{property.status}</span>
            </p>
            <p className="text-gray-700 mb-4">This section covers the first 50 acres of the property. Site layout, permissions, and ownership details can be found here.</p>
            <Link
  to={`/details/${property.id}/phase1`}
  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
>
  View Phase 1
</Link>
          </div>

          {/* Phase 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title} - Phase 2 (50 Acres)</h3>
            <p className="text-sm text-gray-600 mb-2">Planned Start: 15th Jan, 2025</p>
            <p className="text-sm text-gray-600 mb-2">RDO Contact: {property.rdoContact}</p>
            <p className="text-sm text-gray-600 mb-2">Collector: {property.collector}</p>
            <p className="text-sm text-gray-600 mb-4">
              Status: <span className="text-yellow-600">Upcoming</span>
            </p>
            <p className="text-gray-700 mb-4">This section covers the next 50 acres of planned expansion. Development details, cost estimates, and timelines will be updated here.</p>
           <Link
  to={`/details/${property.id}/phase2`}
  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
>
  View Phase 2
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
