"use client";

import { textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import { RadialFadeBackground } from "../ui/radial-fade-background";
import ShowCase from "./showcase";
const RadialFadeBackgroundShowcase = () => {
  return (
    <ShowCase>
      <motion.h1 className="text-5xl font-medium" variants={textVariant}>
        Radial Fade Background
      </motion.h1>
      <RadialFadeBackground />
    </ShowCase>
  );
};

export default RadialFadeBackgroundShowcase;
