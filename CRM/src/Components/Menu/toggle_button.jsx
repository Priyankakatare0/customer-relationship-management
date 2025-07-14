import React from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const ToggleButton = ({ isOpen, setIsOpen }) => {
  return (
    <div className="md:hidden p-3">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-blue-700" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-blue-700" />
        )}
      </button>
    </div>
  );
};

export default ToggleButton;
