// pages/PropertyMap.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropertyList from '../Projects/PropertList';
import Sider from '../Dashboard/Sider';
import properties from '../data/properties.json'; // 👈 import your JSON

const PropertyMap = () => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current).setView([17.3850, 78.4867], 12);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Add markers from properties.json
    properties.forEach((property) => {
      const popupContent = `
        <b>${property.title}</b><br>
        ${property.area} | ${property.type}<br>
        <a href="/property/${property.id}" style="color:#2563eb;">View Details</a>
      `;
      L.marker([property.lat, property.lng])
        .addTo(map)
        .bindPopup(popupContent);
    });
  }, []);

  const handleSelect = (lat, lng) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([lat, lng], 15);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sider />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 flex">
          <PropertyList onSelect={handleSelect} />
          <div className="flex-1" id="map" ref={mapContainerRef}></div>
        </main>
      </div>
    </div>
  );
};

export default PropertyMap;
