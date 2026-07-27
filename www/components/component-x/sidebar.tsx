'use client';

import React, { Dispatch } from 'react';

interface SidebarProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<boolean>;
}

const Sidebar = ({
  children,
  isSidebarOpen,
  direction = 'left',
  setIsSidebarOpen,
}: SidebarProps) => {
  return (
    <div className={`${isSidebarOpen && 'z-[999] fixed inset-0'}`}>
      <div
        className={`fixed inset-0 bg-muted/60 backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      ></div>

      <div
        className={`fixed z-[3] border-r top-0  h-full shadow-xl transform transition-transform duration-300 ease-in-out bg-background
          ${
            direction === 'left' &&
            (isSidebarOpen ? 'translate-x-0' : '-translate-x-full')
          }
          ${
            direction === 'right' &&
            (isSidebarOpen ? 'translate-x-0' : 'translate-x-full')
          }
          ${direction === 'left' && 'left-0'}
          ${direction === 'right' && 'right-0'}
          `}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
