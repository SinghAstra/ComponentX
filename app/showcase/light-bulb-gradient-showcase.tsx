"use client";

import { textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import LightBulbGradient from "../ui/light-bulb-gradient";
const LightBulbGradientShowCase = () => {
  return (
    <>
      <motion.h1
        className="text-5xl font-medium"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
      >
        Light Bulb Gradient
      </motion.h1>
      <LightBulbGradient />
    </>
  );
};

export default LightBulbGradientShowCase;
