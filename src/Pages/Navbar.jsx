import React from 'react';
import { Link } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 rounded-t-xl bg-white border border-gray-200">
      {/* Left: Titles */}
      <div className="flex flex-col">
        <Link to="/">
          <h3 className="text-lg font-semibold text-blue-600">
            Customer Relationship Management
          </h3>
        </Link>
        <h3 className="text-sm text-gray-500">General Dashboard</h3>
      </div>

      {/* Right: Navigation + Icons */}
      <div className="flex items-center space-x-10">
        {/* Navigation Links */}
        <div className="flex space-x-6">
          {['Leads', 'Contacts', 'Deals', 'Tasks', 'Reports'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-600 text-sm hover:text-blue-600 transition cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex ml-3 space-x-4 items-center">
          <Link to="/search">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
          </Link>
          <Link to="/notifications">
            <BellIcon className="h-5 w-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
          </Link>
          <Link to="/account">
            <UserCircleIcon className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
