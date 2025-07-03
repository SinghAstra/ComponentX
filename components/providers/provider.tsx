"use client";

import MaskedGridBackground from "@/app/ui/masked-grid-background";
import { siteConfig } from "@/config/site";
import { textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { ReactNode, Suspense } from "react";
import { ToastProvider } from "./toast";

interface ProviderProps {
  children: ReactNode;
}

const LoadingFallback = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center text-center justify-center relative overflow-hidden px-4">
      <div className="flex gap-4">
        <Image
          src={"/favicon.ico"}
          width={48}
          height={48}
          alt={siteConfig.name}
        />
        <motion.p className="text-5xl tracking-wide" variants={textVariant}>
          {siteConfig.name}
        </motion.p>
      </div>
      <motion.p
        className="text-xl tracking-wide text-muted-foreground"
        variants={textVariant}
      >
        {siteConfig.description}
      </motion.p>
      <MaskedGridBackground />
    </div>
  );
};

const Providers = ({ children }: ProviderProps) => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ToastProvider>{children}</ToastProvider>
    </Suspense>
  );
};

export default Providers;
