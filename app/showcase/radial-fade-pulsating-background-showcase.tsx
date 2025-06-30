"use client";

import { textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import RadialFadePulsatingBackground from "../ui/radial-fade-pulsating-background";
const RadialFadePulsatingBackgroundShowcase = () => {
  return (
    <>
      <motion.h1
        className="text-5xl font-medium"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
      >
        Radial Fade Pulsating Background
      </motion.h1>
      <RadialFadePulsatingBackground />
    </>
  );
};

export default RadialFadePulsatingBackgroundShowcase;
