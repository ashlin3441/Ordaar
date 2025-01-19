import React from 'react';
import { Search, User } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="h-16 bg-white shadow-md fixed top-0 left-64 right-0 flex items-center justify-between px-6">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      <button className="ml-4 p-2 rounded-full hover:bg-gray-100">
        <User className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
};

export default TopBar;