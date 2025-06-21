// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
const [form, setForm] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/login', form);
      localStorage.setItem('token', res.data.token);
localStorage.setItem('user', JSON.stringify(res.data.user));

      navigate('/');
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-bg min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('../images/login-bg.jpg')` }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-landmark text-blue-600 text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Dukes Estate Dashboard</h1>
          <p className="text-gray-600 mt-2">Property Management System</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
            </div>

            <div className="text-sm">
              <a href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
