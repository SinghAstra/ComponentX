"use client";

import { blurInVariant, containerVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import React from "react";
import ConicGradientBackground from "../ui/conic-gradient-background";

const BackgroundPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr p-4 sm:p-8">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative"
      >
        <motion.h1
          className="text-2xl sm:text-4xl font-normal text-center"
          variants={blurInVariant}
        >
          Conic Gradient Background
        </motion.h1>
        <ConicGradientBackground />
      </motion.div>
    </div>
  );
};

export default BackgroundPage;
