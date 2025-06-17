"use client";

import { textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import { LightBulbGradient } from "../ui/light-bulb-gradient";
const LightBulbGradientShowCase = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-neutral-800 relative rounded-md overflow-hidden flex items-center justify-center">
        <motion.h1
          className="text-5xl font-medium"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
        >
          Light Bulb Gradient
        </motion.h1>
        <LightBulbGradient />
      </div>
    </div>
  );
};

export default LightBulbGradientShowCase;
