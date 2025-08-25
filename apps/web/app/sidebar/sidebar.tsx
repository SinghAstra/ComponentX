"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface SidebarProps {
  title: string;
  children: React.ReactNode;
}

const Sidebar = ({ title = "Menu", children }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        variant={"outline"}
        onClick={toggleSidebar}
        className="p-2 rounded hover:bg-muted/50 transition-all duration-300 "
        aria-label="Open Sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </Button>

      <div
        className={`fixed inset-0 bg-muted/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-64 shadow-xl z-50 transform transition-transform duration-300 ease-in-out bg-background
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-3">
          <h2 className="text-xl">{title}</h2>
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
