"use client";

import { textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import LightBulbGradient from "../ui/light-bulb-gradient";
import ShowCase from "./showcase";
const LightBulbGradientShowCase = () => {
  return (
    <ShowCase>
      <motion.h1
        className="text-5xl font-medium"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
      >
        Light Bulb Gradient
      </motion.h1>
      <LightBulbGradient />
    </ShowCase>
  );
};

export default LightBulbGradientShowCase;
