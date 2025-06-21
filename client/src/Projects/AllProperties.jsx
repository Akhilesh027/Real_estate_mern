import React, { useState, useEffect } from 'react';
import Filters from '../components/Filters';
import PropertyTable from '../components/PropertyTable';
import propertyData from '../data/properties.json';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [collectorFilter, setCollectorFilter] = useState('');
  const query = useQuery();
  const statusQuery = query.get('status');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || { role: "Member" };
    const baseData = user.role === "Member" ? propertyData.slice(0, 3) : propertyData;

    // Check if any filter is applied
    const hasFilter = statusFilter || collectorFilter || statusQuery;

    // If no filters are applied, show all
    if (!hasFilter) {
      setProperties(baseData);
      return;
    }

    const filtered = baseData.filter((property) => {
      const matchStatus =
        (statusFilter || statusQuery) === '' ||
        property.status === (statusFilter || statusQuery);
      const matchCollector =
        collectorFilter === '' || property.collector === collectorFilter;

      return matchStatus && matchCollector;
    });

    setProperties(filtered);
  }, [statusFilter, collectorFilter, statusQuery]);

  return (
    <div className="flex h-screen bg-gray-50">
      <main className="flex-1 overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">All Properties</h2>
          <Filters
            onStatusChange={setStatusFilter}
            onCollectorChange={setCollectorFilter}
          />
        </div>
        <PropertyTable properties={properties} />
      </main>
    </div>
  );
};

export default AllProperties;
