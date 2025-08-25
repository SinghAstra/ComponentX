"use client";

import React, { Dispatch } from "react";

interface SidebarProps {
  title: string;
  children: React.ReactNode;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<boolean>;
}

const Sidebar = ({
  title,
  children,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-muted/60 backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-64 shadow-xl z-50 transform transition-transform duration-300 ease-in-out bg-background
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-3">
          <h2 className="text-xl text-primary">{title}</h2>
        </div>
        <div className="p-4">
          {children || (
            <nav>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="block p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
