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
    <div className="z-50">
      <div
        className={`fixed inset-0 bg-muted/60 backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full shadow-xl transform transition-transform duration-300 ease-in-out bg-background
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-1 py-3">
          <h2 className="text-xl text-primary">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
