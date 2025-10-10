"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "./components/app-sidebar";

const OneLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-1 flex-col p-4">{children}</div>
    </SidebarProvider>
  );
};

export default OneLayout;
