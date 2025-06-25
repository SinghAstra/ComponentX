"use client";

import { textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import ConicGradientBackground from "../ui/conic-gradient-background";
import ShowCase from "./showcase";

const ConicGradientBackgroundShowcase = () => {
  return (
    <ShowCase>
      <motion.h1 className="text-5xl font-medium" variants={textVariant}>
        Conic Gradient Background
      </motion.h1>
      <ConicGradientBackground />
    </ShowCase>
  );
};

export default ConicGradientBackgroundShowcase;
