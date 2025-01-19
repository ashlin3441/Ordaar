import React from 'react';

const NewSidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen fixed left-0 top-0">
      <div className="p-4">
        {/* Sidebar Header */}
        <div className="text-xl font-bold p-2">
          Dashboard
        </div>
        
        {/* Sidebar Content */}
        <div className="mt-8 space-y-4">
          <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
            Menu Item 1
          </div>
          <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
            Menu Item 2
          </div>
          <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
            Menu Item 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSidebar;