"use client";

import MaskedGridBackground from "@/app/ui/masked-grid-background";
import { siteConfig } from "@/config/site";
import { blurInVariant, containerVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { ReactNode, Suspense } from "react";
import { ToastProvider } from "./toast";

interface ProviderProps {
  children: ReactNode;
}

const LoadingFallback = () => {
  return (
    <motion.div
      variants={containerVariant}
      className="min-h-screen flex flex-col gap-4 items-center text-center justify-center relative overflow-hidden px-4"
    >
      <div className="flex gap-4">
        <Image
          src={"/favicon.ico"}
          width={48}
          height={48}
          alt={siteConfig.name}
        />
        <motion.p className="text-5xl tracking-wide" variants={blurInVariant}>
          {siteConfig.name}
        </motion.p>
      </div>
      <motion.p
        className="text-xl tracking-wide text-muted-foreground"
        variants={blurInVariant}
      >
        {siteConfig.description}
      </motion.p>
      <MaskedGridBackground />
    </motion.div>
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
