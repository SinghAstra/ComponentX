"use client";

import { Button } from "@/components/ui/button";
import { containerVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface ComponentShowcaseProps {
  docsLink: string;
  children: React.ReactNode;
  variant?: "full" | "compact";
  actionLabel?: string;
}

export function ComponentShowcase({
  docsLink,
  children,
  variant = "full",
}: ComponentShowcaseProps) {
  const isFullWidth = variant === "full";

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className={`${
        isFullWidth
          ? "col-span-1 sm:col-span-2 row-span-1"
          : "col-span-1 row-span-1"
      } flex flex-col items-center justify-center border bg-background rounded relative group transition-all duration-300 min-h-[400px]`}
    >
      <div className=" p-2 flex justify-end w-full">
        <Link href={docsLink}>
          <Button
            variant="outline"
            size="sm"
            className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
          >
            View Docs
          </Button>
        </Link>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}
