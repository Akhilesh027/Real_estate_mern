import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '', confirmPassword: '',email:'' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return alert('Passwords do not match');
    }

    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        username: form.username,
        password: form.password,
        email : form.email,
      });
      alert('Registration successful. Please login.');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="login-bg min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('../images/login-bg.jpg')` }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-user-plus text-blue-600 text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-600 mt-2">Register to Dukes Estate Dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </div>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
<div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">email</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-400"></i>
              </div>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-400"></i>
              </div>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Register
            </button>
          </div>

          <div className="text-center text-sm text-gray-500">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
