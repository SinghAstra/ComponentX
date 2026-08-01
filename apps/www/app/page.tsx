"use client";

import { HoverEdge } from "@/components/ui/hover-edge";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href="/">
        <HoverEdge>Home</HoverEdge>
      </Link>
    </main>
  );
}
