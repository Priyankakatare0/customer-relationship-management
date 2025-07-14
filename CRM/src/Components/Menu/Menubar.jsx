import React, { useState } from 'react';
import {
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

const Menubar = ({ onScrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Dashboard', 'Leads', 'Contacts', 'Tasks', 'Reports', 'Settings'];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-3">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-blue-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-blue-700" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`md:relative md:translate-x-0 fixed top-0 left-0 z-50 transition-transform duration-300 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        h-[93vh] w-60 bg-white border-r border-gray-200 mt-1 rounded-r-xl shadow-md flex flex-col`}
      >
        {/* Close icon - optional for larger screen */}
        <div className="self-end my-6 pr-2">
          <ChevronRightIcon className="h-6 w-6 text-blue-700 hover:text-blue-600 cursor-pointer" />
        </div>

        {/* Menu items */}
        <div className="flex flex-col space-y-2 text-base font-semibold">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                onScrollTo(item.toLowerCase());
                setIsOpen(false); // auto-close on mobile
              }}
              className="text-left px-4 py-2 capitalize w-full transition hover:bg-blue-100 hover:text-blue-600 text-gray-800"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Logout at bottom */}
       <div className="mt-auto px-4 py-4">
          <button
            className="flex items-center gap-1 text-red-600 hover:text-red-700 font-semibold transition"
            onClick={() => alert('Logging out...')}
          >
            <ArrowLeftOnRectangleIcon className="h-6 w-8" />
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Menubar;