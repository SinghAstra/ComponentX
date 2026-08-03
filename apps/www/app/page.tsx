"use client";

import { HoverEdge } from "@/components/ui/hover-edge";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <HoverEdge thickness={2} color="#06b6d4">
        <Link href="/" className="outline-none">
          Home
        </Link>
      </HoverEdge>
    </main>
  );
}
