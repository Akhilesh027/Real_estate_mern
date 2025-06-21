import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Projects from './Projects/Projects.jsx';
import PropertyDetailsPage from './Projects/Propertydetailspage.jsx';
import Document from './components/Document.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx';
import PropertyMap from './Projects/Map.jsx';
import Cat from './Projects/cat.jsx';
import AddPropertyForm from './components/Addproperty.jsx';
import AddPage from './components/AddPage.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/property/:id" element={<Cat />} />
        <Route path="/details/:id/:phase" element={<PropertyDetailsPage />} />
        <Route path="/document" element={<Document />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/maps" element={<PropertyMap />} />
        <Route path="/add-property" element={<AddPage />} />
      </Routes>
    </Router>
  );
};

export default App;
