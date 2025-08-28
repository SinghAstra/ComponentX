"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "./sidebar";

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button
        variant={"outline"}
        className="hover:bg-muted/40 transition-all duration-300"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        Toggle Sidebar
      </Button>
      <Sidebar
        title={siteConfig.name}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      >
        <div className="flex flex-col gap-2">
          <Link href={"/background"}>Background</Link>
          <Link href={"/docs"}>Documentation</Link>
        </div>
      </Sidebar>
    </div>
  );
}
export default HomePage;
