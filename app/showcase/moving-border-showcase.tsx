import { scaleInVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React from "react";

const MovingBorderShowCase = () => {
  return (
    <motion.div variants={scaleInVariant} className="relative p-1">
      <div className="bg-muted backdrop-blur-sm px-3 py-1">Moving Border</div>
    </motion.div>
  );
};

export default MovingBorderShowCase;
