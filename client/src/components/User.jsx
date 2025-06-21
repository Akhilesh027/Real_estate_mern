import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserSection = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setUser(storedUser || { name: "User", role: "Member" });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login'); // or redirect anywhere else
  };

  return (
    <div className="flex items-center justify-between bg-white px-4 py-2 rounded-md shadow max-w-sm">
      {user ? (
        <div className="flex items-center space-x-3">
          <img
            src={user.image || "https://via.placeholder.com/40"}
            alt="user"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm">
            <div className="font-medium text-gray-800">{user.name}</div>
            <div className="text-gray-500">{user.role}</div>
          </div>
          <button
            onClick={handleLogout}
            className="ml-4 text-red-600 text-sm hover:underline"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="text-sm text-gray-600">
          Please{' '}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">Register</Link>{' '}
          or{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">Login</Link>
        </div>
      )}
    </div>
  );
};

export default UserSection;
