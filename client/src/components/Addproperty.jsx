import React, { useState } from 'react';

const AddPropertyForm = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Property information would be saved in a real application');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dukes Estate Dashboard - Property Management</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Property</h2>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              {['basic', 'land', 'government', 'other'].map((tab) => (
                <button
                  key={tab}
                  className={`tab-button py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab === 'basic'
                    ? 'Basic Details'
                    : tab === 'land'
                    ? 'Land Details'
                    : tab === 'government'
                    ? 'Government Contacts'
                    : 'Other Information'}
                </button>
              ))}
            </nav>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Basic Details Tab */}
            {activeTab === 'basic' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="propertyTitle" className="block text-sm font-medium text-gray-700">
                    Property Title *
                  </label>
                  <input
                    type="text"
                    id="propertyTitle"
                    name="propertyTitle"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="propertyStatus" className="block text-sm font-medium text-gray-700">
                    Status *
                  </label>
                  <select
                    id="propertyStatus"
                    name="propertyStatus"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  >
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="propertyDescription" className="block text-sm font-medium text-gray-700">
                    Property Synopsis
                  </label>
                  <textarea
                    id="propertyDescription"
                    name="propertyDescription"
                    rows="3"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Land Details Tab */}
            {activeTab === 'land' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="landUse" className="block text-sm font-medium text-gray-700">
                    Existing Land Use
                  </label>
                  <select
                    id="landUse"
                    name="landUse"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  >
                    <option value="">Select Land Use</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Agricultural">Agricultural</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="extent" className="block text-sm font-medium text-gray-700">
                    Extent (acres)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id="extent"
                    name="extent"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="surveyNumbers" className="block text-sm font-medium text-gray-700">
                    Survey Numbers
                  </label>
                  <input
                    type="text"
                    id="surveyNumbers"
                    name="surveyNumbers"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
                    Owner Name
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>
              </div>
            )}

            {/* Government Contacts Tab */}
            {activeTab === 'government' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['collectorName', 'collectorContact', 'rdoName', 'rdoContact'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                      {field.includes('collector') ? 'Collector' : 'RDO'} {field.includes('Name') ? 'Name' : 'Contact'}
                    </label>
                    <input
                      type={field.includes('Contact') ? 'tel' : 'text'}
                      id={field}
                      name={field}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Other Information Tab */}
            {activeTab === 'other' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="irrigationDetails" className="block text-sm font-medium text-gray-700">
                    Irrigation Details
                  </label>
                  <textarea
                    id="irrigationDetails"
                    name="irrigationDetails"
                    rows="2"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="litigationDetails" className="block text-sm font-medium text-gray-700">
                    Litigation Details
                  </label>
                  <textarea
                    id="litigationDetails"
                    name="litigationDetails"
                    rows="2"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="brokerContact" className="block text-sm font-medium text-gray-700">
                    Broker Contact
                  </label>
                  <input
                    type="tel"
                    id="brokerContact"
                    name="brokerContact"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">
                    Remarks
                  </label>
                  <textarea
                    id="remarks"
                    name="remarks"
                    rows="2"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="mt-8 flex justify-end space-x-3">
              <button type="button" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                Cancel
              </button>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Save Property
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyForm;
