"use client";

import ConicGradientBackground from "@/app/ui/conic-gradient-background";
import { blurInVariant, containerVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import { notFound, redirect, useParams } from "next/navigation";
import React from "react";

const BackgroundInAction = () => {
  const params = useParams();
  const background = params.background;

  const inActionComponents: { [key: string]: JSX.Element } = {
    ConicGradientBackground: <ConicGradientBackground className="fixed" />,
  };

  if (!background || typeof background !== "string") {
    notFound();
  }
  const componentName = background
    .split("-")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
    .join("");

  if (!inActionComponents[componentName]) {
    redirect("/background");
  }

  return (
    <div>
      {inActionComponents[componentName]}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        className="h-[70vh] border rounded backdrop-blur-lg flex items-center justify-center px-4 sm:px-8 mt-[100px] "
      >
        <motion.h1 variants={blurInVariant}>
          Text Above the Background
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default BackgroundInAction;
