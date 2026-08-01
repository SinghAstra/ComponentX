"use client";

import { HoverUnderline } from "@/components/ui/hover-underline";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href="/">
        <HoverUnderline>Home</HoverUnderline>
      </Link>
    </main>
  );
}
