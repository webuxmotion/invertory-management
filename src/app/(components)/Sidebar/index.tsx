"use client"

import useSidebar from '@/app/hooks/useSidebar';
import { Menu } from 'lucide-react';
import React from 'react'

const Sidebar = () => {
  const { 
    isSidebarCollapsed,
    toggleSidebar
  } = useSidebar();

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
        <div>logo</div>
        <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>EDSTOCK</h1>
        <button 
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue"
          onClick={toggleSidebar}
        >
          <Menu className='w-4 h-4' />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
        links
      </div>

      {/* FOOTER */}
      <div>
        <p className='text-center text-xs text-gray-500'>&copy; 2024 Edstock</p>
      </div>
    </div>
  )
}

export default Sidebar;