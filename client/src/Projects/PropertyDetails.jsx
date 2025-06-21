import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import propertyData from "../data/properties.json"; // ✅ make sure path is correct
import Sider from "../Dashboard/Sider";

const PropertyDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { id, phase } = useParams();

  const property = propertyData.find((prop) => prop.id === parseInt(id));

  if (!property) {
    return (
      <div className="p-10 text-red-600 font-semibold">
        Property not found. Please check the URL or ID.
      </div>
    );
  }

  const phaseTitle = phase === "phase1" ? "Phase 1 (50 Acres)" : "Phase 2 (50 Acres)";
  const pageTitle = `${property.title} - ${phaseTitle}`;

  return (
    <div className="flex min-h-screen">

      <main className="w-full p-6 overflow-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{pageTitle}</h2>
            <nav className="flex mt-2" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link to="/projects" className="text-blue-600 hover:text-blue-800 text-sm">
                    All Properties
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400 mx-2">/</span>
                </li>
                <li className="text-sm text-gray-500">{property.title}</li>
              </ol>
            </nav>
          </div>
          <div>
            <Link
              to="/add-property"
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 mr-2"
            >
              <i className="fas fa-edit mr-1"></i> Edit
            </Link>
            <Link
              to={`/cat/${id}`}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              <i className="fas fa-arrow-left mr-1"></i> Back
            </Link>
          </div>
        </div>

        {/* Property Overview Tabs */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <div className="p-6 border-b">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{property.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Created: {property.date} | Status:{" "}
                  <span className="text-green-600">{property.status}</span>
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <i className="fas fa-print"></i>
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <i className="fas fa-download"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              {["overview", "documents", "map", "zone"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "overview" && (
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                           
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h5 class="font-medium text-gray-900 mb-3 flex items-center">
                                    <i class="fas fa-map-marked-alt text-blue-500 mr-2"></i> Land Details
                                </h5>
                                <dl class="space-y-2">
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Existing Use</dt>
                                        <dd class="text-sm text-gray-900">Residential</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Extent</dt>
                                        <dd class="text-sm text-gray-900">2.5 acres</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Sy Nos</dt>
                                        <dd class="text-sm text-gray-900">123/45, 123/46</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Master Plan</dt>
                                        <dd class="text-sm text-blue-600"><a href="#">View Plan</a></dd>
                                    </div>
                                </dl>
                            </div>

                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h5 class="font-medium text-gray-900 mb-3 flex items-center">
                                    <i class="fas fa-user-tag text-blue-500 mr-2"></i> Ownership
                                </h5>
                                <dl class="space-y-2">
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Owner</dt>
                                        <dd class="text-sm text-gray-900">John Doe</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Contact</dt>
                                        <dd class="text-sm text-gray-900">+91 9876543210</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Broker</dt>
                                        <dd class="text-sm text-gray-900">ABC Realty</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Broker Contact</dt>
                                        <dd class="text-sm text-gray-900">+91 9876543211</dd>
                                    </div>
                                </dl>
                            </div>

                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h5 class="font-medium text-gray-900 mb-3 flex items-center">
                                    <i class="fas fa-landmark text-blue-500 mr-2"></i> Government Contacts
                                </h5>
                                <dl class="space-y-2">
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Collector</dt>
                                        <dd class="text-sm text-gray-900">{property.collector}</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Contact</dt>
                                        <dd class="text-sm text-gray-900">{property.rdoContact}</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">RDO</dt>
                                        <dd class="text-sm text-gray-900">RDO Name</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Contact</dt>
                                        <dd class="text-sm text-gray-900">9849903825</dd>
                                    </div>
                                </dl>
                            </div>

                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h5 class="font-medium text-gray-900 mb-3 flex items-center">
                                    <i class="fas fa-map-marker-alt text-blue-500 mr-2"></i> Location
                                </h5>
                                <dl class="space-y-2">
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Latitude</dt>
                                        <dd class="text-sm text-gray-900">17.3850° N</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Longitude</dt>
                                        <dd class="text-sm text-gray-900">78.4867° E</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Zone</dt>
                                        <dd class="text-sm text-gray-900">Commercial</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Within 2km</dt>
                                        <dd class="text-sm text-gray-900">Metro Station</dd>
                                    </div>
                                </dl>
                            </div>

                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h5 class="font-medium text-gray-900 mb-3 flex items-center">
                                    <i class="fas fa-ruler-combined text-blue-500 mr-2"></i> Survey Details
                                </h5>
                                <dl class="space-y-2">
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Surveyor</dt>
                                        <dd class="text-sm text-gray-900">Surveyor Name</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Contact</dt>
                                        <dd class="text-sm text-gray-900">040-56781234</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Status</dt>
                                        <dd class="text-sm text-gray-900">Completed</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Last Survey</dt>
                                        <dd class="text-sm text-gray-900">15 Nov 2024</dd>
                                    </div>
                                </dl>
                            </div>

                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h5 class="font-medium text-gray-900 mb-3 flex items-center">
                                    <i class="fas fa-gavel text-blue-500 mr-2"></i> Legal Status
                                </h5>
                                <dl class="space-y-2">
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Litigation</dt>
                                        <dd class="text-sm text-gray-900">None</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Permissions</dt>
                                        <dd class="text-sm text-gray-900">Approved</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Advocate</dt>
                                        <dd class="text-sm text-gray-900">Law Firm XYZ</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt class="text-sm text-gray-500">Contact</dt>
                                        <dd class="text-sm text-gray-900">040-43218765</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
            )}

            {activeTab === "documents" && (
              <div>
                <h4 className="text-lg font-medium text-gray-900 border-b pb-2 mb-4">
                  Documents
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Ownership deed.pdf</li>
                  <li>Tax clearance certificate.jpg</li>
                  <li>Layout approval plan.pdf</li>
                </ul>
              </div>
            )}

            {activeTab === "map" && (
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <i className="fas fa-map-marked-alt text-4xl text-gray-400"></i>
                <p className="ml-3 text-gray-500">Map view would appear here</p>
              </div>
            )}

            {activeTab === "zone" && (
              <div>
                <h4 className="text-lg font-medium text-gray-900 border-b pb-2 mb-4">
                  Zone Information
                </h4>
                <p className="text-gray-700">
                  This property lies within the commercial zone.
                </p>
              </div>
            )}
          </div>
        </div>
        <div class="mt-8">
                            <h4 class="text-lg font-medium text-gray-900 border-b pb-2 mb-4 flex items-center">
                                <i class="fas fa-exclamation-triangle text-yellow-500 mr-2"></i> DHARINI Issues
                            </h4>
                            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <i class="fas fa-exclamation text-yellow-500"></i>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm text-yellow-700">
                                            Mutation pending for this property. Required documents not yet submitted to RDO office.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="mt-8">
                            <h4 class="text-lg font-medium text-gray-900 border-b pb-2 mb-4">Location Map</h4>
                            <div class="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                                <i class="fas fa-map-marked-alt text-4xl text-gray-400"></i>
                                <p class="ml-3 text-gray-500">Interactive map would be displayed here</p>
                            </div>
                            <div class="mt-2 text-right">
                                <a href="maps.html?property=1" class="text-sm text-blue-600 hover:text-blue-800">View Full Map →</a>
                            </div>
                        </div>
      </main>
    </div>
  );
};

export default PropertyDetails;
